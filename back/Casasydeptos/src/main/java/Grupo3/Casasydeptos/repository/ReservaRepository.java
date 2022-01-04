package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query("from Reserva r where r.producto.idProducto = ?1")
    Iterable<Reserva> findAllByProductoId(Long Id);

    @Query("from Reserva r where r.usuario.idUsuario = ?1")
    Iterable<Reserva> findAllByUsuarioId(Long Id);

    @Query("from Reserva r where (r.producto.idProducto = ?1) " +
            "AND (r.usuario.idUsuario = ?2)")
    Reserva findByProductoUsuario(Long idProducto, Long idUsuario);


}