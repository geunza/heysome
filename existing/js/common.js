/*
$.ajax({ 
    url : "header.html",
    dataType: "html",
    async: false,
    cache: false,
    error : function(error) {
    console.log("Error!");
    },
    success : function(data) {
        $('.header').html(data);
    },
    complete : function() {
        console.log("complete!");
    }
});
$.ajax({ 
    url : "footer.html",
    dataType: "html",
    async: false,
    cache: false,
    error : function(error) {
    console.log("Error!");
    },
    success : function(data) {
        $('.footer').html(data);
    },
    complete : function() {
        console.log("complete!");
    }
});
*/

// 높이 지정
var $height = $(window).outerHeight();
$("body").css("min-height",$height+'px');
// 높이 지정

// index - guide
var guideSwiper = new Swiper('.guide-swiper',{
    pagination: {
        el: '.guide-pagination'
    }
});
$('.guide-close').click(function(){
    $('.guide_popup').fadeOut();
});


// index - 메인비쥬얼 슬라이더
var swiper = new Swiper(".main-visual .swiper-container", {
    pagination: {
        el: ".main-visual .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".main-visual .swiper-button-next",
        prevEl: ".main-visual .swiper-button-prev",
    },
    autoplay:{
        delay:2000,
    }
});


// checkbox check all
$("#check-all").change(function(){
    var $stat = $(this).prop("checked")
    var $chk = $("."+$(this).attr("data-chk"));
    $stat ?  $chk.prop("checked", true) :  $chk.prop("checked", false);
});
$(".chk-item").change(function(){
    var $name = $(this).attr("name");
    var $length = $(`input[name='${$name}']`).length;
    var $sum = 0;
    $(`input[name='${$name}']`).each(function(){
        if($(this).prop("checked")){
            $sum++;
        }
        $length == $sum ? $("#check-all").prop("checked", true) : $("#check-all").prop("checked", false)
    });
});
// checkbox check all

//검색창
$(".ipt-search").on({
    focus: function () {
        if ($(".header").length > 0) {
            $(".header").addClass("search-open")
        }
        $(".search-pop").show();
    },
    //blur : function(){
    //    if($(".header").length > 0){
    //        $(".header").removeClass("search-open")
    //    }
    //    $(".search-pop").hide();
    //}
}); 
$(".menu-header").click(function () {
    if($(".search-pop").length > 0) $(".search-pop").hide();
});
$(".header").click(function () {
    $(".header").removeClass("search-open")
    if($(".search-pop").length > 0) $(".search-pop").hide();
})
$(".search-area").click(function (e) {
    e.stopPropagation();
})
//검색창

// mainMenu On/Off
$(".menu-btn").click(function(){
    $(".main-menu").stop().fadeToggle(300).css("display","flex");
})
// $(".menu-open").click(function(){
//     $(".main-menu").toggleClass(300);
//     $(".main-menu").css("display","flex");
// });
// $(".menu-close").click(function(){
//     $(".main-menu").stop().fadeOut(300)
// });
// mainMenu On/Off


// mainMenu Swiper
var swiper = new Swiper('.main-menu .swiper-container', {
    pagination:{
        el:".banner-wrap .swiper-pagination",
    },
    overserveParent : 1,
    overserver: 1,
    spaceBetween: 20,
});
// mainMenu Swiper

// 로그인 팝업
$('.login-pop').click(function(){
    $(this).stop().fadeOut();
});
$('.login-pop').children().click(function(e){
    e.stopPropagation();
});
// 로그인 팝업

// 기본 탭메뉴
$(".tab-btn").click(function(){
    var $tab = $(this).attr("data-tab");
    $(".tab-btn, .tab-area").removeClass("active");
    $(this).addClass("active");
    $("."+$tab).addClass("active");
});
// 기본 탭메뉴

// ar버튼 클릭
$(".main-menu .btn-ar").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("A")
    $(".main-menu .ipt-search").focus();
});
$(".idx-btns .btn-ar").click(function(e){
    console.log("B")
    e.preventDefault();
    e.stopPropagation();
    $(".main-search .ipt-search").focus();
});
$(".util-wrap .btn-ar").click(function(e){
    console.log("C")
    e.preventDefault();
    e.stopPropagation();
    $(".menu-open").click();
    $(".main-menu .ipt-search").focus();
});
// ar버튼 클릭

// 회원가입, 로그인 상단 슬라이더
var swiper = new Swiper(".sign .swiper-container", {
    pagination: {
        el: ".sign .swiper-pagination",
    },
});
// 회원가입, 로그인 상단 슬라이더

// 회원가입 탭메뉴(다음버튼)
$(".sign .btn-next").click(function(){
    var chk = 1;
    $(".signUp-chk.required").each(function(){
        if(!$(this).prop("checked")) chk--;
    });
    if(chk){
        $(".tab-01").hide();
        $(".tab-02").css('display','flex');
    }else{
        alert("필수항목을 선택해주세요. ");
    }
});
// 회원가입 탭메뉴(다음버튼)

// menu - top brands 슬라이드
var swiper = new Swiper(".brand-wrap .swiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    observer : true,
    observeParent : true,
});
// menu - top brands 슬라이드

// MY IMAGES
$('.myImages .list-item').click(function(){
    $(this).toggleClass('selected');
    let leng = 0;
    $('.list-item').each(function(){
        if($(this).hasClass('selected')) leng++;
    });
    $('.chk-numb').text(leng);
});

// payment
// payment_00
countCheck();
$('.payment .item_chk').change(function(){
    countCheck();
});
function countCheck(){
    let count = 0;
    let price = 2000;
    $('.payment .item_chk').each(function(){
        if($(this).prop('checked')) count++;
    });
    let total = (count * price).toLocaleString('ko-KR');
    $('.payment #qty').text(count);
    $('.payment #price').text(total);
}
$('.payment-wrap0 .payment_submit').click(function(e){
    let count = parseInt($('#qty').text());
    if(!(count>0)){
        e.preventDefault();
        alert('수량이 0 입니다.');
    }
});
// payment_01
$('.payment-wrap1 .payment_submit').click(function(e){
    let confirm = $('#chk_buy').prop('checked');
    if(!confirm){
        e.preventDefault();
        alert('구매진행에 동의를 해주세요.');
    }
});
$('.payment-wrap1 .way li').click(function(){
    $('.payment-wrap1 .way li').removeClass('selected');
    $(this).addClass('selected');
});