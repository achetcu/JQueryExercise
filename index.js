
function main(){
$("#grow-me").addClass("big");

$("#shrink-me").removeClass("big");

const items = $("li");
console.log(items);

$("#hide-me").css("display", "none");

$("#show-me").css("display", "block");

$("a").attr("href", "https://www.example.com");

$("a").text("Somewhere");

const name = $("input").val();
$("h1").html("Welcome" + " " + name);
};

$("#action").on("click", main);
