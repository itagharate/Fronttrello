import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Liste {
  id : string;
  nom: string;
  idProjet: string;
  cartes: string;
  projet: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  listes = [];

  constructor(private http: HttpClient) { }

  getListes() {
    return this.http.get("https://trelloprojet.azurewebsites.net/api/Liste")
  }

  getListe(id: string) {
    return this.http.get(`https://trelloprojet.azurewebsites.net/api/Liste/${id}`)
  }

  getListesByProjectId (idProjet : string)  {
    return this.http.get<Liste[]>(`https://trelloprojet.azurewebsites.net/api/Liste/ListesByProjectId/${idProjet}`)
  }

  createListe(liste: any) {
    return this.http.post(`https://trelloprojet.azurewebsites.net/api/Liste`, liste)
  }

  updateListe(liste: any) {
    return this.http.put(`https://trelloprojet.azurewebsites.net/api/Liste/${liste.id}`, liste)
  }

  deleteListe(id: string) {
    return this.http.delete(`https://trelloprojet.azurewebsites.net/api/Liste/${id}`)
  }
}
