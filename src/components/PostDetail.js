import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import axios from "axios";
import "../App.css";

const PostDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState()
    const [comment, setComment] = useState()

    const postInfo = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => setDetail(res.data))
    }

    const commentDetail = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => setComment(res.data))
    }

    useEffect(() => {
        postInfo();
        commentDetail();
    }, [])

    return (
        <Box className="postDetail_main">
            <h1 className="title">Post Detail</h1>
            <Typography><strong>Title:</strong> {detail?.title}</Typography>
            <Typography><strong>Body:</strong> {detail?.body}</Typography>
            <Typography>
                <strong>Comment:</strong>
            </Typography>
            {comment?.map((data) => (
                <Box className="comments">
                    <Typography><strong>Name : </strong>{data.name}</Typography>
                    <Typography><strong>email: </strong> {data.email}</Typography>
                    <Typography><strong>comment: </strong> {data.body} </Typography>
                </Box>
            ))}
        </Box>

    )
}

export default PostDetail;