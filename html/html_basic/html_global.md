# html全局属性

## 概述

HTML全局属性是可以应用于几乎所有（部分属性有一定的应用范围限制）的HTML标签的属性，现在已知的属性有16个，其中有一半左右是HTML5标准后出现的，很多属性在我们之前的学习中都已经接触过了的，能熟练地记识这些属性能够给我们之后的Web开发带来很多便利，减少开发中所犯的一些低级错误。作为一个Web前端工程师，能够准确地区分全局属性和特殊属性也是一项重要的基本功。接下来我们就来看看在HTML中哪些属性能够作为并为大部分主流浏览器所兼容的全局属性。

## 全局属性

#### 1.id 

该属性能用于所有的HTML元素，为HTML元素指定一个唯一的标识符，用于CSS设置，JavasSript进行操作或其它脚本语言及服务器端语言进行设置操作。
	
	```
	
	<p id="des"></p>
	<b id="title"></b>
	
	```
	
#### 2. class

该属性可以用于所有HTML元素，为元素添加一个或多个类名。通常是用于CSS设置或配合JavaScript进行操作设置，多个类名以空格符进行分隔，多个元素可以使用同一个类名。

	```
	<section class="box fr"></section>
	<section class="box"></section>
	
	```
	
#### 4. title

该属性可以用于所有HTML元素，通过设置它的值，可以让用户鼠标悬浮在该元素上显示出“title”属性中所设置的值。如之前提到的 <img> 标签。

	```
	<img src="1.jpegv" alt="图片加载失败..." title="Ferrari">
	```
	
![](1.jpeg)


该属性在现在PC端中的Web开发非常常用，由于现在Web设计的趋势是简洁化、扁平化设计，页面上的元素也需要极力地简洁，很多常用的按钮甚至都没有文字，而是采用一个图标进行替代。但这样的设计会让有些用户不清楚按钮的实际用途，这个时候 title 就能起到一个补充说明的作用。

#### 5. lang

该属性用于设置元素的语言类型，不支持的标标有\<base\>，\<br\>，\<frame\>，\<frameset\>，\<hr\>，\<iframe\>，\<param\> 及 \<script\>，但通常的使用方式是直接给<html>标签设置该属性，如：\<html lang="zh-cn"\>、\<html lang="zh"\>、\<html lang="en"\>这样的形式，分别表示将语言类型设置为“简体中文”、“中文”、“英文”。

>i18n


