fetch("/api/user/logout",{
    method:"GET",
}).then(res=>{
    if(res.ok){
       location.href="/home"
    } else {
        alert("error")
    }
})

