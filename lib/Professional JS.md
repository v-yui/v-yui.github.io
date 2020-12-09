**其他**

1. p251使用new调用类构造函数的过程2是否有问题？
2. p258` [[Construct]] `是？
3. ~~p260“ super 始终会定义为[[HomeObject]]的原型 ”如何理解？~~(见集锦 1)
4. 红宝书3 p181页闭包与变量例子不懂。
5. ~~p315 IIFE 例中的闭包作用是什么？~~
6. ~~控制台异步打印为什么会显示执行异步打印次数的数字？~~
7. promise方法各种使用场景和情况、异步函数的具体实现需要再理解。
8. `window.open`特性字符串各种值未笔记。
9. p380 历史状态管理未理解。



### 注意点

1. p48页——Symbol 5-16之后——未看；
3. p99——静态分配与对象池——未理解；
4. p139——Array.from 集合/迭代器相关例——未看；
5. p161——合并复制修改定型数组——未看；
6. p171——WeakMap私有变量例——未理解；
7. p176——定义正式集合操作——未看；
8. p188——自定义/提前终止迭代器——未理解透彻；
9. p200——yield*生成随机双向图例——未看；
10. p264——类混入例子——未理解；
11. p307——尾调用相关——未看完；
12. p318——私有变量模块莫斯——未理解；
12. p345——期约扩展——未看；
13. p359——栈追踪与内存管理——未理解；





# 一 JS简介

一个完整的 JavaScript实现应由下列三个不同的部分组成：

- ECMAScript，由 ECMA-262定义，提供核心语言功能； 
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口； 
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。 



## JavaScript

ECMA-262定义了ES的语法、类型、语句、关键字、保留字、操作符、全局对象。由宿主环境提供ES的基准实现和与环境交互必需的扩展。ES发展如下：

- ES1：实际上是网景的 JavaScript 1.1，有轻微修改；
- ES2：做了一些编校工作；
- ES3：更新了字符串处理、错误定义和数值输出，增加了对正则表达式、新的控制语句、try/catch 异常处理的支持及国际化修改，意味着ES真正作为一门编程语言的时代到来了；
- ES4：一次彻底的修订，几乎在ES3的基础上定义了一门新语言，包括强类型变量、新语句和数据结构、真正的类和继承，操作数据的新手段；但由于跳跃过大被搁置，最终被ES3.1(即ES5)所代替
- ES5：致力于厘清ES3存在的歧义，增加新功能：原生的解析和序列化 JSON数据的 JSON 对象、方便继承和高级属性定义的方法，以及新的增强 ES引擎解释和执行代码能力的严格模式；
- ES6：也称ES2015或 ES Harmony，包含了ECMA-262规范有史以来最重要的一批增强特性，正式支持了类、模块、迭代器、生成器、箭头 函数、期约、反射、代理和众多新的数据类型；
- ES7(ES2016)：只包含少量语法层面的 增强，如 Array.prototype.includes 和指数操作符；
- ES8(ES2017)：增加了异步函数（async/ await）、SharedArrayBuffer 及 Atomics API，以及 Object.values()/Object.entries()/Object. getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量后的逗号；
- ES9(ES2018)：的修订包括异步迭代、剩余和 扩展属性、一组新的正则表达式特性、Promise finally()，以及模板字面量修订；
- ES10(ES2019)：增加了 Array.prototype. flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries()方法，以及 Symbol.prototype.description属性，明确定义Function.prototype.toString() 的返回值并固定了 Array.prototype.sort()的顺序。另外，这次修订解决了与 JSON字符串兼容的 问题，并定义了 catch 子句的可选绑定。 



## DOM

IE4和 Navigator 4采用不同的思路开发DHTML，做到了不刷新页面而修改样式和内容。为了保持Web跨平台的初衷，W3C制定了DOM标准。DOM是用于在HTML中使用扩展XML的API，它把整个页面映射为分层节点树，便于开发者控制和修改。DOM发展如下：

1. **DOM Level 1**，1998年10月成为 W3C的推荐标准，由两个模块组成：

- DOM Core：提供了一种映射 XML文档，从而方便访问和操作文档任意部分的方式；

- DOM HTML ：扩展DOM Core，增加特定于HTML的对象及方法。

2. **DOM Level 2**

- 增加对鼠标和用户界面事件、范围、遍历等的支持；
- 通过对象接口增加对 CSS的支持；
- DOM1中的 DOM Core扩展为支持XML命名空间； 
- 为支持新接口新增模块：
  - DOM Views：定义追踪文档不同视图 (如应用CSS前后)的接口。 
  - DOM Events：定义事件及事件处理的接口；
  - DOM Style：定义处理元素 CSS样式的接口；
  - DOM Traversal and Range ：定义遍历和操作文档树的接口。 


3. **DOM Level 3**进一步扩展，增加以统一方法加载和保存文档的方法(DOM Load and Save模块中)，验证文档的方法(DOM Validation)，DOM Core支持了所有 XML 1.0的特性。

- 进一步扩展DOM，引入以统一方式加载和保存文档的方法——在 DOM 加载和保 存（DOM Load and Save）模块中定义；

4. 目前，W3C并不按照Level 来维护DOM，而是作为**DOM Living Standard**，也被称为DOM4。
5. **其他BOM**，另外几种语言发布了自己的 DOM标准(下列为W3C推荐)： 

- SVG（Scalable Vector Graphic，可伸缩矢量图）； 
- MathML（Mathematical Markup Language，数学标记语言）；
- SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）。 



## BOM

IE3和Navigator 3都可以访问和操作浏览器窗口的BOM，使用 BOM可以控制浏览器显示的页面 以外的部分。H5把很多BOM功能写入了正式规范。一般来说，BOM只处理浏览器窗口和框架，但习惯上也把所有针对浏览器的JS扩展算作BOM的一部分，如：

1. 弹出新浏览器窗口的功能； 
2. 移动、缩放和关闭浏览器窗口的功能；
3.  提供浏览器详细信息的 navigator 对象； 
4. 提供浏览器所加载页面的详细信息的 location 对象； 
5. 提供用户显示器分辨率详细信息的 screen 对象； 
6. 对 cookies的支持； 
7. 像 XMLHttpRequest 和 IE的 ActiveXObject 这样的自定义对象。





# 二 HTML和JS

## ==`<script>`==
向HTML页面插入JS的主要方法。`<script>`有以下8个属性：

- **`async`**：可选。**表示应立即下载脚本但不能阻止其他页面动作**。只对外部脚本有效。

  标记为async的脚本并不保证按出现的顺序执行，因此脚本之间不能有依赖关系，且不应该在加载期间修改DOM。异步脚本会保证在页面load 事件之前执行，可能会在DOMContentLoaded之前或之后。

-  `charset`：可选。表示通过 src 属性指定的代码的字符集。大多数浏览器会忽略该值， 很少使用。

- `crossorigin`：可选。配置相关请求的CORS (跨源资源共享)设置。默认不使用CORS。

- **`defer`**：可选。表示**脚本可以延迟到文档完全被解析和显示之后再执行**。只对外部脚本文件有效。

  理论上，第一个被推迟 (设置了defer属性)的脚本会在第二个被推迟的属性之前执行，且都会在 DOMContentLoaded 事件之前执行。但实际情况中并不一定按照此顺序。

- `integrity`：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性 (SRI， Subresource Integrity)。如果接收到的资源的签名与该属性指定的签名不匹配，则页面报错， 脚本不执行。这个属性可以用于确保内容分发网络 (CDN，Content Delivery Network)不会提供恶意内容。 

-  `language`：已废弃。原来用于表示编写代码使用的脚本语言。大多数浏览器会忽略这个属性。

-  `src`：可选。表示包含要执行代码的外部文件。 

  使用了src属性的`<script>`首尾标签内包含的任何其他代码将会被忽视。浏览器解析包含src的`<script>`时将会向src指定的路径发送一个GET请求，该请求不受浏览器同源策略限制但受父页面 HTTP/HTTPS协议限制。

- **`type`**：可选。代替language ；表示代码中**脚本语言的内容类型** (MIME类型)。 支持的MIME类型包括`text/javascript`, `text/ecmascript`, `application/javascript`, 和`application/ecmascript`。该属性缺失，脚本会被视作JS。 值为module，将会被视作ES6模块，此时代码允许出现import和export。

  MIME并没有跨浏览器标准化，即使浏览器默认使用JS，但在某些情况下无效或无法识别的MIME也可能导致浏览器不执行相关代码。最佳做法是不指定type属性。

一般外部JS文件带有`.js`扩展名，但浏览器并不会检查包含JS文件的扩展名。如此，使用JSP、PHP或其他服务端语言动态生成JS代码也成为了可能，但需要**确保服务器能够返回正确的MIME类型**。

无论如何包含代码，只要不存在defer和async属性，浏览器都会按照脚本先后顺序执行解析。一般把全部JS引用放在body元素之后。

**—动态加载脚本—**

通过**向DOM中动态添加script元素**同样可以加载指定脚本。默认情况下这种方式创建的`<script>`**是异步加载的**，相当于添加了async属性。

但由于这种方式获取的资源对浏览器预加载器是不可见的，会严重影响它们在资源获取队列中的优先级，降低性能，可以在在文档头部显式声明它们：`<link rel="preload" href="gibberish.js"> `。

**—外部脚本文件—**

通常认为佳实践是**尽可能将 JS代码放在外部文件中**。原因如下：

- 可维护性：JS如果分散到很多HTML页面中会导致维护困难；
- 缓存：浏览器会根据特定的设置缓存所有外部链接的 JS文件，如果两个页面都用到同一个文件那么该文件只需下载一次；
- 适应未来：把JS放到外部文件中意味着不必顾虑XHTML和不支持JS的浏览器。

在配置浏览器请求外部文件时，要重点考虑文件会占用多少带宽。在 SPDY/HTTP2 中， 预请求的消耗已显著降低，以轻量、独立 JavaScript组件形式向客户端送达脚本更具优势。 前提是浏览器支持SPDY/HTTP2，否则可能还是用一个大文件更合适。

**—`<noscript>`—**

 针对早期浏览器不支持JS的问题出现的解决方案。如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本，则在 `<noscript>`中定义脚本未被执行时的替代内容。 现今浏览器已经100%支持JS，但对于禁用JS的情况下`<noscript>`仍然有用。



## 文档模式

IE5.5发明了文档模式的概念，即使用doctype切换。不同模式主要影响CSS内容的呈现，但某些情况也会影响JS的解释执行。

- 混杂模式 (quirks mode)：让 IE 像IE5一样支持一些非标准的特性；省略doctype默认开启混杂模式，不同浏览器在此模式下差异很大。

- 标准模式 (standards mode)：让 IE具有兼容标准的行为；通过过渡性文档类型(Transitional)和框架集文档类型(Frameset)来触发


随着浏览器的普遍出现，又出现了第三种文档模式——准标准模式：

