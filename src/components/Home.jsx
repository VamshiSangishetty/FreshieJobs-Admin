import React, { useEffect, useState } from 'react';
import { deletePost, getPosts } from '../api/post';
import PostCard from './PostCard';
import io from 'socket.io-client';

const socket = io('http://freshiejobs-env.eba-c9eevhy7.ap-south-1.elasticbeanstalk.com/');

let pageNo=0
const POST_LIMIT=10

const getPaginationCount=(length)=>{
const division = length/POST_LIMIT
if(division%1!==0){
    return Math.floor(division)+1
}
return division;
}

function Home(props) {
const [posts,setPosts]=useState([])
const [totalPostCount,setTotalPostCount]=useState([]);

const paginationCount=getPaginationCount(totalPostCount);
const paginationArray=new Array(paginationCount).fill('  ')

    const fetchPosts = async()=>{
        const {error,posts,postCount}=await getPosts(pageNo,POST_LIMIT);
        if(error) return console.log(error);
        
        setPosts(posts);
        setTotalPostCount(postCount)
    }
    useEffect(()=>{
        fetchPosts();
},[])

const fetchMorePosts=(index)=>{
pageNo=index;
fetchPosts();
}

const handleDelete=async({_id})=>{
    const confirmed=window.confirm("Are you sure!")
    if(!confirmed) return;

const{error,message}=await deletePost(_id)
socket.emit('deletePost', { _id });
if(error) return console.log(error)
console.log(message)

const newPosts=posts.filter(p=>p._id!==_id)
setPosts(newPosts)
}

    return (
        <div>
        <div className='grid grid-cols-5 gap-5 p-6'>{
           posts.map((post)=>{
            return <PostCard key={post._id} post={post} onDelete={()=>handleDelete(post)}/>
           })}
        </div>
        <div className='py-5 flex justify-center items-center space-x-3'>
        {paginationArray.map((_,index)=>{
            return <button onClick={()=>fetchMorePosts(index)} className={index===pageNo?'text-blue-500 border-b-2 border-b-blue-500':'text-gray-500'}>{index+1}</button>
        })}
        </div>
        </div>
    );
}

export default Home;