import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { AkatsukiCharacter, GameContainerProperties } from "../types";

function GameContainer({characterArray}: GameContainerProperties) {
    const [shuffledArray, setShuffledArray] = useState<AkatsukiCharacter[]>(characterArray)
    const [selectedArray, setSelectedArray] = useState<number[]>([]);
    const [selectedID, setSelectedID] = useState<number>(-1);
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [bestScore, setBestScore] = useState<number>(0);
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    function shuffleArray(array: AkatsukiCharacter[]) {

        for(let i = array.length - 1; i > 0; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomNumber]] = [array[randomNumber], array[i]]
        }
        setShuffledArray(array);
    }

    if(gameStarted) {

        if(selectedArray.includes(selectedID)) {
            setSelectedArray([]);
            setCurrentScore(0);
        }else {
            setSelectedArray([...selectedArray, selectedID]);
            setCurrentScore(currentScore + 1);
            if((currentScore + 1) > bestScore){
                setBestScore(currentScore + 1);
            }
        }
        setGameStarted(false);
        shuffleArray(shuffledArray);
    }

    return (
        <>
        <div className="scoreContainer">
            <div>
                <h1>Akatsuki Memory Game</h1>
            </div>
            <div style={{textAlign: "center"}}>
                <p>Select all the characters without selecting the same one twice.</p>
                <p>Highest Possible Score is 20</p>
            </div>
            <div >
                <p>Current Score: {currentScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>

        <div className="cardContainer">
            {shuffledArray.map((character) => {
                return <GameCard 
                id={character.id} 
                image={character.images[0]} 
                name={character.name} 
                key={character.id}
                setSelectedID={setSelectedID}
                setGameStarted={setGameStarted}>
                </GameCard>
            })}
        </div>
        </>
    )
}

export default GameContainer;