-	准标准模式 (almost standards mode）：此模式下的浏览器支持很多标准的特性，但是没 有标准规定得那么严格；主要区别在于对待图片元素周围的空白。

现在，这些模式都已被标准化，准标准模式已和标准模式相同，标准模式成为默认表现。`BackCompat`表示怪异模式，` CSS1Compat `为非怪异模式。





# 三 语言基础

到2017年底，多数主流浏览器已实现ES5的规范，本章内容主要基于ES6。

ES5引入**严格模式 (strict mode)**。ES3的一些不规范写法在此模式下会被处理，对于不安全的活动将抛出错误。在脚本开头添加 `"use strict";`启用严格模式，也可放在函数体开头单独指定一个函数，选择这种语法的目的是不破坏ES3语法。



## 变量声明

ES变量是松散类型的，变量不过是用于保存任意值的命名占位符。var可以在所有ES所有版本中使用，const和let只能在ES6及更晚的版本中使用。

- **var**
  - 声明的范围是**函数作用域**；
  - **变量声明自动提升 (hoisting)**到当前作用域顶部；
  - **可重复声明**，JS引擎会在作用域顶部合并为一个声明；
  - ==全局作用域下声明会成为window对象的属性==；
  - var会被自动添加到最近的上下文，==省略var则被添加到全局上下文== (不推荐，严格模式下会抛出ReferenceError)。

- **let**
  - 声明的范围是**块作用域** ；
  - 在运行时也会被提升，但let有 **“暂时性死区” **(temporal dead zone)(在let 声明之前引用变量将抛出ReferenceError)；
  - **不可在同一作用域中重复声明**；
  - ==全局作用域下声明不会成为window对象的属性==；

使用var声明迭代变量执行超时逻辑时，所有的i都是同一个变量，因此输出的都是同一个最终值。而**使用let声明迭代变量**，JS引擎在后台将**会为每个迭代循环声明一个新的迭代变量**。如下例：

```JavaScript
for (var i = 0; i < 5; ++i) {     
    setTimeout(() => console.log(i), 0) 
} // 输出 5、5、5、5、5 
for (let i = 0; i < 5; ++i) {     
    setTimeout(() => console.log(i), 0) 
} // 输出 0、1、2、3、4 
```

- **const**
  - 声明变量时**必须同时初始化**；
  - 声明的范围是**块作用域**；
  - **不可修改**，但只应用到顶级原语或者对象 。赋值为对象的const变量不能再被赋值为其他值，但修改对象的键不受限制；
  - JS运行时编译器可以将所有const变量都替换成实际的值，避免通过查询表查找，如Google的V8引擎就执行这种优化。

**限制只使用 let和 const有助于提升代码质量**，因为变量有了明确的作用域，声明位置以及不变的值。最好优先使用 const 来声明变量，只在提前知道未来会有修改时再使用 let。



## 数据类型

6种原始类型：Undefined、Null、Boolean、Number、 String 、 Symbol。

1种复杂类型：Object。



对一个值使用**typeof**会返回下列字符串之一：

- "undefined"表示值未定义； 
-  "boolean"表示值为布尔值；
-  "string"表示值为字符串；
-  "number"表示值为数值； 
-  "object"表示值为对象（而不是函数）或 null； 
- "function"表示值为函数； 
-  "symbol"表示值为符号。 

函数在ES中被认为是对象，但函数也有自己特殊的属性，故有必要通过tepeof区分。 <u>ECMA-262 规定：任何实现内部`[[Call]]`方法的对象都应该在 typeof 检测时返回"function"。</u>由于Safari和Chrome的RegExp实现了这个方法，所以typeof检测返回“function”，IE和Firefox中则返回“object”。



**Undefined**

只有一个值undefined。变量定义但未赋值时将被自动赋予undefined。ES3之前不存在的特殊值undefined，主要是为了正式明确空对象指针null和未初始化变量的区别。typeof检测未定义变量和定义未赋值变量都是undefined。



**Null**

只有一个值null。特殊值null被认为是一个对空对象的引用，`typeof null`返回"object"。**若变量将来用于保存对象，那么最好使用null来初始化**。undefined 派生自 null ，ECMA-262规定它们表面相等：

`alert(null == undefined);    //true `。



**Boolean**

不同于数值，即true 不等于 1，false 不等于 0；区分大小写，True 和 False及其他大小混写形式是有效的标识符，但不是布尔值。

ES所有类型的值都有对应布尔值，使用**`Boolean()`**转换：省略或值0，-0，null，false，NaN，undefined，空串，转为false；其他值，包括任何对象，空数组、字符串"false"，转为true。控制流语句自动执行布尔转换。



### ==**Number**==

Number类型使用IEEE 754 64位表示整数和浮点值。

整数也可以用八进制或十六进制表示，八进制必须有0前缀 (严格模式下是0o)，十六进制0x前缀。如果字面量中包含的数字超出范围则会忽略前缀0而看做十进制数。

**—浮点数—**

浮点数的小数点后一定要有整数，小数点前可以没有但不推荐。存储浮点值使用的内存空间是存储整数值的两倍，故ES总会把值转换为整数，如小数点后没有数字的情况下。

极大极小的数可用科学计数法表示。默认情况下ES会将小数点后至少包含6个0的浮点值转为科学计数法。

**永远不要测试某个特定的浮点数值**。浮点数值的高精度是 17位小数，但在算术计算时远不如整数精确，如0.1+ 0.2 的结果为：0.30000000000000004。

**—数值范围—**

由于内存限制，ES保存的值有范围。最小数值为 `5e-324`，保存在 `Number.MIN_VALUE `中，最大数值为 `1.7976931348623157e+308`，保存在`Number.MAX_VALUE `中。

某次计算得到的数值超过范围，将被自动转换成成-Infinity或者Infinity且无法参与下一次计算，` isFinite()`可以判断某值是否为有限大。

` Number.NEGATIVE_INFINITY `和` Number.POSITIVE_INFINITY `分别保存着±Infinity。

**—NaN—**

用于表示一个本来要返回数值的操作数未返回数值的情况。某些语言中会出现数值除以0导致错误而停止运行，JS返回NaN则不会影响其他代码执行。`isNaN()`可判断是否不是数值。

任何涉及NaN的操作都会返回NaN，NaN不等于包括本身在内的任何值。

**——数值转换——**

3个可以**把非数值转换为数值的函数**：`Number()`，`parseInt()`，`parseFloat()`。

**① Number()**

- Boolean值——true转1，false转0；
- 数字值——直接返回；
- null——转0；
- undefined——返回NaN；
- 字符串
  - 包含数字，忽略前导0转换成十进制数值；
  - 包含有效的浮点格式则同上；
  - 包含有效的十六进制格式如“0xf”，转为对应的十进制整数值；
  - 空串，转为0；
  - 包含除上述格式之外的字符，转为0；
  - 包含除上述以外其他字符返回NaN。
- 对象——调用`valueOf()`，再依照上述规则转换返回值；转换结果为NaN，则调用`toString()`方法，再根据前面字符串规则转换。

**② parseInt**()

需要得到整数时可优先使用。`parseInt()`更专注于字符串是否包含数值模式。各情况实例如下：

```javascript
parseInt("1234blue");     // 1234 
parseInt("12b34lube");    // 12
parseInt("b34lube");      // NaN
parseInt("-234lube");     // -234
parseInt("");             // NaN 
parseInt("0xA");          // 10（十六进制数） 
// 小数点也不是有效的数字字符
parseInt(22.5);           // 22 
parseInt("070");          // 56（八进制数） 
parseInt("70");           // 70（十进制数） 
parseInt("070", 10);      // 70（十进制数） 
parseInt("0xf");          // 15（十六进制数）
parseInt("f",16);         // 15（十六进制数） 
parseInt("f");        	  // NaN
// 第二个参数radix小于2或大于36也返回NaN
```

**③ parseFloat()**

与`parseInt()`相似，但`parseFloat()`可识别第一个小数点(第二个小数点无效)；且只能解析十进制(无radix参数)。解析出整数则返回整数。



### ==**String**==

String数据类型表示零或多个 16位 Unicode字符序列。**ES字符串不可变**，改变某个变量保存的字符串值实际上是先销毁该字符串再存入新值。转义字符只算转义后的字符位数；若字符串中包含双字节字符那么length的返回值可能并不准确。

有两种方式把一个值转为字符串：

- **`toString()`**：返回当前值的等价字符串。数值，布尔值，对象，字符串都有`toString()`方法；null、undefined没有。对数值调用`toString()`，可以传入底数参数从而得到数值的其他进制。
- **`String()`**：始终返回表示响应类型的字符串。规则如下：
  - 值有`toString()`方法，则调用该方法 (不传参数)并返回结果；
  - 值是 null，返回"null"；
  - 值是 undefined，返回"undefined"。

**—模板字面量—**

ES6新增，使用模板字面量可以跨行定义字符串。如：

```JavaScript
let thirdTemplateLiteral = `first line 
second line`; 
console.log(thirdTemplateLiteral); 
// first line 
// second line
```

*注意：模板字面量会保持反引号内部的空格。*

从技术上讲，模板字面量并不是字符串，而**是一种特殊的JS句法表达式**，只不过求值后得到的是字符串。模板字面量在定义时就立即求值并准换位字符串实例，插入的变量也会从它们最接近的作用域中取值。

模板字面量最常用的特性是**字符串插值**。所有插入值都会用 `toString()`强制转型为字符串，任何JS表达式都可以用于插值。使用如下：

```JavaScript
let value = 5;  
let exponent = 'second'; 
let interpolatedTemplateLiteral =   
    `${ value } to the ${ exponent } power is ${ value * value }`; 
console.log(interpolatedTemplateLiteral);  
// 5 to the second power is 25 

console.log(`Hello, ${ `World` }!`); 	// 嵌套模板字符串

function capitalize(word) {    // 在插值表达式中调用函数和方法
    return `${ word[0].toUpperCase() }${ word.slice(1) }`; 
} 
console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); // Hello, World! 
```

模板字面量也支持定义**标签函数** (tag function)，它本身是一个常规函数，通过前缀到模板子面前来自定义插值行为；标签函数接收到的参数依次是原始字符串数组和对每个表达式求值的结果。使用如下：

```JavaScript
let a = 6; let b = 9;  
function simpleTag(strings, aValparaession, bValparaession, sumparaession) {   
    console.log(strings);   // ["", " + ", " = ", ""]
    console.log(aValparaession);    // 6
    console.log(bValparaession);    // 9 
    console.log(sumparaession);		// 15
    return 'foobar'; 
} 
let untaggedResult = `${ a } + ${ b } = ${ a + b }`; 
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; 
console.log(untaggedResult);   // "6 + 9 = 15"
console.log(taggedResult);     // "foobar"
```

*注意：表达式参数数量可变，通常应使用剩余操作符收集起来。*

使用模板字符串的标签函数**`String.raw `**获取原始的模板字面量内容：

```JavaScript
console.log(`\u00A9`);            // © 
console.log(String.raw`\u00A9`);  // \u00A9 
```



### ==**Symbol**==

ES6新增的Symbol用于**确保对象属性使用唯一、不可变的标识符**，避免属性冲突。symbol没有字面量语法，因此将其作为键名就可以保证不会覆盖已有对象属性。`Symbol()`不可使用new作为构造函数调用。可传入字符串作为对Symbol的描述和便于调试的手段，但与Symbol定义完全无关。

```JavaScript
let fooSymbol = Symbol('foo'); 
let otherFooSymbol = Symbol('foo'); 
console.log(fooSymbol == otherFooSymbol);          // false 
```

若需要实现运行时不同部分**共享和重用符号实例**，那么可以用一个字符串作键，使用**`Symbol.for()`**在全局Symbol注册表中创建并重用Symbol，该方法会返回字符串键对应的Symbol。 **`Symbol.keyFor()`**查询全局注册表，接受Symbol返回对应字符串键，查询结果不是全局Symbol则返回undefined。

```JavaScript
let localSymbol = Symbol('foo'); 
let fooGlobal = Symbol.for('foo');       // 创建新符号 
let otherFooGlobal = Symbol.for('foo');  // 重用已有符号
console.log(localSymbol === fooGlobal); // false 
console.log(fooGlobal === otherFooGlobal);  // true 
```

*注意：全局注册表中的Symbol也不等同于`Symbol()`定义的同名Symbol。*

凡可以使用字符串或数值作为属性的地方都可以使用Symbol，对象字面量只能在可计算属性语法中使用Symbol作为属性，如下：

```JavaScript
let s1 = Symbol('foo'),
    s2 = Symbol('bar'),
    s3 = Symbol('23');
let o = { [s1]: 'foo val' };    // 也可:o[s1] = 'foo val'; 
Object.defineProperty(o, s2, { value: 'bar val' });
Object.defineProperties(o, {
    [s3]: { value: 'baz val' },
    sim: { value: 'sim val' }
});
console.log(o); // {sim: "sim val", Symbol(foo): "foo val", Symbol(bar): "bar val", Symbol(23): "baz val"}
console.log(Object.getOwnPropertyNames(o));	// ["sim"]
console.log(Object.getOwnPropertySymbols(o));
//   [Symbol(foo), Symbol(bar), Symbol(23)]
```

- **`Object.getOwnPropertyNames()`**返回对象实例的常规属性数组；
- **`Object.getOwnPropertySymbols()`**返回符号属性数组；
- **`Object.getOwnPropertyDescriptors()`**返回同时包含常规和Symbol属性描述符的对象；
- **`Reflect.ownKeys()`**会返回两种属性的数组。

Symbol属性是对内存中Symbol的一个引用，如果没有显式保存对这些属性的引用，那么必须遍历对象的所有符号属性才能找到对应键，如下例：

```JavaScript
let o = { [Symbol('bar')]: 'bar val' };
let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) => symbol.toString().match(/bar/));
console.log(barSymbol); // Symbol(bar) 
```

ES6也引入了一批常用**内置Symbol (well-known symbol)**，用于暴露语言内部行为，开发者可以直接访问、重写或模拟这些行为。这些内置Symbol都以 Symbol 工厂函数字符串属性的形式存在，它们重要的用途之一便是**重新定义**其本身从而改变原生结构的行为。

*注意：提到ES规范时，经常会引用符号在规范中的名称，前缀为**`@@`**。比如，`@@iterator `指的就是`Symbol.iterator`。*

-  **`Symbol.asyncIterator` **表示实现异步迭代器API的函数。对象设置该属性即为异步可迭代对象，可用于`for await...of`循环。
- **`Symbol.hasInstance`** 用于判断某对象是否为某构造器的实例，定义在Function的原型上。`instanceof`使用以该属性为键的函数来确定关系，因此可以自定义该属性从而自定义`instanceof`的行为。
- ***TBC***



**Object**

ES对象是一组数据和功能的集合。Object 实例的**属性和方法**：

- **`constructor`**：用于创建当前对象的函数。
- **`hasOwnProperty(propertyName)`**：检查某属性是否存在当前对象实例上而不是原型中 (propertyName必须是字符串)。
- **`isPrototypeOf(object)`**：判断某对象是否是另一个对象的原型。
- **`propertyIsEnumerable(propertyName)`**：判断某属性是否能使用 for-in 枚举 (propertyName必须是字符串)。 
- **`toLocaleString()`**：返回对象的字符串表示 (对应本地执行环境)。 
- **`toString()`**：返回对象的字符串表示。 
- **`valueOf()`**：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值相同。 

Object是所有对象的基类，故任何对象都会继承到这些属性和方法。但不一定适合JS中其他对象，譬如BOM、DOM这些由不受 ECMA-262 约束的宿主环境定义和提供的对象。



## 操作符

**——一元操作符——**

**`++`&`--`**：前置递增/减，在包含它们的语句被求值前进行；后置递增/减，在之后进行。遵循规则：

- 对于字符串，有有效数值转为数值再计算；字符串变数值。 
- 对于字符串，无有效数值转为NaN；字符串变数值。 
- 布尔值 false ，转为 0再计算；布尔值变数值。 
- 布尔值 true ，转为 1再计算；布尔值变数值。 
- 对象，先调用valueOf()，若取得NaN再调用 toString()，再应用前述规 则；对象变数值。 

**`+`&`-`**：应用于非数值时相当于执行`Number()`；减号的相应值为负数。



**——位操作符——**

ES的数值都以IEE-754 64位格式存储，但位操作并不直接应用到64位表示，而是先把数值转换为32位整数再进行操作，再把结果转为64位，故**64位整数存储格式实际是不可见的**。副作用是特殊值NaN 和Infinity 在位操作中都会被当成 0 处理。 

将位操作符应用到非数值将自动调用`Number()`先转为数值。

- **NOT**：按位非，由`~`表示，返回数值的一补数 (在数值的底层表示完成，快于直接取数值的负值-1)。

- **AND**：按位与，由`&`表示，两个数值二进制对应位都是1时才返回1。

- **OR**：按位或，由`|`表示，对应位只要有一个1就返回1。

- **XOR**：按位异或，由`^`表示，对应位只有一个是1的时候才返回1。

- **左移**：由`<<`表示，将数值的所有位向左移动指定位数，空位补0。

  ```javascript
  var oldValue = 2;  				// 二进制的 10 
  var newValue = oldValue << 5;  // 二进制1000000，十进制64 
  ```

- **有符号右移**：由`>>`表示，除符号位外向右移，空位补符号位。
- **无符号右移**：由`>>>`表示，所有位向右移，空位补0。对于正数来说，有/无符号右移没有区别。



**——布尔操作符——**

- **逻辑非**：由`！`表示，转布尔值再取反；**`!!`等价于`Boolean()`**。
- **逻辑与**：由`&&`表示， para1为 true则返回 para2，否则返回 para1。是短路操作，para1就能决定结果将不再对para2求值。一者是null/ NaN/ undefined，则返回null/ NaN/ undefined。
- **逻辑或**：由`||`表示，para1为 true则返回 para1，否则返回 para2。同样是短路操作。一者是null/ NaN/ undefined，则返回null/ NaN/ undefined。



**——乘性操作符——**

若不是数值，后台会先使用Number()将其转为数值。

- **乘法**：符号`*`。乘积超过数值表示范围， 返回 +/-Infinity；
- **除法**：符号`/`。一些特殊值的情况：
  - 商超过数值表示范围， 返回 +/-Infinity；
  - Infinity 被Infinity 除，则结果是 NaN； 
  -  +/- Infinity 被非0数除，则结果是±0；
  -  +/- Infinity 除以非0数，则结果是 +/- Infinity。
- **取模**：符号`%`。一些特殊值的情况：
  - 被除数无限值，除数有限值，返回NaN；
  - 被除数有限值，除数无限值，返回被除数；



**——指数操作符——**

ES7新增指数操作符。`Math.pow()` 自己的操作符`**`， **指数操作符自己的指数赋值操作符**：`**=` ，使用例：` squared **= 2;  // 9`。



**——加性操作符——**

- **加法**：一些特殊规则如下：
  - Infinity 加 Infinity，则结果是 Infinity；
  - -Infinity 加-Infinity，则结果是-Infinity；
  - Infinity 加-Infinity，则结果是 NaN；
  - +0加+0，则结果是+0；
  - -0加-0，则结果是-0； 
  - +0加-0，则结果是+0。
  - 两个操作数都是字符串，则拼接； 
  - 只有一个操作数是字符串，则将另一个转为字符串，再拼接； 
  - 某操作数是对象、数值或布尔值，调用其 toString()取得相应的字符串值， 再应用前面关于字符串的规则；
  -  ==undefined 和 null，调用 String()转字符串"undefined"和"null"==。

- **减法**：一些特殊规则如下：
  - Infinity 减 Infinity，则结果是 NaN； 
  - -Infinity 减-Infinity，则结果是 NaN； 
  - Infinity 减-Infinity，则结果是 Infinity； 
  - -Infinity 减 Infinity，则结果是-Infinity； 
  - +0减+0，则结果是+0； 
  - -0减-0，则结果是-0； 
  - -0减-0，则结果是+0； 
  - 某操作数是字符串、布尔值、null 或 undefined，调用 Number()转数值，再根据规则计算；如转换的结果是 NaN，则结果就是 NaN； 
  - 某操作数是对象，调用 valueOf() 转数值 (没有 valueOf()，则调用toString()转字符串再转数值)；如转换的结果是 NaN，则结果就是 NaN。 



**——关系操作符——**

`<`、`>`、`<=` 和 `>=`对两个值进行比较，返回一个布尔值。

比较的数是非数值时的特殊操作：

- ==两个操作数都是字符串，比较两个字符串对应的字符编码值==。 
- 某操作数是数值，将另一个转为数值，再比较。 
- 某操作数是对象，调用 valueOf()再比较 (没有 valueOf()，则调用toString())。
- 某操作数是布尔值，先将其转为数值再比较。 
- 与NaN比较返回false。



**——相等操作符——**

- `==` 和 `!=`：先**强制类型转换**再比较。
  - 布尔值先转0或1；
  - 字符串和数值，尝试把字符串转为数值；
  - 对象和其他值，先调用对象valueOf()；
  - ==null == undefined，且二者不能转为其他类型值再比较==；
  - NaN比其他值，`==`返回false，`!=`返回true；
  - 都是对象则比较是否为同一个对象。
- `===` 和 `!==`：两个操作数在不转换的情况下相等才返回true。



**——条件操作符——**

即三目运算符`?:`，如`  (num1 > num2) ? num1 : num2;  `，num1大于num2则返回num1，否则返回num2。



**——赋值操作符——**

简单赋值用`=`将右边值赋给左边变量。每个数学操作符及其他一些操作符有对应的复合赋值操作符，但仅仅是简写语法不会提升性能。



**——逗号操作符——**

用来在一条语句中执行多个操作。在赋值时使用逗号分隔值，会返回表达式最后一个值，如：` let num = (5, 1, 4, 8, 0); // num为0  `。



## 语句

- `if`，`do-while`，`while`，`for`；

- `label`，`break`，`continue`；


- **`for-in`** ：用于**枚举对象的非符号键属性**。ES的对象是无序的，返回对象的顺序因浏览器而异。推荐使用const来定义循环体的局部变量。如果变量值为 null 或 undefined，for-in 会停止循环。

- **`for-of`** ：用于**遍历可迭代对象的元素**。ES9对 for-of进行了扩展，增加 `for-await-of` 以支持生成 promise的异步可迭代对象。

- **`with`**：将作用域设置为特定的对象来简化编写，如：

  ```javascript
  var qs = location.search.substring(1); 
  var hostName = location.hostname; 
  var url = location.href; 
  
  // with 改写
  with(location){     
      var qs = search.substring(1);     
      var hostName = hostname;     
      var url = href; 
  } 
  ```


  - 由于with语句影响性能且难于调试其中的代码，通常==不推荐在产品代码中使用with==。 

- `switch` (`case`、`break`、`default` )；

- ES的switch 可以应用于所有数据类型；
  
    - switch 比较每个条件时使用的是全等操作符。
    
    - 合并两种情形写法如下例：
    
      ```JavaScript
      switch (i) {     
      case 25:          
      /* 合并两种情形 */     
      case 35:          
      alert("25 or 35");         
      break;   
      }
      ```





# 四 变量、作用域、内存

## 原始/引用类型

ES变量是松散类型的，可包含： 

- **原始值 (primitive value)**：原始值共有6种，保存原始值的变量按值 (by value)访问，大小固定，保存在栈内存中，操作时是实际值。
  - 从变量到变量的复制后二者完全独立；
  - 原始值不能有属性，但给原始值添加属性不会报错；
  - 不使用原始字面量形式而使用new会创建基本包装类型。
- **引用值 (reference value)**：保存在内存中的对象。JS不允许直接访问内存位置，在操作对象时实际操作的是对该对象的引用。故保存引用值的变量是按引用 (by reference)访问。
  - **引用值复制时实际上是复制指向堆内存中对象的指针**。

ES的**函数参数都是按值传递**，若对象作为参数传递，那么传递的值就是该对象的引用。如下例：

```javascript
function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
    console.log(obj.name); //"Greg"
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas" 
```

**`instanceof`**：检测变量是否是给定引用类型的实例。如下：

```javascript
var a = [1,2,3];
typeof a;	//"string"
a instanceof Array;		//true
```



## 上下文与作用域

**执行上下文(execution context )**，简称上下文，决定变量或函数的行为和能访问的数据。每个上下文都有一个与之关联的**保存了上下文中定义的所有变量和函数**的**变量对象 (variable object)**，无法通过代码访问。上下文中的代码执行时会创建变量对象的**作用域链 ( scope chain )**，它**决定各级上下文中的代码在访问变量和函数时的顺序**。代码执行时的==标识符解析通过沿作用域链逐级搜索标识符名称完成==(可能涉及对象原型链)，内部上下文可通过作用域链访问外部上下文中的一切，反过来则不可。

若上下文是函数则其**活动对象(activation object)**做变量对象。在定义函数时，就会为它创建作用域链，预装载外部变量对象在内部的**`[[scope]]`**中。当函数被调用时，创建相应执行上下文推入上下文栈，复制其`[[scope]]`来创建作用域链，并使用arguments和其他命名参数初始化活动对象推入作用域链前端，执行完毕后弹出该函数上下文，返还控制权给之前的执行上下文。**ES的程序执行流就是通过这个上下文栈进行控制的**。

最外层的上下文称为**全局上下文**，根据 ES所在宿主环境而改变。浏览器中全局上下文是 window ，==所有通过var定义的全局变量和函数都会成为window的属性和方法==。let和const声明不会出现在全局上下文，但在作用域解析上效果一样。上下文在其所有代码都执行完毕后会被销毁。

ES6新增**块级作用域**的概念，由最近的一对`{}`界定，单独的花括号也算。

上下文主要分为全局/ 函数/ 块级上下文，`eval()`调用内部存在另一种上下文。某些语句会导致在作用域链前端添加一个用毕即焚的临时上下文，有两种情况出现这个现象：

- try-catch 的 catch ：会创建包含要抛出的错误对象声明的新对象；
- with语句：会向作用域链前端添加指定的对象。



## 垃圾回收

JS有自动垃圾收集机制，执行环境负责在代码执行时管理实现内存分配和闲置资源回收。垃圾回收的基本思路是：找出不再使用的变量，释放其占用的内存。**垃圾回收程序**会按照固定的时间间隔 (或代码执行中预定的收集时间)**周期性执行**。 浏览器中通常有两个策略：

- **标记清除( mark-and-sweep )**：最常用。给变量做标记以区分，垃圾回收程序销毁带标记的值并回收其内存。
- **引用计数 ( reference counting )**：不太常用。对每个值都记录它们被引用的次数，垃圾回收程序销毁引用数为0的值并回收其内存。
  - 两个值循环引用对方会导致问题。

垃圾回收程序周期性执行，会**基于已分配对象的大小和数量决定何时运行**，因此回收的时间调度很重要。最好的办法是在代码编写时做到：==无论什么时候开始收集垃圾，都能让它尽快结束工作==。 

为防止运行JS的网页耗尽系统内存导致系统崩溃，分配给浏览器的内存数通常比分配给桌面应用程序的少。**内存限制问题**不仅影响变量内存分配，还会影响调用栈以及同时在一个线程中执行的语句数量。 将内存占用量保持在较小值可以让页面性能更好，代码编写时==最好将不再使用的数据设为null==来解除引用。

ES6的const和let都以块为作用域，比var能更早让垃圾回收程序介入。



**—V8隐藏类—**

V8引擎在将解释后的JS代码编译为机器码时会利用“**隐藏类**”，将对象与隐藏类关联以跟踪其属性特征，能共享相同隐藏类的对象性能更好。

```javascript
function Article() {
    this.title = 'title';
    this.name = 'name';
}
let a1 = new Article();
let a2 = new Article(); 
a2.age = '18';   // 动态添加了属性
delete a1.name;  // 动态删除了属性
```

动态增删某实例内容会使其无法共享隐藏类，最好避免JS这种 ready-fire-aim式的动态属性赋值。==在构造函数中一次性声明所有属性；删除时直接将属性设为null，在保持隐藏类共享不变的同时也不影响垃圾回收。==



**—内存泄漏—**

大部分内存泄露是由于不合理的引用。如下：

```javascript
function setName() {
 name = 'Jake';    // 意外声明全局变量
}

let name = 'Jake';
setInterval(() => {
 console.log(name);   // 定时器的回调通过闭包引用了外部变量
}, 100); 

let outer = function() {
 let name = 'Jake';
 return function() { 
 return name;   // 闭包持续引用某变量
 };
}; 
```





# 五 引用类型

引用类型的值 (对象)是某个引用类型的实例，ES的引用类型是把数据和方法组织到一起的结构，有时也被称作对象定义，类似与“类”但不是。JS是一门OO语言，但缺乏传统OO语言具备的类、接口等基本结构。



### Date

ES的 Date类型参考早期Java的 `java.util.Date` 。故Date类型将日期保存为自 UTC 1970年 1月 1日零时至今经过的毫秒数 (下简称毫秒数)，能够精确到 1970年 1 月 1日之前或之后的 285 616年。 

*注意：不同浏览器会选用不同的实现来替代越界的日期。*

创建日期对象使用 new 调用 Date 构造函数，不传参默认保存当前时间。要设置特定时间，必须传入其毫秒表示，ES提供了两个辅助方法：

- **`Date.parse()`** ： 接收表示日期的字符串 (传字符串给Date构造函数后台自动调用)，返回毫秒数。无法转日期的字符串将返回NaN，所有实现都必须支持下列日期格式：
  -  “月/日/年”，如"5/23/2019"； 
  - “月名 日, 年”，如"May 23, 2019"； 
  - “周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
  - ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00 (只适用于 兼容 ES5 的实现 )。 
- **`Date.UTC()` **：接收年、 零起点月数 、 日 、分、秒、毫秒为参数来返回毫秒数，日默认值为1，其他默认为0；创建的是本地日期。被Date构造函数隐式调用。

*注意：下述方法的最终输出均==因浏览器而异==。*

Date也重写了三方法，但返回值不同：

- `toLocaleString()`：返回与本地环境一致的日期时间；
- ` toString()`：返回带时区信息的日期时间 ；
- `valueOf()`：返回日期的毫秒表示。

还有一些专门用于将日期格式化为字符串的方法：

- `toDateString()`：以特定于实现的格式显示周几、月、日年； 
-  `toTimeString()`：以特定于实现的格式显示时、分、秒和时区； 
- `toLocaleDateString()`：以特定于实现和地区的格式显示星期几、月、日和年； 
- `toLocaleTimeString()`：以特定于实现和地区的格式显示时分秒； 
- `toUTCString()`：以特定于实现的格式显示完整的 UTC日期。 

*Date剩下的方法 都是直接取得和设置日期值中特 定部分的方法 ，不赘述。*




### ==RegExp==

ES通过RegExp类型来支持正则表达式。创建方式如下：

```JavaScript
let re1 = /[bc]at/g;    // 使用字面量形式
let re2 = new RegExp("[bc]at", "g");    // 使用构造函数
let re3 = new  RegExp(re1,"i");    // 基于已有正则修改创建
```

RegExp构造函数的两个参数都是字符串，模式参数有时需要二次转义。如 `\`转义后的字符串是`\\`，在正则表达式字符串中则要写成`\\\\ `。

表示匹配模式的**标记 (flags)**：

- g：全局模式，表示查找字符串的全部内容；
- i：不区分大小写； 
- m：多行模式，表示查找到一行文本末尾时会继续查找；
- y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串； 
- u：Unicode 模式，启用 Unicode 匹配； 
- s：dotAll 模式，表示元字符匹配任何字符（包括\n 或\r）。 

模式中需要转义的元字符：` ( [ { \ ^ $ | ) ] } ? * + .  `

**RegExp 实例属性**

- global/ ignoreCase/ multiline/ sticky/ unicode/ dotAll ：均为布尔值，分别表示是否设置了 g/ i/ m/ y/ u/ s 标记；

- lastIndex：整数，在源字符串中下一次搜索的开始位置 ，从0起；
- source：正则表达式的字面量形式字符串表示；
- flags：正则表达式的标记字符串。

**RegExp 实例方法**

- **`exec()`**：主要用于配合捕获组使用。接受字符串，返回包含第一个匹配项信息的数组，没有则返回null。返回的Array包含两个额外的属性：匹配模式在字符串中的起始位置`index`，被应用的字符串`input`。

  ```javascript
  var text = "mom and dad and baby"; 
  var pattern = /mom( and dad( and baby)?)?/gi; 
  var matches = pattern.exec(text); 
  alert(matches.index);     // 0 
  alert(matches.input);     // "mom and dad and baby" 
  // 数组第一个元素是匹配整个模式的字符串
  alert(matches[0]);        // "mom and dad and baby" 
  alert(matches[1]);        // " and dad and baby" 
  alert(matches[2]);        // " and baby" 
  ```

  - 若设置了g标记，则每次调用都向前搜索下一匹配项。

  - 若设置了y标记，则覆盖g标记，每次调用只在 lastIndex位置查找。
  - 若没有找到匹配项，会将 lastIndex重置为0。

- **`test()`**：接受字符串，与模式匹配返回 true；否则返回 false。

- `toLocaleString()`、`toString()`：返回其字面量表示； 

- `valueOf()`返回正则本身。

**RegExp构造函数属性 **

适用于作用域中所有正则表达式，根据最近执行的正则操作变化。如下：

|      全名      | 简写 |                   说明                   |
| :------------: | :--: | :--------------------------------------: |
|    `input`     |  $_  |      最后搜索的字符串（非标准特性）      |
|  `lastMatch`   |  $&  |              最后匹配的文本              |
|  `lastParen`   |  $+  |      最后匹配的捕获组（非标准特性）      |
| `leftContext`  |  $`  | input字符串中出现在 lastMatch 前面的文本 |
| `rightContext` |  $'  | input字符串中出现在 lastMatch 后面的文本 |

还有9个用于存储捕获组的属性，通过`RegExp.$1~RegExp.$9 `来访问。

*注意： RegExp构造函数属性没有 Web标准出处 ，不要在生产环境使用。*



### Function (old)

函数实际上是对象。每个函数都是 Function 类型的实例，且与其他引用类型一样具有属性和方法。由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。

**定义函数**

```javascript
// 使用函数声明语法定义
function sum (num1, num2) { 
    return num1 + num2; 
} 
// 使用函数表达式定义函数
var sum = function(num1, num2){ 
    return num1 + num2; 
}; 
// 使用 Function 构造函数(这种语法会两次解析代码，不推荐)
 var sum = new Function("num1", "num2", "return num1 + num2");
```

【由 Function 构造器创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境。故运行时只能访问全局变量和自己的局部变量，不能访问它们被创建时所在的作用域的变量。】

**函数声明提升**：解析器在向执行环境中加载数据时，会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）。而使用函数表达式定义的函数位于一个初始化语句中，在执行到该句之前，变量(如上面的sum)没有对函数的引用，只有到该句时才能执行。

**函数内部属性 **

- **arguments**：类数组对象，包含着传入函数中的所有参数。属性callee是一个指针，指向拥有该arguments对象的函数(可以使用该属性解除递归时函数执行与函数名的耦合)。 
- **this**：this 引用的是函数据以执行的环境对象。
- **caller**：保存着调用当前函数的函数的引用。全局中值为null。

**函数属性和方法** 

函数也是对象，因此函数也有属性和方法。每个函数都包含两个属性：length和prototype。

- length：函数希望接收的命名参数的个数。
- prototype：是保存引用类型所有实例方法的真正所在。

每个函数都包含两个非继承而来的方法：apply()和 call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值。

- apply()：接收两个参数，在其中运行函数的作用域，参数数组。

- call()：参数一同apply()，参数二为逐个列举的参数值。

- bind()：创建一个函数的实例，其 this 值为传给 bind()的参数。

  ```javascript
  var objectSayColor = sayColor.bind(o); 
  objectSayColor(); 
  ```


**严格模式下，未指定环境对象，this 值是 undefined而不是 window。*

函数继承的 toLocaleString()、 toString()、valueOf()，始终都返回函数的代码，但格式因浏览器而异。



## 原始包装类型 

为便于操作原始值，ES提供3个特殊引用类型：Boolean、Number 、 String。

每当使用某个原始值的属性和方法时，后台就会创建一个对应的原始包装类型的对象，调用完指定方法后再销毁这个对象。因此==引用类型和原始包装类型的区别主要在于对象的生命周期==，前者的实例在离开作用域时被销毁，而后者只存在于访问它的那行代码执行期间。

Object 构造函数作为工厂方法，能==根据传入值的类型返回相应基本包装类型的实例==。如：

```JavaScript
var obj = new Object("some text"); 
alert(obj instanceof String);   //true 
```

使用new调用相应构造函数即可创建原始包装对象，但谨慎使用。



### **Boolean**

- 重写了 `valueOf()` 返回原始值 true 或 false；
- 重写了`toString()` 返回字符串"true"或"false"。 

Boolean对象在使用Boolean()转型时会判定为true，建议永远不要使用。



### **Number**

- 重写了 `valueOf()` 返回 Number对象表示的原始数值 ；
-  重写了`toString()` 返回数值字符串，可传入进制参数；
- 重写了`toLocalString()` 返回数值字符串。

一些用于将数值格式化为字符串的方法：

- `toFixed()`：接收小数位数参数四舍五入返回数值字符串；
- `toExponential()`：返回科学计数法数值字符串，接收小数位数参数；
-  `toPrecision()`：返回数值最合适的格式，接收小数位数参数。

ES6新增` Number.isInteger() `辨别一个数值是否保存为整数。

 IEEE754 数值格式有一个==二进制值可以表示整数值的特殊范围==，这个范围从 `Number.MIN_SAFE_INTEGER` (-2<sup>53</sup> + 1)到 `Number.MAX_SAFE_INTEGER `(2<sup>53</sup> - 1)。超出范围的数值即使保存为整数，也可能会表示一个完全不同的数值。要鉴别整数是否在这个范围内，可以使用 `Number.isSafeInteger()`。



### ==**String**==

 `valueOf()`、`toLocaleString()`和`toString()`返回原始字符串值。 

JS字符串==使用 UCS-2和 UTF-16混合编码==，每16位**码元 (code unit)**对应一个字符。 属性`length`即表示字符串包含多少16位码元。

- **`charAt()`**： 返回给定索引位置的字符 ；
- **`charCodeAt()`**： 返回指定索引位码元的字符编码 ；
- **` fromCharCode() `**： 接收任意个UTF-16码元，拼接对应字符为字符串；

U+0000~U+FFFF范围内的字符采用16位编码，称作**基本多语言平面 (BMP)**，为了表示更多字符，每个字符再使用16位选择一个增补平面， 这种每个字符使用两个16位码元的策略称作**代理对**。

 为正确解析单码元字符和代理对字符，可以使用**`codePointAt()`**来代替 `charCodeAt()`。它返回给定索引位置上的Unicode字符完整标识——**码点 (code point)**，若传入的索引并非代理对开头则会返回错误的码点。相似的，` fromCharCode() `也有对应的**` fromCodePoint()`**，它接收任意数量码点拼接对应字符为字符串。==迭代字符串可以智能识别代理对的码点==，如下：

` console.log([..."ab☺de"]); // ["a", "b", "☺", "d", "e"]  `

某些Unicode字符有多种编码方式，会被`===`等比较操作判定为不等。为此，Unicode提供四种规范化形式：“NFD”、"NFC"、"NFKD"、"NFKC"。 可以使用**`normalize()`**传入对应规范参数对字符串应用。

- **`concat()`**：**拼接字符串**并返回 (实践时更多使用`+`直接连接)；

3个**提取子串**的方法：**`slice()`**、**`substring()`**、**` substr() `**，如下：

```javascript
let stringValue = "hello world"; 
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"
```

para1为子串开始位置，para2为结束位置。其中`substr()`的para2为字符个数。==若参数为负值==，`slice()`会将所有负参都加上length；`substring()`将所有负参均置0 ；`substr()`则将para1加上length，para2置0；

*注意：`substring()`始终选择较小参数作为起点。*

- **`indexOf()`**/**`lastIndexOf()`**：分别从字符串头/尾开始**搜索子串位置**，未找到则返回-1；para2可指定开始搜索的位置。

ES6新增3个用于**判断字符串是否包含另一字符串**的方法：**`startsWith()`**从头开始搜索、 **`endsWith()`**从尾开始搜索、 **`includes()`**检查整个字符串。前二者均接收第二个参数作为开始搜索的位置。如下：

```JavaScript
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false
console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false
console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false
```

-  **`trim()`**：返回删除了前置后缀空格的字符串；
-  **`repeat()`**：返回拼接n次的字符串；
-  **`padStart()`**/**`padEnd()`**：在串前/后填充指定填充物至指定长度。

四个转换大小写的方法： `toLowerCase()`、`toLocaleLowerCase()`、`toUpperCase()`、`toLocaleUpperCase() `。

在字符串中**实现模式匹配**的方法：

- **`match()`**：传入正则字符串或RegExp对象，返回包含第一个匹配项信息的数组，其本质与 RegExp对象的 exec()方法相同；

- **`search()`**：参数同`match()`，返回第一个匹配项的索引；

- **`replace()`**：para2的值替换para1。para1可以是字符串 (不会转为正则表达式)或RegExp对象，para2可以是字符串或函数；

  -  字符串可以使用特殊字符序列插入正则表达式的值)，如下：

  | 字符序列 | 替换文本                                        |
  | :------: | :---------------------------------------------- |
  |   `$$`   | $                                               |
  |   `$&`   | 匹配整个模式的子串，同`RegExp.lastMatch`        |
  | `` $` `` | 匹配的子串之前的字符串，同`RegExp.rightContext` |
  |   `$'`   | 匹配的子串之后的字符串，同`RegExp.leftContext`  |
  |   `$n`   | 匹配第n个捕获组的字符串，其中n等于0～9          |
  |  `$nn`   | 匹配第nn个捕获组的字符串，其中n等于0～99        |

  - 函数接收三个参数：匹配的字符串、匹配项的位置、整个字符串，然后用返回值替换para1。

