export const defaultState = {
  colorsStore: {
    textA: '#ab68d8', //active text
    textU: '#c3c3c3', //unActive text
    textUncorrect: '#ee4c7c', //uncorrect text
    logo: '#fff', //logo color
    bg: '#3c3c3c', //background
    bgD: '#222222' //background v2
  },

  filtersStore: {
    type: 'time', // time/words
    restrictions: '5', // 5 15 30 45 (secs / words)
    punctuation: 'without' //with (,.! etc) or without
  },

  gameItems: {
    text: '', //all text
    activeLetter: 0, //id of active letter now
    activeKey: '' //last active letter
  }, 

  gameStats: {
    time: 0, //total time (secs)
    wpm: 0, //words per minute | word ~= 5 letters
    rwa: 0, //wpm without fails
    acc: '0', //accuracy
    failed: 0, //failed words
    total: 0, //total words
    totalFailed: 0, //failed symbols
    finished: false, //finish of game (time / length)
  },

  changeWindow: false, //open theme-changer
  refreshText: false, //refresh text
}