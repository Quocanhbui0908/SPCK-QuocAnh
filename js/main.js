document.getElementById('player-name').innerText = '--';
document.getElementById('player-number').innerText = '--';
document.getElementById('player-position').innerText = '--';
document.getElementById('player-nationality').innerText = '--';
document.getElementById('player-team').innerText = '--';
document.getElementById('player-image').src = 'https://www.thesportsdb.com/images/media/player/cutout/rqrmb61602281225.png';

// Default player features
document.getElementById('player-gender').innerText = '--';
document.getElementById('player-height').innerText = '--';
document.getElementById('player-weight').innerText = '--';
document.getElementById('player-status').innerText = '--';
document.getElementById('player-born').innerText = '--';
document.getElementById('player-shoes').innerText = '--';
searchPlayer.addEventListener("change", function (e) {
    fetch(`https://cors-anywhere.herokuapp.com/https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
            // Extract data from the JSON
            console.log(data)
            const playerData = data.player[0];
            document.getElementById('player-name').innerText = playerData.strPlayer;
            // Update HTML elements with data from JSON
            document.getElementById('player-number').innerText = playerData.strNumber;
            document.getElementById('player-position').innerText = playerData.strPosition
            document.getElementById('player-nationality').innerText = playerData.strNationality;
            document.getElementById('player-team').innerText = playerData.strTeam;
            document.getElementById('player-image').src = playerData.strCutout;

            // Update player features
            document.getElementById('player-gender').innerText = playerData.strGender;
            document.getElementById('player-height').innerText = playerData.strHeight.substring(0, 6);
            document.getElementById('player-weight').innerText = playerData.strWeight.substring(0, 6);
            document.getElementById('player-status').innerText = playerData.strStatus || 'Retired'
            document.getElementById('player-born').innerText = playerData.dateBorn.substring(0, 4);
            document.getElementById('player-shoes').innerText = playerData.strKit.substring(0, 6) || 'None'
        })
        .catch(error => console.error('Error fetching player data:', error));
});

