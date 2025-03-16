//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const emailId = document.getElementById("emailId").value;
  
  const message = "First Name: " + firstName + " Last Name: " + lastName + " Phone Number: " + phoneNumber + " Email ID: " + emailId;
  alert(message);
});