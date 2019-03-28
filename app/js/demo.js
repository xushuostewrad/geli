$(".categorysT").hover(function(){
    console.log('移入')
    $(".wrapper-message").css({display:'block'});
},function(){
    console.log('移出')
    $(".wrapper-message").css({display:'none'});
})
$('.carMini').on('click',function(){
    location.href = 'spxq.html'
})


// cookie
var username = document.cookie;
console.log(username)
if(username!=''){
    $('.user-cookie').html(document.cookie);
    $('#register').html("注销");
    $('#register').on('click',function(){
        location.href = 'login.html'
    })
}else{
    $('#login').on('click',function(){
    location.href = 'login.html'
    })
    $('#register').on('click',function(){
        location.href = 'register.html'
    })
}

