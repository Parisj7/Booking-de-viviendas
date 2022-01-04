package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Reserva;
import Grupo3.Casasydeptos.repository.ReservaRepository;
import Grupo3.Casasydeptos.security.Entity.Usuario;
import Grupo3.Casasydeptos.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaService {

    public final ReservaRepository repository;
    public final UsuarioRepository usuarioRepository;

    @Autowired
    public ReservaService(ReservaRepository repository, UsuarioRepository usuarioRepository) {
        this.repository = repository;
        this.usuarioRepository = usuarioRepository;
    }

    public Reserva save(Reserva reserva) {
        Usuario usuario = usuarioRepository.getById(reserva.getUsuario().getIdUsuario());
        usuario.setCiudad(reserva.getUsuario().getCiudad());
        usuarioRepository.save(usuario);
        repository.save(reserva);
        return reserva;
    }

    public Reserva findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra reserva con ese id")
        );
    }

    public Iterable<Reserva> findAll() {
        return repository.findAll();
    }

    public Iterable<Reserva> findAllByProductoId(Long id) {
        return repository.findAllByProductoId(id);
    }

    public Iterable<Reserva> findAllByUsuarioId(Long id) {
        return repository.findAllByUsuarioId(id);
    }

    public Reserva delete(Long id) {
        final Reserva oldReserva = findById(id);
        repository.delete(oldReserva);
        return oldReserva;
    }

    public Reserva findByUserProducto(Long idProducto, Long idUsuario) {
        return repository.findByProductoUsuario(idProducto, idUsuario);
    }
}
