import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal() {
/* The following code is a React component written in JavaScript. It defines several state variables using
the `useState` hook. These state variables are used to manage the state of a form. */
  const [showModal, setShowModal] = useState(false);
  const [fname, setFname] = useState("");
  const [fnameErr, setFnameErr] = useState("");
  const [lname, setLname] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const [mail, setMail] = useState("");
  const [mailErr, setMailErr] = useState("");
  const [num, setNum] = useState("");
  const [numErr, setNumErr] = useState("");
  const [msg, setMsg] = useState("");
  const [msgErr, setMsgErr] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useRef();
/**
 * The following code defines two functions, `successMsg` and `errorMsg`, which display success and error
 * messages respectively using a toast notification.
 */
  const successMsg = () => {
    toast.success("Your Message Has Been Sent", {
      theme: "dark",
    });
  };
  const errorMsg = (e) => {
    toast.warning(`Failed To Send Your Message Error: ${e}`, {
      theme: "dark",
    });
  };
/**
 * The function "validateInputs" checks if the input fields for first name, last name, email, phone
 * number, and message are valid and returns a boolean value indicating whether all inputs are valid or
 * not.
 * @returns The function `validateInputs` is returning a boolean value `isValid`. This value indicates
 * whether all the input fields are valid or not. If `isValid` is `true`, it means all the input fields
 * are valid. If `isValid` is `false`, it means there is at least one invalid input field.
 */
  const validateInputs = () => {
    let isValid = true;
    if (fname.trim() === "") {
      setFnameErr("First name is required");
      isValid = false;
    } else {
      setFnameErr("");
    }

    if (lname.trim() === "") {
      setLnameErr("Last name is required");
      isValid = false;
    } else {
      setLnameErr("");
    }

    if (mail.trim() === "") {
      setMailErr("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      setMailErr("Invalid email format");
      isValid = false;
    } else {
      setMailErr("");
    }

    if (num.trim() === "") {
      setNumErr("Phone number is required");
      isValid = false;
    } else if (!/^[+\d]+(?:[\d-.\s()]*)$/.test(num)) {
      setNumErr("Invalid phone number format");
      isValid = false;
    } else {
      setNumErr("");
    }

    if (msg.trim() === "") {
      setMsgErr("Message is required");
      isValid = false;
    } else {
      setMsgErr("");
    }

    return isValid;
  };

  // EmailJs
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    /* The following code is using the emailjs library to send a form submission. It is calling the
    `sendForm` function with the following parameters: */
    emailjs
      .sendForm(
        "service_fso7ipt",
        "template_eg0jqgs",
        form.current,
        "yW9sD5wxu_LfCNDnx",
        setIsDisabled(true)
      )
      .then(
        (result) => {
          setIsDisabled(true);
          successMsg(); //Toastify Success
          setShowModal(false);
          setFname("");
          setLname("");
          setMail("");
          setNum("");
          setMsg("");
        },
        (error) => {
          console.log(error.text);
          errorMsg(error.text); //Toastify Error
        }
      );
  };

  /**
   * The function `handleInputChange` is used to update state variables based on the input field name.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "first_name":
        setFname(value);
        break;
      case "last_name":
        setLname(value);
        break;
      case "user_email":
        setMail(value);
        break;
      case "user_number":
        setNum(value);
        break;
      case "message":
        setMsg(value);
        break;
      default:
        break;
    }
  };

  /**
   * The function `handleInputBlur` is used to validate input fields onBlur and display error messages
   * if the input is invalid.
   */
  const handleInputBlur = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "first_name":
        if (value.trim() === "") {
          setFnameErr("First name is required");
        } else {
          setFnameErr("");
        }
        break;
      case "last_name":
        if (value.trim() === "") {
          setLnameErr("Last name is required");
        } else {
          setLnameErr("");
        }
        break;
      case "user_email":
        if (value.trim() === "") {
          setMailErr("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setMailErr("Invalid email format");
        } else {
          setMailErr("");
        }
        break;
      case "user_number":
        if (value.trim() === "") {
          setNumErr("Phone number is required");
        } else if (!/^[+\d]+(?:[\d-.\s()]*)$/.test(value)) {
          setNumErr("Invalid phone number format");
        } else {
          setNumErr("");
        }
        break;
      case "message":
        if (value.trim() === "") {
          setMsgErr("Message is required");
        } else {
          setMsgErr("");
        }
        break;
      default:
        break;
    }
  };

  /* The following code is using the useEffect hook in React to set the value of the isDisabled state
  variable. The isDisabled variable is being set based on the following conditions: */
  useEffect(() => {
    setIsDisabled(
      fname.trim() === "" ||
        lname.trim() === "" ||
        mail.trim() === "" ||
        !/\S+@\S+\.\S+/.test(mail) ||
        num.trim() === "" ||
        !/^[+\d]+(?:[\d-.\s()]*)$/.test(num) ||
        msg.trim() === ""
    );
  }, [fname, lname, mail, num, msg]);
  /* The following code is using the useEffect hook in React to initialize the Aos library with a duration
  of 1000 milliseconds. The useEffect hook is used to perform side effects in functional components,
  such as initializing libraries, fetching data, or subscribing to events. In this case, it is
  initializing the Aos library, which is a library for animating elements as they scroll into view.
  The empty dependency array [] at the end of the useEffect hook ensures that the effect is only run
  once, when the component is mounted. */
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <aside className="bg-gray-900 p-2  w-full flex justify-center items-center md:h-screen selection:text-red-300">
      <div className="md:w-3/4 bg-gray-800 p-2 rounded-3xl flex flex-col items-center justify-center">
        <div className="text-amber-100 " data-aos="fade-up">
          <h1
            className="font-handlee p-5 flex justify-center items-center text-3xl md:text-4xl"
            id="contact"
          >
            Contact
          </h1>
          <p className="font-wixmadefor text-sm p-5 text-center md:text-xl md:py-10">
            Let’s get this conversation started. Tell me a bit about yourself,
            and I’ll get in touch as soon as possible.
          </p>
        </div>
        <div className="pb-5 md:pb-10">
          <button
            className="cursor-none font-wixmadefor m-5 my-10 bg-amber-100 text-gray-900 active:scale-90 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:scale-110 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Contact Me
          </button>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-full my-6 mx-auto md:w-auto">
                {/*content*/}
                <div
                  className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-amber-200 text-gray-900 outline-none focus:outline-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-800 rounded-t">
                    <h3 className="text-3xl text-gray-800 font-semibold">
                      Fill in Your Details
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg- text-gray-900  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      method="post"
                      className="w-full text-gray-900"
                    >
                      {/* First and Last Name */}
                      <div className="flex">
                        <div className="p-2 w-1/2">
                          <input
                            type="text"
                            autoComplete="off"
                            name="first_name"
                            placeholder="First Name"
                            value={fname}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            className="outline-none border-b uppercase w-full rounded-lg p-1"
                          />
                          {fnameErr && (
                            <div className="text-red-500">{fnameErr}</div>
                          )}
                        </div>
                        <div className="p-2 w-1/2">
                          <input
                            type="text"
                            autoComplete="off"
                            name="last_name"
                            placeholder="Last Name"
                            value={lname}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            className="outline-none border-b uppercase w-full rounded-lg p-1"
                          />
                          {lnameErr && (
                            <div className="text-red-500">{lnameErr}</div>
                          )}
                        </div>
                      </div>
                      {/* Email */}
                      <div className="w-full p-2">
                        <input
                          type="email"
                          autoComplete="off"
                          name="user_email"
                          placeholder="Email"
                          value={mail}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          className="outline-none border-b w-full rounded-lg p-1"
                        />
                        {mailErr && (
                          <div className="text-red-500">{mailErr}</div>
                        )}
                      </div>
                      <div className="w-full p-2">
                        <input
                          type="text"
                          autoComplete="off"
                          name="user_number"
                          placeholder="Phone Number"
                          value={num}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          className="outline-none border-b w-full rounded-lg p-1"
                        />
                        {numErr && <div className="text-red-500">{numErr}</div>}
                      </div>
                      {/* Message */}
                      <div className="p-2 fs-4">
                        <textarea
                          name="message"
                          value={msg}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          className="w-full outline-none border rounded-lg p-1"
                          placeholder="Enter Your Message"
                          rows="4"
                        />
                        {msgErr && <div className="text-red-500">{msgErr}</div>}
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-800 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm active:scale-95 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="reset"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:scale-105 active:scale-90 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                          disabled={isDisabled}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <ToastContainer />
    </aside>
  );
}
