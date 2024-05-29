"use strict";
//🚀 Day 6 Challenge: Start Coding! 🚀
// Question 16:
// More Guests: You've found a bigger dinner table, so there's room for more guests.
Object.defineProperty(exports, "__esModule", { value: true });
let guestBiglists = ["Abdullah", "Hina Naseer", "Saad", "Miss Hina"];
console.log("Great News! we found a Bigger Table. ");
//unshift() -- add something inarray begining
guestBiglists.unshift("Muhammad Saad");
//splice -- Delte/remove/add
guestBiglists.splice(Math.floor(guestBiglists.length / 2), 0, "Noman");
//push() add something in array end
guestBiglists.push("Khizar");
for (let i = 0; i < guestBiglists.length; i++) {
    console.log(guestBiglists[i] + " You all are cordially invited");
}
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//print message
console.log("Sorry, we can only invite two people for dinner");
//remove two guest
while (guestBiglists.length > 2) {
    let removeGuest = guestBiglists.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry, ${removeGuest} You are not cordially invited`);
    }
}
//print a message 
for (let i = 0; i < guestBiglists.length; i++) {
    console.log(guestBiglists[i] + " You all are cordially invited");
}
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
