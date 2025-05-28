let scores = { A: 0, B: 0 };

function updateScore(team, delta) {
  scores[team] += delta;
  updateUI();
}

function updateUI() {
  document.getElementById("scoreA").textContent = scores.A;
  document.getElementById("scoreB").textContent = scores.B;
}

updateUI();
