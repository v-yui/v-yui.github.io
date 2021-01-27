import './global.css';

function component() {
    const element = document.createElement('div');
  
    // lodash 通过一个 script 引入
    element.innerHTML = 'webpack';
    element.classList.add('hello')
  
    return element;
  }
  
  document.body.appendChild(component());