let url;
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "diwgmpnbw",
    uploadPreset: "ml_default",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log(result.info.url);
      url = result.info.url;
    } else {
      console.log(error);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    myWidget.open();
  },
  false
);

document.querySelector("#addbookbtn").addEventListener("click", (e) => {
  e.preventDefault();
  const category = document.querySelector("#category-id").value;

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

  const bookobj = {
    bookname: document.querySelector("#book-name").value,
    author: document.querySelector("#book-author").value,
    url: url,
    categoryId: cateid,
  };

  fetch("/api/book/", {
    method: "POST",
    body: JSON.stringify(bookobj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      alert("added book!");
    } else {
      alert("error");
    }
  });
});
