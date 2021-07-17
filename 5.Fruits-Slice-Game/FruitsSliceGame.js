// Jquery code ...
var playing = false;
var score;

$(function()
{
    // click on the startresetBtn 

    $('#startresetBtn').click(function(){
        // if we are playing
        if (playing == true)
        {
            // reload page 
        location.reload();
        }
        
        else 
        // we are not playing 
        {
            playing == true; // initiate game 
            // set score to zero 
            score =0;
            $('#scoreValue').html(score);

            
        }
    });
});