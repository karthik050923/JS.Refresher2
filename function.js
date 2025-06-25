function timer() {
    console.log("Time out..");
}

const timer1 = () => {
    console.log("Time out...Again");
};

setTimeout(timer, 2000);
setTimeout(timer1, 3000);
setTimeout(() => {
    console.log("More Timingout....")
}, 4000);