'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import dotenv from 'dotenv';
dotenv.config();

const page = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const sendMessage = async (data) => {
    try {
      let req = await fetch('/api/messages', {
        method: "POST", headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify(data)
      })
      let res = await req.text()
      console.log('Server response:', res);
      if (req.ok) {
        alert("Form Submitted Successfully!")
      } else {
        alert('Error: ' + res.error);
      }
    }
    catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 bg-transparent text-blue-100 md:p-20 p-5 pb-10 justify-around">
        <div className='flex flex-col items-center'>
          <h1 className="text-6xl font-semibold animate__animated animate__jackInTheBox">Got a Message?</h1>
          <img className='md:w-100 w-full h-auto mt-12 md:mb-0 rounded-4xl animate__animated animate__fadeInUpBig' src="message.png" alt="" />
        </div>
        <div className=" md:w-100 w-full h-auto animate__animated animate__fadeInRight bg-gray-800 rounded-4xl md:mx-0 mx-auto p-5 ">
          <form onSubmit={handleSubmit(sendMessage)} className="flex flex-col">
            <label className='text-xl mx-2 my-1' htmlFor="name">NAME</label>
            <input type="text" {...register("name", { required: true })} placeholder='your name' className='w-full bg-blue-100 text-blue-950 rounded-full p-3 text-center text-lg focus:outline-none mb-4' />
            {errors.name && <span className='font-12 red'>{errors.name.message}</span>}

            <label className='text-xl mx-2 my-1' htmlFor="">EMAIL ID</label>
            <input type="email" {...register("email", { required: true })} placeholder='your email address' className='w-full bg-blue-100 text-blue-950 rounded-full p-3 text-center text-lg focus:outline-none mb-4' />
            {errors.name && <span className='font-12 red'>{errors.name.message}</span>}

            <label className='text-xl mx-2 my-1' htmlFor="">MESSAGE</label>
            <textarea
              {...register("message", { required: true })}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              className="w-full h-auto bg-blue-100 text-blue-950 p-3 rounded-3xl text-lg resize-y text-center focus:outline-none mb-6"
              placeholder="Type your message..."
              rows="4"
            />
            <input type="submit" value="Send Message" className='w-full p-3 rounded-4xl text-xl font-semibold bg-blue-100 text-blue-950 mb-4 cursor-pointer transition-5' />
          </form>
        </div>
      </div>
    </>
  )
}

export default page;
