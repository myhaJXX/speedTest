//themes for SPA

// colors: 
//     textA: active text
//     textU: unActive text
//     textUncorrect: uncorrect text
//     logo: logo color
//     bg: background
//     bgD: background v2

class Theme {
    constructor(title, colors){
        this.colors = colors;
        this.title = title;
    }
}

export const themes = [
    new Theme('Default', {textA: '#ab68d8', textU: '#c3c3c3', textUncorrect: '#ee4c7c', logo: '#fff', bg: '#3c3c3c', bgD: '#222222'}),
    new Theme('Red rampage', {textA: '#c3073f', textU: '#6f2232', textUncorrect: '#97caef', logo: '#950740', bg: '#1a1a1d', bgD: '#4e4e50'}),
    new Theme('Green Heaven', {textA: '#86c232', textU: '#6b6e70', textUncorrect: '#ee4c7c', logo: '#61892f', bg: '#474d4f', bgD: '#222629'}),
    new Theme('Green lilies', {textA: '#479761', textU: '#b19f9e', textUncorrect: '#a16e83', logo: '#cebc81', bg: '#19181a', bgD: '#3c3c3c'}),
    new Theme('Pink energy', {textA: '#ee4c7c', textU: '#e3afbc', textUncorrect: '#592851', logo: '#5d001e', bg: '#e3e2df', bgD: '#9a1750'}),
    new Theme('Dark coffee', {textA: '#525b56', textU: '#a4978e', textUncorrect: '#be9063', logo: '#a4978e', bg: '#040c0e', bgD: '#132226'}),
    new Theme('Swamp sunsetl', {textA: '#8bc969', textU: '#a8a074', textUncorrect: '#a87874', logo: '#627d57', bg: '#19181a', bgD: '#303030'}),
    new Theme('Celestial', {textA: '#2f9eed', textU: '#cdebf7', textUncorrect: '#0e3066', logo: '#09333d', bg: '#7498a6', bgD: '#0f6d85'}),
    new Theme('Night Desert', {textA: '#f2ebe9', textU: '#a68f7e', textUncorrect: '#24150e', logo: '#24150e', bg: '#8e6248', bgD: '#3f2a1d'}),
    //change
    // new Theme('Aquamarine', {textA: '#e27d60', textU: '#85dcba', textUncorrect: '#592851', logo: '#e8a87c', bg: '#41b3a3', bgD: '#318579'}),
    // new Theme('Blue raspberry', {textA: '#f64c72', textU: '#694b80', textUncorrect: '#3feee6', logo: '#99738e', bg: '#2f2fa2', bgD: '#242582'}),
    // new Theme('Green coolness', {textA: '#edf5e1', textU: '#8ee4af', textUncorrect: '#ee4c7c', logo: '#05386b', bg: '#5cdb95', bgD: '#379683'}),
    // new Theme('Daring&bright', {textA: '#fc4445', textU: '#97caef', textUncorrect: '#592851', logo: '#cafafe', bg: '#3feee6', bgD: '#55bcc9'}),
    // new Theme('Our life', {textA: '#afd275', textU: '#c2cad0', textUncorrect: '#ee4c7c', logo: '#e7717d', bg: '#c2b9b0', bgD: '#7e685a'}),
    // new Theme('Rain', {textA: '#5ab9ea', textU: '#c1c8e4', textUncorrect: '#ee4c7c', logo: '#8860d0', bg: '#84ceeb', bgD: '#5680e9'}),
]