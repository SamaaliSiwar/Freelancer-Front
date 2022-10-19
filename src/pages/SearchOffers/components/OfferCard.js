import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { Grid } from "@mui/material";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipeReviewCard() {

  const [offer,setOffer]=useState();
  useEffect(async () => {
    const url = "http://localhost:8000/api/post/";
    const response = await axios.get(url);
    setOffer(response.data);
  },[]);
  console.log(offer);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      style={{ marginTop: 45 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="grid"
    >
      {offer.map((offer) => (
        // eslint-disable-next-line no-undef
        <Card key={resp.id} sx={{ maxWidth: 345 }} className="container">
          <CardHeader
            // eslint-disable-next-line no-undef
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                // eslint-disable-next-line no-undef
                aria-label="recipe"
              >
                R
              </Avatar>
            }
            title="client name"
          />
          <CardMedia component="img" height="194" image={offer.img} alt="Paella dish" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {" "}
              {offer.userId}
            </Typography>
            <Grid container item xs={12} justifyContent="center" mx="auto" />
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
