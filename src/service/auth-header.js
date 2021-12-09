export default function authHeader() {
  const userToken = JSON.parse(localStorage.getItem("token"));
  console.log("Bearer " + userToken);
  console.log(userToken);
  if (userToken) {
    return { Authorization: "Bearer " + userToken }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
