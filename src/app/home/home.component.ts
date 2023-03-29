import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 public alumnos: Alumno[] = [
    new Alumno(1, 'María Isabel Aguilar Jara', 12, new Date('2011-02-15'), 9.52, true),
    new Alumno(2, 'Manuel Eduardo Aguilar Loja', 13, new Date('2010-01-03'), 8.98, true),
    new Alumno(3, 'Mayra Cecilia Alvarado Neira', 12, new Date('2010-08-07'), 5, false),
    new Alumno(4, 'Jessica Lorena Arevalo Lucero', 13, new Date('2009-11-14'), 7, true),
    new Alumno(5, 'Jorge Castillo Barrios', 12, new Date('2011-02-15'), 9, false),
    new Alumno(6, 'Lourdes Gabriela Dominguez Torres', 12, new Date('2011-03-10'), 5, true),
    new Alumno(7, 'Pamela Espinoza Ochoa', 13, new Date('2009-07-21'), 10, true),
    new Alumno(8, 'Patricio Gonzales Cabrera', 14, new Date('2009-01-05'), 8.75, false),
    new Alumno(9, 'Luis Federico Ortega Tapia', 12, new Date('2010-06-02'), 5, true),
    new Alumno(10, 'Benito Álvarez García', 12, new Date('2011-03-03'), 10, true),
 ];
}
