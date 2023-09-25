const show = document.querySelector(".showError");
const emailLG = document.querySelector(".email-login");
const passLG = document.querySelector(".pass-login");
const button = document.querySelector("#bt");
function showMess(mess) {
    show.innerHTML = mess
}

button.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailLG.value == "") {
        showMess("Email không được để trống");
        return false;
    }
    if (passLG.value == "") {
        showMess("password không được để trống");
        return false;
    }
})