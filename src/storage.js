export const AUTO_KEY='city-tycoon-v1', MANUAL_KEY='city-tycoon-manual-v1';
export const TTL=30*24*60*60*1000;
export function validGame(s){
 return !!(s?.version===1 && Array.isArray(s.players)&&s.players.length===4&&s.players.every((p,i)=>p.id===i&&typeof p.name==='string'&&Number.isFinite(p.cash)&&p.cash>=0&&Number.isInteger(p.pos)&&p.pos>=0&&p.pos<32&&[0,1].includes(p.jail)&&typeof p.bankrupt==='boolean')&&s.lots&&typeof s.lots==='object'&&!Array.isArray(s.lots)&&Object.entries(s.lots).every(([id,l])=>Number.isInteger(+id)&&+id>0&&+id<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+id)&&l&&Number.isInteger(l.owner)&&l.owner>=0&&l.owner<4&&Number.isInteger(l.level)&&l.level>=0&&l.level<=3)&&Number.isInteger(s.turn)&&s.turn>=0&&s.turn<4&&Number.isInteger(s.round)&&s.round>=1&&s.round<=41&&['ready','moving','decision','end','finished'].includes(s.stage)&&Array.isArray(s.dice)&&s.dice.length===2&&s.dice.every(d=>Number.isInteger(d)&&d>=1&&d<=6)&&Number.isInteger(s.remaining)&&s.remaining>=0&&s.remaining<=12&&(s.stage!=='moving'||s.remaining>0&&Number.isInteger(s.eventIndex)&&s.eventIndex>=0&&s.eventIndex<6)&&Array.isArray(s.log)&&s.log.every(e=>e&&typeof e.text==='string'&&typeof e.kind==='string')&&typeof s.notice==='string'&&(s.event===null||s.event&&typeof s.event.title==='string'&&Number.isFinite(s.event.amount))&&(s.stage!=='finished'||Number.isInteger(s.winner)&&s.winner>=0&&s.winner<4));
}
const live=(entry,now)=>entry&&Number.isFinite(entry.savedAt)&&entry.savedAt<=now&&now-entry.savedAt<TTL&&validGame(entry.game);
export function listSaves(storage=localStorage,now=Date.now()){
 const raw=storage.getItem(MANUAL_KEY);const parsed=raw?JSON.parse(raw):[];
 if(!Array.isArray(parsed))throw new Error('存檔清單格式損壞。');
 const entries=parsed.filter(e=>live(e,now)&&typeof e.id==='string'&&typeof e.name==='string').sort((a,b)=>b.savedAt-a.savedAt).slice(0,10);
 if(JSON.stringify(entries)!==raw)storage.setItem(MANUAL_KEY,JSON.stringify(entries));
 const autoRaw=storage.getItem(AUTO_KEY);
 if(autoRaw){let auto;try{auto=JSON.parse(autoRaw);}catch{}if(!auto||(auto.savedAt!==undefined&&!live(auto,now)))storage.removeItem(AUTO_KEY);}
 return entries;
}
export function saveManual(game,name,replace=false,storage=localStorage,now=Date.now()){
 if(!validGame(game))throw new Error('遊戲狀態無法儲存。');
 const entries=listSaves(storage,now);
 if(entries.length>=10&&!replace)throw new Error('已達 10 個存檔，請確認取代最舊版本。');
 const entry={id:crypto.randomUUID(),name:name.trim().slice(0,60)||`回合 ${game.round}`,savedAt:now,game:structuredClone(game)};
 const next=[entry,...entries].slice(0,10);storage.setItem(MANUAL_KEY,JSON.stringify(next));return next;
}
export function readManual(id,storage=localStorage,now=Date.now()){
 const entry=listSaves(storage,now).find(e=>e.id===id);
 if(!entry)throw new Error('存檔已過期或不存在。');return structuredClone(entry.game);
}
export function saveAuto(game,storage=localStorage,now=Date.now()){
 storage.setItem(AUTO_KEY,JSON.stringify({savedAt:now,game}));
}
export function readAuto(storage=localStorage,now=Date.now()){
 const raw=storage.getItem(AUTO_KEY);if(!raw)return null;
 const entry=JSON.parse(raw);
 // Older automatic saves had no timestamp; migrate once on first use.
 if(validGame(entry)){saveAuto(entry,storage,now);return entry;}
 if(live(entry,now))return entry.game;
 storage.removeItem(AUTO_KEY);return null;
}
