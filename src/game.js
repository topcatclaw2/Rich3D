export const COLORS = ['#61ac78','#62a6da','#e7b942','#de809a'];
export const GROUPS = ['#e997aa','#9ecb91','#e6af66','#e5c963','#ae99d0','#79b6d4','#72bfb1','#b5a38b'];
const names = ['起點','中山路','南京東路','機會','敦化南路','民生東路','所得稅','松江路','探訪監獄','永康街','師大路','機會','大安路','青田街','城市基金','溫州街','免費停車','天母西路','士林夜市','機會','大直街','內湖路','城市基金','南港路','前往監獄','忠孝東路','信義路','機會','仁愛路','和平東路','奢侈稅','松仁路'];
export const TILES = names.map((name,id)=>{
 const special = {0:'start',3:'chance',6:'tax',8:'jail',11:'chance',14:'fund',16:'park',19:'chance',22:'fund',24:'gojail',27:'chance',30:'tax'};
 const group = Math.floor(id/4);
 return {id,name,type:special[id]||'property',group,color:GROUPS[group],price:1000+group*300+(id%4)*100};
});
export const money = n => '$' + n.toLocaleString('en-US');
export function freshGame(){return {version:1,players:['你','艾米','小傑','喵喵'].map((name,id)=>({id,name,cash:15000,pos:0,jail:0,bankrupt:false})),lots:{},turn:0,round:1,stage:'ready',dice:[1,1],remaining:0,selected:null,event:null,winner:null,log:[{text:'歡迎來到城市大亨！每位玩家獲得 $15,000。',kind:'welcome'}],notice:'擲出骰子，開始你的城市冒險。'};}
const note=(s,text,kind='info')=>{s.notice=text;s.log.unshift({text,kind});s.log=s.log.slice(0,40);};
export const ownLots=(s,p)=>TILES.filter(t=>s.lots[t.id]?.owner===p);
export const fullGroup=(s,t,p)=>TILES.filter(x=>x.type==='property'&&x.group===t.group).every(x=>s.lots[x.id]?.owner===p);
export const rent=(s,t)=>{let l=s.lots[t.id];return l?Math.round(t.price*.18)*(l.level?[1,3,6,10][l.level]:(fullGroup(s,t,l.owner)?2:1)):0;};
export const worth=(s,p)=>s.players[p].cash+ownLots(s,p).reduce((sum,t)=>sum+t.price+(s.lots[t.id].level||0)*Math.round(t.price*.6),0);
export const canBuild=(s,id,p=s.turn)=>{const t=TILES[id],l=s.lots[id];return Boolean(t&&l&&l.owner===p&&l.level<3&&fullGroup(s,t,p)&&s.players[p].cash>=Math.round(t.price*.6)&&['ready','end'].includes(s.stage));};
function finishCheck(s){const active=s.players.filter(p=>!p.bankrupt);if(active.length===1){s.winner=active[0].id;s.stage='finished';note(s,`${active[0].name}成為城市大亨！`);}}
function pay(s,p,amount,to=null){
 let player=s.players[p];
 for(const t of ownLots(s,p).sort((a,b)=>a.price-b.price)){
  if(player.cash>=amount)break;
  const value=Math.floor((t.price+s.lots[t.id].level*Math.round(t.price*.6))*.5);
  player.cash+=value;delete s.lots[t.id];note(s,`${player.name}變賣${t.name}，回收 ${money(value)}。`,'sell');
 }
 const actual=Math.min(player.cash,amount);player.cash-=actual;if(to!==null)s.players[to].cash+=actual;
 if(actual<amount){player.bankrupt=true;note(s,`${player.name}資金不足，宣告破產。`,'bankrupt');finishCheck(s);}
}
function land(s,eventIndex){
 const p=s.players[s.turn],t=TILES[p.pos];s.selected=t.id;s.stage='end';
 if(t.type==='property'){
  const l=s.lots[t.id];
  if(!l){s.stage=p.cash>=t.price?'decision':'end';note(s,`${p.name}抵達${t.name}，${p.cash>=t.price?'可以購買這塊地產。':'現金不足以購買。'}`);}
  else if(l.owner!==p.id){let cost=rent(s,t);note(s,`${p.name}在${t.name}支付 ${money(cost)} 租金給${s.players[l.owner].name}。`,'rent');pay(s,p.id,cost,l.owner);}
  else note(s,`${p.name}回到自己的${t.name}。`);
 }else if(t.type==='tax'){let cost=t.id===6?1200:1800;note(s,`${p.name}支付${t.name} ${money(cost)}。`,'tax');pay(s,p.id,cost);}
 else if(t.type==='gojail'){p.pos=8;p.jail=1;note(s,`${p.name}前往監獄，下次回合暫停一次。`,'jail');}
 else if(t.type==='chance'||t.type==='fund'){
  const events=[['城市更新獎勵','你的街區煥然一新，獲得市府獎勵。',1500],['房屋修繕','城市的美好，需要一點維護費。',-900],['投資分紅','好眼光！你的投資帶來額外收益。',1000],['社區公益','支持在地社區，支付公益基金。',-600],['創業獎金','你的創意獲得肯定，領取創業獎金。',2000],['幸運退稅','收到一筆意外的退稅！',800]];
  const [title,body,amount]=events[Math.abs(eventIndex||0)%events.length];s.event={title,body,amount};note(s,`${p.name}抽到「${title}」：${amount>0?'獲得':'支付'} ${money(Math.abs(amount))}。`,'chance');if(amount>0)p.cash+=amount;else pay(s,p.id,-amount);
 }else note(s,t.type==='start'?`${p.name}抵達起點。`:t.type==='park'?`${p.name}在城市公園休息，享受片刻悠閒。`:`${p.name}只是探訪監獄，自由通行。`);
 finishCheck(s);
}
export function reducer(state,a){
 if(a.type==='NEW')return freshGame();
 const s=structuredClone(state),p=s.players[s.turn];
 switch(a.type){
  case 'ROLL':if(s.stage!=='ready'||p.bankrupt)return state;if(p.jail){p.jail--;s.stage='end';note(s,`${p.name}在監獄休息一回合，下回合恢復行動。`);break;}s.dice=a.dice;s.remaining=a.dice[0]+a.dice[1];s.event=null;s.stage='moving';s.eventIndex=a.eventIndex;note(s,`${p.name}擲出 ${a.dice[0]} + ${a.dice[1]}，前進 ${s.remaining} 格。`,'dice');break;
  case 'STEP':if(s.stage!=='moving')return state;p.pos=(p.pos+1)%32;if(p.pos===0){p.cash+=2000;note(s,`${p.name}通過起點，領取 $2,000。`,'salary');}s.remaining--;if(s.remaining===0)land(s,s.eventIndex);break;
  case 'BUY':{if(s.stage!=='decision')return state;const t=TILES[p.pos];if(s.lots[t.id]||p.cash<t.price)return state;p.cash-=t.price;s.lots[t.id]={owner:p.id,level:0};s.stage='end';note(s,`${p.name}購買了${t.name}，支付 ${money(t.price)}。`,'buy');break;}
  case 'SKIP':if(s.stage!=='decision')return state;s.stage='end';note(s,`${p.name}暫不購買${TILES[p.pos].name}。`);break;
  case 'BUILD':{if(!canBuild(s,a.id))return state;const t=TILES[a.id],cost=Math.round(t.price*.6);p.cash-=cost;s.lots[t.id].level++;note(s,`${p.name}將${t.name}升級至 ${s.lots[t.id].level} 級，支付 ${money(cost)}。`,'build');break;}
  case 'SELL':{if(!['ready','end'].includes(s.stage)||s.lots[a.id]?.owner!==p.id)return state;const t=TILES[a.id],l=s.lots[a.id];const value=Math.floor((t.price+l.level*Math.round(t.price*.6))*.5);p.cash+=value;delete s.lots[a.id];note(s,`${p.name}變賣${t.name}，回收 ${money(value)}。`,'sell');break;}
  case 'NEXT':if(s.stage!=='end')return state;{let next=s.turn;do{next=(next+1)%4;if(next===0)s.round++;}while(s.players[next].bankrupt);s.turn=next;s.event=null;s.stage='ready';s.selected=null;if(s.round>40){s.winner=s.players.filter(x=>!x.bankrupt).sort((a,b)=>worth(s,b.id)-worth(s,a.id))[0].id;s.stage='finished';note(s,`40 回合結束！${s.players[s.winner].name}以最高總資產獲勝。`);}else note(s,`輪到${s.players[next].name}，準備擲骰子。`);break;}
  default:return state;
 }
 return s;
}
export function loadGame(){try{const s=JSON.parse(localStorage.getItem('city-tycoon-v1'));if(s?.version===1&&s.players?.length===4&&s.lots&&['ready','decision','end','finished'].includes(s.stage))return s;}catch{}return freshGame();}
