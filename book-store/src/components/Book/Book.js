import React from 'react'
import {Button} from '@mui/material'
import "./Book.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Book = (props) => {
    const history=useNavigate()
    const { _id, name, author, description,available, price,image } = props.book;
    const deleteHandler=async()=>{
       await axios.delete(`http://localhost:5000/books/${_id}`).then((res)=>res.data).then(()=>history("/")).then(()=>history("/books"));
    }
    return (
        <div className='card'>
            <img src={image} alt={name} />
            <article>By {author}</article>
            <h2>{name}</h2>
            <h4>{description}</h4>
            <h3>{available}</h3>
            <h3>Rs {price}</h3>
            <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </div>
    )
}

export default Book