import {getNewToken, getToken, getPageLogin} from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const emailE = document.querySelector(".email");
    const passwordE = document.querySelector(".pass");
    const btnSubmit = document.querySelector(".btn__submit");
    const formSubmit = document.querySelector(".login__form");


    const onSave = async (event) => {
        event.preventDefault();
        const emailValue = emailE.value;
        if (!emailValue) {
            alert("Please enter valid email");
            return;
        }
        const passwordValue = passwordE.value;
        if (!passwordValue) {
            alert("Please enter valid password");
            return;
        }
        const body = {
            email: emailValue.trim(),
            password: passwordValue,
        }
        await getToken('login', body);

    }

    btnSubmit.addEventListener("click", onSave);
    formSubmit.addEventListener("submit", onSave);

});