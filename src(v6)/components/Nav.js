import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'

function Nav() {
  //  const history = useHistory()
  const navigate =  useNavigate()
    const backUrl = ()=>{
     //   history.goBack()
   //  navigate(-1)
   navigate("/home")
//     history.push('/blog/12')
    }
    return (
        <div>
            <button onClick={backUrl}>Back</button>&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/home">Home</Link>&nbsp;&nbsp;
            <Link to="/blog/1">Blog 1</Link>&nbsp;&nbsp;
            <Link to="/blog/2">Blog 2</Link>&nbsp;&nbsp;
            <NavLink to="/blog/3" style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>Blog 3</NavLink>&nbsp;&nbsp;
            <NavLink to="/blog/4" style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>Blog 4</NavLink>&nbsp;&nbsp;
            <NavLink to="/blog/5" style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>Blog 5</NavLink>&nbsp;&nbsp;
        </div>
    )
}

export default Nav