import { Component, Input, OnInit } from '@angular/core';
import { Liste, ListeService } from "../../services/liste.service";
import { CarteService, Carte } from "../../services/carte.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {

  listes!: Liste[];
  @Input()liste!:Liste;
  actualList!: Liste;
  cartes!: Carte[];

  
  constructor(
    public listeService: ListeService,
    public carteService: CarteService) { }

    displayCard(liste: Liste) {
      this.actualList = liste
      console.log("show liste")
      console.log(this.liste)
      this.carteService
          .getCartesByListesId(liste.id)
          .subscribe((cartes: any) => {
            this.cartes = cartes;
            console.log(this.cartes)    
          })
    }

  ngOnInit(){
    this.listeService.getListes().subscribe((listes: any) => {
      this.listes = listes;
      console.log(this.listes);
      this.displayCard(this.liste);
    })

  }
}