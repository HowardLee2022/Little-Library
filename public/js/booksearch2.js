document.querySelector("#searchform").addEventListener("click",e=>{
    e.preventDefault();
    const category = document.querySelector("#searchcategories").value
// conditional statement to check what the user is searching for
    if (category === "Horror") {
        var cateid = 1;
      } else if (category === "Science Fiction") {
        var cateid = 2;
      } else if (category === "Fantasy") {
        var cateid = 3;
      } else if (category === "Comedy") {
        var cateid = 4;
      } else if(category ==="Adventure Story"){
        var cateid = 5;
      }else if (category ==="Children's Book"){
        var cateid = 6;
      }else if (category ==="Romance"){
        var cateid = 7;
      }else if (category ==="Mystery"){
        var cateid = 8;
      }else if (category ==="Memoir"){
        var cateid = 9;
      } else{
        var cateid = 10;
      }
    location.href=`/api/book/category/${cateid}`

 
})


const onClick = document.querySelector("#buttonbox");
// event listener to run a fetch request when button is clicked
onClick.addEventListener("click", function(event){
    var element = event.target;
    var number = element.getAttribute("data-number");
    
if(element.matches("#checkbtn")){
    fetch(`/api/book/${number}`,{
        method:"PUT",
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("You already borrowed a Book")
        }
    })
    }
    })



