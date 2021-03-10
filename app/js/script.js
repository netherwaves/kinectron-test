window.addEventListener("load", () => {
    // initialize peer connection
    let kinectron = new Kinectron("10.0.0.68");
    kinectron.setKinectType("windows");
    kinectron.makeConnection();

    // initialize canvas
    const leftHandDiv = document.querySelector("#leftHand"),
          rightHandDiv = document.querySelector("#rightHand");

    // begin tracking
    // callback executed every time a skeleton is detected by the Kinect
    kinectron.startTrackedBodies(() => {
        // clear canvas
        // ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

        // request hand data here
        // this is called within the callback because it will generate an error if no body is tracked
        kinectron.getHands(hands => {
            const { leftHand, rightHand, leftHandState, rightHandState } = hands;

            // do stuff with data here!
            leftHandDiv.style.transform = `translate(${ leftHand.depthX * 100 }vw, ${ leftHand.depthY * 100 }vh)`;
            rightHandDiv.style.transform = `translate(${ rightHand.depthX * 100 }vw, ${ rightHand.depthY * 100 }vh)`;

            // note to self for the future:
            // 1. add lag to hand movement to prevent jerking + frame drops
            // 2. plan minimum Z-depth proximity to make sure movements are clearly captured
            // 3. plan optimal lighting in room (or at least where the user stands) to make sure movements are clearly captured
        });
    });
});
