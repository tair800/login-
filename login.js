$(document).ready(function () {
    let users = []
    if (localStorage.getItem("users") !== null) {

        users = getAllUsers();

    } else {
        localStorage.setItem("users", JSON.stringify(users))
    }
    function getAllUsers() {
        return JSON.parse(localStorage.getItem("users"))
    }

    let logIn = $("#login");
    logIn.on("click", function (e) {
        e.preventDefault()
        let email = $(".email");
        let password = $(".password")

        let existUser = users.find(m => m.email == email.val().toLowerCase() && m.password == password.val().toLowerCase());
        if (existUser !== undefined) {
            $.each(users, function (index, user) {
                user.isLogin = false
            });
            existUser.isLogin = true;
            let userName = $(".username")
            userName.html(existUser.userName)



            localStorage.setItem("users", JSON.stringify(users))
        } else {
            alert("user not exists")
        }
    })

})