document.querySelector("#log-btn").addEventListener("click",e=>{
  e.preventDefault();
  
  const loginObj = {
      email:document.querySelector("#email-log").value,
      password:document.querySelector("#password-log").value
  }
  console.log(loginObj)
  fetch("/api/user/login",{
      method:"POST",
      body:JSON.stringify(loginObj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
         location.href="/"
      } else {
          alert("error")
      }
  })
})

document.getElementById("sign-btn").addEventListener("click", e=>{
  e.preventDefault();
  location.href="/api/user/signup"
})

