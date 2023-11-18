// YOUR DEPLOYED API BASE URL
const URL = "https://eventfull-backend.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/events/")
    const events = await response.json()
    return events
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/events/${params.id}/`)
    const event = await response.json()
    return event
}

export const usersLoader = async () => {
    const res = await fetch(URL + "/users/")
    const users = await res.json()
    console.log(users);
    return users
};

export const usersShowLoader = async ({params}) => {
    const res = await fetch(URL + "/users/" + params.id)
    const users = await res.json()
    console.log('User Data: ', users);
    return users
}