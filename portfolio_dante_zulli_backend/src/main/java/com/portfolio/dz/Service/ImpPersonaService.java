
package com.portfolio.dz.Service;

import com.portfolio.dz.Entity.Persona;
import com.portfolio.dz.Interface.IPersonaService;
import com.portfolio.dz.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dante
 */
//Servicio > Controlador
@Service
public class ImpPersonaService implements IPersonaService {
    //Traer Repositorio
    @Autowired IPersonaRepository IPersonaRepository;
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = IPersonaRepository.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        IPersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        IPersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
       Persona persona = IPersonaRepository.findById(id).orElse(null);
       return persona;
    }
    
}