-  **`split()`**：依据指定分隔符拆分字符串为数组。para1可以是字符串 (不会转为正则表达式)或RegExp对象，para2可以指定数组大小；

-  **`localeCompare()`**：依字母表顺序比较两个字符串，参数在串前返回正数，相等返回0，串后返回负数。



## 单例内置对象

<u>ECMA-262对内置对象的定义：“由ES实现提供的、与宿主环境无关，且在ES程序开始执行前就已经存在的对象。”</u>

内置对象有如：Object、Array 、String 、Global 、Math。 



### **Global**

Global是ES中最特别的对象，因为代码不会显式访问它。实际上并不存在全局变量或函数，在**全局作用域中定义的内容都会成为Global的属性**。

Global有很多属性，比如 undefined、NaN 和 Infinity 这些特殊值，及所有原生引用类型的构造函数。此外，Global也有一些**其他方法**如：

**` eval()`**：ES最强大的方法，它本身就是一个完整的ES解释器。eval接收要执行的ES语句字符串，在调用时解释为真正的ES语句，且共享调用者的上下文和作用域链，但没有任何变量提升。严格模式时无法访问eval内部内容。

有效的URI不能包含某些字符，使用**URI编码方法**编码URI，以便传给浏览器。 `encodeURI()`：对整个URI进行编码，不会编码属于URI组件的特殊字符；`encodeURIComponent()`：编码URI中单独的组件，会编码所有特殊字符。与之相对的有解码方法` decodeURI() `和` decodeURIComponent() `。

