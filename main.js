var donate = document.querySelector(".donate");
var outModal = document.querySelector(".modal-container")
var outModal2 = document.querySelector(".skip a")
donate.onclick = function(){
    document.querySelector(".modal").style.display ='block';
}
outModal,outModal2.onclick = function(){
    document.querySelector(".modal").style.display ='none';
}
