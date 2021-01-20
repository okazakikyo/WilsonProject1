$(document).ready(function(){
    $(document).on("click", "#1, #aa-product-category", function(e){
        e.preventDeafult();
    
        $("aa-product-category").load("football.html");
    });

    %("#2").on("click", function(e).{
        e.preventDeafult();

        $("aa-product-category").load("football.html")
    })
});
