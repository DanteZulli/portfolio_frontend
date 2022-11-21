/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dz.Security.Service;

import com.portfolio.dz.Security.Entity.Usuario;
import com.portfolio.dz.Security.Repository.IUsuarioRepository;
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
public class UsuarioService {
    @Autowired
    IUsuarioRepository IUsuarioRepository;
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
        return IUsuarioRepository.findByNombreUsuario(nombreUsuario);
    }
    public boolean existsByNombreUsuario(String nombreUsuario){
        return IUsuarioRepository.existsByNombreUsuario(nombreUsuario);
    }
    public void save(Usuario usuario){
        IUsuarioRepository.save(usuario);
    }
   
}
