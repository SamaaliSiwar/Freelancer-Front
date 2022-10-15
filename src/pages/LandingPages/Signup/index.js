/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// @mui icons

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";

function SignUpBasic() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const configuration = {
    method: "post",
    url: "http://localhost:8000/api/users/signup",
    data: {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    },
  }; */
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users/signup";
      const { data: res } = await axios.post(
        url,
        firstName,
        lastName,
        phoneNumber,
        email,
        password
      );
      // eslint-disable-next-line no-console
      console.log("data", res);
      // eslint-disable-next-line no-console
      console.log(res);
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      error;
    }
  };

  // const dispatch = useDispatch();
  // eslint-disable-next-line no-shadow

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign Up
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" onSubmit={submitHandler}>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Text"
                      onChange={(e) => setfirstName(e.target.value)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Text"
                      onChange={(e) => setlastName(e.target.value)}
                      fullWidth
                    />
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput
                      type="Email"
                      label="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="Phone"
                      label="Tel:+216"
                      onChange={(e) => setphoneNumber(e.target.value)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" type="submit" fullWidth>
                      sign Up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      vous avez déja un compte?{" "}
                      <MKTypography
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignUpBasic;
