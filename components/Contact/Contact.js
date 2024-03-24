"use client"
import React,{ useState } from 'react'
import style from './Contact.module.css'
const Contact = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
   
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Name:', name);
      console.log('Comment:', comment);
      setName('');
      setComment('');
    };
  return (
   <>
    <h1 className={`text-center text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:lg font-bold mt-12 ${style.mainHead}`}>Contact us.</h1>
    <h1 className={`text-center text-lg xl:text-lg lg:text-lg md:text-lg sm:lg  mb-12 mt-4 ${style.mainHead}`}>Want to suggest something or wannna share somthing give us a feedback also if you want to report something feel free to do.</h1>
    <div className="bg-gray-900 grid grid-cols-1 sm:grid-cols-2 gap-4">
     
      <div className=" p-6">
 
 <img src="/Assets/Contact-us/contact.jpg" alt="Your Image" className="w-full h-auto" />
</div>

      <div className=" p-6">
        <h2 className={`text-center text-2xl font-bold ${style.formHead}`} onSubmit={handleSubmit}>Fill the form</h2>
        <form>
          <label htmlFor="name" className={`block mb-2 ${style.label}`}>Name:</label>
          <input  type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        className="w-full border text-gray-950  rounded px-3 py-2 mb-4"
        placeholder="Enter your name" />

          <label htmlFor="email" className={`block mb-2 ${style.label}`}>Comment</label>
          <textarea  id="comment"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
        className="w-full h-40 border text-gray-950 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter your comment here"></textarea>

          

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Query</button>
        </form>
      </div>

    
     
    </div>
   </>
  );
}

export default Contact