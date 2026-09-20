import {readAuto,validGame} from './storage.js';
import {emitEmotion} from './emotions.js';
export const COLORS = ['#61ac78','#62a6da','#e7b942','#de809a'];
export const GROUPS = ['#e997aa','#9ecb91','#e6af66','#e5c963','#ae99d0','#79b6d4','#72bfb1','#b5a38b'];
const names = ['起點','中山路','南京東路','機會','敦化南路','民生東路','所得稅','松江路','探訪監獄','永康街','師大路','機會','大安路','青田街','城市基金','溫州街','免費停車','天母西路','士林夜市','機會','大直街','內湖路','城市基金','南港路','前往監獄','忠孝東路','信義路','機會','仁愛路','和平東路','奢侈稅','松仁路'];
export const TILES = names.map((name,id)=>{
 const special = {0:'start',3:'chance',6:'tax',8:'jail',11:'chance',14:'fund',16:'park',19:'chance',22:'fund',24:'gojail',27:'chance',30:'tax'};
 const group = Math.floor(id/4);
 return {id,name,type:special[id]||'property',group,color:GROUPS[group],price:1000+group*300+(id%4)*100};
});
export const money = n => '$' + n.toLocaleString('en-US');
export const DEFAULT_INFLATION_RATE=1;
export const MAX_INITIAL_INFLATION_RATE=5;
export const MAX_INFLATION_RATE=10;
export const MAX_PRICE_INDEX=10;
export const inflationAmount=(s,amount,rounding=Math.round)=>rounding(amount*(s?.priceIndex??1));
export const propertyPrice=(s,t)=>inflationAmount(s,t.price);
export const buildCost=(t,s)=>inflationAmount(s,t.price*.6);
export const DEFAULT_MAX_ROUNDS=40;
export const MAX_SKILL_HAND=3;
export const SKILL_CARDS=[
 {id:'trap',name:'陷害卡',type:'control',timing:'active',icon:'⛓️',summary:'指定玩家進入監獄',target:'player',description:'將一名玩家送進監獄，該玩家會移到監獄位置並暫停下一回合。',usage:'在自己的回合、擲骰前選擇一名目標玩家使用。',restriction:'只能指定仍在場的其他玩家；目標若持有反制卡或反彈卡，可以在效果結算前回應。'},
 {id:'slow',name:'龜速卡',type:'control',timing:'active',icon:'🐌',summary:'目標 3 回合最多走 1 格',target:'player',description:'使目標玩家接下來 3 個自己的回合，每回合最多前進 1 格，但仍會觸發抵達格子的效果。',usage:'在自己的回合、擲骰前選擇一名玩家使用，也可以指定自己。',restriction:'目標已有龜速效果時不能重複套用；指定其他玩家時，對方可使用反制卡或反彈卡。'},
 {id:'teleport',name:'傳送卡',type:'movement',timing:'active',icon:'✦',summary:'將玩家移到合法位置',target:'player',description:'將一名玩家直接移動到指定的合法棋盤位置，並觸發該位置的抵達效果。',usage:'在自己的回合、擲骰前選擇目標玩家與合法位置後使用。',restriction:'不能選擇「前往監獄」格；傳送不會重複抽取技能卡，目標若持有反制卡或反彈卡，可以在效果結算前回應。'},
 {id:'get-out',name:'出獄卡',type:'utility',timing:'active',icon:'🔓',summary:'解除自己的監獄狀態',description:'立即解除自己的監獄狀態，恢復正常行動。',usage:'自己處於監獄狀態時，在自己的回合、擲骰前使用。',restriction:'只有目前在監獄中的玩家可以使用；不能替其他玩家解除監獄。'},
 {id:'rent-shield',name:'免租卡',type:'defense',timing:'active',icon:'🛡️',summary:'下一次租金免除',description:'讓自己下一次應支付的租金完全免除。',usage:'在自己的回合、擲骰前使用；效果會保留到下一次需要支付租金時。',restriction:'只保護下一筆租金，觸發後立即消耗；不會免除稅金、事件支出或其他付款。'},
 {id:'rent-double',name:'租金加倍卡',type:'money',timing:'active',icon:'×2',summary:'下一次收租提高為 2 倍',description:'讓自己下一次收到的租金提高為原本的 2 倍。',usage:'在自己的回合、擲骰前使用；效果會保留到下一次成功收取租金時。',restriction:'只影響下一筆租金交易，觸發後立即消耗；加倍會在通膨與地產租金計算後套用。'},
 {id:'position-swap',name:'位置交換卡',type:'movement',timing:'active',icon:'⇄',summary:'交換兩名玩家位置',target:'player',description:'將自己與指定玩家目前在棋盤上的位置互換。',usage:'在自己的回合、擲骰前選擇一名其他玩家使用。',restriction:'只能指定仍在場的其他玩家；交換位置不會重新觸發抵達格子效果，目標若持有反制卡或反彈卡，可以在效果結算前回應。'},
 {id:'birthday',name:'生日派對卡',type:'money',timing:'active',icon:'🎂',summary:'其他玩家各支付一筆錢',description:'所有其他尚未破產的玩家各支付一筆隨物價指數調整的生日派對費用給使用者。',usage:'在自己的回合、擲骰前直接使用，不需要選擇目標。',restriction:'不會向自己收費；每位其他存活玩家各支付基礎金額 $300，實際金額依目前物價指數換算。'},
 {id:'subsidy',name:'城市補助卡',type:'money',timing:'active',icon:'🪙',summary:'從銀行獲得小額補助',description:'從銀行獲得一筆隨物價指數調整的城市補助金。',usage:'在自己的回合、擲骰前直接使用，不需要選擇目標。',restriction:'基礎補助金額為 $800，實際金額依目前物價指數換算；每回合最多使用一張主動技能卡。'},
 {id:'counter',name:'反制卡',type:'defense',timing:'reaction',icon:'✋',summary:'取消作用在自己的技能',description:'取消一張尚未結算、正要作用在自己身上的單一目標技能卡。',usage:'其他玩家對自己使用可指定單一玩家的技能卡、且效果尚未結算時，在反應提示中選擇「使用反制卡」。',restriction:'只能在符合反應時機時使用；使用後原技能卡直接進入棄牌堆，不產生效果。'},
 {id:'reflect',name:'反彈卡',type:'defense',timing:'reaction',icon:'↩',summary:'將單一指定技能反彈',description:'將一張尚未結算、原本作用在自己身上的單一目標技能，改為作用在發動者身上。',usage:'其他玩家對自己使用可指定單一玩家的技能卡、且效果尚未結算時，在反應提示中選擇「使用反彈卡」。',restriction:'只適用於單一玩家目標的技能；每次技能事件最多反彈一次，不能反彈全體效果、金額事件或已完成結算的效果。'},
 {id:'redraw',name:'幸運重抽卡',type:'utility',timing:'active',icon:'⟳',summary:'放棄一張手牌並重新抽卡',description:'放棄目前的一張手牌，從技能牌堆重新抽取 1 張技能卡，改變手上的策略選擇。',usage:'在自己的回合、擲骰前直接使用；若手上還有其他技能卡，需先選擇 1 張其他手牌放棄。',restriction:'每回合仍受最多使用 1 張主動卡的限制；重新抽卡後仍受每位玩家最多 3 張手牌的限制。若牌堆已空，會先將棄牌堆洗回牌堆。'},
 {id:'land-swap',name:'換地卡',type:'control',timing:'active',icon:'🏠',summary:'交換兩塊地產所有權',target:'land',description:'將自己擁有的一塊普通地產，與其他存活玩家擁有的一塊普通地產交換所有權。',usage:'在自己的回合、擲骰前選擇自己的土地與對方土地後使用。',restriction:'雙方都必須是普通地產；不能選特殊格、未出售地產或已破產玩家的地產。交換後保留原有房屋／旅館等級，不會觸發抵達效果。'}
];
export const SKILL_CARD_IDS=SKILL_CARDS.map(card=>card.id);
export const skillCardById=id=>SKILL_CARDS.find(card=>card.id===id)||null;
export const LEGAL_TELEPORT_POSITIONS=TILES.filter(tile=>tile.type!=='gojail').map(tile=>tile.id);
const normalizeMaxRounds=value=>value===null?null:Number.isInteger(Number(value))&&Number(value)>=1?Number(value):DEFAULT_MAX_ROUNDS;
const normalizeInflationRate=value=>Math.max(0,Math.min(MAX_INFLATION_RATE,Number.isFinite(Number(value))?Math.round(Number(value)):DEFAULT_INFLATION_RATE));
const normalizeInitialInflationRate=value=>Math.min(MAX_INITIAL_INFLATION_RATE,normalizeInflationRate(value));
const normalizeBuildingLimit=value=>value!==false;
const initialBank={houses:32,hotels:12};
const shuffle=list=>{const result=[...list];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;};
const inventoryFromLots=s=>{let houses=0,hotels=0;for(const l of Object.values(s.lots||{})){if(l.level===5)hotels++;else houses+=Math.max(0,Math.min(4,l.level||0));}return {houses:Math.max(0,initialBank.houses-houses),hotels:Math.max(0,initialBank.hotels-hotels)};};
export const availableBuildings=s=>s.bank&&Number.isInteger(s.bank.houses)&&Number.isInteger(s.bank.hotels)?s.bank:inventoryFromLots(s);
const normalizeSkillHand=hand=>Array.isArray(hand)?hand.filter(id=>SKILL_CARD_IDS.includes(id)).slice(0,SKILL_CARD_IDS.length):[];
const normalizePendingSkill=p=>p&&Number.isInteger(p.sourceId)&&Number.isInteger(p.targetId)&&SKILL_CARD_IDS.includes(p.cardId)?{sourceId:p.sourceId,targetId:p.targetId,cardId:p.cardId,targetPosition:Number.isInteger(p.targetPosition)?p.targetPosition:null}:null;
const normalizeGame=s=>({...s,limitBuildings:normalizeBuildingLimit(s.limitBuildings),maxRounds:normalizeMaxRounds(s.maxRounds),inflationRate:normalizeInflationRate(s.inflationRate??0),priceIndex:Math.max(1,Math.min(MAX_PRICE_INDEX,Number.isFinite(s.priceIndex)?s.priceIndex:1)),players:s.players.map((p,i)=>({...p,diceCount:p.diceCount??2,color:p.color||COLORS[i],human:p.human===undefined?i===0:!!p.human,skillHand:normalizeSkillHand(p.skillHand),skillUsedThisTurn:p.skillUsedThisTurn===true,slowTurns:Number.isInteger(p.slowTurns)&&p.slowTurns>0?p.slowTurns:0,rentShield:p.rentShield===1?1:0,rentMultiplier:p.rentMultiplier===2?2:1})),skillDeck:Array.isArray(s.skillDeck)?s.skillDeck.filter(id=>SKILL_CARD_IDS.includes(id)):shuffle(SKILL_CARD_IDS),skillDiscard:Array.isArray(s.skillDiscard)?s.skillDiscard.filter(id=>SKILL_CARD_IDS.includes(id)):[],skillOverflow:Number.isInteger(s.skillOverflow?.playerId)?{playerId:s.skillOverflow.playerId}:null,pendingSkill:normalizePendingSkill(s.pendingSkill),bank:{...availableBuildings(s)},buildAvailable:s.buildAvailable===true,buildUsed:s.buildUsed===true,emotionEvents:[],emotionHistory:[],emotionSequence:Number.isInteger(s.emotionSequence)?s.emotionSequence:0});
const defaultPlayers=[['你',COLORS[0],true],['艾米',COLORS[1],false],['小傑',COLORS[2],false],['喵喵',COLORS[3],false]];
export function freshGame(config={}){const count=Math.min(4,Math.max(2,Number(config.count)||4));const players=defaultPlayers.slice(0,count).map(([name,color,human],id)=>{const custom=config.players?.[id]||{};return {id,diceCount:2,name:typeof custom.name==='string'&&custom.name.trim()?custom.name.trim():name,color:custom.color||color,human:custom.human===undefined?human:!!custom.human,cash:15000,pos:0,jail:0,bankrupt:false,skillHand:[],skillUsedThisTurn:false,slowTurns:0,rentShield:0,rentMultiplier:1};});const inflationRate=normalizeInitialInflationRate(config.inflationRate??DEFAULT_INFLATION_RATE);return {version:1,players,lots:{},skillDeck:shuffle(SKILL_CARD_IDS),skillDiscard:[],skillOverflow:null,pendingSkill:null,bank:{...initialBank},limitBuildings:normalizeBuildingLimit(config.limitBuildings),turn:0,round:1,maxRounds:normalizeMaxRounds(config.maxRounds),inflationRate,priceIndex:1,stage:'ready',dice:[1,1],remaining:0,selected:null,buildAvailable:false,buildUsed:false,event:null,winner:null,emotionEvents:[],emotionHistory:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${count} 位玩家各獲得 $15,000，初始通膨率 ${inflationRate}%。`,kind:'welcome'}],notice:'擲出骰子，開始你的城市冒險。'};}
const note=(s,text,kind='info')=>{s.notice=text;s.log.unshift({text,kind});s.log=s.log.slice(0,40);};
export const ownLots=(s,p)=>TILES.filter(t=>s.lots[t.id]?.owner===p);
export const fullGroup=(s,t,p)=>TILES.filter(x=>x.type==='property'&&x.group===t.group).every(x=>s.lots[x.id]?.owner===p);
export const rent=(s,t)=>{let l=s.lots[t.id];return l?inflationAmount(s,Math.round(t.price*.18)*(l.level?[1,3,6,10,15,22][l.level]:(fullGroup(s,t,l.owner)?2:1))):0;};
export const worth=(s,p)=>s.players[p].cash+ownLots(s,p).reduce((sum,t)=>sum+inflationAmount(s,t.price+(s.lots[t.id].level||0)*Math.round(t.price*.6)),0);
export const canBuild=(s,id,p=s.turn)=>{const t=TILES[id],l=s.lots[id],bank=availableBuildings(s);if(!t||t.type!=='property'||!l||l.owner!==p||s.turn!==p||s.stage!=='end'||s.selected!==id||!s.buildAvailable||s.buildUsed||l.level>=5||s.players[p].cash<buildCost(t,s))return false;return s.limitBuildings===false||(l.level<4?bank.houses>0:bank.hotels>0);};
function releaseBuildings(s,l){const bank=s.bank||availableBuildings(s);if(l.level===5)bank.hotels++;else bank.houses+=Math.max(0,Math.min(4,l.level||0));s.bank=bank;}
function finishCheck(s){const active=s.players.filter(p=>!p.bankrupt);if(active.length===1){s.winner=active[0].id;s.stage='finished';note(s,`${active[0].name}成為城市大亨！`);}}
export const SUPPORTED_ACTIVE_SKILLS=new Set(['trap','slow','teleport','get-out','rent-shield','rent-double','position-swap','birthday','subsidy','redraw','land-swap']);
function drawSkillCard(s,pId,source='事件中，'){const player=s.players[pId];if(!player||player.skillHand.length>=SKILL_CARD_IDS.length)return null;if(!s.skillDeck.length&&s.skillDiscard.length){s.skillDeck=shuffle(s.skillDiscard);s.skillDiscard=[];}const id=s.skillDeck.shift();if(!id)return null;player.skillHand.push(id);const card=skillCardById(id);if(player.skillHand.length>MAX_SKILL_HAND)s.skillOverflow={playerId:pId};note(s,`${player.name}${source}獲得技能卡「${card.name}」。`,'skill');return card;}
function discardSkillCard(s,p,cardId){const index=p.skillHand.indexOf(cardId);if(index<0)return false;p.skillHand.splice(index,1);s.skillDiscard.push(cardId);return true;}
function isLivePlayer(s,id){return Number.isInteger(id)&&id>=0&&id<s.players.length&&!s.players[id].bankrupt;}
function skillReactionOptions(s,target){return {counter:target.skillHand.includes('counter'),reflect:target.skillHand.includes('reflect')};}
function applySkillEffect(s,card,source,target,a,{reflected=false}={}){
 if(card.id==='trap'){target.pos=8;target.jail=1;}
 if(card.id==='slow')target.slowTurns=3;
 if(card.id==='teleport'){const from=target.pos;target.pos=a.targetPosition;land(s,target.pos,{playerId:target.id,flow:false,drawSkill:false});note(s,`${target.name}由${source.name}使用傳送卡，從${TILES[from].name}移動至${TILES[target.pos].name}。`,'skill');}
 if(card.id==='get-out')source.jail=0;
 if(card.id==='rent-shield')source.rentShield=1;
 if(card.id==='rent-double')source.rentMultiplier=2;
 if(card.id==='position-swap'){[source.pos,target.pos]=[target.pos,source.pos];}
 if(card.id==='birthday'){const amount=inflationAmount(s,300);for(const other of s.players)if(other.id!==source.id&&!other.bankrupt)pay(s,other.id,amount,source.id,'skill');}
 if(card.id==='subsidy'){const amount=inflationAmount(s,800);source.cash+=amount;emitEmotion(s,{category:'windfall',summary:`${source.name}使用城市補助卡，獲得 ${money(amount)}。`,participants:[{playerId:source.id,amountDelta:amount}]});}
 if(card.id==='redraw'){if(a.discardCardId){const discarded=skillCardById(a.discardCardId);discardSkillCard(s,source,a.discardCardId);note(s,`${source.name}放棄技能卡「${discarded.name}」。`,'skill');}drawSkillCard(s,source.id,'使用幸運重抽卡，');}
 const targetText=card.target==='player'?`，目標為${target.name}`:card.target==='land'?`，交換${TILES[a.ownLotId].name}與${TILES[a.targetLotId].name}`:'';
 const summary=`${reflected?'反彈後，':''}${source.name}使用${card.name}${targetText}。`;note(s,summary,'skill');
 if(!reflected){const participants=[{playerId:source.id,category:'skillUse'}];if((card.target==='player'||card.target==='land')&&target?.id!==source.id)participants.push({playerId:target.id,category:card.id==='land-swap'?'skillLandSwapTarget':'skillTarget'});if(card.id==='birthday'){for(const other of s.players)if(other.id!==source.id&&!other.bankrupt)participants.push({playerId:other.id,category:'skillTarget'});}emitEmotion(s,{category:'skillUse',summary,participants});}
 if(card.id==='land-swap')note(s,`${TILES[a.ownLotId].name}與${TILES[a.targetLotId].name}的所有權已交換。`,'skill');
}
function resolvePendingSkill(s,response='pass'){
 const pending=s.pendingSkill;if(!pending)return false;
 const source=s.players[pending.sourceId],target=s.players[pending.targetId],card=skillCardById(pending.cardId);if(!source||!target||!card){s.pendingSkill=null;return false;}
 if(response==='counter'&&discardSkillCard(s,target,'counter')){s.pendingSkill=null;const summary=`${target.name}使用反制卡，取消${source.name}的${card.name}。`;note(s,summary,'skill');emitEmotion(s,{category:'skillCounter',summary,participants:[{playerId:target.id,category:'skillCounter'},{playerId:source.id,category:'skillTarget'}]});return true;}
 if(response==='reflect'&&card.target==='player'&&discardSkillCard(s,target,'reflect')&&isLivePlayer(s,source.id)){s.pendingSkill=null;applySkillEffect(s,card,source,source,{targetPosition:pending.targetPosition,ownLotId:pending.ownLotId,targetLotId:pending.targetLotId},{reflected:true});const summary=`${target.name}使用反彈卡，將${card.name}反彈給${source.name}。`;note(s,summary,'skill');emitEmotion(s,{category:'skillReflect',summary,participants:[{playerId:target.id,category:'skillReflect'},{playerId:source.id,category:'skillTarget'}]});return true;}
 if(response!=='pass')return false;
 s.pendingSkill=null;applySkillEffect(s,card,source,target,{targetPosition:pending.targetPosition,ownLotId:pending.ownLotId,targetLotId:pending.targetLotId});return true;
}
 function useSkillCard(s,a){const p=s.players[s.turn];const overflowUse=a.overflowUse===true&&s.skillOverflow?.playerId===s.turn&&s.stage!=='finished';const normalUse=s.stage==='ready'&&!s.skillOverflow;if(!(normalUse||overflowUse)||!p?.human&&!p||p.bankrupt||p.skillUsedThisTurn||s.pendingSkill)return false;const card=skillCardById(a.cardId);if(!card||card.timing!=='active'||!SUPPORTED_ACTIVE_SKILLS.has(card.id)||!p.skillHand.includes(card.id))return false;const target=isLivePlayer(s,a.targetId)?s.players[a.targetId]:null;const selfTargetAllowed=card.id==='slow';if(card.target==='player'&&(!target||(target.id===p.id&&!selfTargetAllowed)))return false;if(card.id==='slow'&&target.slowTurns>0)return false;if(card.id==='get-out'&&p.jail===0)return false;if(card.id==='redraw'){const otherCards=p.skillHand.filter(id=>id!==card.id);if(otherCards.length>0&&(!a.discardCardId||a.discardCardId===card.id||!otherCards.includes(a.discardCardId)))return false;if(otherCards.length===0&&a.discardCardId)return false;}let landTarget=null;if(card.id==='land-swap'){const ownLot=s.lots[a.ownLotId],targetLot=s.lots[a.targetLotId];if(!ownLot||!targetLot||ownLot.owner!==p.id||targetLot.owner===p.id||!TILES[a.ownLotId]||!TILES[a.targetLotId]||TILES[a.ownLotId].type!=='property'||TILES[a.targetLotId].type!=='property'||!isLivePlayer(s,targetLot.owner))return false;landTarget=s.players[targetLot.owner];[ownLot.owner,targetLot.owner]=[targetLot.owner,ownLot.owner];}
 discardSkillCard(s,p,card.id);p.skillUsedThisTurn=true;if(s.skillOverflow?.playerId===p.id&&p.skillHand.length<=MAX_SKILL_HAND)s.skillOverflow=null;
 if(card.target==='player'&&target.id!==p.id){const reactions=skillReactionOptions(s,target);if(reactions.counter||reactions.reflect){s.pendingSkill={sourceId:p.id,targetId:target.id,cardId:card.id,targetPosition:Number.isInteger(a.targetPosition)?a.targetPosition:null,ownLotId:a.ownLotId,targetLotId:a.targetLotId};const summary=`${p.name}使用${card.name}，指定${target.name}，等待回應。`;note(s,summary,'skill');emitEmotion(s,{category:'skillUse',summary,participants:[{playerId:p.id,category:'skillUse'},{playerId:target.id,category:'skillTarget'}]});return true;}}
 applySkillEffect(s,card,p,target||landTarget||p,a);return true;
}
function resolveSkillOverflow(s,a){const playerId=s.skillOverflow?.playerId;if(!Number.isInteger(playerId)||playerId<0||playerId>=s.players.length)return false;const p=s.players[playerId];if(p.skillHand.length<=MAX_SKILL_HAND||!discardSkillCard(s,p,a.cardId))return false;if(p.skillHand.length<=MAX_SKILL_HAND)s.skillOverflow=null;note(s,`${p.name}放棄技能卡「${skillCardById(a.cardId)?.name||a.cardId}」。`,'skill');return true;}
function pay(s,p,amount,to=null,reason='tax'){
 let player=s.players[p];
 let soldValue=0;
  for(const t of ownLots(s,p).sort((a,b)=>a.price-b.price)){
  if(player.cash>=amount)break;
  const value=inflationAmount(s,t.price+s.lots[t.id].level*Math.round(t.price*.6),n=>Math.floor(n*.5));
  player.cash+=value;soldValue+=value;releaseBuildings(s,s.lots[t.id]);delete s.lots[t.id];note(s,`${player.name}變賣${t.name}，回收 ${money(value)}。`,'sell');
 }
 if(soldValue>0)emitEmotion(s,{category:'sale',summary:`${player.name}自動變賣地產，回收 ${money(soldValue)}。`,participants:[{playerId:p,amountDelta:soldValue}]});
 const actual=Math.min(player.cash,amount);player.cash-=actual;if(to!==null)s.players[to].cash+=actual;
 if(actual>0){
  if(to!==null){
   const receiver=s.players[to];
   emitEmotion(s,{category:'rentPaid',summary:`${player.name}支付 ${money(actual)} 給${receiver.name}。`,participants:[{playerId:p,category:'rentPaid',amountDelta:-actual},{playerId:to,category:'rentReceived',amountDelta:actual}]});
  }else{
   const category=reason==='chance'?'chanceExpense':'tax';
   emitEmotion(s,{category,summary:`${player.name}支付 ${money(actual)}。`,participants:[{playerId:p,amountDelta:-actual}]});
  }
 }
 if(actual<amount){player.bankrupt=true;const shortfall=amount-actual;note(s,`${player.name}資金不足，宣告破產。`,'bankrupt');emitEmotion(s,{category:'bankruptcy',summary:`${player.name}無法支付 ${money(shortfall)}，宣告破產。`,participants:[{playerId:p,amountDelta:-shortfall}]});finishCheck(s);}
}
function land(s,eventIndex,options={}){
 const playerId=options.playerId??s.turn,flow=options.flow!==false,p=s.players[playerId],t=TILES[p.pos];if(flow){s.selected=t.id;s.stage='end';s.buildAvailable=false;s.buildUsed=false;}
 if(t.type==='property'){
  const l=s.lots[t.id];
  if(!l){const price=propertyPrice(s,t),canAfford=p.cash>=price;if(flow)s.stage=canAfford?'decision':'end';note(s,flow?`${p.name}抵達${t.name}，${canAfford?'可以購買這塊地產。':'現金不足以購買。'}`:`${p.name}抵達${t.name}，未進行購買。`);if(flow&&!canAfford)emitEmotion(s,{category:'propertyUnaffordable',summary:`${p.name}抵達${t.name}，但現金不足以購買。`,participants:[{playerId:p.id}]});}
 else if(l.owner!==p.id){let cost=rent(s,t);const owner=s.players[l.owner];if(owner.rentMultiplier===2){cost*=2;owner.rentMultiplier=1;}if(p.rentShield===1){p.rentShield=0;note(s,`${p.name}使用免租卡，免除${t.name}的 ${money(cost)} 租金。`,'skill');}else{note(s,`${p.name}在${t.name}支付 ${money(cost)} 租金給${owner.name}。`,'rent');pay(s,p.id,cost,l.owner,'rent');}}
  else {s.buildAvailable=true;const offer=l.level===5?'已有旅館。':l.level===4?(availableBuildings(s).hotels?'可以升級為旅館。':'銀行旅館已用完。'):(availableBuildings(s).houses?'可以加蓋一間房屋。':'銀行房屋已用完。');note(s,`${p.name}回到自己的${t.name}，${offer}`);}
 }else if(t.type==='tax'){const cost=inflationAmount(s,t.id===6?1200:1800);note(s,`${p.name}支付${t.name} ${money(cost)}。`,'tax');pay(s,p.id,cost,null,'tax');}
 else if(t.type==='gojail'){p.pos=8;p.jail=1;note(s,`${p.name}前往監獄，下次回合暫停一次。`,'jail');}
 else if(t.type==='chance'||t.type==='fund'){
  const events=[['城市更新獎勵','你的街區煥然一新，獲得市府獎勵。',1500],['房屋修繕','城市的美好，需要一點維護費。',-900],['投資分紅','好眼光！你的投資帶來額外收益。',1000],['社區公益','支持在地社區，支付公益基金。',-600],['創業獎金','你的創意獲得肯定，領取創業獎金。',2000],['幸運退稅','收到一筆意外的退稅！',800],['通膨升溫','通膨率提高 1 個百分點，新通膨率於下一輪影響物價。',0,1],['通膨降溫','通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。',0,-1]];
  const [title,body,baseAmount,inflationDelta]=events[Math.abs(eventIndex||0)%events.length];
  if(inflationDelta){const previous=s.inflationRate;s.inflationRate=normalizeInflationRate(previous+inflationDelta);const actualDelta=s.inflationRate-previous;const rateMessage=actualDelta===0?`通膨率維持 ${s.inflationRate}%（已達上限或下限）`:`通膨率${actualDelta>0?'提高':'降低'}至 ${s.inflationRate}%`;s.event={title,body,amount:0,kind:'inflation',inflationDelta:actualDelta,inflationRate:s.inflationRate};note(s,`${p.name}抽到「${title}」：${rateMessage}，新通膨率於下一輪影響物價。`,'inflation');}
  else{const amount=inflationAmount(s,baseAmount);s.event={title,body,amount};note(s,`${p.name}抽到「${title}」：${amount>0?'獲得':'支付'} ${money(Math.abs(amount))}。`,'chance');if(amount>0){p.cash+=amount;emitEmotion(s,{category:'windfall',summary:`${p.name}獲得 ${money(amount)}。`,participants:[{playerId:p.id,amountDelta:amount}]});}else pay(s,p.id,-amount,null,'chance');}
  const skill=options.drawSkill===false?null:t.type==='chance'?drawSkillCard(s,p.id,'機會事件中，'):null;if(skill)s.event={...s.event,skillCardId:skill.id,skillCardName:skill.name};
 }else note(s,t.type==='start'?`${p.name}抵達起點。`:t.type==='park'?`${p.name}在城市公園休息，享受片刻悠閒。`:`${p.name}只是探訪監獄，自由通行。`);
 finishCheck(s);
}
export function reducer(state,a){
 if(a.type==='NEW')return freshGame(a.config);
 if(a.type==='LOAD')return validGame(a.game)?normalizeGame(structuredClone(a.game)):state;
 const s=structuredClone(state),p=s.players[s.turn];s.emotionEvents=[];
 switch(a.type){
  case 'SET_DICE_COUNT':if(s.stage!=='ready'||!p.human||p.bankrupt||p.jail||![1,2].includes(a.count))return state;p.diceCount=a.count;break;
  case 'ROLL':if(s.stage!=='ready'||p.bankrupt||s.pendingSkill)return state;if(p.jail){p.jail--;s.stage='end';note(s,`${p.name}在監獄休息一回合，下回合恢復行動。`);break;}if(!Array.isArray(a.dice)||a.dice.length!==(p.diceCount??2)||!a.dice.every(d=>Number.isInteger(d)&&d>=1&&d<=6))return state;s.dice=[...a.dice];const rolled=a.dice.reduce((sum,d)=>sum+d,0),slowed=p.slowTurns>0;p.slowTurns=Math.max(0,p.slowTurns-(slowed?1:0));s.remaining=slowed?Math.min(1,rolled):rolled;s.event=null;s.stage='moving';s.eventIndex=a.eventIndex;note(s,`${p.name}擲出 ${a.dice.join(' + ')}，前進 ${s.remaining} 格。${slowed?'龜速效果生效，本回合最多前進 1 格。':''}`,'dice');break;
  case 'STEP':if(s.stage!=='moving')return state;p.pos=(p.pos+1)%32;if(p.pos===0){const salary=inflationAmount(s,2000);p.cash+=salary;note(s,`${p.name}通過起點，領取 ${money(salary)}。`,'salary');emitEmotion(s,{category:'salary',summary:`${p.name}經過起點，獲得 ${money(salary)}。`,participants:[{playerId:p.id,amountDelta:salary}]});}s.remaining--;const fundSkill=TILES[p.pos].type==='fund'?drawSkillCard(s,p.id,s.remaining===0?'抵達城市基金格，':'經過城市基金格，'):null;if(s.remaining===0){land(s,s.eventIndex);if(fundSkill&&s.event)s.event={...s.event,skillCardId:fundSkill.id,skillCardName:fundSkill.name};}break;
  case 'BUY':{if(s.stage!=='decision')return state;const t=TILES[p.pos],price=propertyPrice(s,t);if(s.lots[t.id]||p.cash<price)return state;p.cash-=price;s.lots[t.id]={owner:p.id,level:0};s.stage='end';note(s,`${p.name}購買了${t.name}，支付 ${money(price)}。`,'buy');emitEmotion(s,{category:'purchase',summary:`${p.name}購買${t.name}，支付 ${money(price)}。`,participants:[{playerId:p.id,amountDelta:-price}]});break;}
  case 'SKIP':if(s.stage!=='decision')return state;s.stage='end';note(s,`${p.name}暫不購買${TILES[p.pos].name}。`);break;
  case 'BUILD':{if(!canBuild(s,a.id))return state;const t=TILES[a.id],l=s.lots[a.id],cost=buildCost(t,s);s.bank=s.bank||availableBuildings(s);p.cash-=cost;if(l.level<4){s.bank.houses--;l.level++;note(s,`${p.name}在${t.name}加蓋第 ${l.level} 間房屋，支付 ${money(cost)}。`,'build');}else{s.bank.houses+=4;s.bank.hotels--;l.level=5;note(s,`${p.name}將${t.name}的 4 間房屋升級為旅館，支付 ${money(cost)}。`,'build');}emitEmotion(s,{category:'construction',summary:`${p.name}支付 ${money(cost)} 建設地產。`,participants:[{playerId:p.id,amountDelta:-cost}]});s.buildAvailable=false;s.buildUsed=true;break;}
  case 'SELL':{if(!['ready','end'].includes(s.stage)||s.lots[a.id]?.owner!==p.id)return state;const t=TILES[a.id],l=s.lots[a.id],value=inflationAmount(s,t.price+l.level*Math.round(t.price*.6),n=>Math.floor(n*.5));releaseBuildings(s,l);p.cash+=value;delete s.lots[a.id];s.buildAvailable=false;note(s,`${p.name}變賣${t.name}，回收 ${money(value)}。`,'sell');emitEmotion(s,{category:'sale',summary:`${p.name}變賣${t.name}，回收 ${money(value)}。`,participants:[{playerId:p.id,amountDelta:value}]});break;}
  case 'USE_SKILL_CARD':if(!useSkillCard(s,a))return state;break;
  case 'RESPOND_SKILL':if(!s.pendingSkill||a.playerId!==s.pendingSkill.targetId||!['counter','reflect','pass'].includes(a.response)||!resolvePendingSkill(s,a.response))return state;break;
  case 'RESOLVE_SKILL_OVERFLOW':if(!resolveSkillOverflow(s,a))return state;break;
  case 'NEXT':if(s.stage!=='end'||s.skillOverflow||s.pendingSkill)return state;{let next=s.turn;do{next=(next+1)%s.players.length;if(next===0){s.round++;const previous=s.priceIndex;s.priceIndex=Math.min(MAX_PRICE_INDEX,s.priceIndex*(1+s.inflationRate/100));if(s.priceIndex>previous)note(s,`新的一輪開始，物價指數升至 ${s.priceIndex.toFixed(2)}×。`,'inflation');}}while(s.players[next].bankrupt);s.turn=next;s.players[next].skillUsedThisTurn=false;s.event=null;s.stage='ready';s.selected=null;s.buildAvailable=false;s.buildUsed=false;if(s.maxRounds!==null&&s.round>s.maxRounds){s.winner=s.players.filter(x=>!x.bankrupt).sort((a,b)=>worth(s,b.id)-worth(s,a.id))[0].id;s.stage='finished';note(s,`${s.maxRounds} 回合結束！${s.players[s.winner].name}以最高總資產獲勝。`);}else note(s,`輪到${s.players[next].name}，準備擲骰子。`);break;}
  default:return state;
 }
 if(s.limitBuildings===false)s.bank={...initialBank};
 return s;
}
export function loadGame(){try{const saved=readAuto();return saved?normalizeGame(saved):freshGame();}catch{return freshGame();}}
