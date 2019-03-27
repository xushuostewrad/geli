var check={
    username(val){
        const reg=/^1[35789]\d{9}$|^\w+@\w+\.\w+$/;
        return reg.test(val);
    },
    password(val){
        const reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
        return reg.test(val);
    },
    // repassword(val){
    //     const reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
    //     return reg.test(val);
    // },
    // code(val){
    //     const reg=/^\w{1,4}$/;
    //     return reg.test(val);
    // }


}

// 表单验证传值
var checkInput=(function(){
    var $requestInpAll,$p1,$p2,$p3,codeVal;
    return{
        init(ele){          
            $form = $(ele);
            $requestInpAll =$('input');
            $repassword=document.querySelector('#repassword');
            $p1=document.querySelector('.p1');
            $p2=document.querySelector('.p2');
            $p3=document.querySelector('.p3');

            
            this.event();
            this.createCode();
            // console.log(codeVal);
        },
        event(){
            const self = this;           
            for (var i = 0; i < $requestInpAll.length-3; i++) {
                $requestInpAll[i].onblur = function () {
                    self.tips(this);
                }
            }
            $('#username').on('focus',function(){
                $p1.innerHTML='请输入邮箱或者手机号码';
                $p1.className='lose';
            })
            $('#password').on('focus',function(){
                $p2.innerHTML='8-12位字符，并且必须包含数字跟字母';
                $p2.className='lose';  
            })
            // $('#password').on('blur',function(){
            //     if($('#password').val==''){
            //         $p2.innerHTML='请输入密码';
            //         $p2.className='lose';  
            //     }
                
            // })

            $('#repassword').on('blur',function(){
                let text = $('#repassword').val();  
                // console.log(text)
                if (text == $('#password').val()) {
                            $p3.innerHTML = '';
                            $p3.className = 'bg-success';
                        } else {
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
                // console.log(codeVal);            
                if($('.yanzhengma').val()==codeVal){
                    $('.p4').html('');
                    $('.p4').addClass("bg-success");
                }else{
                    $('.p4').html('请输入验证码');
                    $('.p4').addClass("lose");
                    $('.p4').css("color","red");
                   
                }
            })

            $('#code').on('click',function(){
                self.createCode();
                // console.log(codeVal);
            })
            window.onload = function () {
                self.createCode();
            }
                        
            // 点击验证登陆
            $('.btn').on('click',function(){
                for (let i = 0; i < $requestInpAll.length-1; i++) {                   
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