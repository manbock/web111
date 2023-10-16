 //menu
 function slide_down() {
     console.log($(this));
     $(this).find('.submenu').stop().slideDown();
 };

 function slide_up() {
     $(this).find('.submenu').stop().slideUp();
 };


 $('.nav>ul>li').mouseover(slide_down);

 $('.nav>ul>li').mouseout(slide_up);


 //let 주머니 = 100;
 //console.log(주머니 + 1)

 let currentIndex = 0;

 //setInterval(할일,시간);
 //setInterval(function(){},1초); ==> 1초마다 할일이 실행
 //setInterval(function(){},3000); ==> 3초마다 할일이 실행
 setInterval(function () {
     if (currentIndex < 2) {
         //1씩 더해라
         currentIndex++;
     } else {
         //다시 0을 입력
         currentIndex = 0;
     };
     let slidePosition = currentIndex*(-378)+"px";
     console.log(slidePosition)
     $('.slideList').animate({
        top:slidePosition
     },400)
 }, 3000);

 //  탭 메뉴
 //.find() --> css에서 띄워쓰기(하위요소)와 동일, 자손을 호출
 //.hide() --> display:none;
 //.show() --> display:block;
 //.next() --> 형제중 바로 밑 동생 호출 (내가 셋째라면 넷째를 호출)
 //.parent() --> 바로위 상위요소(부모요소)를 호출
 //.siblings() --> 나를 제외한 형제들 호출

 let tabMenu=$('.notice');

 tabMenu.find('ul>li>ul').hide();
 tabMenu.find('ul>li.active>ul').show();


 tabMenu.find('ul>li>a').click(function(e){
    e.preventDefault(); //#때문에 튕기는현상 막기
    //$(this).parent('li').addClass('active');
    //$(this).parent('li').siblings('li').removeClass('active')
    //$(this).parent('li').siblings('li').find('ul').hide();
    $(this).parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();


    $(this).next('ul').show();
 });

 //팝업창
 $('.ad').click(function(){
    //$('.layer-bg').show();
    //$('.layer-bg').slideDown();
    $('.layer-bg').fadeIn();
 });

 $('.layer .close').click(function(){
    //$('.layer-bg').slideUp();
    //$('.layer-bg').hide();
    //$('.layer-bg').fadeOut(1000);
    $('.layer-bg').fadeOut();
 });

