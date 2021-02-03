// 用于加载所需文件，在index.html的head中引入
// 为方便后续使用，挂载到window中
import yuiSelf from '../lib/notes/1.个人用.md';
import ProJS from '../lib/notes/2. ProfessionalJS.md';
import grpHTTP from '../lib/notes/3. HTTP.md';
import CSSMast from '../lib/notes/4. CSS Mastery.md';

import './global.css';

window.notes = {
  yuiSelf,
  ProJS,
  grpHTTP,
  CSSMast
}
function getFile(name, node) {
  node.innerHTML = window.notes[name];
}