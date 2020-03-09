  $(document).ready(function(){
    $('#modal1').modal();
  });

    $(document).ready(function(){
    $('#modal2').modal();
  });

    $(document).ready(function(){
    $('#modal3').modal();
  });


 var divs = $(".flexFont");
  if (divs.length) {
    for(var i = 0; i < divs.length; i++) {
      var relFontsize = divs[i].offsetWidth*0.05;
      divs[i].style.fontSize = relFontsize+'px';
    }
  }  

if ($('#countdown').length) {
    var countDownDate = new Date("May 09, 2020 20:00:00").getTime();
    // Update the count down every second
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $("#countdown").html("<table><tr><td class='fix-width'><div class='circle'></div><svg viewbox='0 0 100 100'><path fill='none' stroke-width='2' stroke='#fff' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg><svg class='filter-shadow' viewbox='0 0 100 100'><path fill='none' stroke-linecap='round' stroke-width='2' stroke='#ff4081' stroke-dasharray='"+days*2.5+",250' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg><div class='numbers'>"+days+"</div></td><td class='fix-width'><div class='circle'></div><svg viewbox='0 0 100 100'><path fill='none' stroke-width='2' stroke='#fff' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg><svg class='filter-shadow' viewbox='0 0 100 100'><path fill='none' stroke-linecap='round' stroke-width='2' stroke='#ff4081' stroke-dasharray='"+hours*10.4+",250' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg><div class='numbers'>"+hours+"</div></td><td class='fix-width'><div class='circle'></div><svg viewbox='0 0 100 100'><path fill='none' stroke-width='2' stroke='#fff' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg><svg class='filter-shadow' viewbox='0 0 100 100'><path fill='none' stroke-linecap='round' stroke-width='2' stroke='#ff4081' stroke-dasharray='"+minutes*4.17+",250' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg></div><div class='numbers'>"+minutes+"</div></td><td class='fix-width'><div class='circle'></div><svg viewbox='0 0 100 100'><path fill='none' stroke-width='2' stroke='#fff' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg><svg class='filter-shadow' viewbox='0 0 100 100'><path fill='none' stroke-linecap='round' stroke-width='2' stroke='#ff4081' stroke-dasharray='"+seconds*4.17+",250' d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'/></svg></div><div class='numbers'>"+seconds+"</div></td></tr><tr class='tr-text'><td>DÍAS</td><td>HORAS</td><td>MINUTOS</td><td>SEGUNDOS</td></tr></table>") ;
      // if (distance < 0) {
      //   clearInterval(x);
      //   $("#countdown").html("End");
      // }
    }, 1000); 
  }



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });


$(window).on('load', function () {
      setTimeout(function () {
    $(".loader").css({visibility:"hidden",opacity:"0"})
  }, 2000);
     
});