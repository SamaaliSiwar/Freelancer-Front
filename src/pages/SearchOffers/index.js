/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections

// Routes
import footerRoutes from "footer.routes";
// eslint-disable-next-line import/no-named-as-default
// import RecipeReviewCard from "./components/OfferCard";
import axios from "axios";
import RecipeReviewCard from "./components/OfferCard";
import { useEffect, useState } from "react";
import { Avatar, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

// Images
function Offres() {
  const [offer,setOffer]=useState();
  useEffect(async () => {
    const url = "http://localhost:8000/api/post/";
    const response = await axios.get(url);
    setOffer(response.data);
  },[]);
  console.log(offer);


  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Freelence Work{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Travailler en freelance est un avantage qui attire de plus en plus
              de monde.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {" "}
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search???" inputProps={{ "aria-label": "search" }} />
        </Search> */}
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Freelencers Posts
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Price" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Croissant</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    D??croissant
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      style={{ marginTop: 45 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="grid"
    >
        {offer ? offer.map((offer) => (
          <Card sx={{ maxWidth: 345 }} className="container">
          <CardHeader
            // eslint-disable-next-line no-undef
            avatar={
              <Avatar
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
         )):null}
         </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          style={{ marginTop: 45 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="grid"
        />

      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Offres;