ECMA-262没有规定直接访问Global对象的方式，故浏览器将 **window对象**实现为Global的代理。 另一种获取Global对象的方法如下：

```JavaScript
let global = function() {
 return this;
}(); // 立即调用
```

当一个函数在没有明确指定this值的情况下执行时，this值等于Global对象。



### **Math**

因为使用了JS引擎中更高效的实现和处理器指令，故==Math对象上提供的计算比直接在JS实现快得多==。

Math**属性**保存数学的特殊值：

- `Math.E`：自然对数的基数 e 的值 ； 
- `Math.LN10 `： 10为底的自然对数 ；
- `Math.LN2`： 2为底的自然对数 ；
- `Math.LOG2E`： 以2为底e的对数 ；
- `Math.LOG10E` ： 以10为底e的对数 ；
- `Math.PI` ： π的值 ；
- `Math.SQRT1_2` ： 1/2的平方根；
- `Math.SQRT2` ：2的平方根 ；

Math**方法**辅助执行数学计算：

- `Math.min()`/`max()`：确定一组数值中的最小/大值；

    ```JavaScript
    // 要找到数组中的最大/小值，可以像下面这样使用 apply() 
    var values = [1, 2, 3, 4, 5, 6, 7, 8]; 
    var max = Math.max.apply(Math, values); 
    // 技巧关键：把 Math 对象作为 apply()的第一个参数，从而正确地设置 this值，然后可以将任何数组作为第二个参数。 
    ```

- `Math.ceil()`：将数值向上舍入为接近的整数；

- `Math.floor()`：将数值向下舍入为接近的整数； 

- `Math.round()`：将数值四舍五入为接近的整数；

- `Math.fround()`： 返回数值最接近的单精度 (32 位)浮点值表示 ；

- `Math.random()`：返回一个 [0,1) 范围内的随机数；

- 其他涉及数学运算的方法。



## 集合引用类型

4种原生集合类型定义了默认迭代器：Array、TypedArray、Map、Set。它们都支持顺序迭代，传入for-of循环，兼容[展开语法`...`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)。



### Object

**创建 Object 实例：**

```javascript
// 使用new操作符和构造函数
var person = new Object(); // 也等价于'let person = {}'
person.name = "Nicholas"; 
person.age = 29; 

//对象字面量表示法(不会调用Object构造函数)
 var person = {     
     name : "Nicholas",     
     age : 29,
     5:true    // 数值属性名会自动转为字符串
 }; 
```

**访问对象属性：**

```javascript
// 点语法
alert(person.name);
//方括号语法
alert(person["name"]); 
let propertyName = "name";    // 方括号语法可通过变量访问属性名
console.log(person[propertyName]); // "Nicholas" 
```



###  ==Array==

ES数组的每一项可以保存任何类型的数据，并且是动态大小的。数组最多可以包含 4 294 967 295 个元素 ，尝试添加更多项会抛出错误。

**创建数组**：

```javascript
// 使用 Array 构造函数
var colors = new Array(); 
var colors = new Array(20); 	// 创建20length的数组
var colors = new Array("red", "blue", "green"); 
var colors = Array(3); 	// 也可以省略new

// 数组字面表示法(不会调用Array构造函数)
var colors = ["red", "blue", "green"];
var options = [,,,,,];    // 会创建一个包含5项的数组，不建议使用空位
```

另外，length不是只读的，通过设置length可以从数组的末尾除或添加项。

ES6新增两个用于创建数组的静态方法：

- **` Array.from() `**：  从类数组 (拥有length属性和若干索引属性)或可迭代对象创建新的浅拷贝数组实例。如下：

  ```JavaScript
  // 从 string 生成数组
  console.log(Array.from("Matt")); // ["M", "a", "t", "t"] 
  // 从 Set/Map 生成数组
  const m = new Map().set(1, 2).set(3, 4);
  const s = new Set().add(1).add(2).add(3).add(4);
  console.log(Array.from(m)); // [[1, 2], [3, 4]]
  console.log(Array.from(s)); // [1, 2, 3, 4] 
  // 从任何可迭代对象
  const iter = {
      *[Symbol.iterator]() {
          yield 1;
          yield 2;
          yield 3;
          yield 4;
      }
  };
  console.log(Array.from(iter)); // [1, 2, 3, 4] 
  // 从类数组对象（arguments）生成数组
  function getArgsArray() {
      return Array.from(arguments);
  }
  console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]
  // 转换带有必要属性的自定义对象
  const arrayLikeObject = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      length: 4
  };
  console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4] 
  ```

  也接收可选映射函数para2，相当于直接在中间数组上执行`map()`，接收可选para3指定映射函数中this的值。

- **` Array.of() `**： 将一组参数转换为数组 。用于替代在ES6之前常用的` Array.prototype. slice.call(arguments) `写法。

==网页里有多个框架时可能涉及不同的全局执行上下文==，故而存在不同的Array构造函数，此时用 instanceof 无法判定，可以使用**` Array.isArray()`**直接检测某值是否为数组。

ES6在 Array原型上暴露了3个用于检索数组内容的**迭代器方法**：

- **` keys() `**：返回数组索引的迭代器；
- **` values() `**：返回数组元素的迭代器；
- **` entries() `**：返回数组索引/值对的迭代器；

ES6新增**复制填充方法** **`copyWithin()`**和 **`fill()`** 。para1分别指定开始插入的位置和填充物，para2和para3则指定数组复制/插入位置的起点和终点索引；若索引值为负值将加上length值，且二者均不会改变原数组大小，且会忽略超出数组边界、零长度及方向相反的索引范围 。如：

```JavaScript
const  ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
arr.copyWithin(0, 8, 11);  // [8, 9, 2, 3, 4, 5, 6, 7, 8, 9]
arr.fill(0, -7, -3);  // [0, 1, 2, 0, 0, 0, 0, 7, 8, 9]
```

**转换方法**：

- `toString()`/`toLocaleString()`：调用数组每一项的`toString()`、 `toLocaleString()` ，再拼接成由逗号分隔的字符串返回；  
- `valueOf()`：返回数组本身；
- **` join()`**：方法接收字符串分隔符，返回包含所有项的字符串。 

