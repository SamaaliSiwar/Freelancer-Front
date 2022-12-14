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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";
import MKTypography from "components/MKTypography";
import initialState from "satets";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Profile() {
  // const { id } = useParams();
  const detailsuser = useState(initialState.userSignin);
  const user = detailsuser[0].userInfo;
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-console
  const navigate = useNavigate();
  // eslint-disable-next-line no-console
  console.log(user.firstName);
  useEffect(() => {
    if (user == null) {
      navigate("/presentation");
      // eslint-disable-next-line no-empty
    }
  });

  return (
    <>
      <MKBox component="section" py={{ xs: 6, sm: 12 }}>
        <Container>
          <Grid container item xs={12} justifyContent="center" mx="auto">
            <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
              <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
            </MKBox>
            <Grid container justifyContent="center" py={6}>
              <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <MKTypography variant="h3">
                    {user.firstName} {user.lastName}
                  </MKTypography>
                </MKBox>

                <MKTypography variant="body1" fontWeight="light" color="text">
                  {user.phoneNumber}
                  {user.email}
                  <MKTypography
                    component="a"
                    href="#"
                    variant="body1"
                    fontWeight="light"
                    color="info"
                    mt={3}
                    sx={{
                      width: "max-content",
                      display: "flex",
                      alignItems: "center",

                      "& .material-icons-round": {
                        transform: `translateX(3px)`,
                        transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                      },

                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: `translateX(6px)`,
                      },
                    }}
                  >
                    More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                  </MKTypography>
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Profile;
