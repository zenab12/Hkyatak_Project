import axios from "axios";

const API_URL = "https://back-end-ashen.vercel.app";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("userToken", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("userToken");
  }
   signup(username, email, password,address,imageUrl) {
    return  axios.post(API_URL + "/signup", {
      username,
      email,
      password,
      address,
      imageUrl
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("userToken"));
  }
}
export default new AuthService();
