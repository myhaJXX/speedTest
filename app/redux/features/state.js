let localeColors;

//mb add localeSaving colors??))
if(localStorage.getItem('colors')) localeColors = JSON.parse(localStorage.getItem('colors'))
  
export const defaultState = {
  colorsStore: localeColors ? {...localeColors} : 
  {
    textA: '#ab68d8',
    textU: '#c3c3c3',
    textUncorrect: '#ee4c7c',
    logo: '#fff',
    bg: '#3c3c3c',
    bgD: '#222222'
  },

  filtersStore: {
    type: 'words',
    restrictions: '5',
    punctuation: 'without'
  },

  gameItems: {
    text: '',
    activeLetter: -2,
    activeKey: ''
  }, 
  changeWindow: false,
  activeText: false,

  gameStats: {
    time: 0,
    wpm: 0,
    rwa: 0,
    acc: '0',
    failed: 0,
    total: 0,
    totalFailed: 0,
    finished: false,
  }
}