window.addEventListener("load", () => {
    // initialize peer connection
    let kinectron = new Kinectron("10.0.0.68");
    kinectron.setKinectType("windows");
    kinectron.makeConnection();

    // begin tracking
    kinectron.startTrackedBodies(() => {
        // callback executed every time a skeleton is detected by the Kinect

        // request hand data here
        // this is called within the callback because it will generate an error if no body is tracked
        kinectron.getHands(hands => {
            const { leftHand, rightHand, leftHandState, rightHandState } = hands;

            // do stuff with data here!
        });
    });
});
