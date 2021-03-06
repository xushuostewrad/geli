var check={
    username(val){
        const reg=/^1[35789]\d{9}$|^\w+@\w+\.\w+$/;
        return reg.test(val);
    },
    password(val){
        const reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
        return reg.test(val);
    }
}

// 表单验证传值
var checkInput=(function(){
    var $requestInpAll,$p1,$p2,$p3,$p4,codeVal;
    return{
        init(ele){          
            $form = $(ele);
            $requestInpAll =$('input');
            $repassword=document.querySelector('#repassword');
            $p1=document.querySelector('.p1');
            $p2=document.querySelector('.p2');
            $p3=document.querySelector('.p3');
            $p4=document.querySelector('.p4');

            
            this.event();
            this.createCode();
            // console.log(codeVal);
        },
        event(){
            const self = this;           
            for (var i = 0; i < $requestInpAll.length-4; i++) {
                $requestInpAll[i].onblur = function () {
                    self.tips(this);
                }
            }
            $('#username').on('focus',function(){
                $p1.innerHTML='请输入邮箱或者手机号码';
                $p1.className='lose';
            })
            $('#username').on('blur',function(){
                let userval=$('#username').val();
                const reg=/^1[35789]\d{9}$/;
                if(reg.test(userval)){
                    $('.phone').css("display","block");
                }else{
                    $('.phone').css("display","none");
                }
            })


            $('.phone-text').on('blur',function(){
                if($('.phone-text').val()===''){
                    $('.p6').html('请输入手机验证码');
                    $('.p6').addClass("lose");
                    $('.p6').css("color","red");  
                }else{
                    $('.p6').html('');
                    $('.p6').addClass("bg-success");
                }
                
            })
         
            $('#password').on('focus',function(){
                $p2.innerHTML='8-12位字符，并且必须包含数字跟字母';
                $p2.className='lose';  
            })


            $('#repassword').on('blur',function(){
                let text = $('#repassword').val();  
                // console.log(text)
                if (text == $('#password').val()&&text!='') {
                            $p3.innerHTML = '';
                            $p3.className = 'bg-success';
                        }else if(text===''){
                            $p3.innerHTML = '请再次输入密码';
                            $p3.className = 'lose';
                        }
                         else{
                            $p3.innerHTML = '两次密码输入不一致';
                            $p3.className = 'lose';
                            console.log(111)
                        }
             })  
             $('#repassword').on('focus',function(){
                //  console.log(111)
                if($('#repassword').val()===''){
                            $p3.innerHTML='请输入密码';
                            $p3.className='lose';  
                        }
             })
            

            // 验证验证码
            $('.yanzhengma').on('blur',function(){  
                console.log(codeVal);            
                if($(this).val()==codeVal){
                    $p4.innerHTML = '';
                    $p4.className = 'bg-success';
                }else{
                    $('.p4').html('请输入验证码');
                    $('.p4').addClass("lose");
                    $('.p4').css("color","red");
                   
                }
            })
            // 验证复选框是否选中
            $('.check-text').on('click',function(){
                // console.log(1);
                if($(this).prop('checked')){
                    // 点击验证登陆
                    $('.btn').on('click',function(){
                        for (let i = 0; i < $requestInpAll.length-2; i++) {                   
                            const $input = $requestInpAll[i];
                            const $p = $input.nextElementSibling;
                            if ($p.className != 'bg-success') {
                                $input.focus();
                                return false;
                            }
                        }
                        let username = $requestInpAll[0].value;
                        let password = $requestInpAll[1].value;
                        let repassword = $requestInpAll[2].value;
                        $.post('server/register.php',{username,password,repassword},function(data){
                            data = JSON.parse(data);
                            if(data.code != '404'){
                                alert(data.message);
                                location.href = 'login.html';
                            }else{
                                alert(data.message);
                                history.go(0);
                            }
                        })    
                    })
                }
            })


            $('#code').on('click',function(){
                self.createCode();
                // console.log(codeVal);
            })
            window.onload = function () {
                self.createCode();
            }
                        
          
            
        },


        tips($input){ 
                // 根据不同的表单， 使用不同的正则表达式
                const name = $input.name; //username
                const text = $input.value;
                const $p = $input.nextElementSibling;
                console.log($input);
                if(check[name](text)) {
                    // 验证成功
                    $p.innerHTML='';
                    $p.className = 'bg-success';
                } else{
                    $p.innerHTML = $input.getAttribute('data-error');
                    $p.className = 'lose';
            }
        },
        // 生成验证码
        createCode() {
            codeVal = '';
            var codeLength = 4;
            let codeV = document.querySelector('.random');
            var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            for (var i = 0; i < codeLength; i++) {
                var index = Math.floor(Math.random() * 36);
                codeVal += random[index];
            }
            codeV.innerHTML = codeVal;
        }        
    }

}())
var flag=1,j=60;
function countDown() {
    j = j - 1;
    $(".phone-a").html(j + "秒后重新发送");
    if (j == 0) {
        $(".phone-a").html("获取手机验证码");
        flag = 1;
        j = 60;
        return;
    }
    setTimeout('countDown()', 1000);
} 
$('.phone-a').on('click',function(){               
    countDown();
 })