import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://eventfull-backend.onrender.com"
const url_token = localStorage.getItem("token")

//createAction => create a Event from form submissions to `/create`
// export const createAction = async ({request}) => {
//     // get form data
//     const formData = await request.formData()

//     // construct request body
//     const newEvent = {
//         title: formData.get("title"),
//         icon: formData.get("icon"),
//         description: formData.get("description"),
//         timeStart: formData.get("timeStart"),
//         timeEnd: formData.get("timeEnd"),
//         allDay: formData.get("allDay"),
//         color: formData.get("color"),
//         owner: formData.get("owner"),
//     }

//     // send request to backend
//     await fetch(URL + "/events/", {
//         method: "post",
//         headers: {
//             "Content-Type": "multipart/form-data", 'Authorization': `Token ${url_token}`
//         },
//         body: JSON.stringify(newEvent)
//     })

//     // redirect back to index page
//     return redirect("/")
// }

export const createAction = async ({ request }) => {
    // get form data
    const formData = await request.formData();

    // send request to backend with form data
    await fetch(URL + "/events/", {
        method: "post",
        headers: {
            Authorization: `Token ${url_token}`,
        },
        body: formData, // Use formData directly as the body
    });

    // redirect back to index page
    return redirect("/home");
};

//updateAction => update a Event from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get Event id
    const id = params.id

    // send request to backend
    await fetch(URL + `/events/${id}/`, {
        method: "put",
        headers: {
            'Authorization': `Token ${url_token}`
        },
        body: formData,
    })

    // redirect back to show page page
    return redirect("/home")
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
    return redirect("/home")
}