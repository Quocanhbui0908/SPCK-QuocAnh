
searchPlayer.addEventListener("change", function (e) {
    fetch(`https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${e.target.value}`)
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

import { Input, Ripple, initMDB } from "mdb-ui-kit";
initMDB({ Input, Ripple });

