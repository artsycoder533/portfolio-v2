"use client"
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://formspree.io/f/moqybgqo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        // Form submission was successful
        console.log("Form submitted successfully");
        // Reset the form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Handle errors
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      name="portfoliov2"
      action="https://formspree.io/f/moqybgqo"
      method="POST"
      className="space-y-8 max-w-[600px] w-[90vw] mx-auto"
      data-netlify="true"
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
            value={formData.name}
            className="border rounded-lg p-2 bg-background"
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
            value={formData.email}
            className="border rounded-lg p-2 bg-background"
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
          value={formData.message}
          className="border rounded-lg p-2 bg-background"
          onChange={handleChange}
          required
        />
      </div>
      <input type="hidden" name="portfoliov2" value="portfoliov2" />
      <button
        type="submit"
        className="bg-accent hover:bg-[#9E1E23] text-white px-4 py-3 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
}

export default Form;
