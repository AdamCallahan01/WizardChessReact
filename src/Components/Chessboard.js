import { useRef, useState } from 'react';
import Chess from 'chess.js';
import { Chessboard } from 'react-chessboard';
import './Chessboard.css';
import useSound from 'use-sound';
import moveSound from '../Media/pieceMove.wav';
import bB from '../Media/bB.png';
import bK from '../Media/bK.png';
import bN from '../Media/bN.png';
import bP from '../Media/bP.png';
import bQ from '../Media/bQ.png';
import bR from '../Media/bR.png';
import wB from '../Media/wB.png';
import wK from '../Media/wK.png';
import wN from '../Media/wN.png';
import wP from '../Media/wP.png';
import wQ from '../Media/wQ.png';
import wR from '../Media/wR.png';


var whiteLayout = "PPPPPPPP/RNBQKBNR";  // Used to save what layout is set
var blackLayout = "rnbqkbnr/pppppppp";
var whiteRows = 2;   //Used to save how many rows
var blackRows = 2;
var customColors = ['#b48464', '#ecdcb4', '#e28743', '#eab676', '#779952', '#edeed1', '#000000', '#ffffff', ''];
var darkSquares = customColors[2];
var lightSquares = customColors[3];
var changePieces = false;
var GameHistoryString = "";
var gameStarted = false;
var score = 0;
var blackScore = 0;
var whiteScore = 0;
var whiteCooldown = 0;
var blackCooldown = 0;

