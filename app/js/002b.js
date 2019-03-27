var shopList = (function () {
    var $box,shopData,scj,name,numberIn;
    return {
        init: function ($el) {
            $box = $($el);
            name = document.querySelector('.name');
            scj = document.querySelector('.scj');
            gongji = document.querySelector('.gongji');
            numberIn = document.querySelector('.numberIn');
            this.getShopData();
            this.event();
        },
        event: function () {
            var _this = this;
            $box.on('click','.btn-r',function(){
                var index = $(this).index('.btn-r');
                var val = $('.numberIn').val() - 0;
                shopData[index].count = val;
                _this.setCarData(shopData[index]);
            })
        },
        getShopData() {
            $.getJSON('json/shop.json', data => {
                this.insertData(data);
            });
        },
        setCarData(data) {
            let shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            var flag = true;
            for(var i = 0; i < shopList.length;i++){
                if(shopList[i].id == data.id){
                    shopList[i].count += data.count;
                    flag = false;
                    break;
                }
            }
            if(flag){
                 shopList.push(data);
            }

           
            localStorage.shopList = JSON.stringify(shopList);
        },
        insertData({ data }) {
            shopData = data;
            data.forEach(x => {
                name.innerHTML = x.name;
                scj.innerHTML = x.price;
                gongji.innerHTML = x.price * numberIn.value;
            })
            
        }
    }
}())
