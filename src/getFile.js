// 用于加载所需文件，在index.html的head中引入
// 为方便后续使用，把html中需要再处理的内容挂载到window
import yuiSelf from '../lib/notes/1.个人用.md';
import ProJS from '../lib/notes/2. ProfessionalJS.md';
import grpHTTP from '../lib/notes/3. HTTP.md';
import CSSMast from '../lib/notes/4. CSS Mastery.md';

import './style/global.css';
import './style/home.less';

window.notes = {
  yuiSelf,
  ProJS,
  grpHTTP,
  CSSMast
}