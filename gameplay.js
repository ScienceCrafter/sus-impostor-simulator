
var current_impostors = 0
var impostor_list = []
var impostors_caught = 0
var highscores = [0,0,0,0,0]

function updateScore() {
  document.getElementById("score").innerHTML = "Impostors Caught: " + impostors_caught
}

function catchImpostor(x,y) {
  impostor_list.splice(impostor_list.indexOf(x+","+y),1)
  current_impostors -= 1
  impostors_caught += 1
  updateScore()
  document.getElementById("cell_" + x + "x_" + y + "y").innerHTML = "<button><img draggable=false src='sprites/vent.png' height='40px' width='40px'></img></button>"
}

function newImpostor() {
  if (current_impostors == board_height*board_length) {
    if (impostors_caught >= highscores[difficulty_global]) {
      highscores[difficulty_global] = impostors_caught
      document.getElementById("highscore_"+difficulty_global).innerHTML = " best: " + impostors_caught
    }
    document.getElementById("main").style.display = "none"
    document.getElementById("sus").style.display = "block"
    document.getElementById("new_game").style.display = "block"
    return
  }
  var xpos = Math.floor(Math.random()*board_length)
  var ypos = Math.floor(Math.random()*board_height)
  while (impostor_list.includes(xpos+","+ypos)) {
    var xpos = Math.floor(Math.random()*board_length)
    var ypos = Math.floor(Math.random()*board_height)
  }
  impostor_list.push(xpos+","+ypos)
  current_impostors += 1
  document.getElementById("cell_" + xpos + "x_" + ypos + "y").innerHTML = "<button onclick='catchImpostor(" + xpos + "," + ypos + ")'><img draggable=false src='sprites/impostor.png' height='40px' width='40px'></img></button>"
  speed = base_interval/(speed_growth**(current_impostors + impostors_caught/10))
  empty_speed = base_interval/(speed_growth**(impostors_caught/10))
  per_second = 1000/speed
  document.getElementById("speed").innerHTML = Math.floor(empty_speed) + " (" + Math.floor(speed) + ")<br>" + Math.floor(per_second*100)/100 + "/s"
  setTimeout(newImpostor,speed)
}
