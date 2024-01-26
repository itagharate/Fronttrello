import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Commentaire {
  id: string;
  contenu: string;
  dateCreation: string;
  idCarte: string;
  utilisateur: string;
  carte: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  commentaires = [];
  constructor(private http: HttpClient) { }

  getComs() {
    return this.http.get("https://trelloprojet.azurewebsites.net/api/Commentaire")
  }

  getCom(id: string) {
    return this.http.get(`https://trelloprojet.azurewebsites.net/api/Commentaire/${id}`)
  }

  getComsbyCardId(idCarte: string) {
    return this.http.get(`https://trelloprojet.azurewebsites.net/api/Commentaire/commentairebyIdCarte/${idCarte}`)
  }

  createCom(commentaire: any) {
    return this.http.post(`https://trelloprojet.azurewebsites.net/api/Commentaire`, commentaire)
  }

  updateCom(commentaire: any) {
    return this.http.put(`https://trelloprojet.azurewebsites.net/api/Commentaire/${commentaire.id}`, commentaire)
  }

  deleteCom(id: string) {
    return this.http.delete(`https://trelloprojet.azurewebsites.net/api/Commentaire/${id}`)
  }
}
