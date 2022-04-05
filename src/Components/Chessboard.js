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
var gameOver = false;

export default function PlayVsPlay({ boardWidth }) {
  const chessboardRef = useRef();
  const [game, setGame] = useState(new Chess());
  const [playOnMove] = useSound(
    moveSound,
    { volume: 0.25 }
  );

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
      promotion: 'q' // always promote to a queen for example simplicity
    });
    playOnMove();
    setGame(gameCopy);
    if (gameCopy.game_over()) {
      document.getElementsByClassName("test").style.visibility = "visible";
    }
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
    <>
    <div>
      <Chessboard
        id="Chess"
        animationDuration={1}
        boardWidth={boardWidth}
        position={game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: '4px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
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
          chessboardRef.current.clearPremoves();
        }}
      >
        reset
      </button>
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.undo();
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        undo
      </button>
      <h1 class="test">Game Over!</h1>
    </div>
    <div>
      <h1>White Layouts:</h1>
      <button
        onClick={() => {
          whiteRows = 2;
          whiteLayout = "3QQ3/Q3K2Q";
          console.log(whiteLayout);
          safeGameMutate((game) => {
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
              case 2:
                game.load(blackLayout + '/8/8/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
              case 3:
                game.load(blackLayout + '/8/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
              case 4:
                game.load(blackLayout + '/8/8/3QQ3/Q3K2Q w KQkq - 0 1');
            }
          });
        }}
      >
        Queens
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            whiteRows = 3;
            whiteLayout = '1N1NN1N1/3NN3/N1NQKN1N';
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
              case 2:
                game.load(blackLayout + '/8/8/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
              case 3:
                game.load(blackLayout + '/8/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
              case 4:
                game.load(blackLayout + '/8/1N1NN1N1/3NN3/N1NQKN1N w KQkq - 0 1');
            }
          });
        }}
      >
        Knights
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => { 
            whiteRows = 3; 
            whiteLayout = 'B6B/BB4BB/BB2K1BB';
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
              case 2:
                game.load(blackLayout + '/8/8/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
              case 3:
                game.load(blackLayout + '/8/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
              case 4:
                game.load(blackLayout + '/8/B6B/BB4BB/BB2K1BB w KQkq - 0 1');
            }
          });
        }}
      >
        Bishops
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            whiteRows = 4;
            whiteLayout = 'PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R';
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
              case 2:
                game.load(blackLayout + '/8/8/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
              case 3:
                game.load(blackLayout + '/8/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
              case 4:
                game.load(blackLayout + '/PPPPPPPP/PPPPPPPP/PPPPPPPP/R1R1KR1R w KQkq - 0 1');
            }
          });
        }}
      >
        Pawns
      </button>
      <button
        onClick={() => {
          whiteRows = 1;
          whiteLayout = "RRRRKRRR";
          console.log(whiteLayout);
          safeGameMutate((game) => {
            switch(blackRows) {
              case 1:
                game.load(blackLayout + '/8/8/8/8/8/8/RRRRKRRR w KQkq - 0 1');
              case 2:
                game.load(blackLayout + '/8/8/8/8/8/RRRRKRRR w KQkq - 0 1');
              case 3:
                game.load(blackLayout + '/8/8/8/8/RRRRKRRR w KQkq - 0 1');
              case 4:
                game.load(blackLayout + '/8/8/8/RRRRKRRR w KQkq - 0 1');
            }
          });
        }}
      >
        Rooks
      </button>
    </div>
    <div>
      <h1>Black Layouts:</h1>    
      <button
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 2;
            blackLayout = 'q3k2q/3qq3';
            console.log(blackLayout);
            switch(whiteRows) {
              case 1:
                game.load('q3k2q/3qq3/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 2:
                game.load('q3k2q/3qq3/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
                console.log(whiteLayout);
              case 3:
                game.load('q3k2q/3qq3/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 4:
                game.load('q3k2q/3qq3/8/8/' + whiteLayout + ' w KQkq - 0 1');
            }
          });
        }}
      >
        Queens
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 3;
            blackLayout = 'n1nqkn1n/3nn3/1n1nn1n1';
            switch(whiteRows) {
              case 1:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 2:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 3:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 4:
                game.load('n1nqkn1n/3nn3/1n1nn1n1/8/' + whiteLayout + ' w KQkq - 0 1');
            }
          });
        }}
      >
        Knights
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 3;
            blackLayout = 'bb2k1bb/bb4bb/b6b';
            switch(whiteRows) {
              case 1:
                game.load('bb2k1bb/bb4bb/b6b/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 2:
                game.load('bb2k1bb/bb4bb/b6b/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 3:
                game.load('bb2k1bb/bb4bb/b6b/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 4:
                game.load('bb2k1bb/bb4bb/b6b/8/' + whiteLayout + ' w KQkq - 0 1');
            }
          });
        }}
      >
        Bishops
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 4;
            blackLayout = 'r1r1kr1r/pppppppp/pppppppp/pppppppp';
            switch(whiteRows) {
              case 1:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 2:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 3:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/8/' + whiteLayout + ' w KQkq - 0 1');
              case 4:
                game.load('r1r1kr1r/pppppppp/pppppppp/pppppppp/' + whiteLayout + ' w KQkq - 0 1');
            }
          });
        }}
      >
        Pawns
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 1;
            blackLayout = 'rrrrkrrr';
            console.log(blackLayout);
            switch(whiteRows) {
              case 1:
                game.load('rrrrkrrr/8/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 2:
                game.load('rrrrkrrr/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 3:
                game.load('rrrrkrrr/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 4:
                game.load('rrrrkrrr/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
            }
          });
        }}
      >
        Rooks
      </button>
    </div>
    <div>
      <h1>Abilities:</h1>
    <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.turn();
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        Extra Turn
      </button>
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.remove('d4');
            game.remove('d5');
            game.remove('e4');
            game.remove('e5');
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        Nuke the middle
      </button>
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.put({ type: 'p', color: 'w' }, 'd3');
            game.put({ type: 'p', color: 'w' }, 'e3');
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        Pawn Drop White
      </button>
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.put({ type: 'p', color: 'b' }, 'd6');
            game.put({ type: 'p', color: 'b' }, 'e6');
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        Pawn Drop Black
      </button>
    </div>
    <div>
      <h1>Custimizations:</h1>
      <button
        className="rc-button"
        onClick={() => {
          darkSquares = customColors[0];
          lightSquares = customColors[1];
        }}
      >
        Board Colors 1
      </button>
      <button
        className="rc-button"
        onClick={() => {
          darkSquares = customColors[2];
          lightSquares = customColors[3];
        }}
      >
        Board Colors 2
      </button>
      <button
        className="rc-button"
        onClick={() => {
          darkSquares = customColors[4];
          lightSquares = customColors[5];
        }}
      >
        Board Colors 3
      </button>
      <button
        className="rc-button"
        onClick={() => {
          darkSquares = customColors[6];
          lightSquares = customColors[7];
        }}
      >
        Board Colors 4
      </button>
      <button
        className="rc-button"
        onClick={() => {
          darkSquares = customColors[8];
          lightSquares = customColors[8];
        }}
      >
        Boarderless
      </button>
      <button
        className="rc-button"
        onClick={() => {
          changePieces = !changePieces;
        }}
      >
        Change Pieces
      </button>
    </div>
    </>
  );
}
