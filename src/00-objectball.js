
function gameObject() {
    return {
        home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
        "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
    },
     "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
    },

    "Brooke Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
    },
    "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
    },
    "Jason terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
    },
}
},

away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise","Purple"],
    players: {
        "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
    },

        "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
    },

        "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
    },
        "Ben Gordon": {

        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 3,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
    },

        "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
    },

    }
    }
    }
}


function homeStats() {
   const jerseys = [];
    let game = gameObject();
    let playersHome = game.home.players;
    for(let playerInd in playersHome){
        let teamStats = playersHome[playerInd];
        let jerseyInd = teamStats["number"];
        //console.log(jerseyInd);
       jerseys.push(jerseyInd);
       
    } 
    return jerseys; //debugger
    }

function awayStats() {
    const jerseys = [];
    let game = gameObject();
    let playersAway = game.away.players;
    for(let playerInd in playersAway){
        let teamStats = playersAway[playerInd];
        //console.log(teamStats.number);
        jerseys.push(teamStats.number);
    } return jerseys; //debugger
}
 

function homeTeamName() {
 let game = gameObject();
  return game.home.teamName;
}

function awayTeamName() {
    let game = gameObject();
     return game.away.teamName;
   }

function numPointsScored(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let player in teamObj["players"]) {
            let playerInfo = teamObj["players"][player];
                if (player === playerName )
                return playerInfo["points"]
            }
        }
    }

console.log(numPointsScored("Brendan Haywood"));

function shoeSize(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let player in teamObj["players"]) {
            let playerInfo = teamObj["players"][player];
                if (player === playerName)
                return playerInfo["shoe"]
        }
    }
}
console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
   let game = gameObject();
    const colors= [];
    if (teamName === (homeTeamName(teamName))) {
    colors.push(game.home.colors);
    } else if (teamName === (awayTeamName(teamName))) {
        colors.push(game.away.colors)
    }
    return colors;
}


console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

console.log(teamNames())


function playerStats(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let player in teamObj["players"]) {
            let playerInfo = teamObj["players"][player];
                if (player === playerName )
                return playerInfo
            }
        }
    }

console.log(playerStats("Alan Anderson"))

function playerNumbers(teamName) {
    if (teamName === "Brooklyn Nets") {
        return homeStats();
    } else (teamName === "Charlotte Hornets"); {
        return awayStats();
    };
    }




function allPlayers() {
    let game = gameObject();
    let allPlayers = [game.home.players, game.away.players];
    return allPlayers;
}


function largestShoe() {
    const allShoes = [];
    let playersArray = allPlayers();
    for (let playerObj in playersArray) {
        let playersAll = playersArray[playerObj]; //debugger
        for (let playersInd in playersAll) {
            let shoeSize = playersAll[playersInd]["shoe"];
             allShoes.push(shoeSize); //debugger
            }
        } const max = Math.max(...allShoes);
        return max;
}

function returnPlayerByShoeSize(shoe) {
    let playersArray = allPlayers();
    for (let playerObj in playersArray) {
        let playersAll = playersArray[playerObj]; //debugger
        for (let playersInd in playersAll) {
            let shoeSize = playersAll[playersInd]["shoe"];
            if (shoeSize === shoe)
            return playersInd;
}
    }
}
console.log(returnPlayerByShoeSize(largestShoe()))

function bigShoeRebounds(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let player in teamObj["players"]) {
            let playerInfo = teamObj["players"][player];
                if (player === playerName )
                return playerInfo["rebounds"]
            }
        }
    }
console.log(bigShoeRebounds(returnPlayerByShoeSize((largestShoe()))))

// return to this lab to fo the bonus questions;
//its honestly a big victory that I was able to do that last one whew
//good job Shania :)

