package Grupo3.Casasydeptos.security.util;

import Grupo3.Casasydeptos.security.Entity.Rol;
import Grupo3.Casasydeptos.security.enums.RolNombre;
import Grupo3.Casasydeptos.security.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CreateRoles implements CommandLineRunner {
    @Autowired
    RolService rolService;

    @Override
    public void run(String... args) throws Exception {
        Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        Rol rolProvisorio = new Rol(RolNombre.ROLE_PROVISORIO);
        if (rolService.getByRolNombre(rolAdmin.getRolNombre()).isEmpty()) {
            rolService.save(rolAdmin);
        }
        if (rolService.getByRolNombre(rolUser.getRolNombre()).isEmpty()) {
            rolService.save(rolUser);
        }
        if (rolService.getByRolNombre(rolProvisorio.getRolNombre()).isEmpty()) {
            rolService.save(rolProvisorio);
        }
    }
}
