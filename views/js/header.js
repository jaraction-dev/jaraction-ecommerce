/* HEADER */

$("#categoriesBtn").click(function(){

    if(window.matchMedia("(max-width:767px)").matches){   // responsive design

        $("#categoriesBtn").after($("#categories").slideToggle("fast")) // show or hide the categories section down categories button

    }else{

        $("#header").after($("#categories").slideToggle("fast")) // show or hide the categories section down the complete header
    }
})