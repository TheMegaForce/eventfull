import { Link } from "react-router-dom";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

//destructure the event from props
const Post = ({ event }) => {

    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [30, -30]);
    const rotateY = useTransform(x, [0, 1500], [-30, 30]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    const div = {
        textAlign: "left",
        background: "#043432",
        borderColor: event.color,
        margin: "10px auto",
        padding: "1em",
        rotateX: rotateX,
        rotateY: rotateY,
        borderWidth: "4px",
    };

    function handleRedirect() {
        const left = document.getElementById("left")
        left.classList.remove("leftintro")
        left.classList.add("leftoutro")
        const bottom = document.getElementById("bottom")
        bottom.classList.remove("bottomintro")
        bottom.classList.add("bottomoutro")
        setTimeout(() => {
            window.location.replace(`/event/${event.id}`)
        }, 3000);
    }
    
    return (
        <motion.div 
            onMouseMove={handleMouse}
            onMouseLeave={() => {
                animate(x, 200);
                animate(y, 200);
            }}>
            <motion.div
                style={div}
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }} 
                className={`col-span-2 rounded-[12px] text-[#E7FDFC] border border-30 border-solid border-[${event.color}]`}>
                    <a onClick={handleRedirect}>
                        <motion.h1 
                            initial={{ opacity: 0.6 }}
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                            whileTap={{ scale: 0.5 }}
                            whileInView={{ opacity: 1 }}>
                                {event.title}
                        </motion.h1>
                    </a>
                    <hr/>
                    <h1>
                        {event.timeStart} - {event.timeEnd}
                    </h1>
                    <textarea unselectable="true" readOnly className="list_container textarea text-left px-5">
                        {event.description}
                    </textarea>
                    <img className="w-[40vw] h-[auto]" draggable={false} src={event.icon}></img>
            </motion.div>
        </motion.div>
    );
};

export default Post