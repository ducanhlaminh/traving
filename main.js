var donate = document.querySelector(".donate");
var outModal = document.querySelector(".modal-container")
var outModal2 = document.querySelector(".skip a")
var search = document.querySelector(".search");
var start = document.querySelector(".btn-signup");
donate.onclick = function(){
    document.querySelector(".modal").style.display ='block';
    document.querySelector(".modal-content").style.display ='block';

}
outModal2.onclick = function(){
    document.querySelector(".modal").style.display ='none';
    document.querySelector(".modal-content").style.display ='none';

}

search.onclick = function(){
    document.querySelector(".input-search").style.display ='block';
}
start.onclick = function(){
    document.querySelector(".modal").style.display ='none';
    document.querySelector(".modal-login-signup").style.display ='none';
    alert("BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG")
}

