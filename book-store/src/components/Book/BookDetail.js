import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => 
{
    const [inputs,setinputs]=useState({});
    const id=useParams().id;
    const[checked,setChecked]=useState(false);
    const history=useNavigate();

    console.log(id)
    useEffect(() => {
        const fetchHandler=async()=>{
            await axios.get(`http://localhost:5000/books/${id}`).then(res=>res.data).then(data=>setinputs(data.book))
        };
        fetchHandler().then((data)=>setinputs(data.book));
    }, [id])
    const sendRequest=async()=>{
    await axios.put(`http://localhost:5000/books/${id}`,{
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price),
        image:String(inputs.image),
        available:Boolean(checked)
    }).then(res=>res.data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history("/books"))
    }
    const handleChange=(e)=>{
        setinputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }))    }
    
  return (
    <div>
        {inputs &&(
    <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContents={"center"} alignSelf={'center'} marginLeft={'auto'}
      marginRight={"auto"} marginTop={10}>

      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange}  margin='normal' placeholder='Enter book name' name="name"></TextField>
      <FormLabel>Author name</FormLabel>
      <TextField value={inputs.author} onChange={handleChange} margin='normal' placeholder="Enter author's name" name="author"></TextField>
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} margin='normal' placeholder='Enter description' name="description"></TextField>
      <FormLabel>Price(Rs)</FormLabel>
      <TextField value={inputs.price} onChange={handleChange} type="number" margin='normal' placeholder='Enter price' name="price"></TextField>
      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange} margin='normal' placeholder='Enter image url' name="image"></TextField>
      <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}  />} label="Available" />

      <Button type="submit" variant="contained">Update Book</Button>
    </Box>
  </form>)}
  </div>
  )
}

export default BookDetail