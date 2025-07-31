// Function that simulates async data fetching with a 50% chance of failure
function fetchData(){
     return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const rendom = Math.random();
        if(rendom > 0.5){
            resolve("Fetched data successfully!")
        }else{
            reject("Error fetching data")
        }
    },1000);
});
}
// Async handler function using try...catch
async function fetchDataHandler(){
    try{
        const result = await fetchData();
        console.log(result);
    }catch(error){
        console.error("Error fetching data:", error);
    }
}
// Call the handler
fetchDataHandler();

