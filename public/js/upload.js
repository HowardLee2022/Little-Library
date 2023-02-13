document.querySelector("#addbookbtn").addEventListener("click",e=>{
    e.preventDefault();
    const category = document.querySelector("#category-id").value

    if(category === "Horror"){
        var cateid =1;
    // }else if( category ==="comdedy"){
    //     const cateid =2;
    // }else if( category ==="drama"){
    //     const cateid =3;
    // }else if( category ==="romance"){
    //     const cateid =4;
    }else{
        var cateid = 5
    }



    const bookobj = {
        bookname:document.querySelector("#book-name").value,
        author:document.querySelector("#book-author").value,
        categoryId:cateid,
        ownerId: 1
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

