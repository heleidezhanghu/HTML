# css基础

## css简介

CSS，全称“Cascading Style Sheets （层叠样式表）”，用于设置HTML标签的样式，它的基本结构如下：

![](../../pics/css/IMGS/css.jpg)

#### 引入方式

使用样式表主要 有4种方式，即，“行内样式”、“内嵌样式”、“外链样式”、“导入式”。

#### 1、行内样式

是将 “style” 作为一个标签的属性，然后通过它的值来设置样式。写法如下：

```html
	<div style="width: 300px; height: 300px; background-color: red;"></div>
```

#### 2、内嵌样式

是将样式作为个标签放置于\<head>标签对以内，让浏览器在加载完成其它基本信息后，首先将样式给渲染出来。标签名为“\<style>”，若项目采用的是HTML严格模式/标准模式(standard mode)开发，那需要为该标签添加一个“type”属性，将值设为“text/css”。写法如下：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- 内嵌样式 -->
	<style type="text/css">
		div { width:  300px; height: 300px; background-color: red; }
	</style>
</head>
<body>
	<div></div>
</body>
</html>
```

#### 3、外链样式

同样是将\<link>放置于\<head>标签对以内，通过该标签的“href”属性的值去获取CSS文件的绝对/相对路径。该标签必须要具有“*rel*”属性，并且将值设为“*stylesheet*”，否则浏览器将不能正确的解析CSS文件进行样式渲染，写法如下：

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- 外链样式 -->
	<link rel="stylesheet" href="stylesheets/index.css">
</head>
<body>
	<div></div>
</body>
</html>
```

```css
/*index.css*/

@charset "UTF-8";

div {
	width:  300px;
	height: 300px;
	background-color: red;
}
```

需要注意的是，CSS文件开头需要设置一个编码格式，通常我们都是将其设为统一编码格式“UTF-8”（不区分大小写）。虽说不设置该值对CSS代码本身执行影响不大，但是在我们通过浏览器“开发者工具”查看CSS代码的时候，里面的“中文注释”会显示成乱码。其次，指定编码格式后的分号（`;`）不能省略。


#### 通过< link >标签引用CSS文件

在实际的项目开发过程中，我们一般都是将CSS单独存放在一个文件夹中，然后在HTML页面中通过 如下形式进行引用。

```html
<link rel="stylesheet" href="样式表路径+名称.css">
```

引用后CSS文件仍然是独立的，不会受到包括HTML和JavaScript任何方法和函数的影响，如果CSS文件中涉及到文件路径的相对位置，那么也是以CSS文件所在的文件路径位置为准，而非引用它的HTML文件的文件路径位置。

相对于“行内样式”和“内嵌样式”而言，“外链样式”即通过\<link>标签引用CSS样式有以下好处：

1. 简化了DOM结构，实现了内容和表现的分离，使HTML和CSS文件结构更加清晰，利于维护
2. 大大减少了CSS代码的编写量。项目越大，这一点体验得越明显
3. \<link>可以和其它\<link>、JS文件以及\<body>内的内容进行多线程加载，使得加载速度更快
4. 利于项目整体风格的调整，维护起来也更加便捷。单文件修改，全网站（应用）生效
5. 浏览器会将CSS文件进行缓存，进一步地减少了加载所需时间
6. 可以根据需要利用JavaScript或Media动态的组合所需的CSS文件
7. 对搜索引擎友好，有利于SEO

#### 引用优先级

以上四种样式的引用方式，按照优先级从高到低排列分别是：

```
行内样式 > 内嵌样式 > 外链样式 
```

为了便于记忆，我们可以这样理解：越是离我们要设置样式标签元素近的CSS样式，那优先级越高，反之，优先级越低。当然在这里需要明白的是，CSS样式的引用优先级没有优先级越高越好或者优先级越低越好的说法，我们是要利用样式优先级这一特性，在是我们写更少的CSS代码同时，又使我们的Web页面表现力更加丰富。

另外，通过 `!important` 可以提升样式的优先级，如下所示：

```css
.title {
  	color: blue !important;
}
```

## css 16进制颜色

颜色值
CSS 颜色使用组合了红绿蓝颜色值 (RGB) 的十六进制 (hex) 表示法进行定义。对光源进行设置的最低值可以是 0（十六进制 00）。最高值是 255（十六进制 FF）。

十六进制值使用三个双位数来编写，并以 # 符号开头。

![](../../pics/css/home_works/4.png)

## css 设置背景颜色

background-color：属性定义了元素的背景颜色.
	body {background-color:#b0c4de;} 
十六进制 - 如："#ff0000"
RGB - 如："rgb(255,0,0)"
颜色名称 - 如："red”

background-image：属性描述了元素的背景图像.
	默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体.
	body {background-image:url('paper.gif');} 


1. 使用css 设置背景颜色

   >css/css_basic/css_backgroud.html

	```
	
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	    <style>
	
	        body{
	
	            background-color: black;
	
	        }
	    </style>
	</head>
	<body>
	
	</body>
	</html>
	
	```
	




















