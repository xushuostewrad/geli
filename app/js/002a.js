var glass = (function(){
    var $bigImg,$filter,$showImg,juli,$zdImg ,$imgBox,imgIndex,$drdImg,$leftBtn,$rightBtn;
    return{
        init(){
            $bigImg = document.querySelector('.bigImg');
            $drdImg = document.querySelector('.bigImg img');
            $filter = document.querySelector('.filter');
            $showImg = document.querySelector('.showImg');
            $zdImg = document.querySelector('.showImg img');
            $imgBox = document.querySelector('.imgBox');
            $leftBtn = document.querySelector('.left-btn');
            $rightBtn = document.querySelector('.right-btn');
            $smallImg = $imgBox.children;
            juli = document.querySelector('.mianTop_l')
            this.event();
            this.showImg(0);
            this.addIndex();
            
        },
        event(){
            const _this = this;
            $leftBtn.onclick = function(){
                _this.showImg(imgIndex - 1)
            }
            $rightBtn.onclick = function(){
                _this.showImg(imgIndex + 1)
            }
            $imgBox.onclick = function(e){
                 if(e.target.nodeName == 'IMG'){
                   _this.showImg(e.target.parentNode.index);
                }
            }
            $bigImg.onmouseenter = function(e){
                $filter.style.display = 'block';
                $showImg.style.display = 'block';
               
            }
            $bigImg.onmousemove = function(e){
                 e = e || window.event;
                let X = e.pageX - $filter.offsetWidth / 2 - juli.offsetLeft;
                let Y = e.pageY - $filter.offsetHeight / 2 - juli.offsetTop;
                let maxX = $bigImg.clientWidth - $filter.offsetWidth,
                maxY = $bigImg.clientHeight - $filter.offsetHeight;

                if(X < 0){
                    X = 0;
                }else if(X > maxX){
                    X = maxX;
                }
                if(Y < 0){
                    Y = 0;
                }else if(Y > maxY){
                    Y = maxY;
                }

                $filter.style.left = X + 'px';
                $filter.style.top = Y + 'px';

                $zdImg.style.left = -2.5 * X + 'px';
                $zdImg.style.top = -2.5 * Y + 'px';
            }
            $bigImg.onmouseleave = function(){
                $filter.style.display = 'none';
                $showImg.style.display = 'none';
            }
        },
        showImg(index){
            
            if(index < 0){
                index = $smallImg.length - 1;
            }else if(index > $smallImg.length - 1){
                index = 0;
            }
            imgIndex = index;
            for(let i = 0;i <$smallImg.length;i++){
                $smallImg[i].classList.remove('active');
            }
            
            $smallImg[index].classList.add('active');
            $li = $smallImg[index];
            let src = $li.children[0].getAttribute('src');
            $drdImg.src = src.replace('(3','(2');
            $zdImg.src = src.replace('(3','(1')
            
        },
        addIndex(){
            for(let i = 0;i <$smallImg.length;i++){
                $smallImg[i].index = i;
            }
        }
    }
}())