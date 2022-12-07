/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dz.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author dante
 */
@Entity
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreEdu;
    private String fechaEdu;
    private String descripcionEdu;

    
    //Constructores
    public Educacion() {
    }

    public Educacion(String nombreEdu, String fechaEdu, String descripcionEdu) {
        this.nombreEdu = nombreEdu;
        this.fechaEdu = fechaEdu;
        this.descripcionEdu = descripcionEdu;
    }
    
    //Getter y Setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreEdu() {
        return nombreEdu;
    }

    public void setNombreEdu(String nombreEdu) {
        this.nombreEdu = nombreEdu;
    }

    public String getFechaEdu() {
        return fechaEdu;
    }

    public void setFechaEdu(String fechaEdu) {
        this.fechaEdu = fechaEdu;
    }

    public String getDescripcionEdu() {
        return descripcionEdu;
    }

    public void setDescripcionEdu(String descripcionEdu) {
        this.descripcionEdu = descripcionEdu;
    }
    
    
}
