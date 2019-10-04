$(document).ready(()=>{
  $('#signupB').click(()=>{
    console.log("clicked!"); 
    let target = $('#signupB').data('target');
    console.log("target",target);
    let modal = document.getElementById(target);
    console.log("modal",modal);
    $(modal).fadeIn();


    var str = document.getElementsByClassName("message")[0].innerHTML.toString();
    var i = 0;
    document.getElementsByClassName("message")[0].innerHTML = "";
    
    setTimeout(function() {
        var se = setInterval(function() {
            i++;
            document.getElementsByClassName("message")[0].innerHTML = str.slice(0, i);
            if (i == str.length) {
                clearInterval(se);
                document.getElementsByClassName("message")[0].innerHTML = str;
            }
        }, 0.5);
    },0);
    

    return false;
  })


})