const onClick = document.querySelector("#btnbox");

onClick.addEventListener("click", function(event){
    var element = event.target;
    var number = element.getAttribute("data-number");
    
if(element.matches("#checkbtn")){
    fetch(`/api/user/book/${number}`,{
        method:"DELETE",
    }).then(res=>{
        if(res.ok){
           location.href="/api/user/book/own"
        } else {
            alert("You already borrowed a Book111")
        }
    })
    }
    })
