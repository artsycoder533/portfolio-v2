"use client"
import React, { useState } from "react";
import { useForm } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);

  if(state.succeeded){
    return <p>Thanks for your submission!</p>
  }
 
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
            className="border rounded-lg p-2 bg-background"
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
            className="border rounded-lg p-2 bg-background"
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
          className="border rounded-lg p-2 bg-background"
          required
        />
      </div>
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
