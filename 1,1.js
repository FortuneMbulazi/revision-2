/*let myCollection = [
    {
        "name": "Big Coparration",
        "NumberOfEmployees": 10000,
        "ceo": "Fortune",
        "rating": 3.7
    },
    {
        "name": "Small Starup",
        "NumberOfEmployees": 4,
        "ceo": null,
        "rating": 4.2 
    }
];
myCollection = JSON.stringify(myCollection);
myCollection = JSON.parse(myCollection);
console.log(myCollection[0].name);
*/
$(function(){
    //Getting the Ancho destination.
    let anchoValue = $("a").attr("href");
    console.log(anchoValue);
    //Check if the value of the password created match the value of the confirm password
    /*$("#submit").click(function(){
        let password = $("#password").val();
        let confirm = $("#confirm").val();
        function checkThat(){
            if(password === confirm){
                alert("Registration complete.");
            }
            else{
                alert("Please make sure your password matches the confirm password.");
            }
        }
        $("#submit").off("click");
    });
    */
    //getting the elements content
    let content = $("footer").html();
    console.log(content);

    //returning text only
    let contentAs = $("footer").text();
    console.log(contentAs);

    //let a = $("a").text("Simphiwe Mabaso");
    //$("footer").html("<p>This is the new footer.</p>")
    //$("a").removeAttr("id");

    $("header").addClass("header, starting");
    $("h1").css({"background-color": "blue"});
    $("footer").height(70);
    let b = $("div").parent();
    b.css({"border": "2px solid red"});
    //console.log($("div").parents());
    //console.log($("div").children());
    //console.log($("div").siblings());
    //console.log($("input").eq(2));
    //$("header").empty();
    
   // $("button").click(function(){
     //   alert("Button clicked");
    //})
    //$("button").trigger("click");

    $("#formHeading").click(function(){
        $("header").slideToggle(2000);
    })
});
console.log();