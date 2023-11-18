import { Link, useLoaderData, Form, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// destructuring the props needed to get our event, including router prop match
const Show = () => {
    const event = useLoaderData();

    const navigate = useNavigate()

    const userID = localStorage.getItem("userId")

    function handleUpdateRedirect() {
        const right = document.getElementById("right")
        right.classList.remove("rightintro")
        right.classList.add("rightoutro")
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }

    function handleBackRedirect() {
        const right = document.getElementById("right")
        right.classList.remove("rightintro")
        right.classList.add("rightoutro")
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }

    function handleDeleteRedirect() {
        navigate('/')
    }

    return (
        <div className="min-h-[100vh] bg-[#021817]">
            <div id="right" className="rightintro">
                <div style={{ textAlign: "center" }}>
                    <h2 className="
                        font-medium
                        text-5xl
                        bg-[#F31B26]
                        text-transparent
                        bg-clip-text p-5">
                            "{event.title}" Notes
                    </h2>
                    <Form className="m-10" action={`/update/${event.id}`} method="post">
                    <input 
                        type="text" name="title" placeholder="write title here" defaultValue={event.title}/>
                    <input
                        type="file" name="icon" />
                    <textarea className="min-h-[50vh] max-h-auto p-3 border-none  bg-[#043432] text-[#E7FDFC]"
                        type="text" name="description" placeholder="write description here" defaultValue={event.description}/>
                    <input 
                        type="text" name="timeStart" placeholder="YYYY/MM/DD" defaultValue={event.timeStart}/>
                    <input 
                        type="text" name="timeEnd" placeholder="YYYY/MM/DD (if all day, leave empty)" defaultValue={event.timeEnd}/>
                        <br/>
                        <br/>
                    <input 
                        type="checkbox" name="allDay" defaultChecked={event.allDay} /> <h1>All Day?</h1>
                    <input 
                        type="text" name="color" placeholder="write valid CSS color here" defaultValue={event.color}/>
                    <input 
                        type="text" name="owner" placeholder={`Please input ${userID}`} defaultValue={userID}/>
                            <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                                    Update "{event.title}"
                            </motion.button>
                    </Form>
                    <Form action={`/delete/${event.id}`} method="event">
                        <a>
                        <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{ scale: [null, 1.5, 1.4], backgroundColor: "red" }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1, backgroundColor: "#5F1114" }}
                                className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                                    DELETE "{event.title}"
                            </motion.button>
                        </a>
                    </Form>
                </div>
                <a onClick={handleBackRedirect}>
                    <motion.button
                        initial={{ opacity: 0.6 }}
                        whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                        Go Back
                    </motion.button>
                </a>
            </div>
        </div>
    );
};

export default Show;