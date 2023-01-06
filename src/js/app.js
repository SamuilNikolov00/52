import "../scss/app.scss";



window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const body = document.getElementsByTagName("body")[0];
  body.addEventListener("click",()=>{
    const article1 = document.createElement("article");
    article1.classList.add("message");
    article1.innerText="Loren ipsum"

    const article2 = document.createElement("article");
    article2.classList.add("message");
    article2.innerText="Loren ipsum"

    const article3 = document.createElement("article");
    article3.classList.add("message");
    article3.innerText="Loren ipsum"

    const article4 = document.createElement("article");
    article4.classList.add("message");
    article4.innerText="Loren ipsum"

    const article5 = document.createElement("article");
    article5.classList.add("message");
    article5.innerText="Loren ipsum"

    body.innerHTML="";
    body.appendChild(article1);
    body.appendChild(article2);
    body.appendChild(article3);
    body.appendChild(article4);
    body.appendChild(article5);
  });

  
    


});


