document.querySelector("#checkbtn").addEventListener("click",e=>{
    e.preventDefault();
    console.log("hello")
    
    fetch("/api/book/currentuser/book/remove",{
        method:"PUT"
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("error")
        }
    })
  })
  