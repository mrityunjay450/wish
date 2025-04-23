document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page refresh

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;

  console.log("Form Submitted:");
  console.log({ name, email, mobile, address });

  alert("Thank you! Your response has been recorded.");
});


let modeBtn = document.querySelector("#mode");
let body = document.body;

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  
    const isDark = body.classList.contains("dark-mode");
  
    document.getElementById("home").style.backgroundImage = isDark
      ? "url('images/bg-home-dark.jpg')"
      : "url('images/bg-home.jpg')";
  
      document.getElementById("skills").style.backgroundImage = isDark
        ? "url('images/bg-skills-dark.jpg')"
        : "url('images/bg-skills.jpg')";

        document.getElementById("projects").style.backgroundImage = isDark
        ? "url('images/bg-projects-dark.jpg')"
        : "url('images/bg-projects.jpg')";

        document.getElementById("services").style.backgroundImage = isDark
        ? "url('images/bg-services-dark.jpg')"
        : "url('images/bg-services.jpg')";

        document.getElementById("contactus").style.backgroundImage = isDark
        ? "url('images/bg-contactus-dark.jpg')"
        : "url('images/bg-contacus.jpg')";
      
  });