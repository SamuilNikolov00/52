import "../scss/app.scss";

const body = document.getElementsByTagName("body")[0];
const df = new DocumentFragment();
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  

  for(let i =0; i<5;i++){
    const article = document.createElement("article");
    article.classList.push("message");
    df.appendChild(article);
  }

});


body.addEventListener("click",()=>{
  body.appendChild(df);
});