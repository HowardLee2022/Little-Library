document.querySelector("#searchform").addEventListener("click",e=>{
    e.preventDefault();
    const category = document.querySelector("#searchcategories").value

    if(category === "Horror"){
        var cateid =1;
    }else if( category ==="Science Fiction"){
        var cateid =2;
    }else if( category ==="Fantasy"){
        var cateid =3;
    }else if( category ==="Comedy"){
        var cateid =4;
    }else{
        var cateid = 5
    }

    location.href=`/api/book/category/${cateid}`

 
})


const onClick = document.querySelector("#buttonbox");

onClick.addEventListener("click", function(event){
    var element = event.target;
    var number = element.getAttribute("data-number");
    
    
    fetch(`/api/book/${number}`,{
        method:"PUT",
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("dont click there")
        }
    })
})



