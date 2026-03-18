setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("heloow");
    setTimeout(function f() {
      console.log("hellow there");
    }, 5000);
  }, 3000);
}, 1000);


function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();