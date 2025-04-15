import {getNewToken, getPageLogin} from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    // Get post
    const inPage = async () => {
        const page = await getPageLogin('post');
        localStorage.setItem('detail', page.detail);
        console.log(page)
    }

    // Get New Token
    if (localStorage['detail'] === 'token expired') {
        const newToken = async (event) => {
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

