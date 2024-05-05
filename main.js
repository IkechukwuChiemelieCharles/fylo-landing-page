const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const sendEmailButton = document.getElementById("sendEmailButton");
const emailSendMsg = document.getElementById("email-send-msg");
// second input//////////////////////
const emailInput2 = document.getElementById("email2");
const errorMsg2 = document.getElementById("error-msg2");
const sendEmailButton2 = document.getElementById("sendEmailButton2");
const emailSendMsg2 = document.getElementById("email-send-msg2");

emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);
  if (isValidEmail) {
    errorMsg.textContent = "Correct";
    errorMsg.classList.remove("error-message");
    errorMsg.classList.add("success-message");
    emailInput.classList.remove("error-input");
  } else {
    errorMsg.textContent = "Please Check Your Email";
    errorMsg.classList.remove("success-message");
    errorMsg.classList.add("error-message");
    emailInput.classList.add("error-input");
  }
});
sendEmailButton.addEventListener("click", function () {
  // Check if the email is valid before displaying the message
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    emailSendMsg.textContent = "Your email has been sent!";
    emailSendMsg.classList.remove("message-not-sent");
    emailSendMsg.classList.add("send-message");

    emailInput.value = ""; // Clear the input field after sending the email
  } else {
    emailSendMsg.textContent = "Please enter a valid email before sending.";
    emailSendMsg.classList.remove("send-message");
    emailSendMsg.classList.add("message-not-sent");
  }
});
//   second input///////////////////////

emailInput2.addEventListener("input", function () {
  const email = emailInput2.value.trim();
  const isValidEmail = validateEmail(email);
  if (isValidEmail) {
    errorMsg2.textContent = "Correct";
    errorMsg2.classList.remove("error-message2");
    errorMsg2.classList.add("success-message2");
    emailInput2.classList.remove("error-input2");
  } else {
    errorMsg2.textContent = "Please Check Your Email";
    errorMsg2.classList.remove("success-message2");
    errorMsg2.classList.add("error-message2");
    emailInput2.classList.add("error-input2");
  }
});
sendEmailButton2.addEventListener("click", function () {
  // Check if the email is valid before displaying the message
  const email = emailInput2.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    emailSendMsg2.textContent = "Your email has been sent!";
    emailSendMsg2.classList.remove("message-not-sent2");
    emailSendMsg2.classList.add("send-message2");

    emailInput2.value = ""; // Clear the input field after sending the email
  } else {
    emailSendMsg2.textContent = "Please enter a valid email before sending.";
    emailSendMsg2.classList.remove("send-message2");
    emailSendMsg2.classList.add("message-not-sent2");
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
