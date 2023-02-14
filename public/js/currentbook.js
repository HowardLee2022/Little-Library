document.querySelector("#checkbtn").addEventListener("click",e=>{
    e.preventDefault();
    
    fetch("/api/book/currentuser/book/remove",{
        method:"PUT"
    }).then(res=>{
        if(res.ok){
           location.href="/api/book/currentuser/book"
        } else {
            alert("error")
        }
    })
  })
  