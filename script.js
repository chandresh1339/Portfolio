$(document).ready(function(){ 
    
    $('.menu-btn').click(function(){
        $('.navbar .max .menu').toggleClass("active"); 
        $('.menu-btn i').toggleClass("active");
        
    })
})
for(var i=0;i<5;i++)
document.getElementsByClassName("navtoggle")[i].addEventListener("click",function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
}
)