import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { AkatsukiCharacter } from "../types";

function DeckSpace() {

    const [akatsukiCharacters, setAkatsukiCharacters] = useState<AkatsukiCharacter[]>([]);

    useEffect(() => {
        const fetchAkatsukiCharacters = async () => {
            const response = await fetch("https://narutodb.xyz/api/akatsuki");
            const responseObject = (await response.json());
            const akatsukiCharacters = responseObject.akatsuki;
            console.log(akatsukiCharacters);
            setAkatsukiCharacters(akatsukiCharacters);
        };

        fetchAkatsukiCharacters();
    }, []);


    return (
        <>
            {akatsukiCharacters.map((character) => {
                return <GameCard image={character.images[0]} name={character.name} key={character.id}></GameCard>
            })}
        </>
    )
}

export default DeckSpace;