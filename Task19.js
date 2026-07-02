function enterUsername(callback) {
    console.log("Enter Username");
    callback();
}
function verifyPassword(callback) {
    console.log("Verify Password");
    callback();
}
function loginSuccess(callback) {
    console.log("Login Successful");
    callback();
}
function loadDashboard() {
    console.log("Load Dashboard");
}
enterUsername(function() {
    verifyPassword(function() {
        loginSuccess(loadDashboard);
    });
});