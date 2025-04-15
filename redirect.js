// redirect.js
if (sessionStorage.getItem("loggedIn") !== "true") {
  alert("로그인이 필요합니다.");
  window.location.href = "index.html";
}
