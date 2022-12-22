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
public class dtoProyectos {

    @NotBlank
    private String nombreProyecto;
    @NotBlank
    private String descripcionProyecto;
    @NotBlank
    private String imagenProyecto;
    //Const

    public dtoProyectos() {
    }

    public dtoProyectos(String nombreProyecto, String descripcionProyecto, String imagenProyecto) {
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.imagenProyecto = imagenProyecto;
    }
    //Getter y Setter

    public String getNombreProyecto() {
        return nombreProyecto;
    }

    public void setNombreProyecto(String nombreProyecto) {
        this.nombreProyecto = nombreProyecto;
    }

    public String getDescripcionProyecto() {
        return descripcionProyecto;
    }

    public void setDescripcionProyecto(String descripcionProyecto) {
        this.descripcionProyecto = descripcionProyecto;
    }

    public String getImagenProyecto() {
        return imagenProyecto;
    }

    public void setImagenProyecto(String imagenProyecto) {
        this.imagenProyecto = imagenProyecto;
    }

}
