import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from '@mui/material';
import "../App.css";

const SingleCard = ({info}) => {
  const navigate = useNavigate();

  const detail = () => {
    navigate(`/postDetail/${info.id}`);
  }

  return (
    <Card className="main" onClick={()=>detail()}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {info.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {info.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SingleCard;