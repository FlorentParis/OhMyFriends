/* Juda Animation */
const juda = document.querySelector('#test');

juda.addEventListener("click", () => {
  if(juda.classList.contains('animJ')){
    juda.classList.remove("animJ");
  }else{
    juda.classList.add("animJ");
    setTimeout(function(){
      juda.classList.remove("animJ");
    }, 3000);
  }
});