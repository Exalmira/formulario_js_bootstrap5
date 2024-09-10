const url='https://jsonplaceholder.typicode.com/posts/2'
fetch(url)
.then((res)=>res.json())
.then(data=>console.log(data))
.catch((e)=>console.log(e))
.finally(()=>console.log("finalizo"));