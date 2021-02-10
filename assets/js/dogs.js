
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

function intiMap(){
    var map = new google.maps.Map(document.getElementById("dogmap"), {
        center: {
            lat: 59.334591,
            lng: 18.063240
        }
    });
};