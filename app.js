const box = document.querySelectorAll(".box")
var body = document.querySelector("body")

box.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("selceted this product")     
    });
  });

  body = confirm("Are you ready shopping:")
  
