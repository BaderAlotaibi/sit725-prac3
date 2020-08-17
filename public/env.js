
$(document).ready(function(){

    setInterval(()=>{

        $.get('/random',(data)=>{
            $('#randomNumber').html(data.random);
        })
    },1000) //every 1 second , call that webservice

    //bind the button to the click event
    $('#btnWeather').click(function(){

        let num1=$('#number1').val();
        let num2=$('#number2').val();
        console.log(num1);
        let data = {
            num1,num2
        }


        // make call to the webservice 
        $.get( "/adder",data, function( result ) {
            $('#result').val(result.result);
          });


        //alert('This Button has clicked on , I am alert')
        //console.log('I am a Hellow world after Alert')
    })

})