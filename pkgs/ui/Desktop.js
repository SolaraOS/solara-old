import Html from "../../libs/html.js";

let wrapper;

const pkg = {
  name: "Example App",
  type: "app",
  privs: 0,
  start: async function (Root) {
    // Testing
    console.log("Hello from example app", Root);

    // Get the window body
    wrapper = new Html("div").class("desktop").appendTo("body");

    // Add content to the window

    const taskbar = new Html("div").class("taskbar").appendTo(wrapper);
    
    const topbar = new Html("div").class("topbar").appendTo(wrapper);

    new Html("")
    
    new Html("div").class("date").style({display: 'flex', gap: "10px", "padding-top": "7px"}).appendMany(
      new Html("div").attr({id: "clock"}),
      new Html("div").attr({id: "dateDisplay"})
    ).appendTo(topbar)

    function timeUpdate() {
      // 24-hour time example
      let x = new Date();
      let hours = x.getHours().toString().padStart(2, "0"); // 18
      let minutes = x.getMinutes().toString().padStart(2, "0"); // 37
      let timeString = `${hours}:${minutes}`; // 18:37
      let element = document.getElementById("clock"); // assuming <... id="clock" ...>
      element.innerText = timeString;
    }
    timeUpdate();
    setInterval(timeUpdate, 1000); // 1000ms -> 1 second delay

    function formatDate() {
      const date = new Date(); // Get current date
  
      // Array of day names
      const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
      
      // Array of month names
      const months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  
      // Get day, month, and date
      const dayName = daysOfWeek[date.getDay()]; // Get day of the week
      const monthName = months[date.getMonth()]; // Get month name
      const dayNumber = date.getDate(); // Get day number
  
      // Combine the values to get the desired format
      return `${dayName} ${dayNumber} ${monthName}`;
  }
  
  // Function to set the formatted date to the div
  function setDate() {
      const dateDisplayDiv = document.getElementById("dateDisplay"); // Get the div element
      dateDisplayDiv.textContent = formatDate(); // Set the formatted date
  }


  // Call the function to set the date
  setDate();

  setInterval(setDate, 1000); // 1000ms -> 1 second delay
  

    new Html("img").attr({src: "../../libs/brand/Solara.svg", height: "55px"}).appendTo(taskbar)
    
    new Html("p").style({position: "absolute", "bottom": "0", right: "20px"}).text("Solara Developer Preview").appendTo(wrapper);

    const taskbarDock = new Html("div").class("taskbar-dock").appendTo(taskbar);

    // apps.forEach((a) => {
    //   taskbarDock.append(new Html());
    // });
  },
  end: async function () {
    // Close the window when the process is exited
    wrapper.cleanup();
  },
};

export default pkg;