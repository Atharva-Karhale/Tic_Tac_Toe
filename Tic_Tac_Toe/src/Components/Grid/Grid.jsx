import isWinner from "../../helper/checkWinner";
import { useState } from "react";
import Card from "../Card/Card";

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn == true) {
            board[index] ='O';
        }else {
            board[index] ='X';
        }
        const win = isWinner(board, turn? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""))        
    }

    return (
        <div className="flex justify-center items-cente">
            <div className="size-[400px] text-center">
            {
                winner && (
                    <>
                        <h1 className=""> Winner is {winner} </h1>
                        <button className="reset" onClick={reset}> Reset Game </button>
                    </>
                )
            }
            
            <h1 className=" font-extrabold text-2xl p-3 border-solid border-4 m-4 inline-block justify-center text-gray-600 bg-white rounded-xl">Current Player: {(turn) ? <span style={{color:'#6F61C0'}}>'O'</span> : <span style={{color:'#6F61C0'}}>'X'</span>}</h1>
            <div className='flex flex-wrap size-[400px] justify-between item-center'>
                {board.map((el, idx) => <Card gameEnd={winner ? true : false} key = {idx} onPlay = {play} player={el} index={idx} />)}
            </div>
        </div>
        </div>
        
        
    )
}

export default Grid;