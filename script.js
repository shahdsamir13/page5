
//dark
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

const mybutton =document.getElementById("mybutton");
const myimg =document.getElementById("myimg");
const myh1 =document.getElementById("myh1");
const myp =document.getElementById("myp");

//show

mybutton.addEventListener("click",Event => {

    if(myimg.style.visibility==="hidden"){
        myimg.style.visibility ="visible";
        myh1.style.visibility ="visible";
        myp.style.visibility ="visible";
        mybutton.textContent ="OFF";
        
    }
    else{
        myimg.style.visibility ="hidden";
        myh1.style.visibility ="hidden";
        myp.style.visibility ="hidden";
        mybutton.textContent ="ON";
        
    }
})

