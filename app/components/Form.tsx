import React from 'react'

type Props = {}

function Form({}: Props) {
  return (
    <form className="space-y-8 max-w-[600px] w-[90vw] mx-auto">
        <div className="flex gap-8">
        <div className="flex flex-col w-full">
            <label htmlFor="name" className="mb-2 font-medium">Name:</label>
            <input type="text" name="name" id="name" className="border rounded-lg p-2 bg-background" required/>
        </div>
        <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2 font-medium">Email:</label>
            <input type="email" name="email" id="email" className="border rounded-lg p-2 bg-background" required/>
        </div>
        </div>
       
        <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">Message:</label>
            <textarea name="message" id="message" rows={6} className="border rounded-lg p-2 bg-background" />
        </div>
        <button type="submit" className="bg-accent hover:bg-secondary text-white px-3 py-2 rounded">Send Message</button>
    </form>
  )
}

export default Form