import { useEffect, useState } from 'react'
import './App.css'
import GameContainer from './components/GameContainer'
import { AkatsukiCharacter } from './types';

function App() {

  const [akatsukiCharacters, setAkatsukiCharacters] = useState<AkatsukiCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      const fetchAkatsukiCharacters = async () => {
        setLoading(true);
        try {
          const response = await fetch("https://narutodb.xyz/api/akatsuki");
          const responseObject = (await response.json());
          const akatsukiCharacters = responseObject.akatsuki;
          console.log(akatsukiCharacters);
          setAkatsukiCharacters(akatsukiCharacters);
        } catch (error: any) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchAkatsukiCharacters();
    }, []);

    if(loading) {
      return <h1>Loading ...</h1>
    }

    if(error) {
      return <h1>An error ocurred while trying to fetch the data, please try to refresh the page</h1>
    }

    return (
      <>
        <GameContainer characterArray={akatsukiCharacters}></GameContainer>  
      </>
    )
}

export default App
