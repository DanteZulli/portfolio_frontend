package com.portfolio.dz.Repository;

import com.portfolio.dz.Entity.Persona;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author dante
 */
/* Repositorio > Interfaz*/
@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Integer>{
    public Optional<Persona> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
