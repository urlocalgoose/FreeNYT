var paragraphs = document.getElementsByTagName("p");

var title = document.getElementsByTagName("h1");

var image = [];
var allIMG = "";
var FULLtitle = "";
var article = "";
var allImg = "";

// get all images from site
for(var i = 0; i < document.images.length; i++){
  image.push(document.images[i].src);
}

// put image script inside an image tag
image = image.filter((e, i) =>  i % 2 == 0)
for(var i = 0; i < image.length; i++){
    allIMG += '<img src="' + image[i] + '"/><br></br>'
}

// add each paragraph from the page to the same variable
for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].textContent === "Advertisement" || paragraphs[i].textContent === "Supported by"){
        continue;
    } else {
        article += paragraphs[i].textContent + '</br></br>';
    }
}

// in case we got multiple titles
for (var i = 0; i < title.length; i++) {
    FULLtitle += title[i].textContent;
}

// html file for showing the article, shows after user clicks extention
var html = `
<!DOCTYPE html>
<html>
<head>
<style>
p {
    margin-right: 25%;
    margin-left: 25%;
    color: #333;
    font-size: 120%;
    font-family: georgia;
}
body {
    background-color: #FFF;
}
h1 {
    text-align: center;
    font-family: georgia;
}
img {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50%;
}

#logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15%;
    height: 15%;
    padding-top: 14px;
    padding-bottom: 14px;
    text-decoration: none;
}

/* Add a black background color to the top navigation */
.topnav {
  background-color: #FFF;
  overflow: hidden;
  border: none;
  border-radius: 40px;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: black;
  background-color: black;
  font-family: sans-serif;
  text-align: center;
  padding: 20px 20px;
  text-decoration: none;
  font-size: 17px;
  transition: 0.2s;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #333;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  color: #FFF;
}

.topnav a.end {
    color: #FFF;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
}
</style>
</head>
<body>
<div class="topnav">
  <a class="active" href="https://www.nytimes.com/">Home</a>
  <a class="end" onClick="window.location.reload();">Back</a>
  <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/2560px-NewYorkTimes.svg.png" width="1280px" height="173px"/>
</div>
<h1>` + FULLtitle +`</h1>
<p>` + article + allIMG + `</p>
</body>
</html>
`
// write this html file to the site
document.open();
document.write(html);
document.close();
document.documentElement.scrollTop = 0;