/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dz.Security.Service;

import com.portfolio.dz.Security.Entity.Rol;
import com.portfolio.dz.Security.Enums.RolNombre;
import com.portfolio.dz.Security.Repository.IRolRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dante
 */
@Service
@Transactional
public class RolService {
    @Autowired
    IRolRepository IRolRepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return IRolRepository.findByRolNombre(rolNombre);
    }
    public void save(Rol rol){
        IRolRepository.save(rol);
    }
}
