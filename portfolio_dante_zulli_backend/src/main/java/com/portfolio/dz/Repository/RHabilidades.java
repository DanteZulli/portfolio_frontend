/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.dz.Repository;

import com.portfolio.dz.Entity.Habilidades;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author dante
 */
@Repository
public interface RHabilidades extends JpaRepository<Habilidades, Integer>{
    Optional<Habilidades> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
