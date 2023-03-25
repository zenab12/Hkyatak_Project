import axios from "axios";

const API_URL = "http://localhost:3001";
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
   signup(username, email, password,address) {
    return  axios.post(API_URL + "/signup", {
      username,
      email,
      password,
      address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("userToken"));
  }
}
export default new AuthService();
