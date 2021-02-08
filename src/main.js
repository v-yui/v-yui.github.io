// 用于加载所需文件，在index.html的head中引入
// 无法灵活的在子页面使用import,在config中需分离数个出口文件,过于繁杂
// 因此为方便后续使用,把html中需要再处理的内容挂载到window

import home from './template/home.html';
import note from './template/note.html';
import demo from './template/demo.html';
import tool from './template/tool.html';
import photo from './template/photo.html';

import yuiSelf from './lib/notes/1.个人用.md';
import proJS from './lib/notes/2. ProfessionalJS.md';
import grpHTTP from './lib/notes/3. HTTP.md';
import CSSMast from './lib/notes/4. CSS Mastery.md';

// 使用less来简化嵌套写法,同子页面的JS一样不易处理,故均在此导入
import './style/main.less';
import './style/note.less';

// 5个子页面,为便于使用for循环添加点击事件,故使用数组保存
window.temp = [home, note, demo, tool, photo];

// note页需展示的markdown笔记
window.notes = {
  yuiSelf,
  proJS,
  grpHTTP,
  CSSMast
}