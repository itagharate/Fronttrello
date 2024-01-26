import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Projet {
  id : string;
  nom: string;
  description: string;
  dateCreation: string;
  liste: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  projets = [];

  constructor(private http: HttpClient) {}

  getProjets() {
    return this.http.get<Projet[]>("https://trelloprojet.azurewebsites.net/api/Projet");
  }

  getProjet(id: string) {
    return this.http.get(`https://trelloprojet.azurewebsites.net/api/Projet/${id}`)
  }

  createProjet(projet: any) {
    return this.http.post(`https://trelloprojet.azurewebsites.net/api/Projet`, projet)
  }

  updateProjet(projet: any) {
    return this.http.put(`https://trelloprojet.azurewebsites.net/api/Projet/${projet.id}`, projet)
  }

  deleteProjet(id: string) {
    return this.http.delete(`https://trelloprojet.azurewebsites.net/api/Projet/${id}`)
  }
}
