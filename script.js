const start= document.querySelector('.start');
const pause= document.querySelector('#pause');

var timeId= null;
var [hours, minutes, seconds]= [0,0,0];
start.addEventListener("click",()=>{
  
    console.log("clicked");
   
    timeId= setInterval(()=>{
            if(timeId!==null){
              
                seconds++;
                if(seconds==60){
                    seconds=0;
                    minutes++;
                    if(minutes==60){
                        hours= 0;
                    }
                }
                console.log(seconds);
                start.innerHTML= `${hours} : ${minutes} : ${seconds}`;
            }
           
         
    }, 1000)
})

pause.addEventListener("click", ()=>{
    
        clearInterval(timeId);
        
        start.innerHTML= "Start Timer";
        console.log("timeCleared");

})

