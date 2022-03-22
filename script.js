document.addEventListener('DOMContentLoaded', function(){
    console.log(window.innerWidth)
    document.querySelector('#button1').onclick= function(){
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('#button2').style.display = 'block';
        document.querySelector('#button1').style.display = 'none';
        console.log(document.getElementsByClassName('popup'))
        if (window.innerWidth <= 420) {
            document.querySelector('.box').style.height = '504px';
        }
    }

    if(window.innerWidth>=420){
        document.querySelector('#button2').onclick = function () {
            pop();    
        }
    }

    else {
        document.querySelector('#button2').onclick = function () {
            document.querySelector('.box').style.height = '512px';
            pop();
        }
    }  
})

function pop() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('#button1').style.display = 'block';
    document.querySelector('#button2').style.display = 'none';
}