document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (nom === "" || email === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Veuillez remplir tous les champs.";
  } else if (password.length < 6) {
    message.style.color = "orange";
    message.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
  } else {
    message.style.color = "green";
    message.textContent = "Inscription réussie 🎉";
    document.getElementById("form").reset();
  }
});