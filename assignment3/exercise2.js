"use strict";
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
function AddItem(cart) {
    cart = cart.splice(cart.length - 2, 0, "Sandwich");
    return cart;
}
function RemoveItem(cart) {
    cart = cart.splice(cart.length - 1, 1);
    return cart;
}
function UpdateItem(cart) {
    cart = cart.splice(cart.length - 3, 1, "Cake");
    return cart;
}
var cart = ["Coke", "Pizza", "Burger", "Junks"];
console.log(`Before Add Items to Cart :  ${cart}`);
AddItem(cart);
console.log(`After Add Item :  ${cart}`);
console.log(`Before Remove Item :   ${cart}`);
RemoveItem(cart);
console.log(` After Remove Item From Cart :  ${cart}`);
console.log(`Before Update Item :  ${cart}`);
UpdateItem(cart);
console.log(`After updateitem function :  ${cart}`);
