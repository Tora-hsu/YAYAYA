var images = [
    "https://watermark.lovepik.com/photo/20211209/large/lovepik-japanese-ramen-picture_501699075.jpg",
    "https://img.lovepik.com/photo/20211121/medium/lovepik-rice-with-stewed-pork-picture_500590250.jpg",
    "https://img.lovepik.com/photo/20211126/medium/lovepik-boiled-dumplings-picture_501129593.jpg",
    "random_selector/hb.jpg"
];

//let thisH1= document.getElementsByTagName("h1")[0];
$(function(){
    //確認能夠知道使用者按了按鈕
    //$("imput") => document.getElementsByTagname("input")[0]
    //on => addEventListener
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListTtem = $("#choices li").length;
        //0~1 *3 = 0~3(2.99999X) => floor => 0,1,2
        var randomChildNumber = Math.floor(Math.random()*numberOfListTtem);
        
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber]);
        

    });
});