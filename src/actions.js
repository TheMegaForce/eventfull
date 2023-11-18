import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://eventfull-backend.onrender.com"

//createAction => create a Event from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newEvent = {
        title: formData.get("title"),
        icon: formData.get("icon"),
        description: formData.get("description"),
        timeStart: formData.get("timeStart"),
        timeEnd: formData.get("timeEnd"),
        allDay: formData.get("allDay"),
        color: formData.get("color"),
        owner: formData.get("owner"),
    }

    // send request to backend
    await fetch(URL + "/events/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a Event from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get Event id
    const id = params.id

    // construct request body
    const updatedEvent = {
        title: formData.get("title"),
        content: formData.get("content")
    }

    // send request to backend
    await fetch(URL + `/events/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedEvent)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a Event from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get Event id
    const id = params.id

    // send request to backend
    await fetch(URL + `/events/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}