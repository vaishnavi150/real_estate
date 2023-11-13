
//loginform

function validateForm() {
   var email = document.getElementById("email").value;
   var password = document.getElementById("pass").value;

   if (email === "" || password === "") {
       alert("Email and password must be filled out");
       return false; // Prevent form submission
   }

   // Additional validation logic can be added here if needed

   // If all validations pass, then redirect to home.html
   window.location.href = "home.html";

   return false; // Prevent default form submission
}

//register form


function validateForm() {
   var name = document.getElementsByName("name")[0].value;
   var email = document.getElementsByName("email")[0].value;
   var password = document.getElementsByName("pass")[0].value;
   var confirmPass = document.getElementsByName("c_pass")[0].value;

   if (name === "" || email === "" || password === "" || confirmPass === "") {
       alert("All fields must be filled out");
       return false; // Prevent form submission
   }

   if (password !== confirmPass) {
       alert("Passwords do not match");
       return false; // Prevent form submission
   }

   // Additional validation logic can be added here if needed

   // If all validations pass, show success message
   document.getElementById("successMessage").style.display = "block";
   return false; // Prevent form submission (to keep the message visible)
}

//post property
document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("postForm").addEventListener("submit", function(event) {
       event.preventDefault(); // Prevent the default form submission
       
       var location = document.getElementsByName("location")[0].value;
       var type = document.getElementsByName("type")[0].value;
       var bhk = document.getElementsByName("bhk")[0].value;
       var minimum = document.getElementsByName("minimum")[0].value;
       var maximum = document.getElementsByName("maximum")[0].value;

       if (location === "" || type === "" || bhk === "" || minimum === "" || maximum === "") {
           alert("Please fill out all required fields");
           return;
       }

       // If all validations pass, perform the action
       alert("Property posted successfully!");
       // To redirect to another page after successful submission:
       // window.location.href = "success.html";
   });
});



let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});
