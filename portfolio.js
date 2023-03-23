// mobile 
let mobile = document.querySelector('.mobile');
let bar = document.getElementById('bar');
let links = document.querySelector('.links ul');
let close = document.querySelector('.links ul .close');
if(bar){
    bar.addEventListener('click',() =>{
        links.classList.add('go-left');
    });
}
if(close){
    close.addEventListener('click', ()=>{
        links.classList.remove('go-left');
    });
}

// switchers
let switchers = document.querySelectorAll('.services .container ul li');
let boxs = Array.from(document.querySelectorAll('.services .container .projects .box'));
switchers.forEach((li)=>{
li.addEventListener('click', remAll);
li.addEventListener('click', manageBox);

});
function remAll(){
    switchers.forEach((li)=>{
        li.classList.remove('ac');
        this.classList.add('ac'); 
    });
}
function manageBox(){
    boxs.forEach((box)=>{
        box.style.display = "none"; 
    });
    document.querySelectorAll(this.dataset.cat).forEach((ele)=>{
        ele.style.display = "block";
    });
}
