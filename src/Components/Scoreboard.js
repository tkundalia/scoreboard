import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'

// const players = [
//     {
//       id: 1,
//       name: 'Wouter',
//       score: 2
//     },
//     {
//       id: 2,
//       name: 'Mimi',
//       score: 5
//     },
//     {
//       id: 3,
//       name: 'Milan',
//       score: 4
//     }
//   ]
  
  export default class Scoreboard extends Component {
    state = {
       players: [
      {
        id: 1,
        name: 'Wouter',
        score: 2
      },
      {
        id: 2,
        name: 'Mimi',
        score: 5
      },
      {
        id: 3,
        name: 'Milan',
        score: 4
      }
    ]
  }
    renderPlayer(player) {
      return < Player
        key={player.id}
        name={player.name}
        score={player.score}

        id={player.id}                  // --- for updatePlayerScore with onclick '+' button. can use key id isntead?
        updatePlayerScore={player.updatePlayerScore}    // onsite this.updatePlayerScore which doesn't work
      />
    }

    // On '+' click, update specific players score

    updatePlayerScore = (id, score) => {
        /* return updatedPlayers = this.state.players.map(
                player => { (player.id === id) ?  { ...player,score } : player } */

      const updatedPlayers = this.state.players.map(
        player => {
          if (player.id === id) {
            return {
              ...player,                    //----- ??  -----
              score
            }
          }
          else {
            return player
          }
        }
      )
      this.setState({ players: updatedPlayers })
    }
  
    render() {
      return (
        <div className="scoreboard">
          <h1>Scoreboard</h1>
          <ul>
            {
              this.state.players           /* only 'players' if players array assigned out side of Scorboard component*/
                .sort((a, b) => a.score - b.score)
                .map(this.renderPlayer)
            }
          </ul>
        </div>
      )
    }
  }

// export default class Scoreboard extends Component {
//   render() {
//     return (
//       <div className="scoreboard">
//         <h1>Scoreboard</h1>
//         <ul>
//           <Player name="Wouter" score={2} />
//           <Player name="Mimi" score={5} />
//           <Player name="Milan" score={4} />
//         </ul>
//       </div>
//     )
//   }
// }