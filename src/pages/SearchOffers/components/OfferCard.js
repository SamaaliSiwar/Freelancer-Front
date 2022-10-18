import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { Grid } from "@mui/material";
import data from "../../../data";

export default function RecipeReviewCard() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      style={{ marginTop: 30 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.offers.map((offer) => (
        // eslint-disable-next-line no-undef
        <Card sx={{ maxWidth: 345 }} className="container">
          <CardMedia component="img" height="194" image={offer.img} alt="Paella dish" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {offer.title}
            </Typography>
            <Grid container item xs={12} justifyContent="center" mx="auto">
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
              />
              <Grid container item xs={12} justifyContent="center" mx="auto">
                <Typography>Pulish Name</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
