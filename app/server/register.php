<?php
    // 获取每一个字段的值
    $username = $_POST['username'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];

    $sqlName = "select * from user where username='$username'";
    $sql = "INSERT INTO USER  (`username`, `password`,  `repassword`) VALUE ('$username', '$password',  '$repassword')";

    $coon = new Mysqli('localhost', 'root', '', 'admin', 3306);
    $coon->query("SET CHARACTER SET 'utf8'"); 
    $coon->query("SET NAMES 'utf8'");
    $resultName = $coon -> query($sqlName);
    //判断用户名已存在
    if($resultName->fetch_object()){
        $arr = array('code' => '404','message' => '用户名已存在，请重新注册！');
    }else{
        $result = $coon -> query($sql);
        if($result) {
            $arr = array('code' => '200','message' => '恭喜您注册成功');
            
        } else {
            $arr = array('code' => '404','message' => '注册失败，请重新注册！');        
        }
    }
    echo json_encode($arr);
?>