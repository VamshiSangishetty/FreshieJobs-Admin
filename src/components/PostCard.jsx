import React from 'react';
import dateFormat from 'dateformat';
import {BsPencilSquare,BsTrash} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function PostCard({ post,onDelete }) {
  if (!post) return null;
  const { title, image, createdAt,_id } = post;

  const imageStyle = {
    width: '100%', // Ensure the image takes the full width of its container
    height: '99px', // Set a fixed height (adjust as needed)
    objectFit: 'cover', // Ensure the image covers the entire container
    borderRadius: '9px', // Optional: Add rounded corners
  };

  return (
    <div className='bg-white shadow-sm rounded flex flex-col'>
      <img src={image} alt='' style={imageStyle} />
      <div className=' p-2 flex-1 flex flex-col justify-between'>
        <h6 className='text-sm font-bold text-gray-700'>{title}</h6>
        <p className='text-gray-500 text-xs py-1'>{dateFormat(createdAt, 'mmm d, yyyy')}</p>
        <div className='flex space-x-3'>
            <Link to={`/update-post/${_id}`} className='w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 flex justify-center items-center text-white text-xs'>
           <BsPencilSquare/>
            </Link>
            <button onClick={onDelete} className='w-6 h-6 rounded-full bg-red-400 hover:bg-red-600 flex justify-center items-center text-white text-xs'>
           <BsTrash/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
