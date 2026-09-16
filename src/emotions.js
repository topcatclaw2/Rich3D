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
  state.emotionEvents ||= [];
  state.emotionEvents.push({ id, category, summary, priority: Math.max(definition.priority,...participants.map(({category:participantCategory})=>pools[participantCategory]?.priority||0)), players });
}
