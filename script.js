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



    $().smartWebBanner({
            title: 'Web App', // What the title of the "app" should be in the banner
            titleSwap: true, // Whether or not to use the title specified here as the default label of the home screen icon (otherwise uses the page's "apple-mobile-web-app-title" meta tag or <title> tag as a fallback)
            url: '', // URL to mask the page as before saving to home screen (allows for having it save the homepage of a site no matter what page the visitor is on)
            author: 'Save to Home Screen', // What the author of the "app" should be in the banner
            speedIn: 300, // Show animation speed of the banner
            speedOut: 400, // Close animation speed of the banner
            useIcon: true, // Whether or not it should show site's apple touch icon (located via <link> tag)
            iconOverwrite: '', // Force the URL of the icon (even if found via <link> tag)
            iconGloss: 'auto', // Whether or not to show the gloss over the icon (true/false/"auto" [auto doesn't show if precomposed <link> tag is used])
            showFree: true, // Whether or not to show "Free" at bottom of info
            daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
            daysReminder: 90, // Duration to hide the banner after "Save" is clicked *separate from when the close button is clicked* (0 = always show banner)
            popupDuration: 6000, // How long the instructions are shown before fading out (0 = show until manually closed)
            popupSpeedIn: 200, // Show animation speed of the popup
            popupSpeedOut: 900, // Close animation speed of the popup
            theme: 'auto', // Change between "auto" (detect iOS version), "iOS 6", "iOS 7", and "dark" theme to fit your site design & visitors
            autoApp: false, // Whether or not it should auto-add the mobile-web-app meta tag that makes it open as an app rather than in mobile safari
            debug: false // Whether or not it should always be shown (even for non-iOS devices & if cookies have previously been set) *This is helpful for testing and/or previewing
    });

    $('#smartWebBanner').on('swb:shown',function(){
        alert('Banner was shown');
});
$('#smartWebBanner').on('swb:closed',function(){
        alert('Banner was closed');
});
$('#smartWebBanner').on('swb:instructions-shown',function(){
        alert('Save to homescreen instructions are now shown');
});
$('#smartWebBanner').on('swb:instructions-closed',function(){
        alert('Save to homescreen instructions are now closed');
});
