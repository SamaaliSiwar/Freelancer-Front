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
// Material Kit 2 React components

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActiveUser() {
  //   onChange  (e)={
  //   console.log('ee', e)
  //  }
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { veriftoken } = useParams();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users/confirm/:veriftoken";
      const { data: res } = await axios.get(url, veriftoken);
      // eslint-disable-next-line no-alert
      alert("Votre Compte est activée");
      navigate("/pages/authentication/sign-in");
      // eslint-disable-next-line no-console
      console.log(res);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        // eslint-disable-next-line no-undef
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <button type="submit">active your compte</button>
      </form>
    </>
  );
}

export default ActiveUser;
