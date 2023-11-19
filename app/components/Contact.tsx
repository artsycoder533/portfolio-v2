import React from "react";
import Form from "./Form";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact">
      <div className="max-w-[1400px] w-[90vw] mx-auto py-16">
        <h2 className="text-6xl my-8 font-semibold mb-10">Contact Me.</h2>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
