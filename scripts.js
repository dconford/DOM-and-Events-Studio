// Write your JavaScript code here.
// 1. Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("load", function() {
 // 2. When the "Take off" button is clicked, the following should happen:

    let takeOffButton = document.getElementById("takeoff");
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let spaceShuttleHeightValue = parseInt(spaceShuttleHeight.innerHTML);
    let landingButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");
    let moveUpButton = document.getElementById("up");
    let moveDownButton = document.getElementById("down");
    let moveRightButton = document.getElementById("right");
    let moveLeftButton = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    let rocketXposition = 0; //max 500, so +/- 250
    let rocketYposition = 0; //max height 245
    landingButton.disabled = true;
    missionAbortButton.disabled = true;
    moveUpButton.disabled = true;
    moveDownButton.disabled = true;
    moveRightButton.disabled = true;
    moveLeftButton.disabled = true;

    takeOffButton.addEventListener("click", function() {
        //2A
        let liftOffResponse = confirm("Confirm that the shuttle is ready for takeoff.");
        // confirmation shuttle is ready
        // 2b, 2C, 2D
        if (liftOffResponse) {
       //     let spaceShuttleHeightValue = parseInt(spaceShuttleHeight.innerHTML);
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
            document.getElementById("shuttleBackground").style = "background-color: blue";
            spaceShuttleHeightValue += 10000;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightValue;
            landingButton.disabled = false;
            missionAbortButton.disabled = false;
            moveUpButton.disabled = false;
            moveDownButton.disabled = false;
            moveRightButton.disabled = false;
            moveLeftButton.disabled = false;
            takeOffButton.disabled = true;
        };
    });

 // 3  When the "Land" button is clicked, the following should happen:
    landingButton.addEventListener("click", function() {
        let landingAlert = alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
        document.getElementById("shuttleBackground").style = "background-color: green";
        spaceShuttleHeightValue = 0;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightValue;
        rocketXposition = 0;
        rocketYposition = 0;
        rocket.style.top = 0 + "px";
        rocket.style.right = 0 + "px";
        landingButton.disabled = true;
        missionAbortButton.disabled = true;
        moveUpButton.disabled = true;
        moveDownButton.disabled = true;
        moveRightButton.disabled = true;
        moveLeftButton.disabled = true;
        takeOffButton.disabled = false
    });


 //4   When the "Abort Mission" button is clicked, the following should happen:
    missionAbortButton.addEventListener("click", function() {
        let missionAbortResponse = confirm("Confirm that you want to abort the mission.");
        if (missionAbortResponse) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style = "background-color: green";
            spaceShuttleHeightValue = 0;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightValue;
            rocketXposition = 0;
            rocketYposition = 0;
            rocket.style.top = 0 + "px";
            rocket.style.right = 0 + "px";  
            landingButton.disabled = true;
            missionAbortButton.disabled = true;
            moveUpButton.disabled = true;
            moveDownButton.disabled = true;
            moveRightButton.disabled = true;
            moveLeftButton.disabled = true;
            takeOffButton.disabled = false 
        };
    });

 //5 UP When the "Up" button is clicked, the rocket image should move 10px up; height should increse by 10000 miles.
    moveUpButton.addEventListener("click", function() {
        spaceShuttleHeightValue += 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightValue; 
        rocketYposition -= 10;
        rocket.style.top = rocketYposition + "px";      
    });

 //5 DOWN When the "Down" button is clicked, the rocket image should move 10px down; height should decrese by 10000 miles.
    moveDownButton.addEventListener("click", function() {
        spaceShuttleHeightValue -= 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightValue; 
        rocketYposition += 10;
        rocket.style.top = rocketYposition + "px";      
      
    });

 //5 RIGHT When the "Right" button is clicked, the rocket image should move 10px right.
    moveRightButton.addEventListener("click", function() {
        rocketXposition -= 10;
        rocket.style.right = rocketXposition + "px";
    });

 //5 LEFT When the "Left" button is clicked, the rocket image should move 10px left.
    moveLeftButton.addEventListener("click", function() {
        rocketXposition += 10;
        rocket.style.right = rocketXposition + "px";
    });


 //5   When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
        // The rocket image should move 10 px in the direction of the button that was clicked.
        // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles
        
});
