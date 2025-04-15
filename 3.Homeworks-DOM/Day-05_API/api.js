const baseUrl = 'https://api-todolist-multiuser.onrender.com/Giang/'

const getData = async (endPoint) => {
    const response = await fetch(`${baseUrl}${endPoint}`)
    return await response.json()
}

const postData = async (endPoint, payLoad) => {
    const response = await fetch(`${baseUrl}${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(payLoad),
    })
    return await response.json()
}

const putData = async (endPoint, id, payLoad) => {
    const response = await fetch(`${baseUrl}${endPoint}${id}`, {
        method: 'PUT',
        body: JSON.stringify(payLoad),
    })
    return await response.json()
}

const deleteData = async (endPoint, id) => {
    const response = await fetch(`${baseUrl}${endPoint}${id}`, {
        method: 'DELETE',
    })
    return await response.json()
}

export {getData, postData, putData, deleteData}