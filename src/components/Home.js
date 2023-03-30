import React, { useEffect, useState } from "react";
import {Box, Grid} from '@mui/material';
import axios from "axios";
import "../App.css";
import SingleCard from "./SingleCard";

const Home = () => {
    const [data, setData]=useState()

    const post = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setData(res.data))

    }

    useEffect(() => {
        post()
    }, [])

    return (
    <Box>
        <h1 className="title">Posts</h1>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data?.map((info, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <SingleCard info={info} />
            </Grid>
            ))}
        </Grid>
        </Box>
    </Box>
    )
}

export default Home;