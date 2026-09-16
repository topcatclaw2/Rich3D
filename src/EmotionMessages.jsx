import React from 'react';
import {money} from './game.js';

function amountLabel(amount){return `${amount>0?'+':'−'}${money(Math.abs(amount))}`;}
const gestures={happy:'🙌',sad:'💧',surprised:'❗',proud:'⭐',anxious:'🔥',relieved:'☁️',bankrupt:'💔'};

function EmotionEntry({message,player,anchorRefs,mobile=false,animated=true,paused=false}){
 if(!player)return null;
 const amount=amountLabel(message.amountDelta);
 const moodClass=`emotion-${message.mood}`;
 const playerColor=player.color||'#61ac78';
 return <div
  ref={mobile?undefined:node=>{if(!anchorRefs)return;if(node)anchorRefs.current.set(player.id,node);else anchorRefs.current.delete(player.id);}}
  className={`emotion-bubble ${moodClass}${animated?'':' motion-off'}${paused?' is-paused':''}${mobile?' emotion-mobile-entry':''}`}
  style={{'--player':playerColor}}
  aria-hidden="true"
 >
  <div className="emotion-card">
   <div className="emotion-bubble-heading"><span className="emotion-player-dot"/><strong>{player.name}</strong><span className="emotion-mood-icon" aria-hidden="true">{message.emoji}</span><span className="emotion-mood-label">{message.moodLabel}</span><span className="emotion-gesture" aria-hidden="true">{gestures[message.mood]}</span><b className="emotion-amount">{amount}</b></div>
   <p>{message.message}</p>
  </div>
 </div>;
}

export function EmotionMessageLayer({event,players,anchorRefs,animated,paused=false}){
 if(!event)return null;
 const playerById=new Map(players.map(player=>[player.id,player]));
 const announcement=`${event.summary} ${event.players.map(item=>{const player=playerById.get(item.playerId);return `${player?.name||'玩家'}，${item.moodLabel}，${amountLabel(item.amountDelta)}，${item.message}`;}).join(' ')}`;
 return <>
  <div className="emotion-layer" aria-hidden="true">{event.players.map(message=><EmotionEntry key={`${event.id}-${message.playerId}`} message={message} player={playerById.get(message.playerId)} anchorRefs={anchorRefs} animated={animated} paused={paused}/>)}</div>
  <span className="visually-hidden" role="status" aria-live="polite">{announcement}</span>
 </>;
}

export function EmotionMessageMobileFeed({event,players,animated,paused=false}){
 if(!event)return null;
 const playerById=new Map(players.map(player=>[player.id,player]));
 return <div className="emotion-mobile-feed" aria-hidden="true">{event.players.map(message=><EmotionEntry key={`${event.id}-${message.playerId}`} message={message} player={playerById.get(message.playerId)} mobile animated={animated} paused={paused}/>)}</div>;
}
