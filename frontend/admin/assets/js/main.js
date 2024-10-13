let userInfo = localStorage.getItem("user")
const body = document.querySelector("body")

// console.log("Thong tin user:", userInfo)

if (userInfo) {
  userInfo = JSON.parse(userInfo)
  console.log(userInfo.user)
  if (userInfo.user.role !== "admin") {
    body.innerHTML = "Bạn không có quyền truy cập"
  }
} else {
  body.innerHTML = "Bạn không có quyền truy cập"
}
