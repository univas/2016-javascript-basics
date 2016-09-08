/* JavaScript Basics Part II */
var name = getName();
console.log("Hi there! " + name);

function getName() {
    return process.argv[2] || "";
}