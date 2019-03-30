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
var xs =$('.xiangshang');
var gg =$('.guanggao');
var gg1 =$('.guanggao1');
var xf =$('.xuanfu');
if(document.documentElement.scrollTop<=300){
    gg.css({display:'none'});
    gg1.css({display:'none'});
    xs.css({display:'none'});
    xf.css({display:'none'});}
$(window).scroll( function() { 
    if(document.documentElement.scrollTop<=300){
        gg.css({display:'none'});
        gg1.css({display:'none'});
        xs.css({display:'none'});
        xf.css({display:'none'});
    }else{
        gg.css({display:'block'});
        gg1.css({display:'block'});
        xs.css({display:'block'});
        xf.css({display:'block'});
    }
} );
