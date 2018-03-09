import './index.scss'

const card = document.createElement('div')
card.className = 'card'
card.innerHTML = 'Boilerplate by&nbsp;<a href="https://devonbradley.com" target="_blank">Devon Bradley</a>'

document.getElementById('app').appendChild(card)

console.log('%c Webpack Babel SASS Boilerplate' + '%c 1.0.0' + '%c By Devon Bradley', 'background: #222; color: #55bacb', 'background: #222; color: #ecfc2d', 'background: #222; color: #fff');
