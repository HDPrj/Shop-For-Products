// create the section element
var section = document.createElement("section");
section.setAttribute("class", "home");
section.setAttribute("id", "home");

// create the content div element
var contentDiv = document.createElement("div");
contentDiv.setAttribute("class", "content");

// create the heading element
var heading = document.createElement("h3");
heading.innerHTML = "Biggest headphones Sale<br><span>Up To 50% Off</span>";

// create the paragraph element
var paragraph = document.createElement("p");
paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, totam sed maxime animi facilis!";

// create the button element
var button = document.createElement("button");
button.setAttribute("id", "shopnow");
button.innerHTML = "Shop Now";

// append the heading, paragraph, and button elements to the content div
contentDiv.appendChild(heading);
contentDiv.appendChild(paragraph);
contentDiv.appendChild(button);

// create the image div element
var imgDiv = document.createElement("div");
imgDiv.setAttribute("class", "img");

// create the image element
var image = document.createElement("img");
image.setAttribute("src", "https://images.fonearena.com/blog/wp-content/uploads/2022/11/Noise-Two-Wireless-Headphones.jpg");
image.setAttribute("alt", "");

// append the image element to the image div
imgDiv.appendChild(image);

// append the content div and image div to the section element
section.appendChild(contentDiv);
section.appendChild(imgDiv);

// append the section element to the document body
document.body.appendChild(section);