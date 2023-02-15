const categories = [];

document.querySelector("#searchForm").addEventListener("submit",e=>{
    e.preventDefault();


    category.document.querySelector("#searchCategory").value

    // if(category === "Horror"){
    //     var cateid =1;
    // }else if( category ==="comdedy"){
    //     const cateid =2;
    // }else if( category ==="drama"){
    //     const cateid =3;
    // }else if( category ==="romance"){
    //     const cateid =4;
    // }else{
    //     var cateid = 5
    // }

    const categoryObj = {
       categoryIds:cateid,
       borrowerId:null
    }


    console.log(categoryObj)

    fetch("/api/book/",{
        method:"GET",
        body:JSON.stringify(categoryObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("oh no")
        }
    })
})






document.querySelector("#searchcategory").addEventListener("click",e=>{
    const categoryId = document.querySelector("#bookcategories").value;
    if(!categories.includes(categoryId)){
        categories.push(categoryId)
    }
})