import Formulario from "./Formulario"
import Alertas from "./Alertas";
import Letra from "./Letra";
import Spinner from "./Spinner";
import useLetras from "../hook/useLetras"

const AppLetras = () => {

  const { alerta, letra, spinner } = useLetras();
  return (
    <>
        <header>Search for Lyrics and Songs</header>
        <Formulario/>
        <main>
            {alerta ? <Alertas>{alerta}</Alertas> :
            letra ? <Letra/> :
            spinner ? <Spinner/> :
            <p className="text-center">
              Find lyrics from your favorite artists
            </p>}
        </main>
    </>
  )
}

export default AppLetras