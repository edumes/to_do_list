

  
function verificarCheckbox(checkbox) {
    var audio = new Audio('assets/click.mp3');
    if (checkbox = true){
        audio.play();
    }
}

function add() {
  var input_val = document.getElementById("input").value;
  console.log(input_val);
  var element = '<div class="list_element">';
  var input = '<input type="checkbox" onclick="verificarCheckbox()" id="checkbox"> <label>' + input_val;
  document.getElementsByClassName("details").innerHTML = `${element + input}</label></div>`;
}