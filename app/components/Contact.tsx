import React from "react";
import Form from "./Form";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-[1400px] w-[90vw] mx-auto">
        <h2 className="text-6xl my-8 font-semibold mb-10 text-primary">Contact Me.</h2>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
