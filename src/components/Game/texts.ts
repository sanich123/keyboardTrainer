export const texts: { [key: string]: string[] } = {
  en: [
    'Let\'s imagine You\'re watching TV. It\'s a hot evening: You feel thirsty. You see an advert for a refreshing drink. You see people looking cool and relaxed.',
    'Advertisers study how people learn so that they can teach them to respond to their advertising. They want us to be interested, to try something, and then to do it again.',
    'If an advert can achieve this, it is successful. If an advert works well, the same technique can be used to advertise different things.',
    'If advertisements are to he learned, there is a need for lots of repetition.',
    'Consumers learn to generalize from what they have learned. So advertisers sometimes copy a highly successful idea that has been well learned by consumers.',
  ],
  ru: [
    'Если жить только для себя, своими мелкими заботами о собственном благополучии, то от прожитого не останется и следа. Если же жить для других, то другие сберегут то, чему служил, чему отдавал силы.',
    'Надо иметь и принципы в жизни. Одно правило в жизни должно быть у каждого человека, в его цели жизни, в его принципах жизни, в его поведении: надо прожить жизнь с достоинством.',
    'Ради достоинства жизни надо уметь отказываться от мелких удовольствий и немалых тоже... Уметь извиняться, признавать перед другими ошибку - лучше, чем врать.',
    'Жизнь - прежде всего творчество, но это не значит, что каждый человек, чтобы жить, должен родиться художником, балериной или ученым. Можно творить просто добрую атмосферу вокруг себя.',
    'Надо уважать всякого человека, какой бы он ни был жалкий и смешной. Надо помнить, что во всяком человеке живёт тот же дух, какой и в нас.',
  ],
};

export const getRandomText = (keyboardLang?: string) => {
  const max = texts[keyboardLang ? keyboardLang : 'en'].length;
  const min = 0;
  const r = Math.floor(Math.random() * (max - min) + min); // excl. max
  return texts[keyboardLang ? keyboardLang : 'en'][r];
};

