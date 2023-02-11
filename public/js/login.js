document.querySelector("#log-btn").addEventListener("submit",e=>{
  e.preventDefault();
  const loginObj = {
      email:document.querySelector("#email-log").value,
      password:document.querySelector("#password-lig").value
  }
  console.log(loginObj)
  fetch("/api/users/login",{
      method:"POST",
      body:JSON.stringify(loginObj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
         location.href="/dashboard"
      } else {
          alert("error")
      }
  })
})

document.getElementById("sign-btn").addEventListener("click", e=>{
  e.preventDefault();
  location.href="/api/users/signup"
})

