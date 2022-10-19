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

export default function RecipeReviewCard() {
  // const url = "http://localhost:8000/api/post/";
  // let resp = "";
  // const getData = async () => {
  //   await axios.get(url).then((data) => {
  //     resp = data.data;
  //     // eslint-disable-next-line no-console
  //     console.log(resp.data);
  //   });
  // };
  // useEffect(async () => {
  //   const url = "http://localhost:8000/api/post/";
  //   const response =  await get.(url);
  //   const data = await response.json();
  //   console.log(data)
  // });
  // eslint-disable-next-line no-alert
  // eslint-disable-next-line no-console

  // eslint-disable-next-line no-undef

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      style={{ marginTop: 45 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="grid"
    >
      {resp &&
        resp.data.map((offer) => (
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
