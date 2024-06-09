export  const githubLoaderInfo =async()=>{
     const response = await fetch("https://api.github.com/users/tarunnagpal7")
     return response.json();
}