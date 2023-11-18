import { Link, useLoaderData, Form } from "react-router-dom";
import { motion } from "framer-motion";

// destructuring the props needed to get our event, including router prop match
const Show = () => {
    const event = useLoaderData();

    function handleUpdateRedirect() {
        const right = document.getElementById("right")
        right.classList.remove("rightintro")
        right.classList.add("rightoutro")
        setTimeout(() => {
            window.location.replace('/')
        }, 3000);
    }

    function handleBackRedirect() {
        const right = document.getElementById("right")
        right.classList.remove("rightintro")
        right.classList.add("rightoutro")
        setTimeout(() => {
            window.location.replace('/')
        }, 3000);
    }

    function handleDeleteRedirect() {
        window.location.replace('/')
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
                    <Form className="m-10" action={`/update/${event.id}`} method="event">
                        <input
                            type="text"
                            name="title"
                            placeholder="write title here"
                            defaultValue={event.title}
                        />
                        <textarea
                            className="min-h-[50vh] max-h-auto p-3 border-[#E7FDFC] bg-[#043432] text-[#E7FDFC]"
                            type="text"
                            name="description"
                            placeholder="write description here"
                            defaultValue={event.description}
                        />
                        <a onClick={handleUpdateRedirect}>
                            <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                                    Update "{event.title}"
                            </motion.button>
                        </a>
                    </Form>
                    <Form action={`/delete/${event.id}`} method="event">
                        <a onClick={handleDeleteRedirect}>
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