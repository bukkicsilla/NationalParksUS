let r = document.getElementById("myreview")
let b = document.getElementById("btn-review")
let d = document.getElementById("closemodal")

b.onclick = function(){
  r.style.display = "block"
}
d.onclick = function(){
  r.style.display = "none"
}
window.onclick = function(){
  if(event.target == r){
    r.style.display = "none"
  }
}


