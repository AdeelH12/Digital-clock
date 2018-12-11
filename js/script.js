var date = new Date();

var h = date.getHours();

var m = date.getMinutes();

var s = date.getSeconds();



if (s == 60){

    
    m++;
  
}



window.onload = function(){

    if (h >= 12) {

        if(m < 10){

            var timePM = ' PM';
            document.getElementById('time').innerHTML =   h + ':' + '0' + m + timePM;
            
         
        } else{

            var timePM = ' PM';
            document.getElementById('time').innerHTML =   h + ':' + m + timePM;
           
        }
        
        

      
    }
    
    else{
    
        if(m<10){

            var timeAM = ' AM';
            document.getElementById('time').innerHTML =   h + ':' + + '0' + m + timeAM;
            
            
            
            
        }else{

            var timeAM = ' AM';

            document.getElementById('time').innerHTML =   h + ':' + m + timeAM;
           
            
        }

    }
    
}
