import { useState, useContext, createContext } from "react"
import axios from "axios";

const LetrasContext = createContext(); 

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState(''); 
    const [spinner, setSpinner] = useState(false);

    const busquedaLetra = async (busqueda) => {
        setAlerta('');
        setSpinner(true)
        try {
            const options = {
            method: 'GET',
            url: `https://lyrics-plus.p.rapidapi.com/lyrics/${busqueda.cancion}/${busqueda.artista}`,
            headers: {
                'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
                'X-RapidAPI-Host': `${import.meta.env.VITE_API_HOST}`
            }
            };

            await axios.request(options).then(function (response) {
                console.log(response.data);
                setLetra(response.data.lyrics)
                setSpinner(false);
                setAlerta('')
            }).catch(function (error) {
                console.error(error);
                setAlerta('Song not found')
                setLetra('')
            });
        } catch (error) {
            setAlerta('Song not found')
            setLetra('')
            console.error(error);  
        } 
        
        
    }
    

    return(
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra,
                letra,
                spinner
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext;