/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dz.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author dante
 */
public class dtoEducacion {
    
    @NotBlank
    private String nombreEdu;
    @NotBlank
    private String fechaEdu;
    @NotBlank
    private String descripcionEdu;
    
    //Const

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreEdu, String fechaEdu, String descripcionEdu) {
        this.nombreEdu = nombreEdu;
        this.fechaEdu = fechaEdu;
        this.descripcionEdu = descripcionEdu;
    }
    
    //G&S

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
