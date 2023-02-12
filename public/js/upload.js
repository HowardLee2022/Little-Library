document.querySelector("#addbookbtn").addEventListener("click",e=>{
    e.preventDefault();
    const bookobj = {
        bookname:document.querySelector("#book-name").value,
        author:document.querySelector("#book-author").value
    }
  
    fetch("/api/book/",{
        method:"POST",
        body:JSON.stringify(bookobj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           alert("added book!")
        } else {
            alert("error")
        }
    })
})

