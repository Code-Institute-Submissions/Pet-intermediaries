$("#pug-button").click(function(){
    $("#pug-info").slideToggle("slow");
});

$("#german-button").click(function(){
    $("#german-info").slideToggle("slow");
});

$("#dane-button").click(function(){
    $("#dane-info").slideToggle("slow");
});

$("#wolfhound-button").click(function(){
    $("#wolfhound").slideToggle("slow");
});

$("#terrier-button").click(function(){
    $("#terrier-info").slideToggle("slow");
});

$("#bernard-button").click(function(){
    $("#bernard-info").slideToggle("slow");
});

function voice (){
   let currentCounter = sessionStorage.getItem("counter") || 0;


   if (currentCounter == 3) {
       alert ("good");
   } else {
       alert ("Woff");
   } 
}