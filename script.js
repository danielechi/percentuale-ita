// calcolo percentuale//
$(function(){

    $('#pointspossible').on('input', function() {
      calculate();
    });
    $('#pointsgiven').on('input', function() {
     calculate();
    });
    function calculate(){
        var pPos = parseFloat($('#pointspossible').val());
        var pEarned = parseFloat($('#pointsgiven').val());
        var perc="";
        if(isNaN(pPos) || isNaN(pEarned)){
            perc=" ";
           }else{
           perc = ((pEarned/pPos) * 100).toFixed(2);
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
          var bas = parseFloat($('#base').val());
          var inc = parseFloat($('#increment').val());
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
            var basd = parseFloat($('#basede').val());
            var dec = parseFloat($('#dement').val());
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
          var uno = parseFloat($('#firstNumber').val());
          var duepercent = parseFloat($('#percent').val());
          var perce="";
          if(isNaN(uno) || isNaN(duepercent)){
              perce=" ";
             }else{
             perce = ((uno*duepercent) / 100).toFixed(2);
             }
             $('#resu').val(perce);
               }
    });


