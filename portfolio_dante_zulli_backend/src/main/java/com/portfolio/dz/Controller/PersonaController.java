package com.portfolio.dz.Controller;

import com.portfolio.dz.Dto.dtoPersona;
import com.portfolio.dz.Entity.Persona;
import com.portfolio.dz.Security.Controller.Mensaje;
import com.portfolio.dz.Service.ImpPersonaService;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dante
 */
@RestController
@RequestMapping("/personas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PersonaController {

    @Autowired
    ImpPersonaService impPersonaService;

    @GetMapping("/lista")
    public ResponseEntity<List<Persona>> list() {
        List<Persona> list = impPersonaService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Persona> getById(@PathVariable("id") int id) {
        if (!impPersonaService.existsById(id)) {
            return new ResponseEntity(new Mensaje("La educación no existe."), HttpStatus.NOT_FOUND);
        }
        Persona persona = impPersonaService.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }

    /*@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!impPersonaService.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        impPersonaService.delete(id);
        return new ResponseEntity(new Mensaje("Educación eliminara"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoPersona dtopersona) {
        if (StringUtils.isBlank(dtopersona.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtopersona.getDescripcion())) {
            return new ResponseEntity(new Mensaje("La descripcion es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtopersona.getFecha())) {
            return new ResponseEntity(new Mensaje("La fecha es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if (impPersonaService.existsByNombre(dtopersona.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        Persona educacion = new Persona(
                dtopersona.getNombre(), dtopersona.getFecha(), dtopersona.getDescripcion()
        );
        impPersonaService.save(educacion);
        return new ResponseEntity(new Mensaje("La educacion se creo correctamente"), HttpStatus.OK);
    }*/
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoPersona dtopersona) {
        if (!impPersonaService.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (impPersonaService.existsByNombre(dtopersona.getNombre())) {
            if (impPersonaService.getByNombre(dtopersona.getNombre()).get().getId() != id) {
                return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
            }
        }
        if (StringUtils.isBlank(dtopersona.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        Persona persona = impPersonaService.getOne(id).get();
        persona.setNombre(dtopersona.getNombre());
        persona.setApellido(dtopersona.getApellido());
        persona.setDescripcion(dtopersona.getDescripcion());
        persona.setImg(dtopersona.getImg());
        impPersonaService.save(persona);
        return new ResponseEntity(new Mensaje("La persona se actualizó satisfactoriamente"), HttpStatus.OK);

    }

}
