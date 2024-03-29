
# Error

JavaScript解析或执行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供一个 *Error* 构造函数，所有抛出的错误都是这个构造函数的实例。*Error* 构造函数接受一个参数，表示错误提示，可以从实例的 ***message*** 属性读到这个参数。

```javascript
let error = new Error('未成年, 不得入内!');
error.message; // 未成年, 不得入内!
```

## 原生错误类型

*Error* 对象是最一般的错误类型，在它的基础上，JavaScript还定义了其他6种错误，也就是说，存在Error的6个派生对象。

## 1、SyntaxError

*SyntaxError* 是解析代码时发生的语法错误。

```javascript
let 1a = 10
// 'VM104:1 Uncaught SyntaxError: Unexpected number'

if(true) {
    console.log('Hi');
// 'VM104:1 Uncaught SyntaxError: Invalid or unexpected token'
}
```

## 2、ReferenceError

*ReferenceError* 是引用一个不存在的变量时发生的错误。

```javascript
let b = a;
// 'VM143:1 Uncaught ReferenceError: a is not defined(…)'
```

## 3、RangeError

*RangeError* 是当一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。

```javascript
var arr = new Array(-1);
// 'VM268:1 Uncaught RangeError: Invalid array length(…)'

(123).toExponential(21);
// 'VM376:1 Uncaught RangeError: toExponential() argument must be between 0 and 20(…)'
```

## 4、TypeError

*TypeError* 是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用*new*命令，就会抛出这种错误，因为*new*命令的参数应该是一个构造函数。

```javascript
var s = new 'Hi';
// 'VM424:1 Uncaught TypeError: "Hi" is not a constructor(…)'

var obj = {}; obj.test();
// 'VM493:2 Uncaught TypeError: obj.test is not a function(…)'
```

## 5、URIError

*URIError* 是URI相关函数的参数不正确时抛出的错误，主要涉及*encodeURI()*、*decodeURI()*、*encodeURIComponent()*、*decodeURIComponent()*、*escape()*和*unescape()*这六个函数。

```javascript
ecodeURI('%@')
// 'VM525:1 Uncaught URIError: URI malformed(…)'
```

## 6、EvalError

*eval* 函数没有被正确执行时，会抛出*EvalError*错误。该错误类型已经不再在ES5中出现了，只是为了保证与以前代码兼容，才继续保留。

> tips：以上6种派生错误，连同原始的Error对象，都是构造函数。开发者可以使用它们，生成错误对象的实例。

## throw语句

`throw` 语句的作用是中断程序执行，抛出一个意外或错误。它接受一个表达式作为参数，可以抛出各种值。

```javascript
throw 123;
throw 'hi';
throw false;
throw {};
```

可以通过自定义一个 `assert` 函数，规范化 `throw` 抛出的信息。

```javascript
function assert(expression, message) {
    if (!expression){
        throw 'CustomError:' +  message;
    }
}
```

上面代码定义了一个*assert*函数，它接受一个表达式和一个字符串作为参数。一旦表达式不为真，就抛出指定的字符串。这个方法与 ***console.assert()*** 方法一致。

## try…catch结构

如果要对错误进行处理，可以使用 ***try…catch*** 结构，*try* 代码块抛出一个错误，可以在 *catch* 中对该错误进行捕获，*catch* 接受一个参数，表示 *try* 代码块抛出的值。*catch* 代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去。

```javascript
try {
	alertt("Hello, World!");
}catch(err) {
	// 捕捉异常
	var des = "错误警告：" + err.message;
	alert(des);
}
```

```javascript
function validation(stuCard, IDCard) {
	try {
		// 自定义错误
		// 一旦检测到错误，则直接抛出异常,try语句之后的代码不再执行；
		if (!stuCard && !IDCard) {
			throw '双证不齐全，不能进入考场！';
		}
		if (!stuCard)  {
			throw '未带学生证，不能进入考场！';
		}
		if(!IDCard) {
			throw '未带身份证，不能进入考场！';
		}

		console.log('验证成功，请进入考场！');
	
	}catch(err) {
		console.log('警告：' + err);
	}
}

validation();
// '双证不齐全，不能进入考场！'
```

> tips：try…catch 结构是JavaScript语言受到Java语言影响的一个明显的例子。这种结构多多少少是对结构化编程原则一种破坏，处理不当就会变成类似goto语句的效果，应该谨慎使用。

## finally

*try…catch* 结构允许在最后添加一个 *finally* 代码块，表示不管是否出现错误，都必需在最后运行的语句。

```javascript
try {
  //...
}catch {
  //...
}finally {
  //...
}
```











