import React,{useEffect,useRef,useState} from 'react';
import {X} from 'lucide-react';

const SEQUENCE_TIMINGS={enter:180,fly:620,flip:720,exit:360};

const RELATED_EMOTION_HOLD_MS=9000;
const UNRELATED_EMOTION_HOLD_MS=6000;

const MOODS={
 proud:{label:'得意',emoji:'😎',message:'這張牌用得正是時候！'},
 surprised:{label:'驚訝',emoji:'😲',message:'等等，這張牌是對我的？'},
 happy:{label:'開心',emoji:'😊',message:'漂亮的一手牌！'},
 anxious:{label:'焦急',emoji:'😣',message:'局勢突然變了！'},
 relieved:{label:'鬆一口氣',emoji:'😮‍💨',message:'總算化解危機了。'},
};

const PREVIEWS={
 trap:{source:['proud','先請你進監獄休息一下。'],target:['surprised','等等，我被送進監獄了？']},
 slow:{source:['proud','接下來慢慢走吧。'],target:['surprised','我的步伐被限制了！']},
 teleport:{source:['proud','城市位置，照我的計畫走。'],target:['surprised','我被傳送到哪裡了？']},
 'position-swap':{source:['proud','位置交換，局勢改寫！'],target:['surprised','我的位置被換走了！']},
 'land-swap':{source:['proud','這筆換地交易成立。'],target:['surprised','我的街區突然易主了？！']},
 birthday:{source:['happy','今天的派對由我做東！'],target:['surprised','怎麼每個人都要付錢？']},
 subsidy:{source:['happy','城市補助到手！'],target:['happy','銀行送來一筆補助。']},
 'rent-shield':{source:['relieved','這次租金，安全下莊。'],target:['surprised','這筆租金被護盾擋下了。']},
 'rent-double':{source:['proud','這次收租翻倍！'],target:['surprised','租金怎麼變高了？']},
 'get-out':{source:['relieved','終於可以離開監獄了。'],target:['happy','自由回來了！']},
 redraw:{source:['proud','換一張更好的牌。'],target:['surprised','牌堆又有新變化。']},
};

function PreviewMood({player,role,preview}){
 if(!player||!preview)return null;
 const [mood,message]=preview;
 const moodInfo=MOODS[mood]||MOODS.surprised;
 return <article className={`skill-sequence-emotion ${role}`} style={{'--player':player.color}}>
  <div className="skill-sequence-emotion-heading"><span className="skill-sequence-emotion-dot"/><strong>{player.name}</strong><span>{moodInfo.emoji}</span><small>{moodInfo.label}</small></div>
  <p>{message}</p>
 </article>;
}

function SequencePlayer({player,role,label}){
 if(!player)return <div className={`skill-sequence-player ${role} is-bank`}><span className="skill-sequence-player-icon">✦</span><small>{label}</small></div>;
 return <div className={`skill-sequence-player ${role}`} style={{'--player':player.color}}>
  <div className="skill-sequence-avatar"><span/><i/></div>
  <strong>{player.name}</strong>
  <small>{label}</small>
 </div>;
}

export default function SkillSequenceOverlay({sequence,players,animated=true,onComplete}){
 const [phase,setPhase]=useState('enter');
 const completeRef=useRef(onComplete);completeRef.current=onComplete;
 const userIsInvolved=sequence?.sourceId===0||sequence?.targetId===0;
 const emotionDuration=userIsInvolved?RELATED_EMOTION_HOLD_MS:UNRELATED_EMOTION_HOLD_MS;
 useEffect(()=>{
  if(!sequence)return;
  if(!animated){completeRef.current?.();return;}
  setPhase('enter');
  const flipCompleteAt=SEQUENCE_TIMINGS.enter+SEQUENCE_TIMINGS.fly+SEQUENCE_TIMINGS.flip;
  const phaseTimeline=[
   ['fly',SEQUENCE_TIMINGS.enter],
   ['flip',SEQUENCE_TIMINGS.enter+SEQUENCE_TIMINGS.fly],
   ['emotion',flipCompleteAt],
   ['exit',flipCompleteAt+emotionDuration],
  ];
  const timers=phaseTimeline.map(([nextPhase,delay])=>setTimeout(()=>setPhase(nextPhase),delay));
  timers.push(setTimeout(()=>completeRef.current?.(),flipCompleteAt+emotionDuration+SEQUENCE_TIMINGS.exit));
  return()=>timers.forEach(clearTimeout);
 },[sequence?.id,animated,emotionDuration]);
 if(!sequence)return null;
 const source=players.find(player=>player.id===sequence.sourceId);
 const target=players.find(player=>player.id===sequence.targetId)||null;
 const preview=PREVIEWS[sequence.card.id]||{source:['proud','技能卡啟動！'],target:['surprised','局勢突然變了！']};
 const targetLabel=sequence.card.id==='birthday'?'其他玩家':target?.name||'城市銀行';
 const targetPlayer=target||{id:'bank',name:targetLabel,color:'#c49b42'};
 return <section className={`skill-sequence-layer skill-${sequence.card.type}`} data-phase={phase} role="dialog" aria-modal="true" aria-label={`${sequence.card.name}動畫`}>
  <div className="skill-sequence-backdrop"/>
  <div className="skill-sequence-canvas">
   <button type="button" className="skill-sequence-close" aria-label="關閉技能動畫" title="關閉並立即執行技能" onClick={()=>completeRef.current?.()}><X size={18}/></button>
   <div className="skill-sequence-kicker"><span/>技能卡啟動 <small>{sequence.card.name}</small></div>
   <div className="skill-sequence-stage">
    <SequencePlayer player={source} role="source" label="使用者"/>
    <div className="skill-sequence-route"><i/><i/><i/></div>
    <div className="skill-sequence-card-stage">
     <div className="skill-sequence-card card-back"><span>城市大亨</span><small>SKILL CARD</small></div>
     <div className="skill-sequence-card card-front"><span className="skill-sequence-card-icon">{sequence.card.icon}</span><strong>{sequence.card.name}</strong><p>{sequence.card.summary}</p><small>{phase==='emotion'?'效果準備生效':'技能卡'}</small></div>
    </div>
    <SequencePlayer player={targetPlayer.id==='bank'?null:targetPlayer} role="target" label={targetLabel}/>
   </div>
   <div className="skill-sequence-caption"><strong>{sequence.card.name}</strong><span>{phase==='emotion'?'情緒回應中':phase==='exit'?'準備套用效果':'卡片正在傳遞'}</span></div>
   <div className="skill-sequence-emotions"><PreviewMood player={source} role="source" preview={preview.source}/><PreviewMood player={targetPlayer.id==='bank'?null:targetPlayer} role="target" preview={preview.target}/></div>
  </div>
 </section>;
}
