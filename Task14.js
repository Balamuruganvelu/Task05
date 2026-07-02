function orderReceived(callback) {
    console.log("Order Received");
    callback();
}
function preparingFood(callback) {
    console.log("Preparing Food");
    callback();
}
function delivered() {
    console.log("Delivered");
}
orderReceived(function() {
    preparingFood(delivered);
});