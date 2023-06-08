var slideIndex = 1;
setIntereval(function(){
    document.getElementById('radio' + slideIndex).checked = true;
    slideIndex++;
    if(slideIndex>3){
        slideIndex=1
    }
},5000);

