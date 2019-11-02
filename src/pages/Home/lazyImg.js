/*
 * @Author: your name
 * @Date: 2019-10-30 19:33:01
 * @LastEditTime: 2019-10-31 09:04:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qllx\src\pages\Home\lazyImg.js
 */
 //滚动加图片
import $ from 'jquery';
(function(ImgLazy){
    var $winH = $(window).height(); //获取窗口高度
    var $img = $("img[lazy='y']");  //获取页面上要延时加载的图片集合
    var $imgH = parseInt($img.height() / 4); //图片到四分之一的时候显示
    var $srcDef = "/content/images/loading.gif";
    var runing = function () {
        $img = $("img[original]");
        $img.each(function (i) {//遍历img
            var $src = $(this).attr("original"); //获取当前img URL地址
            if ($src && $src.length >= 0 && $src.indexOf("{") < 0) {
                var $scroTop = $(this).offset(); //获取图片位置
                if ($scroTop.top + $imgH >= $(window).scrollTop() && $(window).scrollTop() + $winH >= $scroTop.top + $imgH) {//判断窗口至上往下的位置
                    if ($(this).attr("src") == $srcDef) {
                        $(this).hide();
                    }
                    $(this).attr("src", function () { return $src }).fadeIn(300); //元素属性交换
                    $(this).removeAttr("original");
                }
            }
        });
    }
    runing(); //页面刚载入时判断要显示的图片
    $(window).scroll(function () {
        runing(); //滚动刷新
    })
})($)
//  var ImgLazy = function () {
    
    
// };
export default $;