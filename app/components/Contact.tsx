import React from "react";
import Form from "./Form";
import Title from "./Title";

function Contact() {
  return (
    <section id="contact" className="py-32 bg-secondary rounded-tr-full">
      <div className="max-w-[1400px] w-[90vw] mx-auto">
        <Title title="Contact Me" />
        <Form />
      </div>
    </section>
  );
}

export default Contact;
