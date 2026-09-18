const pools = {
  rentReceived: {
    mood: 'happy',
    label: '開心',
    emoji: '😊',
    priority: 90,
    messages: ['謝謝老闆，歡迎再來～', '生意上門啦！', '今天的租金真香～', '城市建設靠大家！', '又是一筆漂亮的收入！'],
  },
  rentPaid: {
    mood: 'sad',
    label: '傷心',
    emoji: '😢',
    priority: 90,
    messages: ['賠大了～', '我的錢包在哭泣……', '早知道就繞路了！', '這租金也太痛了吧！', '下次換我收租！'],
  },
  purchase: {
    mood: 'proud',
    label: '得意',
    emoji: '😎',
    priority: 45,
    messages: ['這塊地歸我了！', '投資城市，從今天開始！', '先買先贏！', '我的地產版圖又擴大了！', '希望它很快替我賺錢！'],
  },
  propertyUnaffordable: {
    mood: 'anxious',
    label: '無奈',
    emoji: '😣',
    priority: 45,
    messages: ['這塊地好喜歡，可是現金不夠……', '差一點就能買下了！', '先存錢，下次再來。', '地產很香，荷包不允許。', '只能先放棄這次機會。'],
  },
  salary: {
    mood: 'happy',
    label: '開心',
    emoji: '😊',
    priority: 35,
    messages: ['薪水準時入帳！', '繞一圈又有獎金，太棒了！', '城市歡迎我回來～', '這筆錢來得正是時候！', '繼續出發，資金滿滿！'],
  },
  windfall: {
    mood: 'surprised',
    label: '驚喜',
    emoji: '😲',
    priority: 45,
    messages: ['今天的運氣也太好了吧！', '意外之財，收下啦！', '謝謝城市的禮物！', '這張卡抽得漂亮！', '資金補充完畢，再戰一局！'],
  },
  chanceExpense: {
    mood: 'surprised',
    label: '無奈',
    emoji: '😣',
    priority: 45,
    messages: ['這張卡是不是拿錯了？', '錢才剛進來就出去了……', '城市的驚喜有點貴！', '我的現金又變薄了！', '下次抽卡前可以先深呼吸嗎？'],
  },
  tax: {
    mood: 'anxious',
    label: '焦急',
    emoji: '😣',
    priority: 55,
    messages: ['納稅是義務，但真的好痛！', '城市維護費又來了！', '這筆支出超出預算啦！', '荷包需要緊急救援！', '我要努力賺回來！'],
  },
  construction: {
    mood: 'proud',
    label: '得意',
    emoji: '😎',
    priority: 45,
    messages: ['讓這條街變得更熱鬧！', '升級完成，租金準備起飛！', '好房子值得好投資！', '我的城市越來越有模樣了！', '下一位租客，歡迎光臨！'],
  },
  sale: {
    mood: 'relieved',
    label: '鬆一口氣',
    emoji: '😮‍💨',
    priority: 60,
    messages: ['先變現，活下來比較重要……', '忍痛割愛，之後一定買回來！', '現金回來了，但心也碎了！', '這是戰略撤退，不是失敗！', '留得青山在，繼續拚！'],
  },
  bankruptcy: {
    mood: 'bankrupt',
    label: '沮喪',
    emoji: '😵',
    priority: 100,
    messages: ['我的城市夢，先暫停一下……', '這局真的撐不住了！', '下次我會管理好現金流！', '所有投資都化成回憶了……', '恭喜對手，我會捲土重來！'],
  },
  skillUse: {
    mood: 'proud',
    label: '出牌',
    emoji: '✨',
    priority: 50,
    messages: ['技能卡啟動！', '這張牌用得正是時候！', '城市局勢，照我的計畫走！', '效果準備生效！', '漂亮的一手牌！'],
  },
  skillTarget: {
    mood: 'surprised',
    label: '中招',
    emoji: '⚡',
    priority: 55,
    messages: ['等等，這張牌是對我的？', '局勢突然變了！', '這招來得太快了吧！', '我的計畫被打亂了！', '需要想辦法應對！'],
  },
  skillLandSwapTarget: {
    mood: 'surprised',
    label: '錯愕',
    emoji: '🏠',
    priority: 55,
    messages: ['等等，我的地產被換走了？！', '這筆換地交易，我怎麼沒同意！', '我的街區突然易主了！', '房契被調包了嗎？', '這張換地卡太突然了吧！'],
  },
  skillCounter: {
    mood: 'proud',
    label: '反制',
    emoji: '🛡️',
    priority: 65,
    messages: ['擋下來了！', '這張反制卡沒有浪費！', '想算計我，還早得很！', '護盾成功！', '漂亮化解危機！'],
  },
  skillReflect: {
    mood: 'proud',
    label: '反彈',
    emoji: '↩️',
    priority: 70,
    messages: ['原路奉還！', '這招現在回到你身上！', '反彈成功！', '攻擊者變成自己了！', '這就是出牌時機！'],
  },
};

export function emitEmotion(state, { category, summary, participants }) {
  const definition = pools[category];
  if (!definition || !participants?.length) return;

  state.emotionSequence = (state.emotionSequence || 0) + 1;
  const id = state.emotionSequence;
  const players = participants.map(({ playerId, amountDelta, category: participantCategory }) => {
    const participantDefinition = pools[participantCategory] || definition;
    return {
      playerId,
      mood: participantDefinition.mood,
      moodLabel: participantDefinition.label,
      emoji: participantDefinition.emoji,
      amountDelta,
      message: participantDefinition.messages[(id + playerId) % participantDefinition.messages.length],
    };
  });
  const event = { id, category, summary, priority: Math.max(definition.priority,...participants.map(({category:participantCategory})=>pools[participantCategory]?.priority||0)), players };
  // emotionEvents is the action-local list used by the rules tests and activity
  // consumers. Keep a small persistent handoff buffer as well so React cannot
  // miss an event when the next STEP/NEXT action clears the local list first.
  state.emotionEvents ||= [];
  state.emotionEvents.push(event);
  state.emotionHistory ||= [];
  state.emotionHistory.push(event);
  if (state.emotionHistory.length > 32) state.emotionHistory = state.emotionHistory.slice(-32);
}
