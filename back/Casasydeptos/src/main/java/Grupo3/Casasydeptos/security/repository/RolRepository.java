package Grupo3.Casasydeptos.security.repository;

import Grupo3.Casasydeptos.security.Entity.Rol;
import Grupo3.Casasydeptos.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long> {

    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}