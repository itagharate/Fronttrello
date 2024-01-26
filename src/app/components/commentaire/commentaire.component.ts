import { Component, Input, OnInit } from '@angular/core';
import { Commentaire, CommentaireService } from 'src/app/services/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  @Input()commentaire!: Commentaire;
  commentaires!: Commentaire[];

  constructor(public commentaireService: CommentaireService) { }

  ngOnInit(){
    this.commentaireService.getComs().subscribe((commentaires: any) => {
      this.commentaires = commentaires;
      console.log(commentaires);
    })
  }

}
