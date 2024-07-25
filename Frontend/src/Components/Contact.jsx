import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Logging the form data to the console
    };
  return (
    <>
    <Navbar />
    <div className="flex h-screen items-center justify-center">
      <div className="w-[500px] border border-slate-200 rounded-md flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold py-4">Contact Us</h1>
        {/* Name */}
        <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <br />
                        <input type="text"
                         placeholder="Enter Your Name"
                          className="w-80 px-3 py-1 border border-slate-200 rounded-md outline-none"
                          {...register("name", { required: true })}
                          />
                          <br />
                          {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                {/* E- Mail */}
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input type="email"
                         placeholder="Enter Address"
                          className="w-80 px-3 py-1 border border-slate-200 rounded-md outline-none"
                          {...register("email", { required: true })}
                          />
                          <br />
                          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                {/*Message */}
                <div className="mt-4 space-y-2">
                        <span>Message</span>
                        <br />
                        
                        <textarea rows="5" 
                        cols="60" 
                        name="text" 
                         placeholder="Enter Message"
                          className="w-80 px-3 py-1 border border-slate-200 rounded-md outline-none"
                          {...register("message", { required: true })}
                          >
                          </textarea>
                          <br />
                          {errors.message && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                    {/* Submit button */}
                    <div className="flex justify-around mt-1 py-4">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
                            
                        </div>
                    </form>
    </div>
    </div>
    
    </>
  )
}

export default Contact
