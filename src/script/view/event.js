import $ from 'jquery';
const mybutton = $('#top-btn');
$('#drawer-btn').click(() => {
  $('#drawer-nav').toggleClass('open');
});
$('main').click(() => {
  $('#drawer-nav').removeClass('open');
});
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
mybutton.click(() => {
  topFunction();
});
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.css('display', 'block');
  } else {
    mybutton.css('display', 'none');
  }
};
window.onscroll = () => {
  scrollFunction();
};