*注意：如果数组某一项是 null或 undefined，则返回结果会以空串表示，另外，alert接收字符串，会在后台调用数组的 `toString()`。*

**栈&队列方法**：

- **` push()`**：向数组末添加任意项，返回修改后数组的length；
- **` pop()`**：从数组末移除一项，返回移除的项；
- **` shift()`**：从数组头移除一项，返回移除的项；
- **` unshift()`**：向数组头添加任意项，返回修改后数组的length；

**排序方法**：

- **`reverse()`**：将数组反序并返回；
- **`sort()`**：调用数组每一项`toString()`，将得到的字符串按升序排列并返回。可传入函数指定比较方法，接收两个参数，若para1应排在para2前就返回负值，否则返回正值，相等返回0。

*注意：这两个方法都返回对数组的引用，并且会改变原数组。*

**操作方法**：

- **`concat()`**：创建数组的副本，可接收数组或其他值作为参数直接添加到副本之后并返回该副本。指定` Symbol.isConcatSpreadable`符号为false强将制不打平数组，为true可强制打平类数组对象。如下：

  ```javascript
  let colors = ["red", "green", "blue"];
  let newColors = ["black", "brown"];
  let moreNewColors = {
      [Symbol.isConcatSpreadable]: true,//强制打平类数组对象
      length: 2,
      0: "pink",
      1: "cyan"
  };
  newColors[Symbol.isConcatSpreadable] = false;//强制不打平数组
  
  console.log(colors.concat("yellow", newColors));
  // ["red", "green", "blue", "yellow", ["black", "brown"]]
  console.log(colors.concat(moreNewColors));
  // ["red", "green", "blue", "pink", "cyan"] 
  ```

- **`slice()`**：返回包含数组[para1, para2)范围内元素的新数组。若有负参数则将负值加上length，结束位置小于起始位置返回空数组；

- **`splice()`**： para1指定要删除位置，para2指定删除元素个数，从para3开始指定要插入的元素，返回删除的元素。会修改原数组。

**严格相等搜索**：**`indexOf()`**和**`lastIndexOf()`**分别从数组头尾开始查找并返回元素索引，未找到返回-1；ES7新增的**`includes()`**返回布尔值。其中para1指定查找元素，para2指定搜索起始位置。

**断言函数搜索**：**`find()`**和**`findIndex()`**使用断言函数从数组最小索引开始搜索，返回第一个匹配的元素或元素索引。para1的断言函数接收3个参数：元素、索引、数组本身；可选para2指定断言函数参数内部this的值。

5个**迭代方法**都接收以每一项为参数的函数 (接收3个参数：元素、索引、数组本身)和可选的该函数的值，都不改变原数组。

- **`every()`**：函数对每一项都返回 true，则返回 true；
- **`some()`**：函数对任一项返回 true，则返回 true。 
-  **`filter()`**：返回函数会返回 true 的项组成的数组；
- **`map()`**：返回每次函数调用的结果组成的数组；
- **`forEach()`**：没有返回值，只是运行函数；

2个**归并方法**都接受对每一项运行的归并函数(接收4个参数：上一个归并值、当前项、当前项索引、数组本身 )和可选的归并初始值，函数返回值成为下一轮归并函数的para1。**`reduce()`**和**`reduceRight()`**分别从头尾开始迭代。



### TypedArray

为提升向原生库传输数据的效率，ES新增定型数组 (typed array)结构。并没有 “TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。 

为解决WebGL和JS间传递数组格式不匹配的问题， Mozilla实现了提供JS接口的、C风格的CanvasFloatArray，可以直接与底层图形驱动程序传交递。后来它变成了定型数组中第一个可用“类型”Float32Array。 

**—ArrayBuffer— **

 Float32Array实际上是一种“视图”，可以允许JS运行时访问名为ArrayBuffer的 预分配内存。ArrayBuffer 是所有定型数组及视图引用的基本单位。 

**` ArrayBuffer() `**是普通的JS构造函数，用于在内存中分配特定数量的字节空间，一经创建不能再调整大小 (可使用`slice()`复制部分或全部到新实例)。

```javascript
const buf = new ArrayBuffer(16); // 在内存中分配 16 字节
alert(buf.byteLength); // 16 
```

 ArrayBuffer类似于C的 malloc，但也有区别：

- malloc分配失败时会返回 null指针。ArrayBuffer分配失败抛出错误；
- malloc可利用虚拟内存，最大可分配尺寸只受可寻址系统内存限制。ArrayBuffer分配内存不能超过 Number.MAX_SAFE_INTEGER (2<sup>53</sup>-1)字节；
- malloc调用成功不会初始化实际的地址。声明 ArrayBuffer 则会将所有二进制位初始化为 0；
- 通过 malloc分配的堆内存需调用 free()或程序退出。ArrayBuffer 分配的堆内存可被当成垃圾回收。

**— DataView —**

第一种允许读写 ArrayBuffer 的视图是 DataView，它专为文件 I/O和网络 I/O设计，其 API 支持对缓冲数据的高度控制，但性能差于其他视图。DataView可使用全部或部分 ArrayBuffer，维护着对该缓冲实例的引用，及视图在缓冲中开始的位置。如下：

```JavaScript
const buf = new ArrayBuffer(16); 
// 构造函数接收一个可选的字节偏移量byteOffset和字节长度byteLength
// byteLength未指定将默认使用剩余缓冲
const firstHalfDataView = new DataView(buf, 0, 8);
alert(firstHalfDataView.byteOffset); // 0
alert(firstHalfDataView.byteLength); // 8
alert(firstHalfDataView.buffer === buf); // true 
```

DataView 对缓冲内容没有任何预设，不可迭代，其API强制在读、写时指定 ElementType来实现JS的 Number 类型到缓冲内二进制格式的转换。ES支持8种不同的 ElementType。内存中值的字节序，默认为大端字节序。 

![ElementType](..\img\ElementType.png)

类型可互换使用，DataView 写入缓冲时会尽量把值转为适当类型，后备值为0，若无法转换则抛出错误。且每个类型都有使用 byteOffset 定位读写位置的 get和 set方法。如下：

```JavaScript
const buf = new ArrayBuffer(2);
const view = new DataView(buf); 
alert(view.getInt8(0));     // 缓冲1里面全是0 
view.setUint8(0, 0x80);     // 设置缓冲中最左边的位为1
view.setUint8(1, 0x01);     // 设置缓冲中最右边的位为1
alert(view.getUint16(0));   // 按大端读取为 32769 
// 设置可选布尔参数para2为true即可启用小端字节序
alert(view.getUint16(0, true));   // 按小端读取为 384
```

**— 定型数组 —**

 定型数组是另一种形式的 ArrayBuffer视图，概念上与 DataView接近，但它特定于一种 ElementType 且遵循系统原生的字节序，提供适用面更广的 API 和更高的性能 (二进制表示)。类似于普通数组且支持许多数组属性方法。

 创建定型数组可以：读取已有缓冲、使用自有缓冲、填充可迭代结构、填充任意定型数组、使用`<ElementType>.from()`和`<ElementType>.of()`。 

 定型数组的构造函数和实例都有一个`BYTES_PER_ELEMENT`属性，返回该类型数组中每个元素的大小。



### Map

ES6新增的 Map (映射)实现了真正的键/值存储机制。初始化时传入一个包含键/值对数组的可迭代对象即可，如下：

```JavaScript
const m = new Map();   // 直接初始化
const m1 = new Map([   // 使用嵌套数组初始化映射
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
const m2 = new Map({  // 使用自定义迭代器初始化映射
    [Symbol.iterator]: function* () {
        yield ["key1", "val1"];
        yield ["key2", "val2"];
        yield ["key3", "val3"];
    }
});
m2.set("firstName", "Matt")    // 使用set()添加键值对
  .set("lastName", "Frisbie"); // set()返回Map实例
alert(m2.has("firstName"));    // true 使用get()获取值
alert(m2.get("firstName"));    // Matt 使用has()进行查询
alert(m2.size);   // 5 使用size查询Map中键值对数量
m2.delete("firstName");        // true 使用delete()删除一个键值对
m2.clear();       // 使用clear()删除全部键值对
```

Object 只能使用数值、字符串或符号作键，而Map**可使用任何JS数据类型作为键**， Map内部使用 [SameValueZero](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)比较操作 (ES规范内部定义，语言中不能使用 )，基本相当于使用严格对象相等的标准来检查键的匹配性，可修改作为键或值的对象内部属性。

Map实例**会维护键值对的插入顺序**，它提供一个迭代器，以插入顺序生成**`[key, value]`**形式的数组。**`entries()`**方法 ( 或者**`Symbol.iterator`**属性，它引用`entries()`)可取得这个迭代器，或者使用**` forEach()`**回调 。另外**`keys()`**和**`values()`**分别返回以插入顺序生成键和值的迭代器。

Map的大多数特性Object都可实现，但在**内存和性能**方面存在显著差别：

1. 内存占用：存储单个键/值对所占用的内存数量会随键的数量线性增加 ， 批量添加或删除键/值对则取决于各浏览器对该类型内存分配的工程实现。 不同浏览器情况不同，但给定固定大小的内存，Map大约可以比 Object多存储 50%的键/值对。
2. 插入性能：插入速度并不会随着键/值对数量而线性增加，但插入 Map 在所有浏览器中一般会稍微快 一点儿。 
3. 查找速度：从大型 Object 和 Map 中查找键/值对的性能差异极小，但如果只包含少量键/值对， 则 Object 有时速度更快。在把Object当作数组使用时，浏览器引擎可以进行优化，在内存中使用更高效的布局。
4. 删除性能： 使用 delete 删除 Object 属性的性能一直以来饱受诟病 。而对大多数浏览器引擎来说， Map 的`delete()`都比插入和查找更快。 




### Set

ES6新增的 Set (集合)在很多方面都像是加强的Map，可使用任何JS数据类型作为键，使用 SameValueZero比较操作，按插入顺序迭代。

```JavaScript
const s = new Set();   // 直接初始化
s.add("Matt")          // 使用add()添加键值对
 .add("Frisbie");      // add()返回Set实例,可缀连操作
alert(s.has("Matt"));  // true 使用has()进行查询
alert(s.size);         // 2 使用size查询Set中键值对数量
s.delete("Matt");      // true 使用delete()删除一个键值对
s.clear();             // 使用clear()删除全部键值对
```

Set的**` keys() `**和**` values() `**返回包含值的迭代器，**` Symbol.iterator `**引用` values() `取得迭代器，或使用**` forEach()`**回调 。**` entries() `**则返回包含值的**`[value, value]`**形式数组的迭代器。均按插入顺序排列。



### WeakMap/Set

ES6新增的WeakMap (弱映射)是新的集合类型，增强了键/值对存储机制。键只能是 Object或继承自 Object的类型，初始化时只要有一个键无效就会抛出错误，导致整个初始化失败；值的类型无限制。其API是 Map的子集。 

```JavaScript
const wm = new WeakMap();
const key1 = { id: 1 },
      key2 = { id: 2 };
alert(wm.has(key1));     // false  使用has()进行查询
alert(wm.get(key1));     // undefined  使用get()获取值
wm.set(key1, "Matt") 	 // 使用set()添加键值对
  .set(key2, "Frisbie"); // set()返回WeakMap实例,可缀连操作
wm.delete(key1); 		 // true 使用delete删除一个键值对
```

==“weak”指JS垃圾回收程序对待键的方式==，这些键不属于正式的引用，当这个键值对的引用都消失后就可以被垃圾回收程序回收。因为键值对任何时候都可能被摧毁，所以也不提供迭代的实现。

WeakSet与WeakMap十分类似，这两个类型可用于回收DOM内存。





# 六 迭代/生成器

在软件开发领域，“迭代” 的意思是**按照顺序反复多次执行一段程序**，通常会有明确的终止条件。ES6新增两个能够更清晰、高效、方便地实现迭代高级特性：迭代器和生成器。

## 迭代器

 **迭代器模式**把某些结构称为**迭代器 (可迭代对象)**，因为它们实现了[**可迭代协议**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE)，并且可通过**iterator (迭代器)**“消费 (consume)”。==可迭代对象包含的元素都是**有限个**，且具有**无歧义的遍历顺序**==，不一定是集合对象，也可以是具有类数组行为的其他数据结构。==迭代器是按需创建的**一次性**对象==，使用相关迭代API迭代关联的可迭代对象。两者概念分离，迭代器无需知道可迭代对象的结构，只需知道如何取得连续的值。

 实现可迭代协议要求同时具备两种能力：**支持迭代的自我识别和创建实现迭代器接口的对象**。 在ES中，则必须有使用` Symbol.iterator `作键的属性作为默认迭代器，这个迭代器必须引用一个返回新迭代器的工厂函数。==很多内置类型都实现了可迭代接口：String、Array、Map、Set、arguments对象、 NodeList 等 DOM 集合类型==。接收可迭代对象的原生语言特性结构会在后台自动调用`@@iterator`来生成迭代器，这些结构包括：

-  for-of 循环；
- 数组解构；
- 扩展操作符；
- Array.from()；
- 创建集合；
- 创建映射；
- `Promise.all()`接收由期约组成的可迭代对象；
- `Promise.race()`接收由期约组成的可迭代对象；
- `yield*`操作符，在生成器中使用 。

迭代器API使用**` next()`**遍历可迭代对象，每次调用返回**` iteratorResult`**对象，包含两个属性，是否还能调用的done和包含下一个值的value。如下：

```JavaScript
let arr = ['foo', 'bar'];
let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();
console.log(iter1.next()); // { done: false, value: 'foo' }
console.log(iter1.anext()); // { done: false, value: 'bar' } 
arr.splice(2, 0, 'baz'); 
console.log(iter1.next());  // { done: false, value: 'baz' }
console.log(iter2.next()); // { done: false, value: 'foo' }
console.log(iter1.next());  // { done: true, value: undefined } 
console.log(iter1.next());  // { done: true, value: undefined }
```

- 迭代器不知道可迭代对象的大小，`done: true`后就返回同样的值；
- 迭代器不与某个时期的可迭代对象快照绑定，只是使用游标来记录遍历过程，若可迭代对象在迭代期间被修改，则迭代器也产生对应变化；
- 每个迭代器都表示对可迭代对象的一次性有序遍历，彼此独立；
- 迭代器维护着指向可迭代对象的引用，会阻止垃圾回收程序回收。

任何实现迭代器接口的对象都可以作为迭代器使用，另外，==每个迭代器也实现了可迭代对象接口==，所以同样可以被迭代。

执行迭代的结构不想要遍历所有对象时可以“关闭”迭代器，可能的情况有：

-  for-of 循环通过 break、continue、return 或 throw 提前退出； 
-  解构操作并未消费所有值。

可选的**`return()`**用于指定在迭代器提前关闭时执行的逻辑，它必须返回一个有效的`IteratorResult`对象。但并非所有迭代器都是可关闭的，要知道某个迭代器是否可关闭，可以测试它实例的return属性是否为函数对象。



## 生成器

**generator** (生成器)能**在函数块内暂停和恢复代码执行**。函数名称前加**`*`** (无关两侧空格)表示它是生成器，调用生成器函数则产生一个处于**suspended (暂停)**状态的生成器对象，这些对象间**彼此独立**，都实现了可迭代接口，它们默认的迭代器自引用。

