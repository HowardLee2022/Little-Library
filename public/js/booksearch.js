const categories = [];

document.querySelector("#searchForm").addEventListener("submit",e=>{
    e.preventDefault();
    const categoryObj = {
        category:document.querySelector("#searchCategory").value,
        categoryIds:categories
    }
    console.log(categoryObj)

    fetch("/api/users/",{
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