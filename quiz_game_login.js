function Login() {
    player1 = document.getElementById('P2input').value;
    player2 = document.getElementById("P2input").value;

    localStorage.setItem("player1_name", player1);
    localStorage.setItem("player2_name", player2);
    console.log('all clear!');
    window.location = 'game_page.html';
}