export default function PlayVsPlay({ boardWidth }) {
  const chessboardRef = useRef();
  const [game, setGame] = useState(new Chess());

  //for click to move
  const [moveFrom, setMoveFrom] = useState('');
  const [rightClickedSquares, setRightClickedSquares] = useState({});
  const [moveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});

  const [playOnMove] = useSound(
    moveSound,
    { volume: 0.25 }
  );

  const whiteButtons = document.getElementsByClassName("ability-buttonW");
  const blackButtons = document.getElementsByClassName("ability-buttonB");

  //update all of the variable HTML elements and there visibility
  function updateAllLabels() {
    document.getElementById("Score").innerHTML = "White:  " + whiteScore + " Black: " + blackScore;

    document.getElementById("whiteCooldown").innerHTML = whiteCooldown;
    document.getElementById("blackCooldown").innerHTML = blackCooldown;
  }

  //handles everything we need to process whenever a turn happens
  function updateOnMove(gameCopy) {

    var turn = gameCopy.turn();   //track who is next to play
    if (turn === 'b') {
      whiteButtons[0].style.visibility = "hidden";
      whiteButtons[1].style.visibility = "hidden";
      whiteButtons[2].style.visibility = "hidden";
      whiteButtons[3].style.visibility = "hidden";
      blackButtons[0].style.visibility = "visible";
      blackButtons[1].style.visibility = "visible";
      blackButtons[2].style.visibility = "visible";
      blackButtons[3].style.visibility = "visible";
    } else if (turn === 'w') {
      blackButtons[0].style.visibility = "hidden";
      blackButtons[1].style.visibility = "hidden";
      blackButtons[2].style.visibility = "hidden";
      blackButtons[3].style.visibility = "hidden";
      whiteButtons[0].style.visibility = "visible";
      whiteButtons[1].style.visibility = "visible";
      whiteButtons[2].style.visibility = "visible";
      whiteButtons[3].style.visibility = "visible";
    }

    GameHistoryString = game.history();   //display game history
    document.getElementById("History").innerHTML = GameHistoryString;

    //poorly coded score calculations
    //And checks for king
    score = 0;
    var gameFEN = gameCopy.fen();
    const temp = gameFEN.split(" ");
    var shortFEN = temp[0];
    const scoreArray = shortFEN.split("");
    for (var j = 0; j < scoreArray.length; j++) {
      var c = scoreArray[j];
      switch (c) {
        case 'p':
          score -= 1;
          break;
        case 'n':
          score -= 3;
          break;
        case 'b':
          score -= 3;
          break;
        case 'q':
          score -= 9;
          break;
        case 'k':
          score -= 999999;
          break;
        case 'r':
          score -= 5;
          break;
        case 'P':
          score += 1;
          break;
        case 'N':
          score += 3;
          break;
        case 'B':
          score += 3;
          break;
        case 'Q':
          score += 9;
          break;
        case 'K':
          score += 999999;
          break;
        case 'R':
          score += 5;
          break;
        default:
          break;
      }
    }

    whiteScore = score;
    blackScore = 0 - score;

    if (gameStarted === false) {    //remove the layout buttons when game starts
      gameStarted = true;
      var x = document.getElementsByClassName("pregame");
      for (var i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
      }
    }

    if (gameCopy.game_over()) {   //display message on game end
      document.getElementById("GameOver").style.visibility = "visible";
      document.getElementsByClassName("outerDiv")[0].style.backgroundColor = "red";
    }

    whiteCooldown++;
    blackCooldown++;

    updateAllLabels();
  }

  function getMoveOptions(square) {
    const moves = game.moves({
      square,
      verbose: true
    });
    if (moves.length === 0) {
      return;
    }

    const newSquares = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) && game.get(move.to).color !== game.get(square).color
            ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
        borderRadius: '50%'
      };
      return move;
    });
    newSquares[square] = {
      background: 'rgba(255, 255, 0, 0.4)'
    };
    setOptionSquares(newSquares);
  }

  function onSquareClick(square) {
    setRightClickedSquares({});

    function resetFirstMove(square) {
      setMoveFrom(square);
      getMoveOptions(square);
    }

    // from square
    if (!moveFrom) {
      resetFirstMove(square);
      return;
    }

    // attempt to make move
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: moveFrom,
      to: square,
      promotion: 'q' // always promote to a queen for example simplicity
    });
    setGame(gameCopy);

    // if invalid, setMoveFrom and getMoveOptions
    if (move === null) {
      resetFirstMove(square);
      console.log("invalid");
      return;
    }
    updateOnMove(gameCopy);

    setMoveFrom('');
    setOptionSquares({});
  }

  function onSquareRightClick(square) {
    const colour = 'rgba(0, 0, 255, 0.4)';
    setRightClickedSquares({
      ...rightClickedSquares,
      [square]:
        rightClickedSquares[square] && rightClickedSquares[square].backgroundColor === colour
          ? undefined
          : { backgroundColor: colour }
    });
  }

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for simplicity
    });

    if (move === null) {
      console.log("invalid");
      return;
    }

    playOnMove(); //play piece move sound
    setGame(gameCopy);

    updateOnMove(gameCopy);

    return move;
  }

  const pieces = ['wP', 'wN', 'wB', 'wR', 'wQ', 'wK', 'bP', 'bN', 'bB', 'bR', 'bQ', 'bK'];
  var count = 0;
  const customPieces = () => {
    if (changePieces) {
      return null;
    }

    const returnPieces = {};
    pieces.map((p) => {
      var x = 'wP';
      switch(pieces[count]) {
        case 'wP':
          x = wP;
          break;
        case 'wK':
          x = wK;
          break;
        case 'wB':
          x = wB;
          break;
        case 'wQ':
          x = wQ;
          break;
        case 'wN':
          x = wN;
          break;
        case 'wR':
          x = wR;
          break;
        case 'bP':
          x = bP;
          break;
        case 'bK':
          x = bK;
          break;
        case 'bB':
          x = bB;
          break;
        case 'bQ':
          x = bQ;
          break;
        case 'bN':
          x = bN;
          break;
        case 'bR':
          x = bR;
          break;
        default:
          break;
      }
      returnPieces[p] = ({ squareWidth }) => (
        <div
          style={{
            width: squareWidth,
            height: squareWidth,
            backgroundImage: `url(${x})`,
            backgroundSize: '100%',
          }}
        />
      );
      count++;
      return null;
    });
    return returnPieces;
  };

  return (
    <div class='outerDiv'>
    <div class="layoutsWhite">
      <h1>White Layouts:</h1>
      <button
        className="pregame"
        onClick={() => {
          whiteRows = 2;
          whiteLayout = "3QQ3/Q3K2Q";
          console.log(whiteLayout);
          safeGameMutate((game) => {
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
                break;
              case 2:
                game.load(blackLayout + '/8/8/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
                break;
              case 3:
                game.load(blackLayout + '/8/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
                break;
              case 4:
                game.load(blackLayout + '/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Queens
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            whiteRows = 3;
            whiteLayout = '1N1NN1N1/3NN3/N1NQKN1N';
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
                break;
              case 2:
                game.load(blackLayout + '/8/8/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
                break;
              case 3:
                game.load(blackLayout + '/8/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
                break;
              case 4:
                game.load(blackLayout + '/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Knights
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => { 
            whiteRows = 3; 
            whiteLayout = 'B6B/BB4BB/BB2K1BB';
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
                break;
              case 2:
                game.load(blackLayout + '/8/8/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
                break;
              case 3:
                game.load(blackLayout + '/8/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
                break;
              case 4:
                game.load(blackLayout + '/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
                break;
              default:  
                break;
            }
          });
        }}
      >
        Bishops
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            whiteRows = 4;
            whiteLayout = 'PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R';
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
                break;
              case 2:
                game.load(blackLayout + '/8/8/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
                break;
              case 3:
                game.load(blackLayout + '/8/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
                break;
              case 4:
                game.load(blackLayout + '/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Pawns
      </button>
      <button
        className="pregame"
        onClick={() => {
          whiteRows = 1;
          whiteLayout = "RRRRKRRR";
          console.log(whiteLayout);
          safeGameMutate((game) => {
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/8/8/RRRRKRRR w KQkq - 0 1');
                break;
              case 2:
                game.load(blackLayout + '/8/8/8/8/8/RRRRKRRR w KQkq - 0 1');
                break;
              case 3:
                game.load(blackLayout + '/8/8/8/8/RRRRKRRR w KQkq - 0 1');
                break;
              case 4:
                game.load(blackLayout + '/8/8/8/RRRRKRRR w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Rooks
      </button>
    </div>
    <div class="board">
      <Chessboard
        id="Chess"
        animationDuration={1}
        boardWidth={boardWidth}
        position={game.fen()}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
        }}
        customSquareStyles={{
          ...moveSquares,
          ...optionSquares,
          ...rightClickedSquares
        }}
        customDarkSquareStyle={{ backgroundColor: darkSquares }}
        customLightSquareStyle={{ backgroundColor: lightSquares }}
        customPieces={customPieces()}
        ref={chessboardRef}
      />
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.reset();
          });
          var x = document.getElementsByClassName("pregame");
          for (var i = 0; i < x.length; i++) {
            x[i].style.visibility = "visible";
          }
          score = 0;
          blackScore = 0;
          whiteScore = 0;
          document.getElementById("History").innerHTML = "Game has not started";
          document.getElementById("GameOver").style.visibility = "hidden";
          document.getElementById("Score").innerHTML = "White: 0  Black: 0";
          blackButtons[0].style.visibility = "visible";
          blackButtons[1].style.visibility = "visible";
          blackButtons[2].style.visibility = "visible";
          blackButtons[3].style.visibility = "visible";
          whiteButtons[0].style.visibility = "visible";
          whiteButtons[1].style.visibility = "visible";
          whiteButtons[2].style.visibility = "visible";
          whiteButtons[3].style.visibility = "visible";
          gameStarted = false;
          whiteCooldown = 0;
          blackCooldown = 0;
          document.getElementsByClassName("outerDiv")[0].style.backgroundColor = "rgb(53, 183, 206)";
          chessboardRef.current.clearPremoves();
          updateAllLabels();
        }}
      >
        reset
      </button>
    </div>
    <div class="info">
      <h1 class="Chesstext" id="Score">White: 0 Black: 0</h1>
      <h1 class="Chesstext" id="GameOver">Game Over!</h1>
      <h1 class="Chesstext" id="History">Game has not started</h1>
    </div>
    <div class="layoutsBlack">
      <h1>Black Layouts:</h1>    
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 2;
            blackLayout = 'q3k2q/3qq3';
            console.log(blackLayout);
            switch(whiteRows) {
              case 1:
                game.load('q3k2q/3qq3/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 2:
                game.load('q3k2q/3qq3/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                console.log(whiteLayout);
                break;
              case 3:
                game.load('q3k2q/3qq3/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 4:
                game.load('q3k2q/3qq3/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Queens
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 3;
            blackLayout = 'n1nqkn1n/3nn3/1n1nn1n1';
            switch(whiteRows) {
              case 1:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 2:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 3:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 4:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Knights
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 3;
            blackLayout = 'bb2k1bb/bb4bb/b6b';
            switch(whiteRows) {
              case 1:
                game.load('bb2k1bb/bb4bb/b6b/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 2:
                game.load('bb2k1bb/bb4bb/b6b/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 3:
                game.load('bb2k1bb/bb4bb/b6b/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 4:
                game.load('bb2k1bb/bb4bb/b6b/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Bishops
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 4;
            blackLayout = 'r1r1kr1r/pppppppp/pppppppp/pppppppp';
            switch(whiteRows) {
              case 1:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 2:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 3:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 4:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/' + whiteLayout + ' w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Pawns
      </button>
      <button
        className="pregame"
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 1;
            blackLayout = 'rrrrkrrr';
            console.log(blackLayout);
            switch(whiteRows) {
              case 1:
                game.load('rrrrkrrr/8/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 2:
                game.load('rrrrkrrr/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 3:
                game.load('rrrrkrrr/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              case 4:
                game.load('rrrrkrrr/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                break;
              default:
                break;
            }
          });
        }}
      >
        Rooks
      </button>
    </div>
    <div class="abilitiesWhite">
      <h1>White Abilities:</h1>
      <h2 id="whiteCooldown">0</h2>
    <button
        className="ability-buttonW"
        onClick={() => {
        if (gameStarted && whiteCooldown > 15) {
          whiteCooldown -= 15;
          safeGameMutate((game) => {
            game.put({ type: 'Q', color: 'w' }, 'a1')
            game.load(game.fen());
          });
          updateAllLabels();
          chessboardRef.current.clearPremoves();
        }}}
      >
        Get A Queen: 15
      </button>
      <button
        className="ability-buttonW"
        onClick={() => {
          if (gameStarted && whiteCooldown > 5) {
            whiteCooldown -= 5;
          safeGameMutate((game) => {
            game.remove('d4');
            game.remove('d5');
            game.remove('e4');
            game.remove('e5');
            game.load(game.fen());
          });
        }
          updateAllLabels();
          chessboardRef.current.clearPremoves();
        }}
      >
        Nuke the middle: 5
      </button>
      <button
        className="ability-buttonW"
        onClick={() => {
          if (gameStarted && whiteCooldown >= 7) {
            whiteCooldown -= 7;
          safeGameMutate((game) => {
            game.put({ type: 'p', color: 'w' }, 'd3');
            game.put({ type: 'p', color: 'w' }, 'e3');
            game.load(game.fen());
          });
          updateAllLabels();
          chessboardRef.current.clearPremoves();
        }}}
      >
        Pawn Drop White: 7
      </button>
      <button
        className="ability-buttonW"
        onClick={() => {
          if (gameStarted && whiteCooldown >= 13) {
            whiteCooldown -= 13;
          safeGameMutate((game) => {
            game.put({ type: 'N', color: 'w' }, 'a8');
            game.load(game.fen());
          });
          updateAllLabels();
          chessboardRef.current.clearPremoves();
        }}}
      >
        Paratrooper: 13
      </button>
    </div>
    <div class="abilitiesBlack">
      <h1>Black Abilities:</h1>
      <h2 id="blackCooldown">0</h2>
    <button
        className="ability-buttonB"
        onClick={() => {
          if (gameStarted && blackCooldown >= 15) {
            blackCooldown -= 15;
          safeGameMutate((game) => {
            game.put({ type: 'q', color: 'b' }, 'a8')
            game.load(game.fen());
          });
          updateAllLabels();
          chessboardRef.current.clearPremoves();
        }}}
      >
        Get A Queen: 15
      </button>
      <button
        className="ability-buttonB"
        onClick={() => {
          if (gameStarted && blackCooldown >= 5) {
            blackCooldown -= 5;
          safeGameMutate((game) => {
            game.remove('d4');
            game.remove('d5');
            game.remove('e4');
            game.remove('e5');
            game.load(game.fen());
          });
          chessboardRef.current.clearPremoves();
          updateAllLabels();
        }}}
      >
        Nuke the middle: 5
      </button>
      <button
        className="ability-buttonB"
        onClick={() => {
          if (gameStarted && blackCooldown >= 7) {
            blackCooldown -= 7;
          safeGameMutate((game) => {
            game.put({ type: 'p', color: 'b' }, 'd6');
            game.put({ type: 'p', color: 'b' }, 'e6');
            game.load(game.fen());
          });
          chessboardRef.current.clearPremoves();
          updateAllLabels();
        }}}
      >
        Pawn Drop Black: 7
      </button>
      <button
        className="ability-buttonB"
        onClick={() => {
          if (gameStarted && blackCooldown >= 13) {
            blackCooldown -= 13;
          safeGameMutate((game) => {
            game.put({ type: 'n', color: 'b' }, 'a1');
            game.load(game.fen());
          });
          chessboardRef.current.clearPremoves();
          updateAllLabels();
        }}}
      >
        Paratrooper: 13
      </button>
    </div>
    <div class="customizations">
      <h1>Customizations:</h1>
      <button
        className="customization-button"
        onClick={() => {
          darkSquares = customColors[0];
          lightSquares = customColors[1];
        }}
      >
        Board Colors 1
      </button>
      <button
        className="customization-button"
        onClick={() => {
          darkSquares = customColors[2];
          lightSquares = customColors[3];
        }}
      >
        Board Colors 2
      </button>
      <button
        className="customization-button"
        onClick={() => {
          darkSquares = customColors[4];
          lightSquares = customColors[5];
        }}
      >
        Board Colors 3
      </button>
      <button
        className="customization-button"
        onClick={() => {
          darkSquares = customColors[6];
          lightSquares = customColors[7];
        }}
      >
        Board Colors 4
      </button>
      <button
        className="customization-button"
        onClick={() => {
          darkSquares = customColors[8];
          lightSquares = customColors[8];
        }}
      >
        Boarderless
      </button>
      <button
        className="customization-button"
        onClick={() => {
          changePieces = !changePieces;
        }}
      >
        Change Pieces
      </button>
    </div>
    </div>
  );
}