关键字 **`yield`**使生成器函数执行暂停，调用生成器的`next()` 则继续执行且返回`iteratorResult`对象 。yield后的表达式值将返回给生成器调用者，可看作生成器版的 “return”。它只能在生成器函数的**直接内部** (嵌套的非生成器函数中也不可)使用，否则将抛出错误。

```JavaScript
function* generatorFn() {
    console.log('foobar');
    yield;
    yield 'poo';
    return 'boo';
}
// 直接调用生成器函数并不会打印日志
let generatorObject = generatorFn();
console.log(generatorObject.next());  // 执行该语句5次
// foobar  调用next()后开始执行
// {value: undefined, done: false}
// {value: "poo", done: false} 
// {value: "boo", done: true} 
// {value: undefined, done: true}

// 1. 把Generator当成可迭代对象使用
function* range(start, end) {
    while (end > start) {
        yield start++;
    }
}
for (const x of range(4, 7)) {
    console.log(x); // 4  5  6 
} 
// 2. yield用于输入和输出
function* generatorFn() {
    return yield 'foo';  // yield 可以接收到next()传递的值
}
let generatorObject = generatorFn();
console.log(generatorObject.next());
// {value: "foo", done: false}
console.log(generatorObject.next('bar'));
// {value: "bar", done: true}
```

**` yield*`** 表达式迭代操作数，并产生它返回的每个值 ，可以委托给另一个生成器或可迭代对象。它本身的值是done为true时返回的值。

```JavaScript
function* g3() {
    yield* [1, 2];
    yield* "34";
    yield* arguments;
} // yield* 也可以 yield 其它任意可迭代对象
var iterator = g3(5, 6);   // 委托给其他ite可迭代对象
function* g4() {
    yield* [1, 2, 3];
    return "foo";
}
var result;
function* g5() {
    result = yield* g4();   // 委托给其他generator
}
var iterator = g5();
// 调用4次 iterator.next() 后g4()返回{ value: "foo", done: true }
console.log(result);          // "foo"
```

generator也支持“关闭”的概念。所有generator都有**`return()`**，一旦通过它进入关闭状态就无法恢复了，传入`return()`的值就是生成器对象终止时的值。而**`throw()`**会在暂停时将提供的错误注入到生成器对象中，如果错误未被处理，生成器就会关闭。





# ==七 面向对象==

ECMA-262把对象定义为一组无序属性的集合。ES6开始正式支持类和继承。ES6 的类旨在完全涵盖之前规范设计的基于原型的继承模式。但实际上，ES6 的类仅仅是封装了 ES5.1 构造函数加原型继承的语法糖而已。

## 属性类型

ECMA-262使用一些**内部特性 (attribute)**描述**属性 (property)**的特征。 这些特性是由JS实现引擎的规范定义的，开发者不能在JS中直接访问这些特性。为表特性是内部值，规范将它们放在两对中括号中，如[[Enumerable]]。

属性有两种：数据属性和访问器属性。

**数据属性**

包含一个读取和写入数据值的位置。4个描述其行为的特性：

- **`[[Configurable]]`**：表示能否通过`delete`删除属性并重新定义，能否修改属性特性，能否将其修改为访问器属性；
- **`[[Enumerable]]`**：表示能否通过 for-in 循环返回；
- **`[[Writable]]`**：表示能否修改属性的值；
- **`[[Value]]`**：属性实际的值，即前文提到的读取写入的位置。

其中，`[[Value]]`默认值为undefined，直接定义在对象上的属性，其它三个特性都默认为true。


**访问器属性**

不包含数据值，包含一对非必需的**`getter`**和**`setter`**函数 。读取访问器属性时会调用 `getter`函数，它负责返回有效的值；写入访问器属性时会调用` setter`函数并传入新值，它必须决定如何处理数据。其他特性如下：

- **`[[Configurable]]`**：表示能否通过`delete`删除属性并重新定义，能否修改属性特性，能否将其修改为数据属性；
- **`[[Enumerable]]`**：表示能否通过 for-in 循环返回； 
- **`[[Get]]`**：获取函数，读取属性时调用，默认值为 undefined；
- **`[[Set]]`**：设置函数，写入属性时调用，默认值为 undefined。

`[[Get]]`和`[[Set]]`不一定都要定义，仅指定前者意味着属性只读，仅指定后者则不可读。直接定义在对象上的属性，另两个特性默认为true。



**—操作属性—**

使用**`Object.defineProperty()`**更改属性的默认特性；要一次定义多个属性，使用**`Object.defineProperties()`**。如下：

```JavaScript
let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
}); // 3个参数：对象，属性名，描述对象
Object.defineProperties(book, {
    year_: { value: 2017 },
    edition: { value: 1 },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
}); // 2个参数：修改对象，描述对象
```

 使用**`Object.getOwnPropertyDescriptor()`**可取得指定属性的属性描述符。 ES8新增的**`Object.getOwnPropertyDescriptors()`**在对象每个属性上调用`Object.getOwnPropertyDescriptor()`并在新对象中返回。

ES6提供**` Object.assign() `**用于**合并对象**，接收目标对象和多个源对象为参数，将源对象中可枚举属性(`Object.propertyIsEnumerable()`返回 true )和自有属性(`Object.hasOwnProperty`返回 true )**浅复制**到目标对象并返回。若源对象属性重名则保留最后一个值，赋值时出错则操作中止并退出，`[[Get]]`和`[[Set]]`无法再对象间转移。如下：

```JavaScript
dest = {};
src1 = {
    id: '001',
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`);
    }
};
src2 = {
    id: '002',
    get a() {
        console.log('Invoked src getter');
        return 'foo';
    }
};
Object.assign(dest, src1, src2); // {id: "002", a: "foo"}
```

ES6新增**` Object.is() `**解决之前`===`也无法判定的情况。如：

```JavaScript
// 正确的 0、-0、+0 相等/不等判定
console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false
// 正确的 NaN 相等判定
console.log(Object.is(NaN, NaN)); // true
```



## 语法糖

ES6为**定义和操作对象**新增了很多语法糖特性：

```JavaScript
// 1. 简写属性值
let name = 'Matt';
let person = {
    name: name      // 旧写法
};
let person = {
    name            // 新写法
};

// 2. 可计算属性
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
let person = {};
person[nameKey] = 'Matt';      // 旧写法
person[ageKey] = 27;
person[jobKey] = 'Software engineer';
let person = {
    [nameKey]: 'Matt',         // 新写法
    [ageKey]: 27,
    [jobKey]: 'Software engineer'
};

// 3. 简写方法名
let person = {
    sayName: function (name) { // 旧写法
        console.log(`My name is ${name}`);
    }
};
let person = {
    sayName(name) {            // 新写法
        console.log(`My name is ${name}`);
    }
};
```

可计算属性与简写方法名的写法兼容，另外它本身也可以是复杂的表达式，但抛出任何错误都会中断对象创建。

ES6新增**对象解构**语法， 是使用与对象匹配的结构来实现对象属性赋值 。

```JavaScript
let person = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'Software engineer'
    }
};
let { name: personName, age: personAge } = person;
let { name, age } = person;   // 变量直接使用属性名的写法
console.log(personName); // Matt

// 不存在的属性值为undefined，可以解构赋值时定义默认值
let { name, work = 'Software engineer', sex } = person;
console.log(work); // Software engineer
console.log(sex); // undefined

// 如果是给事先声明的变量赋值，赋值表达式必须包含在一对括号中
let personName, personAge;
({ name: personName, age: personAge } = person);

// 使用嵌套的解构匹配嵌套的属性 (源/目标对象该嵌套结构不存在时不可使用)
let { job: { title } } = person;
console.log(title); // Software engineer

