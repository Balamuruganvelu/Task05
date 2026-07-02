function dashboardLoaded() {
    console.log("Dashboard Loaded");
}
function loginSuccessful(callback) {
    console.log("Login Successful");
    callback();
}
loginSuccessful(dashboardLoaded);