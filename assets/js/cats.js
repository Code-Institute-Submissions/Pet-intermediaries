$("#maine-button").click(function(){
    $("#maine-info").slideToggle("slow");
});

$("#ragdoll-button").click(function(){
    $("#ragdoll-info").slideToggle("slow");
});

$("#birma-button").click(function(){
    $("#birma-info").slideToggle("slow");
});

$("#siamese-button").click(function(){
    $("#siamese-info").slideToggle("slow");
});

$("#bengal-button").click(function(){
    $("#bengal-info").slideToggle("slow");
});

$("#persian-button").click(function(){
    $("#persian-info").slideToggle("slow");
});

function catvoice() {
   let currentCounter = sessionStorage.getItem("counter") || 0;

   sessionStorage.setItem("counter", ++currentCounter);

   if (currentCounter == 3) {
       alert ("Meow");
   } 
}