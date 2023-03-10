import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";
const contactOpen = "<Contact />";
const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleOnchange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    console.log(contactData);
    const emailData:any = {
      type: "email",
      content: {
          to: [
              "gireeshhiremath70@gmail.com"
          ],
          subject: "Contacted by portfolio",
          senderName: contactData.name,
          senderEmail: contactData.email,
          templateId: "d-ba7202ec7d7e4b7cbfa700aefb6ea07c",
          dynamicTemplateData: {
              email: contactData.name,
              query: contactData.message
          }
      }
    }
    axios({
      url: "https://cloud-api-gateway.altorumleren.com/notifications/api/v1/68xqmvK0NL/notify",
      method: "POST",
      headers: {
        authorization: "your token comes here",
        "Content-Type": "application/json",
        "X-Requested-With": Math.floor(Math.random() * 100000).toString(),
      },
      data: emailData,
    })
      .then((res) => { toast.success('Email sent Successfully', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      })
      .catch((err) => {toast.error('Email sending failed', {
        position: toast.POSITION.BOTTOM_RIGHT
      }); });
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };
 
  const downloadPdfFile = () => {
    console.log("download logic goes here")
}

  return (
    <div className={styles.contact}>
      {/* <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      > */}
            <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <center>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>
          </center>
          <form onSubmit={handleOnsubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={contactData.name}
              onChange={handleOnchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={contactData.email}
              onChange={handleOnchange}
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Your Message"
              required
              value={contactData.message}
              onChange={handleOnchange}
            ></textarea>
            <button type="submit">Send</button>
            <a href="https://drive.google.com/file/d/1g4I0eLn-ymJtrkRSuwlSl8F_NapMozau/view?usp=share_link" download="Gireesh's Resume" target='_blank'>
              <button type="button"  className={styles.btn}>Download Resume</button>
            </a>
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
