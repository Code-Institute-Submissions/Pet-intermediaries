$("light-mode").onClick(function(){
    $("light-mode").removeClass("dark-background")
    .$addClass("light-background");
});

$("dark-mode").onClick(function(){
    $("dark-mode").removeClass("light-background")
    .addClass("dark-background");
});