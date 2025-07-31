function timer(duration, onComplete){
        setTimeout(()=>{
       onComplete(duration)      
    }, duration);    
}
function handleComplete(duration){
     console.log(`Timer of ${duration} ms finished`);
}
timer(1000, handleComplete)