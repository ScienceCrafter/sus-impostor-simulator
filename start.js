var board_length
var board_height
var speed_mod
var speed_growth
var difficulty_global

function startGame(difficulty) {
  document.getElementById("difficulty_select").style.display = "none"
  document.getElementById("score").style.display = "block"
  document.getElementById("main").style.display = "block"
  difficulty_global = difficulty
  if (difficulty == 0) {
    board_length = 4
    board_height = 4
    base_interval = 1500
    speed_growth = 1.05
  } else if (difficulty == 1) {
    board_length = 12
    board_height = 8
    base_interval = 1250
    speed_growth = 1.05
  } else if (difficulty == 2) {
    board_length = 15
    board_height = 10
    base_interval = 1000
    speed_growth = 1.1
  } else if (difficulty == 3) {
    board_length = 18
    board_height = 15
    base_interval = 800
    speed_growth = 1.2
  } else if (difficulty == 4) {
    board_length = 25
    board_height = 20
    base_interval = 700
    speed_growth = 1.3
  }

  var game_board = ""
  for (i = 0; i < board_height; i++) {
    game_board += "<tr>"
    for (j = 0; j < board_length; j++) {
      game_board += "<td id='cell_" + j + "x_" + i + "y'>" + "<button><img draggable=false src='sprites/vent.png' height='40px' width='40px'></img></button>" + "</td>"
    }
    game_board += "</tr>"
  }
  document.getElementById("board").innerHTML = game_board
  newImpostor()
}

function newGame() {
  impostors_caught = 0
  current_impostors = 0
  impostor_list = []
  document.getElementById("sus").style.display = "none"
  document.getElementById("new_game").style.display = "none"
  document.getElementById("score").style.display = "none"
  document.getElementById("difficulty_select").style.display = "block"
}
