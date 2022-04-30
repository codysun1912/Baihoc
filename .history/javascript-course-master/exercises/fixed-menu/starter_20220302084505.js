const header = document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
window.addEventListener("scroll" , debounceFn(function(){
    const scrollY = window.pageYOffset;
    if (scrollY <= headerHeight){
        header && header.classList.add("is-fixed");
        document.body.classList.add("has-space");
    } else 
    {
        header && header.classList.remove("is-fixed");
        document.body.classList.remove("has-space");

    }

}, 50))

function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }