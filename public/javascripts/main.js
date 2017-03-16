console.log('hello world');

$('.services a').hover(function() {
  console.log('hover over img');
    $(this).parent().toggleClass('service-pad-active');
    $(this).toggleClass('services-active');
})