import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Heroe, HotsService } from '../../services/hots-service.service';
import {MzCollapsibleModule } from 'ng2-materialize';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  private heroe:Heroe
  private error:boolean

  constructor(private activatedRoute:ActivatedRoute,private _hotsService:HotsService) {
    this.activatedRoute.params.subscribe(params=>{
      this._hotsService.getOneHeroe(params['Nombre'])
      .then((h:Heroe)=>{
        this.heroe=h;
        this.error=false
        setTimeout(function(){
          $(".collapsible").collapsible()
          console.log($(".collapsible")
        },500)
      })
      .catch(e=>{
        this.error=true
      })
    })
  }

  ngOnInit() {
  }

}
