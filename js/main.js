$(window).on('scroll', () => {
  var wintop = $(window).scrollTop(); // 已滚动卷去的高度
  if (wintop > 1) {
    $('.header').addClass('fixed')
  } else {
    $('.header').removeClass('fixed')
  }
})

// 回到顶部
$(".logo").click(function () {
  $('body,html').animate({
      scrollTop: 0
    },
    500);
  return false;
});

// 语言切换
var off = true;
function fadeInUl(){
  $('.lan ul').fadeOut()
  $('.lan span').removeClass('no-border-bottom').addClass('have-all-border')
  off = true;
}
$('.lan-btn').click(function(){
  if( off === true){
    $('.lan ul').fadeIn();
    $('.lan span').removeClass('have-all-border').addClass('no-border-bottom');
    setTimeout(()=>{
      off = false;
    },300)
  }else{
    fadeInUl()
  }
})
$('.lan ul li').click(function(){
  const txt = $(this).attr('data-lan');
  $('.lan-btn').html(txt)
  fadeInUl();
})