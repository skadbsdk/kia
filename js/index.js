$(function(){
  // 스킵메뉴
  $('.skip_menu>a').focus(function(){
    $('.skip_menu').animate({top:'0px'},300);
  });
  $('.skip_menu>a').blur(function(){
    $('.skip_menu').animate({top:'-43px'},300);
  });

  // 토글네비
  $('.nav_btn').click(function(){
    if($(this).parent().hasClass('active')){
      $('.nav_btn').parent().removeClass('active');
    }else{
      $('.nav_btn').parent().removeClass('active');
      $(this).parent().addClass('active');
      $('.nav_btn').next().removeClass('active');
    }   
    $(this).next().toggleClass('active');
  })

  // 자동차 종류 선택
  $('.car_list>li:first-child>p').click(function(){
    $('.car_list>li:first-child>p').removeClass('active');
    $(this).addClass('active');
  });

  // 자동차 회전 지연시간
  var rotateItem=$('.car_list>li:last-child>p');
  for(var cnt=0;cnt<rotateItem.length;cnt++){
    rotateItem.eq(cnt).css('animation-delay',(cnt+10)*30+'ms');
  }
  
  // 버거이벤트
  $('#tgl_nav_btn').click(function(){
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    if($(this).attr('class')!='active'){
      $('.sub_nav,.car_list,.large_nav>.content>ul>li').removeClass('active');
    }
  })

  // en 호버이벤트
  $('.search').before('<li class="en"><a href="#">EN</a></li>');
  
  // 윈도우 리사이즈 이벤트
  $(window).resize(function(){
    $('.nav_btn').parent().removeClass('active');
    $('.nav_btn').next().removeClass('active');
    var winWidth=$(window).width();
    if(winWidth>=770){
      $('.en').hide();
    }else{
      $('.en').show();
    }
  });
    
  // 메인슬라이더
  var mySwiper = new Swiper('.main_slider', {
    speed:300,
    effect:'fade',
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });

  // 스타트/스톱 이벤트
  $('#start_btn').click(function(){
    $('.start_stop_btn>button').hide();
    $('#stop_btn').show();
    mySwiper.autoplay.start();
  });
  $('#stop_btn').click(function(){
    $('.start_stop_btn>button').hide();
    $('#start_btn').show();
    mySwiper.autoplay.stop();
  });

  // 베스트기아슬라이더
  var mySwiper2 = new Swiper('.best_kia_slider', {
    speed:300,
    spaceBetween:0,
    slidesPerView:1.5,
    centeredSlides:true,
    loop:true,
    autoplay:{
      delay:3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      // when window width is >= 770px
      770: {
        slidesPerView: 3.5,
      },      
    },
  });

  // 이벤트기아슬라이더
  var mySwiper3 = new Swiper('.event_kia_slider', {
    speed:300,
    spaceBetween:0,
    slidesPerView:1,
    centeredSlides:true,
    loop:true,
    autoplay:{
      delay:3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },    
  });
  // 이벤트기아슬라이더
  var mySwiper4 = new Swiper('.channel_kia_slider', {
    speed:300,
    spaceBetween:0,
    slidesPerView:1,
    centeredSlides:true,
    loop:true,
    autoplay:{
      delay:3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },    
  });
})