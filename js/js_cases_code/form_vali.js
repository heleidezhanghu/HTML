

function validateForm() {
    // 验证账号
    var acc = document.forms["myForm"]["account"].value;
    if (acc == null || acc == "") {
        alert("账号不能为空!");
        return false;
    }
    // 验证密码
    var pwd = document.forms["myForm"]["pwd"].value;
    if (pwd == null || pwd == "") {
        alert("密码不能为空!");
        return false;
    }
    // 检查合法性 //字面量声明
    var pwdRegex = /^\d{6}$/;
    if (!pwdRegex.test(pwd)) {
        alert("密码必须要有6位");
        return false;
    }
    // 获取验证密码框
    var rePwd = document.forms["myForm"]["repwd"].value;
    if (rePwd == null || rePwd == "" || pwd != rePwd) {
        alert("密码验证不匹配!");
        return false;
    }
    // 获取邮箱
    var email = document.getElementById("emailId").value;
    if (email == null || email == "") {
        alert("邮箱不能为空!");
        return false;
    }
    // 检查邮箱合法性
    var emailRegEx = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegEx.test(email)) {
        alert("邮箱不合法!");
        return false;
    }
    // 检查性别
    var radioArr = document.getElementsByName("gander");
    if (radioArr[0].checked == radioArr[1].checked) {
        alert("请选择性别!");
        return false;
    }

    // 检查爱好至少选择一个
    var isSelLike = false;
    var checkboxArr = document.getElementsByName("like");
    for (var i = 0;i < checkboxArr.length;i++) {
        if (checkboxArr[i].checked) {
            isSelLike = true;
            break;
        }
    }
    if (!isSelLike) {
        alert("请选择爱好!");
        return false;
    }

    // 获取城市选项值
    var cityArr = document.getElementsByName("city");
    // 选中的城市
    var selectCity = "";
    for (var i = 0;i < cityArr.length;i++) {
        // <option>的selected属性可以判断是否选中
        if (cityArr[i].selected) {
            selectCity = cityArr[i].value;
            break;
        }
    }

    console.log(selectCity);

}










