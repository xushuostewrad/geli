var test = (function () {
    return {
        init() {
            this.event();
        },
        event() {
            $('.click-login').on('click',function(){
                //获取用户名
                let username = $('#username').val();
                //获取密码
                let password = $('#password').val();
                $.post('server/login.php',{username,password},function(data){
                    data = JSON.parse(data);
                    if(data.code != '404'){
                        document.cookie = `${data.id}; path=/`;
                        location.href = 'demo.html';
                    }else{
                        alert(data.message);
                    }
                    
                })
            })

            $('#username').on('blur',function(){  
                if ($(this).val() === "") {
                    $('.p1').html('请输入 邮箱/手机号/用户名');
                    $('.p1').addClass("lose");
                    $(this).addClass("getcolor");
                    setTimeout( ()=> {
                        $('.p1').html('');
                        $(this).removeClass("getcolor");
                    }, 1000)
                }
            })

            $('#password').on('blur',function(){
                if($(this).val()===""){
                    $('.p2').html('请输入密码');
                    $('.p2').addClass("lose");
                    $(this).addClass("getcolor");
                    setTimeout(()=>{
                        $('.p1').html('');
                        $(this).removeClass("getcolor");
                    },1000)
                }
            })
            
        }


    }
}())