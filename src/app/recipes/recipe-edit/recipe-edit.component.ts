import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
        this.editMode = params['id']!=null;
        this.id= +params['id'];        
    });
  }

}
