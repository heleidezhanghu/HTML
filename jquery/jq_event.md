# js事件

## 鼠标事件


#### 1. 概述


#### 2. 使用方式

##### 1. click 被鼠标点击

```
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="../../sources/jq/jq.js"></script>
    <style>
        div {
            background: #bbffaa;
            width: 300px;
        }
    </style>
</head>

<body>
<h2>通过empty移除元素</h2>
<div id="test">
    <p>p元素1</p>
    <p>p元素2</p>
    <ul>

        <li>
            sdfa
        </li>
        <li>
            dsaf
        </li>
        <li id="li1">
            dsaf
        </li>
        <li>
            dsaf
        </li>
        <li>
            dsaf
        </li>
        <li>
            dsaf
        </li>
    </ul>
</div>
<button>点击通过jQuery的empty移除元素</button>
<script type="text/javascript">
    $("button").on('click', function() {
        //通过empty移除了当前div元素下的所有p元素
        //但是本身id=test的div元素没有被删除
        $("#li1").siblings().css('border','1px solid')
    })
</script>
</body>

</html>

```
##### 2. mouseover与mouseout事件  鼠标移动和移出事件 可以实现hover的效果

```

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="../../sources/jq/jq.js"></script>
    <style>
        div {
            background: #bbffaa;
            width: 300px;
        }
    </style>
</head>

<body>
<h2>通过empty移除元素</h2>
<div id="test">
    <p>p元素1</p>
    <p>p元素2</p>
    <ul>

        <li>
            sdfa
        </li>
        <li>
            dsaf
        </li>
        <li id="li1">
            dsaf
        </li>
        <li>
            dsaf
        </li>
        <li>
            dsaf
        </li>
        <li>
            dsaf
        </li>
    </ul>
</div>
<button>点击通过jQuery的empty移除元素</button>
<script type="text/javascript">
    $("button").mouseover(function() {
        //通过empty移除了当前div元素下的所有p元素
        //但是本身id=test的div元素没有被删除
        $("#li1").siblings().css('border','1px solid')
    })

    $("button").mouseout(function() {
        //通过empty移除了当前div元素下的所有p元素
        //但是本身id=test的div元素没有被删除
        $("#li1").siblings().css('border','')
    })
</script>
</body>

</html>

```

##### 3.hover

说明: 使用hover 就可以不用写两个函数

```

    $("button").hover(function() {
        //通过empty移除了当前div元素下的所有p元素
        //但是本身id=test的div元素没有被删除
        $("#li1").siblings().css('border','1px solid')
    },function() {
        //通过empty移除了当前div元素下的所有p元素
        //但是本身id=test的div元素没有被删除
        $("#li1").siblings().css('border','')
    })
```
