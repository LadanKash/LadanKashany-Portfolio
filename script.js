// Side menu java script code //

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Side menu java script code //

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// Script for contact form //

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch("send_message.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Network response was not ok.");
    })
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to send message. Please try again later.");
    });
});

//project//


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}



function toggleMoreText(productNumber) {
  var mainText = document.getElementById("main-text" + productNumber);
  var moreText = document.getElementById("more-text" + productNumber);

  mainText.classList.toggle("collapsed");
  mainText.classList.toggle("expanded");
  moreText.classList.toggle("collapsed");
  moreText.classList.toggle("expanded");
}


/*--------Image Big-------*/


function toggleMoreText(productNumber) {
  var mainText = document.getElementById("main-text" + productNumber);
  var moreText = document.getElementById("more-text" + productNumber);

  mainText.classList.toggle("collapsed");
  mainText.classList.toggle("expanded");
  moreText.classList.toggle("collapsed");
  moreText.classList.toggle("expanded");
}

function toggleImage(imageSrc) {
  var largerImageContainer = document.getElementById('largerImageContainer');
  var largerImage = document.getElementById('largerImage');

  if (largerImageContainer.style.display === 'block') {

    largerImageContainer.style.display = 'none';
  } else {

    largerImage.src = imageSrc;
    largerImageContainer.style.display = 'block';
  }
}