// 可以在函数参数列表中使用，不会影响arguments对象
function printPerson2(foo, { name: personName }, bar) {
    console.log(personName);
}
printPerson2('1st', person, '2nd'); // 'Matt'
```

 解构在内部使用 `ToObject()` (不能在运行时环境中直接访问)把源数据结构转为对象，这意味着在对象解构的上下文中，原始值会被当成对象。如：

```JavaScript
let { length } = 'foobar';
console.log(length);        // 6
let { constructor: c } = 4;
console.log(c === Number);  // true
let { _ } = null;           // TypeError
let { _ } = undefined;      // TypeError
```

*注意：涉及多个属性的解构赋值是顺序化操作。若某解构表达式涉及多个赋值，那么后面的赋值均会无效。*



## 创建对象

 Object构造函数或对象字面量都可以用来创建对象，但创建具有同样接口的多个对象需要重复编写很多代码。 为此，可以使用工厂模式的一种变体。



**1. 工厂模式**

抽象创建具体对象的过程，以函数来封装以特定接口创建对象的细节。

``` JavaScript
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };
    return o;
}
var person = createPerson("Greg", 27, "Doctor"); 
```

工厂模式解决了创建多个相似对象的问题，但无法标识对象类型。



**2. 构造函数模式**

自定义的构造函数可以创建特定类型的对象。

``` JavaScript
function Person(name, age, job) {
    this.name = name;
    this.sayName = function () {
        alert(this.name);
    };
}
var person = new Person("Nicholas");
var person = new Person; // 有new就会调用，不传参可不加括号
Person("Greg"); // 作为函数调用，未指明this值时添加入Global对象
```

为区分普通函数，开头字母大写。使用`new`操作符，就可以作为构造函数，使用`new`调用构造函数会经历以下步骤： 

1. 在内存中创建一个新对象；
2. 将构造函数的` [[Prototype]] `赋值给新对象的` [[Prototype]] `；
3. 构造函数内部的this被赋值为新对象；
4. 执行构造函数中的代码，即给对象添加属性； 
5.  若构造函数返回非空对象，则返回之，否则返回新对象 。

构造函数定义的方法会在每个实例上都创建一遍，虽然可以通过在构造函数外部定义函数来解决但并不是最优解。使用原型模式可以解决此问题。 



**3. 原型模式**

创建新函数时会按特定规则为其创建指向原型对象的`prototype` 属性，默认情况下原型对象自动获得指回关联函数的`constructor`属性 (其他继承自Object) ；创建新实例时其内部属性指针 **`[[prototype]]` **自动赋值为原型对象， Firefox、Safari 和 Chrome 有`__proto__`来访问。由此可知，**联系存在于实例和原型对象之间**而并非实例和构造函数间。

``` JavaScript
function Person() { }
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    alert(this.name);
};
var person1 = new Person();
person1.sayName();   //"Nicholas" 
```

-  **` isPrototypeOf() ` **：参数`[[prototype]]`指向调用对象时返回true；
-  **`Object.getPrototypeOf()` **：返回参数`[[prototype]]`的值；
- ` Object.setPrototypeOf()`：赋para1的`[[prototype]]`为para2；
- **` Object.create() `**：创建以参数为原型对象的对象。最好用`create() `替代会造成性能下降`setPrototypeOf()`。

==用对象字面量编写原型会创建新的prototype对象，其constructor属性将指向Object构造函数==，可特意设回，但注意其`[[Enumerable]]`特性将默认为true。另外，在重写前创建的实例，其`[[prototype]]`仍指向旧原型。

访问某对象属性时，会执行一次从对象实例本身开始沿**原型链回溯**的搜索，直至找到该属性，原型链靠前的属性将会遮蔽靠后的同名属性。原型链搜索的过程是动态的，==对原型所做的修改会反映在实例上==。要确定某属性存在于原型上还是实例上使用**`hasOwnProperty()`**，当属性存在于调用者自身上时它将返回 true；使用**`Object.getOwnPropertyDescriptor()`**可取得调用者自有属性的描述符。

ES8新增**迭代对象**方法**`Object.values()`**和**`Object.entries()`**，执行对象的浅复制，分别返回对象值和键值对的数组，非字符串属性会被转换为字符串输出。`in`操作符可在`for-in`循环中使用，返回可通过对象访问且可被枚举的属性；也可单独使用，在可通过对象访问指定属性时返回true。

-  **`Object.keys()`**：返回对象所有可枚举实例属性的键名字符串数组；
- **`Object.getOwnPropertyNames()`**：同上，但不论可枚举性；
- ` Object.getOwnPropertySymbols() `：同上，仅针对Symbol。

`for-in`和`Object.keys()`的**枚举顺序**取决于JS引擎，可能因浏览器而异。` Object.getOwnPropertyNames/Symbols() `和` Object.assign()  `先以升序枚举数值键，再以定义或插入顺序枚举字符串和符号键。

*注意：即使将原型属性的 `[[Enumerable]]`设置为 false该属性仍会被枚举，因为默认情况下开发者定义的属性都是可枚举的。*

原生类型的原型同样可以被修改，但更建议创建继承原生类型的自定义类。另外，原型模式弱化了向构造函数传参的能力，而其内容被所有实例共享意味引用值也将被所有实例访问修改，所以一般也不单独使用原型模式。



**4. 组合构造函数模式和原型模式**

创建自定义类型**最常见的方式**。扬长避短，构造函数模式定义实例属性，原型模式定义方法和共享属性。

```JavaScript
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        alert(this.name);
    }
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends);    //"Shelby,Count,Van" 
alert(person2.friends);    //"Shelby,Count" 
alert(person1.friends === person2.friends);    //false 
alert(person1.sayName === person2.sayName);    //true
```



## 继承

许多OO语言都支持接口继承和实现继承，前者只继承方法签名，后者继承实际的方法。ES没有函数签名，主要通过原型链来支持实现继承。

**1. 原型链**

若某原型对象是另一类型的实例，那么将层层递进构成原型链。如下：

```JavaScript
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType(); // 继承SuperType
SubType.prototype.getSubValue = function () {
    return this.subproperty;
}; // 子类要覆盖超类方法，或新增方法，都必须在原型继承赋值之后
var instance = new SubType();
alert(instance.getSuperValue()); //true 
console.log(Object.prototype.isPrototypeOf(instance)); // true 
```

要**确定原型和实例关系**可以使用`instanceof`，若某实例原型链上出现过相应构造函数则返回true，或使用**`isPrototypeOf()`**，只要参数原型链中包含调用者原型则返回true，使用如上例最后。

 原型链继承仍存在原型中包含引用值的问题，并且无法在不影响其他实例的情况下向超类构造函数传参， 故原型链基本不会单独使用。



**2. 盗用构造函数** (constructor stealing，也称对象伪装、经典继承)

在子类构造函数内部调用超类构造函数，以解决上述原型链的问题，如下：

```JavaScript
function SuperType(name) {
    this.name = name;
}
function SubType() {
    SuperType.call(this, "Nicholas"); // 继承超类实例属性
    this.age = 29;
}
let instance = new SubType();
console.log(instance.name); // "Nicholas";
```

盗用构造函数同样也无法避免构造函数模式存在的函数复用问题，并且子类不能访问超类原型上定义的方法，那么所有类型都只能使用构造函数模式，故此方式也很少单独使用。



**3. 组合继承** (也称伪经典继承)

综合原型链和借用构造函数，使用原型链继承原型属性和方法，盗用构造函数继承实例属性，如下：

```JavaScript
function SuperType(name) {
    this.name = name;
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name); // 第二次调用超类构造函数
    this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用超类构造函数
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.sayName();          //"Nicholas";
instance1.sayAge();           //29
```

存在效率问题，譬如超类构造函数会被调用两次，子类原型和实例上会各有一份继承的属性，只是实例属性遮蔽了原型属性。



**4. 原型式继承**

不单独创建构造函数，借助原型实现信息共享，如下：

```JavaScript
function object(o){     
    function F(){}
    F.prototype = o;
    return new F();
}
let yetAnotherPerson =  object(person);
```

本质上对传入的对象执行一次浅复制，已被ES5`Object.create()`规范化。



**5. 寄生式继承** (parasitic inheritance)

完全复制已有对象再增强，只关注对象内容而不关注类型，如下：

```JavaScript
function createAnother(original) {
    var clone = object(original);  // 任何返回新对象的函数都可
    clone.sayHi = function () {    // 函数无法复用
        alert("hi");
    };
    return clone;
} 
```



**6. 寄生组合式继承**

使用寄生式继承修补组合继承调用了两次超类构造函数的问题，如下：

```JavaScript
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype); // 超类原型继承
    prototype.constructor = subType;             // 指回构造函数 
    subType.prototype = prototype;               // 构造原型链
}
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);   // 超类实例属性继承
    this.age = age;
}
inheritPrototype(SubType, SuperType);
```



## 类

ES6引入的**`class`**关键字具有正式定义类的能力，但实际上它背后使用的仍然是原型和构造函数的概念，是新的语法糖结构。

与定义函数类似，但类定义**没有函数提升**，并且受**块作用域**限制，可包含构造函数、实例方法、getter/setter、静态类方法，默认在**严格模式**下执行。类表达式的名称可选，赋值给变量后可通过`name`属性取得类表达式名称字符串，但不可以在类表达式作用域外部访问此标识符。如下：

```JavaScript
class Person {} // 类声明 为区别于其实例，首字母大写
const Animal = class {}; // 类表达式
let Person = class PersonName {} // 类表达式名称可选
console.log(Person.name); // PersonName
console.log(PersonName); // ReferenceError
let p2 = new p1.constructor();  // 使用类构造函数的引用创建新实例
```

ES中的类实质上就是特殊的函数，`typeof`检测为function，且拥有原型。 使用`new`创建新实例时，JS解释器会调用类中的`constructor`函数，默认情况下该函数返回this对象作为新实例，若返回其他对象，那么这个实例将不会与类关联。类构造函数和构造函数不同，必须使用`new`调用。类可以作为参数引用，也可以像立即执行函数一样立即实例化。

**实例成员**通过类构造函数定义；类块中不允许直接定义原始值或对象，定义的方法即为**原型方法**，这些方法等同于对象属性，可用字符串、Symbol、可计算值作键，getter/setter的定义也同普通对象一样。**静态方法**存在于类本身，每个类上只能有一个，其this值引用类自身，其他所有约定同原型成员一样。静态方法非常适合作为实例工厂，如下例：

```JavaScript
class Person {
    constructor(age) {
        this.age = age; // 实例成员
    }
    sayAge() { // 原型方法
        console.log(this.age_);
    }
    static create() { // 静态方法
        return new Person(Math.floor(Math.random() * 100));
    }
}
console.log(Person.create()); // Person { age_: ... }
```

类也支持定义生成器，可添加默认的迭代器将类实例变为可迭代对象。

**——类继承——**

类继承使用的新语法背后仍是原型链，使用**`extends`**就可以继承任何拥有`[[Construct]]`和原型的对象，就是说可以继承类和普通的构造函数 (保持向后兼容)。`let Bar = class extends Foo {}`也是有效语法。

 派生类可通过**`super`**引用其原型，但只能在派生类的构造函数和静态方法内部使用，且只能用来调用超类构造函数和静态方法，不能单独引用。如下：

```JavaScript
class Vehicle {
    constructor() {
        console.log('hasEngine');
    }
    static identify() {
        console.log('vehicle');
    }
}
class Bus extends Vehicle {
    // 若没有构造函数，实例化时会传入所有参数给`super()`
    constructor() { // 要么调用super()，要么返回一个对象
        super(); // 会调用超类构造函数，可传参，返回的实例赋给this
        // 调用super()前不可引用 this
        console.log(this instanceof Vehicle); // true
    }
    static busIdentify() {
        super.identify();
    }
}
var b = new Bus(); // hasEngine
Bus.busIdentify(); // vehicle
```

 ES6 给类构造函数和静态方法添加了内部特性`[[HomeObject]]`，它指向定义该方法的对象，只能在JS引擎内部访问。super 始终会定义为其原型。 

通过检测` new.target  `可实现能被继承但不能实例化自身的**抽象基类**。

```JavaScript
class Vehicle {
    constructor() {
        if (显式 === Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated'); // 检测new.target阻止实例化
        }
        if (!this.foo) {
            throw new Error('Inheriting class must define foo()'); // 检查this检查限定派生类必须包含相应方法
        }
        console.log('success!');
    }
}
```

继承内置引用类型后默认情况下返回派生类型实例，修改**` Symbol.species `**访问器以改变返回的实例类型，如下：

```JavaScript
class SuperArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
let a1 = new SuperArray(1, 2, 3, 4, 5);
let a2 = a1.filter(x => !!(x % 2))
console.log(a1 instanceof SuperArray); // true
console.log(a2 instanceof SuperArray); // false
```





# 八 代理与反射

ES6新增代理和反射，可拦截基本操作并嵌入额外行为。此前的ES并不存在类似特性，因此许多转译程序都无法解释代理行为，故代理和反射只能在100%支持的平台上使用。

代理是目标对象的抽象，默认情况下对代理对象的操作都会传播到目标对象，**`Proxy`** 构造函数接收目标对象和处理程序对象来创建代理对象。使用**`Proxy.revocable()`**可创建能撤销与目标对象关联的代理对象。使用代理的主要目的是定义**捕获器 (trap)**，类似OS的同步中断。每个trap对应一种基本操作，代理上的操作传播到目标对象前trap会先被调用。处理程序对象中可捕获的方法都有对应的**`Reflect`**API。如下：

```JavaScript
const target = { foo: 'bar' };
const handler = {
    get(trapTarget, property, receiver) { // trap以方法名为键
        let decoration = '';
        if (property === 'foo') {
            decoration = '!!!';
        }
        return Reflect.get(...arguments) + decoration;
    }
};
const proxy = new Proxy(target, handler); // 2个参数都不可或缺
// const { proxy, revoke } = Proxy.revocable(target, handler); 
// 创建可撤销的代理对象,代理对象和撤销函数同时生成
// revoke(); // 撤销代理的操作是不可逆的
console.log(proxy.foo);  // bar!!!
console.log(target.foo); // bar
console.log(target === proxy); // false 严格相等可区分
```

 *注意：`Proxy.prototype`是undefined，因此不能使用instanceof检测。*

代理也可拦截Reflect API，即可在某目标对象上构建多层拦截网。捕获处理程序必须遵循因方法而异的“**捕获器不变式 ( trap invariant )**”，防止trap出现反常行为。代理可捕获13种不同的基本操作，任一操作都只有一个捕获处理程序被调用，不会重复捕获。 具体使用请查看[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)或红宝书4 p275。使用代理可以编写各种模式。

另外，某些情况下代理也不能很好的与ES机制协同，如：

- 目标对象使用对象本身 (this值)作键时，代理将无法取得对应属性值；

- 某些内置类型依赖代理无法控制的机制，如Date类型方法的执行依赖this值上无法通过`get()`和`set()`访问的内部槽位` [[NumberDate]] `。





# 九 函数表达式

函数实际是对象，每个函数都是Function类型的实例，跟其他引用类型一样拥有自己的属性和方法。

## 定义函数

```JavaScript
// 1. 函数声明
function sum(num1, num2) {
    return num1 + num2;
}
// 2. 函数表达式(未命名的称作匿名函数/lambda函数)
let sum = function (num1, num2) { 
    return num1 + num2;
}; // 只要函数被当成值使用，它就是函数表达式
// 3. 箭头函数
let sum = (num1, num2) => {
    return num1 + num2;
};
// 4. 使用Function构造函数
let sum = new Function("num1", "num2", "return num1 + num2");
// 会作为ES代码和作为参数字符串分别被解释一次，不推荐使用
```

函数名就是指向函数的指针。ES没有函数签名，所以**没有重载**，后定义的会直接覆盖先定义的。从ES6开始，所有函数都会暴露只读的保存函数标识符的**`name`**属性，`getter/setter`或使用`bind()`实例化的标识符会前缀“get/ set/ bound”，使用Function创建的函数将被标识为“anonymous”。

代码执行时，JS引擎会把**函数声明提升 (function declaration hoisting)**到源码树顶部，而函数表达式在代码执行到对应行时才在上下文中生成函数定义。

ES6新增**箭头函数**，只有一个参数时可省略括号，若省略大括号则隐式返回这一行代码的值，`  (a, b) => return a * b `是无效写法。箭头函数==不能使用arguments、super和`new.target`，不能用作构造函数，没有prototype==。

ES不在乎传入的参数个数和类型。参数在内部是一个称作**`arguments`**的类数组对象，可以和命名参数一起使用且始终与其同步，但在内存中并不指向一个地址，只是保持同步而已，其长度为传入参数个数。另外，ES6支持显式定义**默认参数**，与let变量一样按顺序初始化并且同样存在暂时性死区 (前面的参数不可引用后面的参数)。==arguments只同步传入参数==，如下：

```JavaScript
function makeKing(name = 'Henry', age) { // 默认参数
    name = 'Louis';
    arguments[1] = 18; // 参数2赋值无效
    return `King ${arguments[0]} is ${age}`;
} // arguments只同步传入参数，无视内部赋值和默认参数
console.log(makeKing()); // 'King undefined is undefined'

let arr = [1, 2, 3, 4];
let getSum = (...values) => { // 扩展操作符 
    return values.reduce((x, y) => x + y, 0);
} // 箭头函数也可以使用
getSum(-1, ...[10, 20], ...arr); // 39
```

ES6新增**扩展操作符**，收集任意数量的剩余参数，如上。

ES5函数内部存在特殊对象**`arguments`**和**`this`**。arguments只存在于使用function关键字定义的函数中，包含传入函数的所有参数，还有一个指向所在函数的**`callee`**属性。编写递归时可使用` arguments.callee ` 让函数逻辑与函数名解耦，严格模式下不可使用。标准函数中this值为调用函数的上下文对象，而**箭头函数的this值为定义箭头函数的上下文**。

ES5还添加了指向调用当前函数的函数的非标准属性**`calller`**，全局作用域下调用为null。ES6新增检测函数是否是使用`new`调用的**`new.target`**，指向被调用的构造函数或默认为undefined。

每个函数都有两个属性**`length`**和**`prototype`**，length保存命名参数个数 ，prototype保存引用类型所有实例方法。会以指定this值调用函数的**`apply()`**和**`call()`**，区别在于前者以数组形式传入参数。ES5定义**`bind()`**创建一个新的函数实例，其this值被绑定为传入参数，如`let a = f.bind(o)`。

*注意：严格模式下不指定上下文则this值不为window而是undefined。*



## 闭包

闭包指==有权访问另一函数作用域中变量的函数==，通常在嵌套函数中实现。内部函数会把外部函数的活动对象添加到自己的[作用域链](#上下文与作用域)中，并可以访问外部函数能访问的一切，但反过来则不可。注意外部函数的活动对象会一直保留到内部函数销毁，过度使用闭包会导致内存过度占用。

内部函数不能直接访问外部函数的arguments和this，但可以先将它们保存在其他变量中再让内部函数获取。如下：

```JavaScript
window.identity = 'The Window';
let object = {
    identity: 'My Object',
    getIdentityFunc() {
        let that = this; // 保存外部this值
        return function () {
            return that.identity;
        };
    }
};
console.log(object.getIdentityFunc()()); // 'My Object'

// 某些特殊情况下，this值也可能超出预料
window.identity = 'The Window';
let object = {
    identity: 'My Object',
    getIdentity() {
        return this.identity;
    }
};
object.getIdentity(); // 'My Object'
(object.getIdentity)(); // 'My Object'
(object.getIdentity = object.getIdentity)(); // 'The Window'
// 赋值再调用赋值的结果，赋值表达式的值是函数本身，this不与任何对象绑定
```



**——IIFE——**

**立即调用的函数表达式 ( IIFE，Immediately Invoked Function Expression )**将函数声明包含在圆括号中，被解释为函数表达式，其后的第二对圆括号会立即调用前面的函数表达式。let出现之前经常使用 IIFE模拟块级作用域，如下例使用 IIFE锁定参数值：

```JavaScript
let divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; ++i) {
    divs[i].addEventListener('click', (function (frozenCounter) {
        return function () {
            console.log(frozenCounter);
        };
    })(i));
}
// ES6中如果使用let，则for循环将为每个循环创建独立的变量
for (let i = 0; i < divs.length; ++i) {
    divs[i].addEventListener('click', function () {
        console.log(i);
    });
}
let i; // 但把变量声明拿到for外部无效
for (i = 0; i < divs.length; ++i) {}
```



**——私有变量——**

JS没有私有成员的概念，所有对象属性都是公有的。但任何在函数中定义的变量都可看作私有变量，通过闭包可以访问到外部函数的私有变量，基于此可创建出能访问私有变量的公有方法，也称**特权方法 (privileged method)**。 特权方法可以使用构造函数或原型模式在自定义类型中实现，也可使用模块模式或模块增强模式在单例对象上实现，见红宝书4 p316。





# 十 异步

异步行为是ES的基础，早期JS只能定义回调函数表明异步操作完成，串联多个异步操作必定深度嵌套回调函数，陷入回调地狱。ES6增加对Promises/A+ 规范的完善支持以组织异步逻辑，即 **`Promise`**引用类型，接下来几个版本又增加**`async`**和**`await`**来定义异步函数。

## promise

创建新promise时需传入负责初始化promise异步行为和控制状态最终转换的执行器函数`executor`。**`pending`**是promise的初始状态，此时可以**settled**为代表成功的**`fulfilled`**状态，或代表失败的**`rejected`**状态，此结果不可逆且不再改变。不能保证promise一定脱离pending。

为避免根据读取到的状态以同步方式处理promise，其==状态私有==，不能直接通过JS检测，也不能被外部JS代码修改，只在其执行器中完成内部操作。promise切换为fulfilled或rejected，该状态下执行的异步代码将会收到一个私有的内部**value**或**reason**，默认为undefined。

执行器接收两个函数作参：**`resolve()`**在异步任务顺利完成并返回value时调用 ，**`reject()`**在异步任务失败且返回reason时调用，前者将状态切为fulfilled，后者切为rejected并抛出错误。直接调用` Promise.resolve() `将实例化fulfilled的promise，其value对应参数一；类a似的，` Promise.reject() `实例化rejected的promise并抛出异步错误，其reason对应参数一，也会传给之后的onrejected处理程序。如下：

```JavaScript
let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve();  // 与上面语句结果相同
// 传入promise相当于一次空包装，会保留原promise状态
setTimeout(console.log, 0, p2 === Promise.resolve(p2)); // true
let p3 = new Promise(() => { });
setTimeout(console.log, 0, Promise.resolve(p3));// ···<pending> 
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise <fulfilled>: 4   会忽略多余参数
setTimeout(console.log, 0, Promise.resolve(new Error('foo')));
// Promise <fulfilled>: Error: foo  会包装Error对象

