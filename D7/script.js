// TAB SWITCHING
function showTab(event, tab) {
  document.querySelectorAll('.form-section')
    .forEach(el => el.classList.remove('active'));

  document.querySelectorAll('.tabs button')
    .forEach(btn => btn.classList.remove('active'));

  document.getElementById(tab).classList.add('active');
  event.target.classList.add('active');
}

// SIGNUP
function signupUser(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;

  let msg = document.getElementById("signupMsg");

  if (!name || !email || !password || !confirm) {
    msg.style.color = "red";
    msg.innerText = "Please fill all fields";
    return;
  }

  if (password !== confirm) {
    msg.style.color = "red";
    msg.innerText = "Passwords do not match";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Signup successful!";
}

// LOGIN
function loginUser(event) {
  event.preventDefault();

  let email = document.getElementById("loginEmail").value.trim().toLowerCase();
  let password = document.getElementById("loginPassword").value.trim();

  let msg = document.getElementById("loginMsg");

  let correctEmail = "admin@gmail.com";
  let correctPassword = "12345";

  if (!email || !password) {
    msg.style.color = "red";
    msg.innerText = "Fill all fields";
    return;
  }

  if (email === correctEmail && password === correctPassword) {
    msg.style.color = "green";
    msg.innerText = "Login successful!";
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid email or password";
  }
}