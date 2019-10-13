// Write your JavaScript code here.
// 1. Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("load", function() {
// 2. When the "Take off" button is clicked, the following should happen:

    let takeOffButton = document.getElementById("takeoff");
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    takeOffButton.addEventListener("click", function() {
        //2A
        let liftOffResponse = confirm("Confirm that the shuttle is ready for takeoff.");
        // confirmation shuttle is ready
        if (liftOffResponse) {
            liftOffFired();
        };
    });
});



//  A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
//  If the shuttle is ready for liftoff, then add parts b-d.



//  The flight status should change to "Shuttle in flight."
// 2 b, c, d.
    function liftOffFired() {
        let spaceShuttleHeightValue = parseInt(spaceShuttleHeight.innerHTML);
        document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
        document.getElementById("shuttleBackground").style = "background-color: blue";
        console.log("turn blue")
        spaceShuttleHeightValue += 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightValue;
    }

      


















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

