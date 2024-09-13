import { CSSProperties } from "react";
import { GameLayoutProperties } from "../types";

function GameLayout({children}: GameLayoutProperties) {
    const [score, deckSpace] = children;
    const scoreStyles: CSSProperties = {
        textAlign: "right"
    }
    const deckSpaceStyles: CSSProperties = {
        width: "auto", // Full viewport width
        height: "auto", // Full viewport height
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "50px",
    }
    return (
        <>
        {/* score */}
        <div
        style={scoreStyles}>
            {score}
        </div>

        {/* deck space */}
        <div 
        style={deckSpaceStyles}>
            {deckSpace}
        </div>
        </>
    );
       
};

export default GameLayout;