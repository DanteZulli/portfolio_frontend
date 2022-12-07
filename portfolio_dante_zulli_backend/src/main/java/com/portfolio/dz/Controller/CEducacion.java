/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dz.Controller;

import com.portfolio.dz.Dto.dtoEducacion;
import com.portfolio.dz.Entity.Educacion;
import com.portfolio.dz.Security.Controller.Mensaje;
import com.portfolio.dz.Service.SEducacion;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dante
 */
@RestController
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class CEducacion {

    @Autowired
    SEducacion sEducacion;

    @GetMapping("/lista")
    public ResponseEntity<List<Educacion>> list() {
        List<Educacion> list = sEducacion.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Educacion> getById(@PathVariable("id") int id){
        if(!sEducacion.existsById(id)){
            return new ResponseEntity(new Mensaje("La educación no existe."), HttpStatus.NOT_FOUND);
        }
        Educacion educacion = sEducacion.getOne(id).get();
        return new ResponseEntity(educacion, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sEducacion.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sEducacion.delete(id);
        return new ResponseEntity(new Mensaje("Educación eliminara"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoEducacion dtoeducacion) {
        if (StringUtils.isBlank(dtoeducacion.getNombreEdu())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getDescripcionEdu())) {
            return new ResponseEntity(new Mensaje("La descripcion es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getFechaEdu())) {
            return new ResponseEntity(new Mensaje("La fecha es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if(sEducacion.existsByNombreEdu(dtoeducacion.getNombreEdu())){
            return new ResponseEntity (new Mensaje("El nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        Educacion educacion = new Educacion(
                dtoeducacion.getNombreEdu(), dtoeducacion.getFechaEdu(),dtoeducacion.getDescripcionEdu() 
        );
        sEducacion.save(educacion);
        return new ResponseEntity(new Mensaje("La educacion se creo correctamente"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoEducacion dtoeducacion){
        if(!sEducacion.existsById(id)){
            return new ResponseEntity ( new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if(sEducacion.existsByNombreEdu(dtoeducacion.getNombreEdu())){
            if (sEducacion.getByNombreEdu(dtoeducacion.getNombreEdu()).get().getId() != id) {
                return new ResponseEntity ( new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
            }
        }
        if (StringUtils.isBlank(dtoeducacion.getNombreEdu())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getDescripcionEdu())) {
            return new ResponseEntity(new Mensaje("La descripcion es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getFechaEdu())) {
            return new ResponseEntity(new Mensaje("La fecha es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        Educacion educacion = sEducacion.getOne(id).get();
        educacion.setNombreEdu(dtoeducacion.getNombreEdu());
        educacion.setFechaEdu(dtoeducacion.getFechaEdu());
        educacion.setDescripcionEdu(dtoeducacion.getDescripcionEdu());
        sEducacion.save(educacion);
        return new ResponseEntity(new Mensaje ("La educación se actualizó satisfactoriamente"), HttpStatus.OK);
        
    }

}
