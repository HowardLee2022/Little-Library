
document.querySelector("#createuserbtn").addEventListener("click",e=>{
  e.preventDefault();
  const userobj = {
      username:document.querySelector("#user-name").value,
      email:document.querySelector("#email-name").value,
      password:document.querySelector("#password-name").value
  }

  fetch("/api/user/",{
      method:"POST",
      body:JSON.stringify(userobj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
        location.href="/"
      } else {
          alert("Email already Exist")
      }
  })
})

