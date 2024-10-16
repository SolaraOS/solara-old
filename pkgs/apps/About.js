import Html from "../../libs/html.js";
import Ws from "../../libs/windowSystem.js";

let myWindow;

const pkg = {
  name: "Example App",
  type: "app",
  privs: 0,
  start: async function (Root) {

    // Create a window
    myWindow = new Libs.Window({
      title: "About Solara",
      width: "320px",
      height: "400px"
    });

    // Get the window body
    const wrapper = myWindow.window.querySelector(".win-content");

    // Add content to the window
    new Html("h3").text("Solara was brought to you by:").appendTo(wrapper);
    new Html("div").style({"max-height": "200px"}).appendMany(
      new Html("p").text("CreeperGuy72192"),
      new Html("p").text("Garry Strait"),
      new Html("p").text("itslap"),
      new Html("p").text("kat21"),
      new Html("p").text("OwnedByWuigi"),
      new Html("p").text("MTSyntho")
    ).appendTo(wrapper);
  },
  end: async function () {
    // Close the window when the process is exited
    myWindow.close();
  },
};

export default pkg;