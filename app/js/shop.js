var shopCar = (function () {
    var $box, shopData, $main, $kong, height, $checkItem, $checkTotal;
    return {
        init: function ($el) {
            $box = $($el);
            $main = document.querySelector('main');
            $kong = document.querySelector('.kong');
            $checkTotal = $('.check-all');
            $checkItem = $('.check input');
            this.getCarData();
            this.event();
            this.panduan();
        },
        event: function () {
            var _this = this;
            $checkTotal.click(function () {
                var bool = $(this).prop('checked')
                if (bool) {
                    $('input').prop('checked', true);
                } else {
                    $('input').prop('checked', false);
                }
            })
            $('.shanchu').on('click', function () {
                if ($('.check input').prop('checked')) {
                    var index = $(this).index('.del');
                    shopData.splice(index, 1);
                    _this.insertData(shopData);
                    _this.setCarData();
                    _this.panduan();
                }
            })

            $box.on('click', '.check input', function () {
                if (!$(this).prop('checked')) {
                    $checkTotal.prop('checked', false);
                } else if ($(this).prop('checked')) {
                    $checkTotal.prop('checked', true);
                }

            })

            $box.on('click', '.del', function () {
                var index = $(this).index('.del');
                shopData.splice(index, 1);
                _this.insertData(shopData);
                _this.setCarData();

                _this.panduan();
            })
            $box.on('change', '.numberIn', function () {
                var val = $(this).val() - 0;
                var index = $(this).index('.numberIn');
                shopData[index].count = val;
                _this.insertData(shopData);
                _this.setCarData();
            })
            $box.on('click', '.reduce', function () {
                var val = $('.numberIn').val() - 1;
                if (val < 1) {
                    val = 1;
                }
                var index = $(this).index('.reduce');
                shopData[index].count = val;
                _this.insertData(shopData);
                _this.setCarData();
            })
            $box.on('click', '.increase', function () {
                var val = $('.numberIn').val() - 0 + 1;
                var index = $(this).index('.increase');
                shopData[index].count = val;
                _this.insertData(shopData);
                _this.setCarData();
            })
        },
        getCarData() {
            var data = localStorage.shopList || '[]';
            this.insertData(JSON.parse(data));
        },
        setCarData() {
            localStorage.shopList = JSON.stringify(shopData);
        },
        insertData(data) {
            $box.html('');
            shopData = data;
            data.forEach(x => {
                var htmlTemplate = `
                 <div class="clearfix">
                <ol>
                    <li class="check">
                        <input type="checkbox">
                    </li>
                    <li class="shopBox">
                        <div class="tp">
                            <img src="${x.img}" alt="">
                        </div>
                        <p style="line-height:25px;">${x.name}</p>
                    </li>
                    <li>¥${x.price}</li>
                    <li>-</li>
                    <li>有货</li>
                    <li>
                        <span class="reduce reduceDisable">-</span>
                        <input id="buyNum" class="numberIn" value="${x.count}">
                        <span class="increase">+</span>
                    </li>
                    <li>¥${x.price * x.count}</li>
                    <li class="cartOperation">
                        <div class="shopcartchangefont">
                            <a>收藏</a>
                            <a class="del">删除</a>
                        </div>
                    </li>
                </ol>
            </div>
                `
                $('.yixuan').html(x.count);
                $('.heji').html(x.count * x.price);

                $box.append(htmlTemplate);
            })
        },
        getStyle(obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj, null)[attr]
            }
            return obj.currentStyle[attr];
        },
        panduan() {
            height = this.getStyle($main, 'height');
            height = parseInt(height);
            if (height > 860) {
                $kong.style.display = 'none';
            } else {
                $kong.style.display = 'block';
            }
        }

    }
}())