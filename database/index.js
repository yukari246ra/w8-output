document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    emailInput.value = localStorage.getItem("email") || "";
    passwordInput.value = localStorage.getItem("password") || "";

    document.querySelector(".form").addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("password", passwordInput.value);
    });
});