$(document).ready(function(){
    $(".hide").hide();

    $("button.toggle").click(function(){
        $("p").toggle(1000)
    });
});