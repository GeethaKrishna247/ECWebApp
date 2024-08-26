import { Component, OnInit } from '@angular/core';
import { ExternalCertificationService } from '../external-certification.service';

@Component({
  selector: 'app-creator-activity-details',
  templateUrl: './creator-activity-details.component.html',
  styleUrls: ['./creator-activity-details.component.css']
})
export class CreatorActivityDetailsComponent implements OnInit {
  totalActivities: any[] = []

  constructor(private externalCertificationService: ExternalCertificationService) { }

  ngOnInit(): void {
    this.totalActivities = this.externalCertificationService.getTotalActivities();
  }

  // Pagination
  public currentTotalActivities: any = [];
  paginationTotalActivities(data: any) {
    this.currentTotalActivities = [...data];
  }


}