// 给Promise.reject传入promise，会成为reason
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));
// Promise <rejected>: Promise <fulfilled>
```

promise是同步对象，也是异步执行模式的媒介，抛出的错误只能只能被异步模式捕获。promise实例的方法是连接外部同步代码与内部异步代码的桥梁。

ES暴露的异步结构中，任何对象都有被认为实现了Thenable接口的`then`方法。promise的**`then()`**接收可选的、分别在fulfilled和rejected状态执行的**`onResolved`**和**`onRejected`**处理程序 (传入非函数静默忽略)，它返回由`Promise.resolve()`包装后的处理程序返回值 。如下：

```JavaScript
let p = Promise.resolve('foo');
// 未提供onResolved则包装上一个promise的value
let p1 = p.then(); // Promise <fulfilled>: foo
// 无显式返回值则包装默认值undefined
let p2 = p.then(() => { });  //···<fulfilled>: undefined
// 注意:抛出异常会返回rejected的promise
let p3 = p.then(() => { throw 'baz'; }); //···<rejected> baz

// onRejected的任务是捕获异步错误，返回值也被Promise.resolve()包装
let q = Promise.reject('foo');
let q4 = q.then(null, () => { }); //···<fulfilled>: undefined
let q5 = q.catch(() => { }); //Promise <fulfilled>: undefined
let q6 = q.finally(); // Promise <rejected>: "foo"
setTimeout(console.log, 0, p === p6); // false
```

**`catch()`**实际是` then(null, onRejected) `的语法糖，也接收onRejected处理程序。**`finally()`**用于给promise添加在fulfilled和rejected状态都会执行的**`onFinally`**处理程序 ，可规避前两种处理程序出现冗余代码，表现为父promise的传递，但返回的是新promise。如上。

promise settled到某状态时，对应处理程序会接收到value或reason，然后被推进消息队列按顺序执行，但其后的==同步代码一定会先于处理程序执行==，这个特性由JS运行时保证，称为**非重入 ( non-reentrancy )**。如下：

```JavaScript
let p1 = Promise.resolve('p1 fulfilled');
p1.then((value) => console.log(value));
console.log('p1.then() returns');
// p1.then() returns
// p1 fulfilled

new Promise((resolve, reject) => {
    console.log('begin asynchronous execution');
    reject(Error('bar'));
}).catch((e) => { // onRejected返回fulfilled的promise
    console.log('caught error', e);
}).then(() => {
    console.log('continue asynchronous execution');
});
// begin asynchronous execution
// caught error Error: bar
// continue asynchronous execution 
```

**rejected promise 类似于`throw()`**，在promise的执行函数和处理程序中抛出错误会导致promise以错误对象为reason被rejected。在promise中抛出错误时，实际上是从消息队列中异步抛出，不会阻止运行时继续执行同步指令。**异步错误只能通过onrejected处理程序捕获**。如上：

前面的实例方法均返回新promise，将其连接可构成promise连锁，能够简洁地串行异步任务，解决回调地狱的问题。Promise类也提供将多个promise组合成一个的静态方法：**`Promise.all()`**接收包含一组promise的可迭代对象，根据包含情况返回新promise；**`Promise.race()`**则返回最先fulfilled或rejected的promise的镜像。如下：

```JavaScript
let p1 = Promise.all(); //  TypeError
let p2 = Promise.all([]); // 等价于 Promise.resolve()
// 可迭代对象中的元素会通过Promise.resolve()转换，会保留所有value
let p3 = Promise.all([Promise.resolve(3), 4]);
p3.then((value) => setTimeout(console.log, 0, value)); // [3,4]
// 包含的promise都fulfilled后才fulfilled
// 包含一个pending/rejected的promise最终就会pending/rejected
// 第一个rejected的reason作为最终reason，其他promise会静默处理

let p4 = Promise.race(); //  TypeError
let p5 = Promise.race([3, 4]); // Promise {<fulfilled>: 3}
let p6 = Promise.race([]); // 等价于new Promise(() => {})
let p3 = Promise.race([Promise.reject(5), Promise.resolve(6)]);
// Promise {<rejected>: 5} 最先settled的为最终，其他静默处理
```

为防止promise连锁/合成过于复杂化，ES的promise并没有某些第三方promise库中的取消和追踪特性，但也有办法实现。



## 异步函数

 ES8新增的`async/await`是promise在函数中的应用。**`async`**使函数具有异步特征，期待一个实现thenable接口的对象，返回值被`Promise.resolve()`包装(抛出错误或拒绝promise除外)；**`async`**可以暂停异步函数的执行，让出JS运行时线程 (类似于yield)，期待一个实现thenable接口的对象并为其“解包”，再异步恢复函数执行，只能出现在async函数直接内部中。如下：

```JavaScript
async function foo() {
    console.log(1);
    console.log(await 3);
    const thenable = { // 实现了thenable接口的非promise对象
        then(callback) { callback('4'); }
    };
    console.log(await thenable);
    console.log(await Promise.resolve(5));
    // 对rejected promise使用await会unwarp(释放)错误值
    await Promise.reject(6); // 相当于throw()
    console.log(7); // 不会执行
}
foo().catch(console.log); // 捕获单独的rejected promise
console.log(2);
```

async函数被调用后，执行到await语句暂停执行，向消息队列中添加为await求值的任务，async函数退出；顶级线程执行完毕，JS运行时从消息队列取出任务，恢复执行async函数执行，为await赋值，继续执行await语句之后的内容。实际开发中，对于并行的异步操作通常更关注结果而不依赖执行顺序。

*注意：某些时刻比如抛出错误时使用promise要比async函数消耗更大。*



# 十一 BOM

ES把BOM (Browser Object Model)是用JS开发Web应用程序的核心。BOM提供了网页无关的浏览器功能**对象**，H5规范中涵盖了BOM的主要内容。

## window

window对象表示浏览器实例，是BOM核心，在浏览器中作为浏览器窗口的JS接口和ES的Global对象。因为window属性在全局作用域有效，故许多浏览器API及相关构造函数都暴露为其属性。

**top**对象指向最外层窗口，即浏览器窗口本身；**parent**对象指向当前窗口的父窗口；**self**对象始终指向window。

- `screenLeft/Top`：窗口相对屏幕左侧和顶部的CSS像素值；

- **`moveTo/By()`**：接收绝对/相对坐标，移动窗口到新位置 (有限制)；
- `devicePixelRatio `：存储物理像素对逻辑像素的缩放系数，与DPI (dots per inch)对应。CSS像素是Web统一像素单位，约为**1/96英寸**，此时人眼应在`(1/96英寸)/tan0.0213°` (70cm+)处。

- `outerWidth/Height`：浏览器窗口自身大小；
- `innerWidth/Height`：页面内部大小 (包含滚动条)；
- `document.documentElement.clientWidth/Heigh`：保存页面视口大小，`document.body.clientWidth/Height `同样，需考虑DTD；
- `resizeTo/By()`：接收绝对/相对宽高值调整窗口大小 (有限制)；
- `scrollX/Y`和`pageX/Yoffset`：页面水平/垂直滚动的值；
- `scroll()`、`scrollTo/BY()`：接收绝对(前两个)/相对坐标滚动页面，也可接收 [ScrollToOptions](https://developer.mozilla.org/zh-CN/docs/Web/API/ScrollToOptions)字典 (指定元素滚动位置及是否应该平滑)；

` window.open() `接收4个参数 (URL、目标窗口、特性字符串、是否替代当前页) 用指定的名称将指定资源加载到浏览器上下文 ，返回新建窗口的引用。可使用` window.close() `关闭，关闭后其引用仍存在但只能检测`closed`属性。若目标窗口不存在则打开新窗口并命名，此时用于配置新窗口包含特性的para3有效。`opener`属性包含指向打开它的窗口，可设置为null使其运行在独立进程。由于过去被广告滥用所以有着诸多限制。

JS在浏览器中单线程执行，但允许使用定时器执行代码，为调度不同代码执行，JS维护一个任务队列，使加入其中的任务按序执行。`setTimeout()`在一定时间后添加任务到队列；而`setInterval()`每隔一段时间就添加新任务到队列，不建议在生产环境使用。均返回一个表示该超时排期的数值ID，可使用`clearTimeout()`取消等待中的排期任务。

*注意：所有超时代码都会在全局作用域中的一个匿名函数中运行。*

`alert()`接收字符串并弹窗显式，只有确认按钮；`confirm()`有确认和取消按钮，返回true表示确认；`prompt()`显示输入文本框和确认取消按钮，点击确认则返回文本框中的值。这些对话框都是同步的模拟对话框，样式由宿主环境决定，不包含HTML和CSS。另外，JS还有` find() `和` print() `，浏览器菜单的“查找”和“打印”被点击时将异步显示，也可通过window直接调用。



## location

location提供了当前窗口中加载文档的信息及导航功能，同时作为window和document的属性。location会把URL解析为离散片段保存在属性中，加载URL`http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q= javascript#contents`时location对象的内容如下：

![ElementType](..\img\LocationURL.png)

[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)提供了一组标准API用于检查修改search字符串，一般也支持将其实例用作可迭代对象。如下：

```JavaScript
let sear = new URLSearchParams("?q=javascript&num=10");
alert(sear.toString()); // " q=javascript&num=10"
sear.has("num");        // true
sear.get("num");        // 10 
sear.set("page", "3");  // " q=javascript&num=10&page=3"
sear.delete("q");       // " num=10&page=3"
for (let param of searchParams) {
    console.log(param); // ["num", "10"] ["page", "3"]
}

location.assign("http://www.wrox.com");
window.location = "http://www.wrox.com";
location.href = "http://www.wrox.com"; // 最常见
```

修改location或其属性都会重加载页面，hash值除外，它会增加一页历史记录。`replace()`接收URL并重加载但不增加记录，`reload()`也可重加载，若不传参则可能会从缓存中重加载，传入true将强制从服务器加载。



## 其他三个

**navigator**由 Netscape2引入，已成为客户端标识浏览器的标准，通常用于确认浏览器类型，只要启用JS，navigator就一定存在。其属性见[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)。

`plugins`是包含浏览器安装插件信息的数组，其每一项都包含如下属性：

- name：插件名称；
- description：插件介绍；
- filename：插件的文件名；
- length：由当前插件处理的MIME类型数量；
- MimeType：
  -  description：描述MIME 类型；
  -  enabledPlugin：指向插件对象的指针；
  - suffixes：该 MIME 类型对应扩展名的逗号分隔的字符串；
  - type：完整的 MIME 类型字符串。 

plugins还有`refresh()`来刷新自身以反映新插件，传入true会重加载页面。

*注意：IE10以下不支持 Netscape式的插件 。*

**history**提供操作浏览器历史记录的接口，不会直接暴露URL。`go()`接受一个数值+/-n，在历史记录中向前/后导航n步；也可接收字符串，导航到历史中包含该字符串的第一个位置。`length`属性表示历史记录中的条目数量。现代Web应用程序开发中最难的环节之一就是历史记录管理。H5也为history增添了方便的状态管理特性，如`pushState()`。

**screen**中保存客户端显示器信息。





# 十二 客户端检测

通过检测浏览器特性来确认用户使用的浏览器，如下：

```JavaScript
class BrowserDetector {
    constructor() {
        // 测试条件编译
        // IE6~10 支持
        this.isIE_Gte6Lte10 = /*@cc_on!@*/false;
        // 测试 documentMode
        // IE7~11 支持
        this.isIE_Gte7Lte11 = !!document.documentMode;
        // 测试 StyleMedia 构造函数
        // Edge 20 及以上版本支持
        this.isEdge_Gte20 = !!window.StyleMedia;
        // 测试 Firefox 专有扩展安装 API
        // 所有版本的 Firefox 都支持
        this.isFirefox_Gte1 = typeof InstallTrigger !== 'undefined';
        // 测试 chrome 对象及其 webstore 属性
        // Opera 的某些版本有 window.chrome，但没有 window.chrome.webstore
        // 所有版本的 Chrome 都支持
        this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;
        // Safari 早期会给构造函数标签符追加"Constructor"，如：
        // window.Element.toString(); // [object ElementConstructor]
        // Safari 3~9.1 支持
        this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);
        // 推送通知 API 暴露在 window 对象上
        // 使用默认参数值以避免对 undefined 调用 toString()
        // Safari 7.1 及以上版本支持
        this.isSafari_Gte7_1 =
            (({ pushNotification = {} } = {}) =>
                pushNotification.toString() == '[object SafariRemoteNotification]'
            )(window.safari);
        // 测试 addons 属性
        // Opera 20 及以上版本支持
        this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
    }
    isIE() { return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11; }
    isEdge() { return this.isEdge_Gte20 && !this.isIE(); }
    isFirefox() { return this.isFirefox_Gte1; }
    isChrome() { return this.isChrome_Gte1; }
    isSafari() { return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1; }
    isOpera() { return this.isOpera_Gte20; }
} 
```

还可通过浏览器的**用户代理字符串**确定浏览器,它包含在每个 HTTP 请求的头部，在JS中通过只读属性`navigator.userAgent`访问。虽然浏览器发展时都通过在用户代理字符串中包含误导信息来欺骗服务器，但仍可以用来准确识别浏览器，不过有些浏览器提供的私有方法` __defineGetter__ `可以纂改用户代理字符串。也可使用第三方用户代理解析程序。

navigator和scree提供了**软件**环境信息。如下：

- `navigator.oscpu`：对应用户代理字符串中OS/系统架构信息；
- `navigator.vendor`：浏览器开发商信息，实时标准；
- `navigator.platform`：浏览器所在OS信息，实时标准；
- ` screen.color/pixelDepth`：显示器每像素颜色位深；
- `screen.orientation`：返回当前屏幕方向；

navigator也暴露出一些可以提供**浏览器和OS**状态信息的API。如下：

- Geolocation API 可以让浏览器脚本感知当前设备的地理位置，只在安全执行环境 (通过 HTTPS 获取的脚本)中可用。返回一个包含经纬度、海拔、设备移动速度等信息的 Coordinates对象。
- 当设备连接到网络时，浏览器会记录并触发online事件，断开时则会触发offline事件，可通过`navigator.onLine`确定。NetworkInformation API 为连接属性变化事件处理程序定义了事件对象，包含带宽、连接速度和质量、网络连接技术等信息。
- 浏览器可访问设备电池及充电信息，`navigator.getBattery()`会返回一个promise，resolved为 BatteryManager对象，包含是否接入电源、何时充满/耗尽、当前电量百分比等信息，还提供了4个事件属性。

浏览器检测**硬件**能力有限，但navigator仍提供了一些基本信息：

- `navigator.hardwareConcurrency`：浏览器支持的逻辑处理核心数量，但不一定，实际表示可并行执行的最大工作线程数量；
- `navigator.deviceMemory`：设备大致系统内存大小，单位为GB；
- `navigator.maxTouchPoints`：触摸屏支持的最大关联触点数量。



# 十三 DOM

