

// open button click on new tab
function NewTab() 
{
  window.open("contact.html", "_blank");
}
function NewTabProduct() 
{
  window.open("about.html#products", "_blank");
}
function NewTabAdopt() 
{
  window.open("health.html#adopts", "_blank");
}
function NewTabTrain() 
{
  window.open("about.html#trainings", "_blank");
}
function NewTabHealth() 
{
  window.open("health.html", "_blank");
}

//change image on hover
function changeImage1(){
    document.getElementById("changeimg1").src="images/change1.jpg";
}
function changeBack1(){
    document.getElementById("changeimg1").src="images/adopt1.jpg";
}
function changeImage2(){
    document.getElementById("changeimg2").src="images/change2.jpg";
}
function changeBack2(){
    document.getElementById("changeimg2").src="images/adopt2.jpg";
}
function changeImage3(){
    document.getElementById("changeimg3").src="images/change3.jpg";
}
function changeBack3(){
    document.getElementById("changeimg3").src="images/adopt3.jpg";
}
function changeImage4(){
    document.getElementById("changeimg4").src="images/change4.jpg";
}
function changeBack4(){
    document.getElementById("changeimg4").src="images/adopt4.jpg";
}
function changeImage5(){
    document.getElementById("changeimg5").src="images/change5.jpg";
}
function changeBack5(){
    document.getElementById("changeimg5").src="images/adopt5.jpg";
}
function changeImage6(){
    document.getElementById("changeimg6").src="images/change6.jpg";
}
function changeBack6(){
    document.getElementById("changeimg6").src="images/adopt6.jpg";
}

//view more 
function moreView() {
  var shows = document.getElementById("showmore");
  if (!shows.style.display ||shows.style.display == "none") {
    shows.style.display = "flex";
    document.getElementById("showbutton").innerHTML = "Show Less";
  } else {
    shows.style.display = "none";
    document.getElementById("showbutton").innerHTML = "Show More";
  }

}

//zoom in out images
function zoommyimage(number){
    var no=number;
    var modal = document.getElementById("zoom"+no);
    modal.style.display = "block";
    document.getElementById("fix").style.zIndex="-1";
}

function closeimage(number){
    var no=number;
    var modal = document.getElementById("zoom"+no);
    modal.style.display = "none";
    document.getElementById("fix").style.zIndex="9999";
}

