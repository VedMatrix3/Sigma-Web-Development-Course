// console.log("Harry is a hacker")
// console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout 1")
}, 20);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

// console.log("The End")

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}


// loadScript("https://www.youtube.com/", callback )
loadScript("http://10.96.145.236:5500/Video-078/index.htmlg", callback )
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )