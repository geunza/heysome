const URL = window.URL || window.webkitURL;
let croppers = new Array();
let imageUrl = null;
let uploadImageWidth = 744;
let uploadImageHeight = 1185;
let cropperOptions = {
    aspectRatio:'NaN',
    viewMode: 0,
    dragMode: 'move',
    modal: false,
    autoCrop:true, //
    center:true, 
    restore: false,
    guides: false,
    center: false,
    highlight: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    background:false,
    cropBoxResizable: false,
    cropBoxMovable: false,
    ready(){
        this.cropper.setCropBoxData({
            width: this.cropper.getContainerData().width,
            height: this.cropper.getContainerData().height
        });
        this.cropper.bg = './images/temp/temp_00.png'; 
    }
}
let s_width = 0;
let s_height = 0;
let step = 0;
var files = null;
let imgSwiper = null; 

function stepChange(){
    $('.step').removeClass('active');
    $('.step'+step).addClass('active');
}
// 로딩중
function loading_s(){
    document.querySelector('.loading').classList.add('show');  
}
function loading_e(){
    document.querySelector('.loading').classList.remove('show'); 
}
// 파일 업로드
$('#file').off('change').on('change',  (e) =>  {
    loading_s();
    croppers = new Array();
    async function getFiles(resolve, reject){
        files = e.target.files;

        filesCheck(files);
        filesCopy(files);
        return files;
    }
    getFiles().then(function(res){

        async function imgControl(resolve, reject){
            let imgs = document.querySelectorAll('.c_img');
            imgs.forEach(function(v, i, arr){
                v.addEventListener('load', function(){
                    //if(v.width < 650 && v.height < 1000) {
                    //    if(!confirm("이사진은 해상도가 낮아 품질이 저하될 수 있습니다.\n계속 진행을 원하시면 확인을 눌러주세요."))
                    //    return;
                    //    // alert("이사진은 해상도가 낮아 품질이 떨어질수 있습니다.");
                    //    // return;
                    //}
                    
                    createCropper(v, i);
                });
            });
        }

        imgControl().then(function(){
          callSwiper();
          step++;
          stepChange();
          loading_e();
        });

    }).catch(function(){
        alert('catch')
    });
});

//파일 용량, length 체크
function filesCheck(files){
    if(!files){
        reject();
        return false
    };
    if(files.length > 4) {
        alert('최대 4장 까지만 선택 가능합니다.')
        $('#file').val('');
        reject();
        return false;
    };
    var check = 0;
    for(i = 0; i < files.length; i++){
        if(!/^image\/\w+/.test(files[i].type)) {
            check++
        }
        if(check > 0) {
            alert('이미지 파일만 불러올 수 있습니다.');
            $('#file').val('');
            reject();
            return false
        }
        if(Math.round(files[i].size/1024/1024) > 8) {
            alert(`${i}번째 이미지는 지정용량(8MB)을 초과하여 편집이 불가능합니다.`);
            return;
        }
    }
}

//Swiper 생성
function filesCopy(files){
    for(i = 0; i < files.length; i++){

        if(imgSwiper != null && i == 0){
          imgSwiper.destroy();
          $('.imgSwiper').find('.swiper-wrapper').removeAttr('style');
          $('.imgSwiper').find('.swiper-wrapper').html('');
        }

        var path = URL.createObjectURL(files[i]);
        if(i == 0){
            $('.imgSwiper').find('.swiper-wrapper').append(`
            <li class="swiper-slide swiper-slide-active" data-idx="${i}">
                <div class="imgWrap imgWrap${i}">
                    <img src="${path}" class="c_img" id="img${i}"/>
                </div>
                <div class="sizer"></div>
                <div class="cover" style="background-image:url('./images/temp/temp_00.png')"></div>
            </li>
            `)
        }else{
            $('.imgSwiper').find('.swiper-wrapper').append(`
            <li class="swiper-slide" data-idx="${i}">
                <div class="imgWrap imgWrap${i}">
                    <img src="${path}" class="c_img" id="img${i}"/>
                </div>
                <div class="sizer"></div>
                <div class="cover" style="background-image:url('./images/temp/temp_00.png')"></div>
            </li>
            `)
        }
    }
}

