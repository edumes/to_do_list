var input = document.getElementById("input");

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("button").click();
    }
  });

function add(){
    var input = document.getElementById("input").value;
    
    console.log(input);
}
  
function verificarCheckbox(checkbox) {
    var audio = new Audio('assets/click.mp3');
    if (checkbox = true){
        audio.play();
    }
}

