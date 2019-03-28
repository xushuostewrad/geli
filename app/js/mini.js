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
$('#login').on('click',function(){
    location.href = 'login.html'
})
$('#register').on('click',function(){
    location.href = 'register.html'
})
$('.searchBtn').on('click',function(){
    location.href = 'ziye.html';
})