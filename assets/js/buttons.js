$("light-mode").click(function(){
    $("light-mode").removeClass("dark-background")
    .$addClass("light-background");
});

$("dark-mode").click(function(){
    $("dark-mode").removeClass("light-background")
    .addClass("dark-background");
});