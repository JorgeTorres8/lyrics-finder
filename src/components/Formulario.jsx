import { useState } from "react"
import useLetras from "../hook/useLetras"

const Formulario = () => { 

  const {setAlerta, busquedaLetra} = useLetras();

  const [busqueda, setBusqueda] = useState({ 
        artista: '',
        cancion: ''
  })
  
  const handleSubmit = e => { 
    e.preventDefault();

    if(Object.values(busqueda).includes('')) {
        setAlerta('Enter artist and song name');
        return;
    }
    busquedaLetra(busqueda);
  }

  return (

    <form
        onSubmit={handleSubmit}
    >
        <legend>Search by artists and Song</legend>

        <div className="form-grid">
            <div>
                <label>Artist</label>
                <input
                    type="text"
                    name="artista"
                    placeholder="Artist name"
                    value={busqueda.artista} 
                    onChange={ e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <div>
                <label>Song Name</label>
                <input
                    type="text"
                    name="cancion"
                    placeholder="Name of the song"
                    value={busqueda.cancion} 
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>
            
            <input
            type="submit"
            value="Search"
            />
        
        </div>

    </form>

  )
}

export default Formulario
