console.log("Starting...")
let userSubscription = "premium";
if(userSubscription == "unsubscribed") {
    console.log("Show free contents...");
}
else if (userSubscription == "super") {
    console.log("Show super contents");
}
else {
    console.log("Show premium contents");
}
console.log("End...");