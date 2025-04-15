const baseUrl = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/'

const getToken = async (endPoint, payload) => {
    const response = await fetch(`${baseUrl}${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })
    if (!response.ok) {
        alert('Wrong username or password')
        return
    }
    else {
        window.location.href = './Page_login.html'
    }
    return await response.json();
}

const getNewToken = async (endPoint, payload) => {
    const response = await fetch(`${baseUrl}${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return await response.json()
}

const getPageLogin = async (endPoint) => {
    const response = await fetch(`${baseUrl}${endPoint}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
        }
    })
    return await response.json()

}

export {getNewToken, getToken, getPageLogin}