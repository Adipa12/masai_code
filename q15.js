// Chaining Promises for Sequential Tasks---------
// "Task A completed"  
// (1 second delay)  
// "Task B processed: Task A completed"  
// (1.5 second delay)  
// "Final result: Task B processed: Task A completed" 

function startTask(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Task A completed");
        resolve("Task A completed")
    },1000);
});
}
function processTask(taskAResult){
    return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            const result = `Task B processed: ${taskAResult}`
            console.log(result);
            resolve(result)
    },1500);
    });
}
function finalTask(taskBResult){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result = `Final result: ${taskBResult}`
            console.log(result);
            resolve(result)
        },500);
    });
}
startTask()
  .then((resultA) => processTask(resultA))
  .then((resultB) => finalTask(resultB))
  .catch((error) => {
    console.error("Error during task execution:", error);
  });