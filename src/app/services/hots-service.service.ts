import { Injectable } from '@angular/core';

@Injectable()
export class HotsService {
  constructor() {
    console.log("Corriendo servicio de Hots")
  }

  getAllHeroes() {
    return new Promise((resolve, reject) => {
      fetch('http://hotsapi.net/api/v1/heroes')
        .then(r => r.json())
        .then(data => {
          let heroes:Heroe[]=data.map(h => {
            let habilidades: Habilidad[] = []
            let heroe: Heroe
            h.abilities.forEach(a => {
              habilidades.push({
                Nombre: a.title,
                Descripcion: a.description
              })
            });
            return heroe = {
              Nombre: h.name,
              Rol: h.role,
              Tipo: h.type,
              Icono: h.icon_url['92x93'],
              Habilidades: habilidades,
              FechaCreacion:new Date(h.release_date)
            }
          })
          resolve(heroes)
        })
        .catch(e => reject([]))
    })
  }

  getOneHeroe(name:string){
    return new Promise((resolve, reject) => {
      fetch(`http://hotsapi.net/api/v1/heroes/${name}`)
        .then(r => r.json())
        .then(data => {          
            let habilidades: Habilidad[] = []            
            data.abilities.forEach(a => {
              habilidades.push({
                Nombre: a.title,
                Descripcion: a.description
              })
            });
            let heroe:Heroe = {
              Nombre: data.name,
              Rol: data.role,
              Tipo: data.type,
              Icono: data.icon_url['92x93'],
              Habilidades: habilidades,
              FechaCreacion:new Date(data.release_date)
            }
            resolve(heroe)
          })        
        .catch(e => reject(e))
    })
  }
}


export interface Heroe {
  Nombre: string;
  Rol: String;
  Tipo: string;
  Icono: string;
  FechaCreacion:Date;
  Habilidades: Habilidad[];
}

export interface Habilidad {
  Nombre: String;
  Descripcion: String;
}
