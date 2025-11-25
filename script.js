// script.js - jQuery interactions
$(function(){
  // Nav toggle for mobile
  $('#nav-toggle').on('click', function(){
    $('#main-nav').toggleClass('nav-open nav-closed');
  });

  // Smooth scroll
  $('#main-nav a, .btn[href^="#"]').on('click', function(e){
    var target = $(this).attr('href');
    if(target && target.startsWith('#')){
      e.preventDefault();
      $('html,body').animate({scrollTop: $(target).offset().top - 50}, 600);
      if($(window).width() < 800) $('#main-nav').removeClass('nav-open');
    }
  });

  // Color theme toggle (switch accent)
  var alt = false;
  $('#color-toggle').on('click', function(){
    alt = !alt;
    if(alt){
      document.documentElement.style.setProperty('--accent','#136f63');
      document.documentElement.style.setProperty('--bg','#f2fbf8');
    } else {
      document.documentElement.style.setProperty('--accent','#2d8f5b');
      document.documentElement.style.setProperty('--bg','#f6fcf6');
    }
    $(this).text(alt? 'Tema Asli' : 'Ganti Tema Warna');
  });

  // Gallery filter
  $('.filter').on('click', function(){
    $('.filter').removeClass('active');
    $(this).addClass('active');
    var f = $(this).data('filter');
    if(f === 'all') $('.tile').show();
    else $('.tile').hide().filter(function(){ return $(this).data('type') === f; }).fadeIn(300);
  });

  // Contact form mock submit
  $('#contact-form').on('submit', function(e){
    e.preventDefault();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var msg = $('#message').val().trim();
    if(!name || !email || !msg){ $('#form-msg').text('Mohon isi semua field.'); return; }
    // simple mock "sending"
    $('#form-msg').text('Mengirim...').fadeIn(200);
    setTimeout(function(){
      $('#form-msg').text('Terima kasih, pesanmu telah diterima!');
      $('#contact-form')[0].reset();
    }, 900);
  });
});
