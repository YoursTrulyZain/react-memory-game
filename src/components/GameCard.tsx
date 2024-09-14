import { GameCardProperties } from "../types"

function GameCard({id, image, name, setSelectedID, setGameStarted}: GameCardProperties) {

    function handleClick() {
        setSelectedID(id);
        setGameStarted(true);
    }

    return (
        <div className="gameCard"
        onClick={handleClick}>
            <img src={image}></img>
            <p>{name}</p>
        </div>
    )
}
export default GameCard