// calcolo percentuale//
$(function(){

    $('#pointspossible').on('input', function() {
      calculate();
    });
    $('#pointsgiven').on('input', function() {
     calculate();
    });
    function calculate(){
        var pPos = parseInt($('#pointspossible').val());
        var pEarned = parseInt($('#pointsgiven').val());
        var perc="";
        if(isNaN(pPos) || isNaN(pEarned)){
            perc=" ";
           }else{
           perc = ((pEarned/pPos) * 100).toFixed(3);
           }
           $('#pointsperc').val(perc);
             }

  });


// calcolo incremento//
  $(function(){

      $('#base').on('input', function() {
        calculateincrement();
      });
      $('#increment').on('input', function() {
       calculateincrement();
      });
      function calculateincrement(){
          var bas = parseInt($('#base').val());
          var inc = parseInt($('#increment').val());
          var per="";
          if(isNaN(bas) || isNaN(inc)){
              per=" ";
             }else{
              per = (bas +((inc/bas) * 100)).toFixed(2);
             }
             $('#result').val(per);
               }
    });
// calcolo decremento//
    $(function(){

        $('#base.d').on('input', function() {
          calculatedecrement();
        });
        $('#dement').on('input', function() {
         calculatedecrement();
        });
        function calculatedecrement(){
            var basd = parseInt($('#basede').val());
            var dec = parseInt($('#dement').val());
            var pero="";
            if(isNaN(basd) || isNaN(dec)){
                pero=" ";
               }else{
                pero = (basd -((dec/basd) * 100)).toFixed(2);
               }
               $('#decremento').val(pero);
                 }
      });

// calcolo rapporto//
  $(function(){

      $('#firstNumber').on('input', function() {
        calculatepercent();
      });
      $('#percent').on('input', function() {
       calculatepercent();
      });
      function calculatepercent(){
          var uno = parseInt($('#firstNumber').val());
          var duepercent = parseInt($('#percent').val());
          var perce="";
          if(isNaN(uno) || isNaN(duepercent)){
              perce=" ";
             }else{
             perce = ((uno*duepercent) / 100).toFixed(3);
             }
             $('#resu').val(perce);
               }
    });
