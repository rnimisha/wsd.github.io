

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
 
document.getElementById("adopttab").addEventListener("click", NewTabAdopt);
document.getElementById("newproduct").addEventListener("click", NewTabProduct);
document.getElementById("newtrain").addEventListener("click", NewTabTrain);
document.getElementById("newcontact").addEventListener("click", NewTab);
document.getElementById("newtoy").addEventListener("click", NewTabProduct);
document.getElementById("newhealth").addEventListener("click", NewTabHealth);

//change image on hover
function changeImage1(){
    document.getElementById("changeimg1").src="images/change1.jpeg";
}
function changeBack1(){
    document.getElementById("changeimg1").src="images/adopt1.jpeg";
}
function changeImage2(){
    document.getElementById("changeimg2").src="images/change2.jpeg";
}
function changeBack2(){
    document.getElementById("changeimg2").src="images/adopt2.jpeg";
}
function changeImage3(){
    document.getElementById("changeimg3").src="images/change3.jpeg";
}
function changeBack3(){
    document.getElementById("changeimg3").src="images/adopt3.jpeg";
}
function changeImage4(){
    document.getElementById("changeimg4").src="images/change4.jpeg";
}
function changeBack4(){
    document.getElementById("changeimg4").src="images/adopt4.jpeg";
}
function changeImage5(){
    document.getElementById("changeimg5").src="images/change5.jpeg";
}
function changeBack5(){
    document.getElementById("changeimg5").src="images/adopt5.jpeg";
}
function changeImage6(){
    document.getElementById("changeimg6").src="images/change6.jpeg";
}
function changeBack6(){
    document.getElementById("changeimg6").src="images/adopt6.jpeg";
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
//change form
function changeform(oldid, newid){
    var id1=oldid;
    var id2=newid
    var oldform=document.getElementById(oldid);
    oldform.style.display="none";
    var newform=document.getElementById(newid);
    newform.style.display="flex";
    window.scrollTo(0, 0);
}

//validate form
function validateLogin(){
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("yourpass").value;
    var select=document.getElementById("query").value;
    var check1=document.getElementById("pet1").checked;
    var check2=document.getElementById("pet2").checked;
    var check3=document.getElementById("pet3").checked;
    var text=document.getElementById("message").value;
    if(uname == "" && pass == "") {
        document.getElementById("loginError").innerHTML="Username and Password is required!!!";
        document.getElementById("username").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    } 
    else if(uname == "" ) {
        document.getElementById("loginError").innerHTML="Username is required!!";
        document.getElementById("username").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else if(pass == "") {
        document.getElementById("loginError").innerHTML="Password is required!!";
        document.getElementById("yourpass").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else if(select == "") {
        document.getElementById("loginError").innerHTML="Please Select Option!!";
        document.getElementById("query").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else if(check1==false && check2==false && check3==false ) {
        document.getElementById("loginError").innerHTML="Choose the Pet Options!!";
        document.getElementById("pet1").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else if(text == "") {
        document.getElementById("loginError").innerHTML="Message is required!!";
        document.getElementById("message").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else{
        alert("Message sent. Thanks for coming to us.");
        return true;
    } 
    
}

function validateRegister()
{
    var firstname=document.getElementById("fname").value;
    var lastname=document.getElementById("lname").value;
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pass").value;
    var confirm=document.getElementById("conpass").value;
    var emailid=document.getElementById("email").value;
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var addr=document.getElementById("address").value;
    var zip=document.getElementById("zipcode").value;
    var radio1=document.getElementById("ans1").checked;
    var radio2=document.getElementById("ans2").checked;
    var check=document.getElementById("agreement").checked;

    if(firstname == "" ) {
        document.getElementById("loginError").innerHTML="Firstname is required!!";
        document.getElementById("fname").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else if(lastname == "" ) {
        document.getElementById("loginError").innerHTML="Lastname is required!!";
        document.getElementById("lname").focus();
        document.getElementById("loginError").style.color="#ff0000";
        return false;
    }
    else if(username == "" ) {
        document.getElementById("loginError").innerHTML="Username is required!!";
        document.getElementById("uname").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else if(password == "") {
        document.getElementById("loginError").innerHTML="Password is required!!";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("pass").focus();
        return false;
    }
    else if (confirm!=password || confirm=="")
    {
        document.getElementById("loginError").innerHTML=" Password  dont match!!";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("conpass").focus();
        return false;
    }
    else if(!emailid.match(emailformat))
    {
        document.getElementById("email").setCustomValidity("");
        document.getElementById("loginError").innerHTML=" Email Format Incorrect!!";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("email").focus();
        return false;
    }
    else if(addr==""){
        document.getElementById("loginError").innerHTML=" Please Fill Your Address!!";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("address").focus();
        return false;
    }
    else if (zip=="")
    {
        document.getElementById("loginError").innerHTML="Empty zip invalid!!!";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("zipcode").focus();
        return false;
    }
    else if(zip.length!=5 )
    {
        document.getElementById("loginError").innerHTML=" Enter zip in format #####";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("zipcode").focus();
        return false;
    }
    else if (isNaN(zip))
    {
        document.getElementById("loginError").innerHTML=" Enter zip in number!!";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("zipcode").focus();
        return false;
    }
    else if(radio1==false && radio2==false){
        document.getElementById("loginError").innerHTML="Please Choose one Option.";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("ans1").focus();
        return false;
    }
    else if(check==false)
    {
        document.getElementById("loginError").innerHTML="Cant Register without Agreeing to our Terms.";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("agreement").focus();
        return false;
    }
    else{
        alert("Message sent. Thanks for coming to us.");
        return true;
    } 
    
}

function resetConfirm(){
    confirm("Do you want to reset your form?")
}