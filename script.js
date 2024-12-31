const starContainer = document.querySelector('body');
const starCount = 400; // Number of stars

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random size for each star
  const size = Math.random() * 3 + 1; // Star size between 1px and 4px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random initial position
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;

  // Random animation duration (no delay)
  star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duration between 5s and 15s

  starContainer.appendChild(star);
  const colors = ['#fff', '#ff9', '#f99', '#ff0000'];
  star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Emailjs for contact
function sendMail(){
  let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("Email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("msg").value,
  }

  emailjs.send("service_ah787y9", "template_05nuzfd",parms);
}