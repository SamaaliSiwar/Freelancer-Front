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
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React example components

// Material Kit 2 React page layout routes

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import axios from "axios";
import react from "react";
import routes from "routes";
import { useNavigate } from "react-router-dom";

function SignInBasic() {
  const [email, setEmail] = react.useState("");
  const [password, setPassword] = react.useState("");
  const navigate = useNavigate();
  const data = {
    email,
    password,
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users/signin";
      const { data: res } = await axios.post(url, data);
      // eslint-disable-next-line no-template-curly-in-string, no-underscore-dangle
      navigate(`/pages/landing-pages/author/${res._id}`);

      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-console
      console.log(res);

      localStorage.setItem("userInfo", JSON.stringify(res));
      // eslint-disable-next-line no-undef

      // eslint-disable-next-line no-console
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        // eslint-disable-next-line no-undef
        setError(error.response.data.message);
      }
    }
  };

  // const dispatch = useDispatch();
  // eslint-disable-next-line no-shadow

  return (
    <>
      <DefaultNavbar
        // eslint-disable-next-line no-undef
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
                  Sign In
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" onSubmit={submitHandler}>
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
                      type="password"
                      label="Password"
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" type="submit" fullWidth>
                      sign In
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

export default SignInBasic;
