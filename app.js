//Basic Syntax for jQuery
//  $("selector").action()

$(document).ready(function(){
    $("#heading").html("Mambo!");

    // $("p").click(function(){
    //     alert("I was touchled");
    // });

    // $("p").mouseenter(function(){
    //     $(this).css("background-color", "lightblue");
    // });

    // $("p").mouseleave(function(){
    //     $(this).css("background-color", "white");
    // });
    $("p").on({
        click:function(){
            alert("I was touchled") 
        },
        mouseenter: function(){
            $(this).css("background-color", "lightgreen"); 
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }
    })
    //hides it
    $("button.hide").click(function(){
        $("p").hide();
    });
    //shows it
    $("button.show").click(function(){
        $("p").show();
    });
    //hides and shows based on click
    $("button.toggle").click(function(){
        $("p").toggle(1000, function(){$("#heading").html("No. 5");});
    });

});
    