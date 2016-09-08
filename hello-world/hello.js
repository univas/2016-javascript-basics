/* JavaScript Basics Part II */
sayHello(getName());

function getName() {
    return process.argv[2] || "";
}

function sayHello(name) {
   console.log("Hi there! " + name);    
}