import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TechnicalsService} from "../../services/technicals.service";


@Component({
  selector: 'app-select-technical',
  templateUrl: './select-technical.component.html',
  styleUrls: ['./select-technical.component.css']
})
export class SelectTechnicalComponent {
  maxRating = 5;
  maxRatingArr:any = Array(this.maxRating).fill(0);
  techs:any = [];

  yea: string = "";
  constructor(private route: ActivatedRoute, private technicalsService:TechnicalsService) {
    this.route.params.subscribe(params => {
      this.yea = params['id'];
    })
  }

  numberFunc(word: string): number{
    return Number(word);
  }
  private getTechnical(){
    let urlId = '?id=' + this.yea;
    this.technicalsService.getById(urlId).subscribe((response:any) => {
      this.techs = response;
    })
  }
  ngOnInit(): void {
    this.getTechnical();
  }
}
