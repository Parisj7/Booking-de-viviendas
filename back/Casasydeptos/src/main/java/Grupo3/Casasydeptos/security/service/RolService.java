package Grupo3.Casasydeptos.security.service;

import Grupo3.Casasydeptos.security.Entity.Rol;
import Grupo3.Casasydeptos.security.enums.RolNombre;
import Grupo3.Casasydeptos.security.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RolService {

    @Autowired
    RolRepository repository;

    public Optional<Rol> getByRolNombre(RolNombre rolNombre) {
        return repository.findByRolNombre(rolNombre);
    }

    public void save(Rol rol) {
        repository.save(rol);
    }

}