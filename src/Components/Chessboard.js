import { useRef, useState } from 'react';
import Chess from 'chess.js';

import { Chessboard } from 'react-chessboard';

export default function PlayVsPlay({ boardWidth }) {
  const chessboardRef = useRef();
  const [game, setGame] = useState(new Chess());
  var whiteLayout = "PPPPPPPP/RNBQKBNR";  // Used to save what layout is set
  var blackLayout = "rnbqkbnr/pppppppp";
  var whiteRows = 2;   //Used to save how many rows
  var blackRows = 2;

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
    gameCopy.position = game.fen();
    setGame(gameCopy);
    return move;
  }

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
    </div>
    <div>
      <h1>White Layouts:</h1>
      <button
        onClick={() => {
          whiteRows = 2;
          whiteLayout = "3QQ3/Q3K2Q";
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
    </div>
    <div>
      <h1>Black Layouts:</h1>    
      <button
        onClick={() => {
          safeGameMutate((game) => {
            blackRows = 2;
            blackLayout = 'q3k2q/3qq3';
            switch(whiteRows) {
              case 1:
                game.load('q3k2q/3qq3/8/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
              case 2:
                game.load('q3k2q/3qq3/8/8/8/8/' + whiteLayout + ' w KQkq - 0 1');
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
    </div>
    </>
  );
}
