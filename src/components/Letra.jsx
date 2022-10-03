import useLetras from "../hook/useLetras"
import Spinner from "./Spinner";

const Letra = () => {
  const {letra, spinner} = useLetras();  
  return (
    spinner ? <Spinner/> : <div className="letra">{letra}</div>
  )
}

export default Letra