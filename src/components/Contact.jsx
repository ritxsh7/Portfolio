import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Contact = () => {
  const [isError, setIsError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Open, setOpen] = useState(false);

  const contact_info = [
    { logo: "mail", text: "ritessshhh7@gmail.com" },
    { logo: "logo-whatsapp", text: "9325721243" },
    {
      logo: "location",
      text: "Sant Tukaram Nagar, Pimpri",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setOpen(true);
    setLoading(true);
    emailjs
      .sendForm(
        "service_80bam6h",
        "template_vagtrfo",
        form.current,
        "3fD6M0s-BqlaqXzpn"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
        },
        (error) => {
          setIsError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-6 px-3 text-white">
      {Open && (
        <div className="loader fixed top-1/2 right-1/2 translate-x-[50%] bg-gray-800 w-[10rem] h-[10rem] flex flex-col items-center justify-evenly rounded-xl px-4 ">
          {Loading ? (
            <>
              <HashLoader loading={Loading} color="white" />
              <h1 className="text-center text-lime-400">Sending Message...</h1>
            </>
          ) : (
            <h1 className="text-center text-lime-400">
              Message Sent Successfully
            </h1>
          )}
          {!Loading && (
            <button
              className="bg-orange-500 px-2 py-1 rounded-md"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          )}
          {isError && <h1>Something went wrong</h1>}
        </div>
      )}

      <div className="text-center mt-8">
        <h3 className="text-3xl tracking-widest">
          Contact <span className="text-lime-400">Me</span>
        </h3>
        <p className="text-gray-300 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex flex-col
         gap-6 max-w-5xl bg-gray-900 md:px-6 py-8 max-w-[50rem] px-4 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5 contact-form items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder="Your Name" name="user_name" />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              required
            ></textarea>
            <button className="btn-primary block w-fit mx-auto">
              Send Message
            </button>
          </form>
          <div className="flex flex-col md:flex-row md:gap-2 gap-7 py-3">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className={`flex flex-col 
                  gap-4 md:items-center items-left w-[17rem] mx-auto ${
                    i === 1 ? "md:border-x-2 md:border-lime-400" : ""
                  }`}
              >
                <div className="flex gap-5 items-center">
                  <div className="w-[2.5rem]  text-3xl h-[2.5rem] flex items-center justify-center text-black bg-lime-400 rounded-full">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                  <p className="md:text-base text-sm  break-words">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
