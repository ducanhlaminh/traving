var donate = document.querySelector(".donate");
var outModal = document.querySelector(".modal-container")
var outModal2 = document.querySelector(".skip a")
var search = document.querySelector(".search");
donate.onclick = function(){
    document.querySelector(".modal").style.display ='block';
}
outModal2.onclick = function(){
    document.querySelector(".modal").style.display ='none';
}
outModal.onclick = function(){
    document.querySelector(".modal").style.display ='none';
}
search.onclick = function(){
    document.querySelector(".input-search").style.display ='block';
}

