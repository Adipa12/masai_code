// Create a webpage that fetches a list of users from the JSONPlaceholder 
// API (https://jsonplaceholder.typicode.com/users) and displays their names in console.

async function getUserData(){
  try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      if(!response.ok){
          throw new Error("Network Response was not ok")
      }
      let users = response.json();
      users.forEach((user, index)=>{
          console.log(`${index}.${user.name}`);
      })
  } catch (error) {
    console.log("Error:", error.message);
  }
}