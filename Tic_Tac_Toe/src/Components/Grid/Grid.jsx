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
                        <h1 className=" bg-[#F2921D] p-2 rounded-lg border-4 border-[#F2CD5C] font-black text-white text-xl "> Winner is " <span className="text-gray-600 text-2xl">{winner}</span> "</h1>
                        <button className="reset  bg-[#A084E8] px-[0.4em] py-3 rounded-xl border-4 border-[#6F61C0] text-white font-extrabold hover:text-[#D5FFE4] hover:border-[#8BE8E5]" onClick={reset}> Reset Game </button>
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