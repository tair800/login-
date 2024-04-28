
$(document).ready(function () {
    let users = [];
    let userId;

    if (localStorage.getItem("users") !== null) {

        users = getAllUsers();

    } else {
        localStorage.setItem("users", JSON.stringify(users))
    }

    $("#submit").on("click", function (e) {
        e.preventDefault()
        let fullName = $(".fullName")
        let userName = $(".userName")
        let email = $(".email")
        let password = $(".password")

        let existUser = getAllUsers().find(m => m.email == email.val().toLowerCase() || m.userName == userName.val().toLowerCase)
        userId = getAllUsers().length;
        if (existUser == undefined) {
            users.push({
                id: userId,
                fullName: fullName.val(),
                userName: userName.val().toLowerCase(),
                email: email.val().toLowerCase(),
                password: password.val(),
                isLogin: false,
            })
            localStorage.setItem("users", JSON.stringify(users))

        } else {
            alert("user allready exists");
            return
        }
    })

    function getAllUsers() {
        return JSON.parse(localStorage.getItem("users"))
    }


});
