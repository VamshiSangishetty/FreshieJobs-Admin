import React, { useState } from 'react';
import { createPost } from '../api/post';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const defaultPost ={
    title:'',
    image:'',
    description:'',
    company:'',
    role:'',
    qualification:'',
    skills:'',
    batch:'',
    jobType:'',
    salary:'',
    location:'',
    link:''
}

const socket = io('http://freshiejobs-env.eba-c9eevhy7.ap-south-1.elasticbeanstalk.com/');

function CreatePost(props) {
    const navigate =useNavigate();
const [postInfo,setPostInfo]=useState({...defaultPost});

const {title,image,description,company,role,batch,salary,qualification,location,skills,jobType,link}=postInfo

const handleChange = (e) => {
    const { name, value } = e.target;
    setPostInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

const handleSubmit=async(e)=>{
    e.preventDefault();
    const {title,image,description,company,role,batch,salary,qualification,location,skills,jobType,link}=postInfo
    if (!title.trim()) {
        alert('Title is missing');
        return;
      }
  
      if (!image.trim()) {
        alert('Image is missing');
        return;
      }
  
      if (!description.trim()) {
        alert('Description is missing');
        return;
      }
  
      if (!company.trim()) {
        alert('Company is missing');
        return;
      }
  
      if (!role.trim()) {
        alert('Role is missing');
        return;
      }
  
      if (!batch.trim()) {
        alert('Batch is missing');
        return;
      }
  
      if (!salary.trim()) {
        alert('Salary is missing');
        return;
      }
  
      if (!qualification.trim()) {
        alert('Qualification is missing');
        return;
      }
  
      if (!location.trim()) {
        alert('Location is missing');
        return;
      }
  
      if (!skills.trim()) {
        alert('Skills is missing');
        return;
      }
  
      if (!jobType.trim()) {
        alert('Job Type is missing');
        return;
      }
  
      if (!link.trim()) {
        alert('Link is missing');
        return;
      }

try {
   const {post}= await createPost(postInfo);
   socket.emit('newPost', { post });
    alert('Post created successfully!');
    navigate(`/update-post/${post._id}`)
  } catch (error) {
    alert("Error creating post:", error);
  }

}



    return (
        <div className='p-6'>
            <h1 className='font-bold  flex justify-center items-center'>CREATE NEW JOB</h1>
            <h1 className='font-semibold p-2'>Job Title</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={title}
            name='title'
            onChange={handleChange}
            placeholder='Enter Job Title'/>
            <h1 className='font-semibold p-2'>Image </h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={image}
            name='image'
            onChange={handleChange}
            placeholder='Enter Image link'/>
            <h1 className='font-semibold p-2'>Job Description</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={description}
            name='description'
            onChange={handleChange}
            placeholder='Enter Job Description'/>
            <h1 className='font-semibold p-2'>Company Name</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={company}
            name='company'
            onChange={handleChange}
            placeholder='Enter company name'/>
            <h1 className='font-semibold p-2'>Job Role</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={role}
            name='role'
            onChange={handleChange}
            placeholder='Enter Job role'/>
            <h1 className='font-semibold p-2'>Job Qualification</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            onChange={handleChange}
            value={qualification}
            name='qualification'
            placeholder='Enter Job Qualification'/>
            <h1 className='font-semibold p-2'>Job Skills</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={skills}
            name='skills'
            onChange={handleChange}
            placeholder='Enter Job Skills'/>
            <h1 className='font-semibold p-2'>Batch</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={batch}
            name='batch'
            onChange={handleChange}
            placeholder='Enter batch'/>
            <h1 className='font-semibold p-2'>Job Type</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={jobType}
            name='jobType'
            onChange={handleChange}
            placeholder='Enter Job Type'/>
            <h1 className='font-semibold p-2'>Salary</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={salary}
            name='salary'
            onChange={handleChange}
            placeholder='Enter Salary'/>
            <h1 className='font-semibold p-2'>Job Location</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={location}
            name='location'
            onChange={handleChange}
            placeholder='Enter Job location'/>
            <h1 className='font-semibold p-2'>Job Link</h1>
            <input type='text'
            className='text-sm outline-none
            focus:ring-1 rounded p-2 w-full
            font-semibold'
            value={link}
            name='link'
            onChange={handleChange}
            placeholder='Enter Job link'/>
            <div className='p-6 flex justify-center items-center '>
            <button className='h-10 w-full px-5 
            hover:ring-1 bg-blue-500 rounded 
            text-white hover:bg-transparent ring-blue-500
            transition'
            onClick={handleSubmit}>
                Submit
            </button></div>
    </div>
    );
}

export default CreatePost;