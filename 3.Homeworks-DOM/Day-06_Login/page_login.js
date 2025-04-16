import {getNewToken, getPageLogin} from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    // Get post
    const inPage = async () => {
        const page = await getPageLogin('post');
        if (localStorage['detail'] === 'token expired') {
            newToken()
        }
        localStorage.setItem('detail', page.detail);

    }

    // Get New Token
    if (localStorage['detail'] === 'token expired') {
        async function newToken () {
                const body = {
                    refresh: localStorage.getItem("refresh")
                }
                const refreshToken = await getNewToken('login/get_new_token/', body);
                localStorage.setItem('access', refreshToken.access)
                localStorage.setItem('detail', inPage());
        }
        newToken();
        inPage()
    } else {
        inPage();
    }
})

