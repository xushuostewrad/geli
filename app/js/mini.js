var xs =$('.xiangshang');
var gg =$('.guanggao');
var gg1 =$('.guanggao1');
var xf =$('.xuanfu');
// console.log(xs);
// var flag =ture;
// xs.scrollTop()
// xs.hide("fast",function(){
//     xs.scrollTop<(300)
  
// })
// console.log(gg.scrollTop==0)
// if(gg.scrollTop                         ){
//     gg.display='none';
// }
// console.log(this.scrollTop);
// $('document').ready(function(){
//     console.log(document.documentElement.scrollTop);
//     if(document.documentElement.scrollTop<=300){
//         gg.css({display:'none'});
//     }
// })
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