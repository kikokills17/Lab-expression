let nav = document.getElementsByClassName("nav")[0];
let navs = Array.from(document.getElementsByClassName("nav-item"));
let content = document.getElementsByClassName("content")[0];

initialTop(content);

nav.addEventListener("click", slide);

function slide(e) {
  let target = e.target;
  if (target === e.currentTarget) return;
  changeBgc(target);
  changeTxt(target, content);
}

function changeBgc(ele) {
  for(let i = 0; i < navs.length; i++) {
    navs.forEach(e => e.classList.remove("active"));
  }
  ele.classList.add("active");
}

function changeTxt(ele, txt) {
  if (ele.classList.contains("nav-item1")) {
    txt.style.top = "0";
  } else if(ele.classList.contains("nav-item2")) {
    txt.style.top = "-888px";
  } else if(ele.classList.contains("nav-item3")) {
    txt.style.top = -888*2 + "px";
  } else if(ele.classList.contains("nav-item4")) {
    txt.style.top = -888*3 + "px";
  } else if(ele.classList.contains("nav-item5")) {
    txt.style.top = -888*4 + "px";
  }
}

function initialTop(ele) {
  ele.style.top = "0";
}