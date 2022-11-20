package com.portfolio.dz.Repository;

import com.portfolio.dz.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author dante
 */
/* Repositorio > Interfaz*/
@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long>{
    
}
