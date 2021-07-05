

// open button click on new tab
function NewTab() 
{
  window.open("page-5.html", "_blank");
}
function NewTabProduct() 
{
  window.open("page-2.html#products", "_blank");
}
function NewTabAdopt() 
{
  window.open("page-3.html#adopts", "_blank");
}
function NewTabTrain() 
{
  window.open("page-2.html#trainings", "_blank");
}
function NewTabHealth() 
{
  window.open("page-3.html", "_blank");
}
 
//event listeners
var adoptopen = document.getElementById("adopttab");
if(adoptopen){
  adoptopen.addEventListener("click", NewTabAdopt, false);
}
var trainopen=document.getElementById("newtrain");
if(trainopen){
  trainopen.addEventListener("click", NewTabTrain, false);
}
var healthopen=document.getElementById("newhealth");
if(healthopen){
    healthopen.addEventListener("click", NewTabHealth);
}

var contactopen=document.getElementsByClassName("newcontact");
for(var i=0; i<contactopen.length; i++)
{
    if(contactopen[i]){
        contactopen[i].addEventListener("click", NewTab, false);
    }
}
var productopen=document.getElementsByClassName("newproduct");
for(var i=0; i<productopen.length; i++)
{
    if(productopen[i]){
        productopen[i].addEventListener("click", NewTabProduct, false);
    }
}

//change image on hover
function changeImage(nn){
    var numb=nn;
    var source="images/change"+nn+".jpeg";
    document.getElementById("changeimg"+numb).src=source;
}
function changeBack(nn){
    var numb=nn;
    var source="images/adopt"+nn+".jpeg";
    document.getElementById("changeimg"+numb).src=source;
}
//eventlistener for changing image on hover
var image1=document.getElementById("changeimg1");
if(image1){
    image1.addEventListener("mouseover", () => {changeImage("1");}, false);
    image1.addEventListener("mouseout", () => {changeBack("1");}, false);
}
var image2=document.getElementById("changeimg2");
if(image2){
    image2.addEventListener("mouseover", () => {changeImage("2");}, false);
    image2.addEventListener("mouseout", () => {changeBack("2");}, false);
}
var image3=document.getElementById("changeimg3");
if(image3){
    image3.addEventListener("mouseover", () => {changeImage("3");}, false);
    image3.addEventListener("mouseout", () => {changeBack("3");}, false);
}
var image4=document.getElementById("changeimg4");
if(image4){
    image4.addEventListener("mouseover", () => {changeImage("4");}, false);
    image4.addEventListener("mouseout", () => {changeBack("4");}, false);
}
var image5=document.getElementById("changeimg5");
if(image5){
    image5.addEventListener("mouseover", () => {changeImage("5");}, false);
    image5.addEventListener("mouseout", () => {changeBack("5");}, false);
}
var image6=document.getElementById("changeimg6");
if(image6){
    image6.addEventListener("mouseover", () => {changeImage("6");}, false);
    image6.addEventListener("mouseout", () => {changeBack("6");}, false);
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
//event to view more
var showbtn = document.getElementById("showbutton");
if(showbtn){
  showbtn.addEventListener("click", moreView, false);
}

//funtion tochange pages in page-4
function changeGallery2() {
  var page = document.getElementById("gallerymain1");
  var page2 = document.getElementById("gallerymain2");
  if (!page2.style.display ||page2.style.display == "none") {
    page2.style.display = "grid";
    page.style.display = "none";
    document.getElementById("gallerypg1").style.boxShadow="none";
    document.getElementById("gallerypg1").style.backgroundColor="#f8f4e9";
    document.getElementById("gallerypg2").style.backgroundColor="#90b3c9";
    document.getElementById("gallerypg2").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
  }
  document.getElementById("divtop").scrollIntoView();
}
function changeGallery1() {
  var page = document.getElementById("gallerymain1");
  var page2 = document.getElementById("gallerymain2");
  if (!page.style.display ||page.style.display == "none") {
    page.style.display = "grid";
    page2.style.display = "none";
    document.getElementById("gallerypg2").style.boxShadow="none";
    document.getElementById("gallerypg2").style.backgroundColor="#f8f4e9";
    document.getElementById("gallerypg1").style.backgroundColor="#90b3c9";
    document.getElementById("gallerypg1").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
  }
  document.getElementById("divtop").scrollIntoView();
}

//event that will change page
var gallerybtn1 = document.getElementById("gallerypg1");
if(gallerybtn1){
    gallerybtn1.addEventListener("click", changeGallery1, false);
}
var gallerybtn2 = document.getElementById("gallerypg2");
if(gallerybtn2){
    gallerybtn2.addEventListener("click", changeGallery2, false);
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
    //to go to top
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
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    } 
    else if(uname == "" ) {
        document.getElementById("loginError").innerHTML="Username is required!!";
        document.getElementById("username").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else if(pass == "") {
        document.getElementById("loginError").innerHTML="Password is required!!";
        document.getElementById("yourpass").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else if(select == "") {
        document.getElementById("loginError").innerHTML="Please Select Option!!";
        document.getElementById("query").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else if(check1==false && check2==false && check3==false ) {
        document.getElementById("loginError").innerHTML="Choose the Pet Options!!";
        document.getElementById("pet1").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else if(check3==true)
    {
        var listcontent=document.getElementById("pets").innerHTML;
        if(listcontent=="")
        {
            document.getElementById("loginError").innerHTML="Name is required!!";
            document.getElementById("listpet").focus();
            document.getElementById("loginError").style.color="#ff0000";
            document.getElementById("loginError").scrollIntoView(true);
            return false;
        }
    }
    else if(text == "") {
        document.getElementById("loginError").innerHTML="Message is required!!";
        document.getElementById("message").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else{
        alert("Message sent. Thanks for coming to us.");
        return true;
    } 
    
}

//validate form for registerring
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
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else if(lastname == "" ) {
        document.getElementById("loginError").innerHTML="Lastname is required!!";
        document.getElementById("lname").focus();
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("loginError").scrollIntoView(true);
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
        document.getElementById("loginError").scrollIntoView(true);
        document.getElementById("ans1").focus();
        return false;
    }
    else if(check==false)
    {
        document.getElementById("loginError").innerHTML="Cant Register without Agreeing to our Terms.";
        document.getElementById("loginError").style.color="#ff0000";
        document.getElementById("agreement").focus();
        document.getElementById("loginError").scrollIntoView(true);
        return false;
    }
    else{
        alert("Message sent. Thanks for coming to us.");
        return true;
    } 
    
}
//show confirm  box before resetting
function resetConfirm(){
    confirm("Do you want to reset your form?")
}

//display dynamic list if user chooses others in checkbox
var otherpet = document.getElementById("pet3");
function show(){
    var list=document.getElementById("dynamicList");
    if(otherpet.checked==true)
    {
        list.style.display="grid";
    }
    else
    {
        list.style.display="none";
    }
}

//event listener
if(otherpet){
    otherpet.addEventListener("click", show, false);
}


let add=document.getElementById("addpet");
let petname=document.getElementById("pets");
//retrives item entered and makes it in list
function addmorepet(){
    let enteredname=document.getElementById("listpet").value;
    let listtext=document.createTextNode(enteredname);
    let list=document.createElement("li");

    //deleting button
    let delbtn=document.createElement("button");
    delbtn.textContent="X";

    //new item with delete button
    petname.appendChild(list);
    list.appendChild(listtext);
    list.appendChild(delbtn);

    //delete item on click
    delbtn.onclick=function()
    {
        petname.removeChild(list);
    }
}

//add more data on click
if(add){
  add.addEventListener("click", addmorepet, false);
}
