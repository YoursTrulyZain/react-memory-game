import { CSSProperties } from "react"
import { GameCardProperties } from "../types"

function GameCard({image, name}: GameCardProperties) {

    const gameCardStyles: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "5px solid white",
        borderRadius: "5px"
    }

    const imageStyles: CSSProperties = {
        height: "300px",
        width: "300px"
    }

    return (
        <div
        style={gameCardStyles}>
            <img
            src={image}
            style={imageStyles}></img>
            <p>{name}</p>
        </div>
    )
}
export default GameCard