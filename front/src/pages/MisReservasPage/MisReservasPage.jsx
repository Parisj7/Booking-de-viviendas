import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import { environment } from "../../constants";
import useFetch from "../../customHooks/useFetch";
import Titulo from "../../components/Titulo/Titulo";
import CardReservaList from "../../components/CardReservaList/CardReservaList";
import DeadEnd from "../../components/DeadEnd/DeadEnd";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function MisReservasPage() {
  const { BASE_URL, RESERVAS_ENDPOINT } = environment;
  const { auth: { idUsuario } } = useContext(AuthContext);
  const {
    data: reservas,
    error,
    isLoading,
  } = useFetch(`${BASE_URL}${RESERVAS_ENDPOINT}porUsuario/${idUsuario}`);

  return (
    <LayoutGeneral>
      {isLoading ? (
        <LoadingBar />
      ) : error || reservas.length === 0 ? (
        <DeadEnd desc="Aún no tienes ninguna reserva" />
      ) : (
        <>
          <Titulo titulo="Mis reservas" />
          <CardReservaList reservas={reservas} />
        </>
      )}
    </LayoutGeneral>
  );
}

export default MisReservasPage;
