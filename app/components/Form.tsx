"use client";
import { useForm } from "@formspree/react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);


  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmissionSuccess(true);

      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 5000); 
    }
  }, [state.succeeded]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      className="space-y-8 max-w-[600px] w-[90vw] mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-2 font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded-lg p-2 bg-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-2 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-lg p-2 bg-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-medium">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          className="border rounded-lg p-2 bg-white"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-accent hover:bg-black text-white px-4 py-3 rounded-xl"
      >
        Send Message
      </button>
      {submissionSuccess && (
        <p className="bg-green-200 p-3 rounded-md mb-4 flex items-center justify-between">
          Your message has been sent! Thank you. <FaCheckCircle className="text-green-900" />
        </p>
      )}
    </form>
  );
}

export default Form;
