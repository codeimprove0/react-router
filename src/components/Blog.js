import React from 'react'
import { useParams,Navigate } from 'react-router-dom'

function Blog() {
    const {blogId} = useParams();

    if(blogId ==5){
        return <Navigate to="/home"/>
    }
  return (
    <div>Blog :- {blogId}</div>
  )
}

export default Blog