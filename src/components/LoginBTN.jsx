import React from 'react'
import {motion} from 'framer-motion'

function LoginBTN() {

    function handleRedirect() {
        const left = document.getElementById("left")
        left.classList.remove("leftintro")
        left.classList.add("leftoutro")
        const bottom = document.getElementById("bottom")
        bottom.classList.remove("bottomintro")
        bottom.classList.add("bottomoutro")
        setTimeout(() => {
            window.location.replace('/login/')
        }, 3500);
    }

  return (
    <a onClick={handleRedirect}>
        <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                Login
        </motion.button>
    </a>
  )
}

export default LoginBTN