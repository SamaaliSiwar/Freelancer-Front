const initialState = {
  userSignin: {
    // il faut le initialiser a null sinon il vas étre afficher coonnecter meme si !userInfo
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  user: {
    userId: localStorage.getItem("userId") ? JSON.parse(localStorage.getItem("userId")) : null,
  },
};
export default initialState;
