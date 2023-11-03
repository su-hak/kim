//                         HEADER 마우스 메뉴 전환
$('#header').on('mouseover', function () {
    console.log("1");
    $('#port').css('display', 'none');
    $('.gnb li').css('display', 'block');



})

$('#header').on('mouseout', function () {
    console.log("1");
    $('.gnb li').css('display', 'none');
    $('#port').css('display', 'block');


})
//                         (HEADER 마우스 로고노출) END

//                         마우스 올릴 시 텍스트 전환
//section 3 ul li span mouseover,out 속성 (classname은 안됨 id만 가능)
var ms = document.getElementById('ms00')

ms.addEventListener('mouseover', function () {
    ms.innerText = 'KIM SUHAK';
})

ms.addEventListener('mouseout', function () {
    ms.innerText = 'Full Name';
})

var ms1 = document.getElementById('ms01')

ms1.addEventListener('mouseover', function () {
    ms1.innerText = '+82 01063521644';
})

ms1.addEventListener('mouseout', function () {
    ms1.innerText = 'Phone Number';
})

var ms2 = document.getElementById('ms02')

ms2.addEventListener('mouseover', function () {
    ms2.innerText = 'uiouij@naver.com';
})

ms2.addEventListener('mouseout', function () {
    ms2.innerText = 'E-mail';
})

var ms3 = document.getElementById('ms03')

ms3.addEventListener('mouseover', function () {
    ms3.innerText = '부산시 서구 남포동';
})

ms3.addEventListener('mouseout', function () {
    ms3.innerText = 'Adress';
})
//                    (마우스 올릴 시 텍스트 전환) END

/*                         SECTION 4 슬라이드 쇼                      */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2800); // 2.8초마다 이미지가 체인지
}
/*                     (SECTION 4 슬라이드 쇼) END                       */

