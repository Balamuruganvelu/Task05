function getPrice() {
    return 25000;
}
let price = getPrice();
let gst = price * 0.18;
console.log("Price + GST : " + (price + gst));