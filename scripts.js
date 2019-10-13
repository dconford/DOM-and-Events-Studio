// Write your JavaScript code here.
// 1. Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("load", function() {
 // 2. When the "Take off" button is clicked, the following should happen:

    let takeOffButton = document.getElementById("takeoff");
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let spaceShuttleHeightValue = parseInt(spaceShuttleHeight.innerHTML);
    let landingButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");

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
        };
    });

 // 3  When the "Land" button is clicked, the following should happen:
    landingButton.addEventListener("click", function() {
        let landingAlert = alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
        document.getElementById("shuttleBackground").style = "background-color: green";
        spaceShuttleHeightValue = 0;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightValue;
    });


 //4   When the "Abort Mission" button is clicked, the following should happen:
    missionAbortButton.addEventListener("click", function() {
        let missionAbortResponse = confirm("Confirm that you want to abort the mission.");
        if (missionAbortResponse) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style = "background-color: green";
            spaceShuttleHeightValue = 0;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightValue;
        };
    });


 //5   When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
        // The rocket image should move 10 px in the direction of the button that was clicked.
        // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.









});



      


















// Remember to pay attention to page loading!
// let button = null;
// let paragraph = null;
// let missionAbort = null;

// function init () {
//     missionAbort = document.getElementById("abortMission");
//     button = document.getElementById("liftoff");
//     paragraph = document.querySelector("p");

//     // Put your code for the exercises here.
//     function liftOffFired() {
//         document.getElementById("text-change").innerHTML = "Houston, we have lift off!";
//     }
//     button.addEventListener("click", liftOffFired);

//     function confirmAbortMission() {
//         document.getElementById("abortMission");
//         confirm("Are you sure you want to abort the mission?");
        
//     }
//     missionAbort.addEventListener("click", confirmAbortMission);
// }

// window.onload = init;
//use 2nd version

{/* <script>
    window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
        let usernameInput = document.querySelector("input[name=username]");
         let teamName = document.querySelector("input[name=team]");
         if (usernameInput.value === "" || teamName.value === "") {
            alert("All fields are required!");
            event.preventDefault();
         }
        alert("username: " + usernameInput.value);
      });
    });
  </script>
 */}


// Use the window load event to ensure all elements have loaded before attaching event handlers.
// When the "Take off" button is clicked, the following should happen:

//     The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//     The shuttle height should increase by 10,000 miles.

