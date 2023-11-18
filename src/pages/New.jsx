import { Form } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {

    const userID = localStorage.getItem("userId")

    // For each post in the array render a Post component
    return <>
    <div className="min-h-[100vh] bg-[#021817]">
        <div id="top" className="topintro">
            <h2 className="
                font-medium
                text-5xl
                bg-[#F31B26]
                text-transparent
                bg-clip-text p-5">
                    New Note
            </h2>
            <Form className="m-10" action="/create" method="post">
                <input 
                    type="text" name="title" placeholder="write title here"/>
                <input
                    type="file" name="icon" />
                <textarea className="min-h-[50vh] max-h-auto p-3 border-none  bg-[#043432] text-[#E7FDFC]"
                    type="text" name="description" placeholder="write description here"/>
                <input 
                    type="text" name="timeStart" placeholder="YYYY/MM/DD"/>
                <input 
                    type="text" name="timeEnd" placeholder="YYYY/MM/DD (if all day, leave empty)"/>
                    <br/>
                    <br/>
                <input 
                    type="checkbox" name="allDay"/> <h1>All Day?</h1>
                <input 
                    type="text" name="color" placeholder="write valid CSS color here"/>
                <input 
                    type="text" name="owner" placeholder={`Please input ${userID}`} defaultValue={userID}/>
                
                {/* <a onClick={handleRedirect}> */}
                <a>
                    <motion.button
                        initial={{ opacity: 0.6 }}
                        whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                            Create New Event
                    </motion.button>
                </a>
            </Form>
                <button
                    type="submit"
                    className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                        Back Home
                </button>
        </div>
    </div>
    </>;
};

export default Index;