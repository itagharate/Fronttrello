import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Carte {
  id : string;
  titre: string;
  description: string;
  dateCreation: string;
  idListe: string;
  commentaires: string;
  liste: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  cartes = [];
  constructor(private http: HttpClient) { }

  getCartes() {
    return this.http.get("https://trelloprojet.azurewebsites.net/api/Carte")
  }

  getCarte(id: string) {
    return this.http.get(`https://trelloprojet.azurewebsites.net/api/Carte/${id}`)
  }

  getCartesByListesId(idListe: string) {
    return this.http.get(`https://trelloprojet.azurewebsites.net/api/Carte/carteesByListeId/${idListe}`)
  }

  createCarte(carte: any) {
    return this.http.post(`https://trelloprojet.azurewebsites.net/api/Carte`, carte)
  }

  updateCarte(carte: any) {
    return this.http.put(`https://trelloprojet.azurewebsites.net/api/Carte/${carte.id}`, carte)
  }

  deleteCarte(id: string) {
    return this.http.delete(`https://trelloprojet.azurewebsites.net/api/Carte/${id}`)
  }
}