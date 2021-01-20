$(document).ready(function(){
    $("aa-product-category").load("compare.html");

    $(document).on("click" function(e){
      e.preventDefault();

      $("aa-product-category").load("compare.html");
    });

  });