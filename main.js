var donate = document.querySelector(".donate");
var outModal = document.querySelector(".modal-container")
donate.onclick = function(){
    document.querySelector(".modal").style.display ='block';
}
outModal.onclick = function(){
    document.querySelector(".modal").style.display ='none';
}