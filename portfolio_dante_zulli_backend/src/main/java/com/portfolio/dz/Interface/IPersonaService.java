package com.portfolio.dz.Interface;

import com.portfolio.dz.Entity.Persona;
import java.util.List;

/**
 *
 * @author dante
 */
// Interfaz > Servicio
public interface IPersonaService {
    //Métodos    
    //Traer una lista de Personas
    public List<Persona> getPersona();
    //Guardar un Objeto de tipo Persona
    public void savePersona(Persona persona);
    //Eliminar un Objeto de tipo Persona por ID
    public void deletePersona(Long id);
    //Buscar persona por Id
    public Persona findPersona(Long id);
    
}
