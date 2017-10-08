/**
 * Created by Owner on 6/9/2015.
 */

$(document).ready(function(){
    $(".img-thumbnail").mouseover(function(){
        $(this).css({"position":"absolute","right":"15%","z-index":"20","width":"500px","height":"400px"});
    })

    $(".img-thumbnail").die()(function(){

    });
});





$(document).ready(function(){
    $(".img-thumbnail").on("mouseover",function() {
        $(this).css({
            "position": "absolute",
            "right": "15%",
            "z-index": "25",
            "width": "700px",
            "height": "230px"
        });

    });


    $(".img-thumbnail").mouseleave(function(){
        $(this).css({
            "witdh":"300px",
            "height":"224px"
        });
    });
});