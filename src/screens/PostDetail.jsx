import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetail() {
  
    const{postId,userId}=useParams();
  
    return (
    <div>PostDetail post-{postId} , user-{userId} </div>
  )
}