//Cropper 호출
function createCropper(v, i){
    let container = v.parentElement;
    let image = v;
    let cropper = new Cropper(image, cropperOptions);
    croppers.push(cropper);
}

//Swiper 호출
function callSwiper(){
    imgSwiper = new Swiper('.imgSwiper', {
    slidesPerView: 'auto',
    //spaceBetween: 20,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 10,
        stretch: 64,
        depth: 200,
        modifier: 2,
        slideShadows: false
    },
    centeredSlides: true,
    allowTouchMove: false,
    speed : 500, 
    observer:true,
    observeParent:true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });

    let tempSwiper = new Swiper('.tempSwiper', {
    slidesPerView: 'auto',
    freeMode: true,
    observer:true,
    observeParent:true, 
    });

    $('.tempSwiper').addClass('show');

    $('.tempSwiper').find('.swiper-slide').click(function(){
    let src = $(this).find('img').attr('src');
    let slide = $('.imgSwiper').find('.swiper-slide-active');
    let id = slide.find('img')[0].id;
    let idx = croppers.findIndex(x => x.element.id == id);
    croppers[idx].bg=src;
    $('.imgSwiper').find('.swiper-slide-active').find('.cover').css('background-image',`url(${src})`);
    });
}
//현재 slide 90deg 회전
$('.btn_rotate').click(function(e){
    e.preventDefault();
    let slide = $('.imgSwiper').find('.swiper-slide-active');
    let id = slide.find('img')[0].id;
    let idx = croppers.findIndex(x => x.element.id == id);
    croppers[idx].rotate(90);
});

//프린트 버튼 클릭
$('.photo-wrap .btn_print').click(function(){
    $('.photo-wrap .dimmed').stop().fadeIn(300);
    $('.photo-wrap .complete').addClass('show');
});
$('.photo-wrap .dimmed, .photo-wrap .btn_cancel').click(function(){
    $('.photo-wrap .dimmed').stop().fadeOut(600);
    $('.photo-wrap .complete').removeClass('show');
});

// Canvas용 이미지 생성
let covers;
$('.btn_canvas').click(function(e){
    loading_s();
    e.preventDefault();
    setTimeout(function(){
        async function getImages(){
            $('.dummyArea').html('');
            croppers.forEach(function(v, i){
                let src = v.getCroppedCanvas({
                    width:uploadImageWidth,
                    height:uploadImageHeight,
                    fillColor:'#fff',
                    imageSmoothingEnabled: false,
                    imageSmoothingQuality: 'high',
                }).toDataURL();
                let bg = v.bg;
                $('.dummyArea').append(`
                    <div class="dummy dummy${i}" id="dummy${i}">
                        <img src="${src}">
                        <div class="cover" style="background-image:url('${bg}')" ></div>
                    </div>
                `)
            });
        }
        //<div class="cover" style="background-image:url(" .="" images="" temps="" temp_00.png')'=""></div>
        getImages().then(function(res){
            var target = document.querySelectorAll('.dummy');
            async function test(){
                target.forEach(function(v, i){
                    html2canvas(v, {
                        scrollX: 0,
                        scrollY: 0,
                        scale: 2,
                        scale: 1,
                        allowTaint: true,
                        useCORS: true,
                    }).then(canvas => {
                        let url = canvas.toDataURL("image/png");
                        document.querySelector(`.dummy${i}`).appendChild(canvas);
                        console.log(i+':'+url);
                        loading_e();
                        //saveAs(url);
                    });
                });
            }
            test().then(function(){
                // if(window.confirm("payment_00.html로 이동을 할까요?")){
                //     console.log("YES");
                // }else{
                //     console.log("NO");
                // }
            });
        });
    }, 150)
});

function saveAs(url, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = url;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(url);
    }
}

/*
    var src = croppers[0].getCroppedCanvas({
        width:uploadImageWidth,
        height:uploadImageHeight,
        fillColor:'#f00',
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high',
    }).toDataURL();
*/
