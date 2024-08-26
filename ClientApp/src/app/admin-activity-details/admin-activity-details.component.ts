import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ExternalCertificationService } from '../external-certification.service';

@Component({
  selector: 'app-admin-activity-details',
  templateUrl: './admin-activity-details.component.html',
  styleUrls: ['./admin-activity-details.component.css']
})
export class AdminActivityDetailsComponent {
  totalActivities: any[] = []

  constructor(private externalCertificationService: ExternalCertificationService,
    private data: DataService) { }

  ngOnInit(): void {
    this.totalActivities = this.externalCertificationService.getTotalActivities();
    // this.data.getBreadcrumbDetails("Home", "/", "", "", "", "");
    this.data.getBreadcrumbDetails("My Space", "profile", "External Certifications", "/adminActivityDetails", "", "");

    // this.data.getBreadcrumbDetails("Learning Hub",
    // "library", "Learning Paths", "pathways", "All Learning Paths",
    // "all");
  }

  // Pagination
  public currentTotalActivities: any = [];
  paginationTotalActivities(data: any) {
    this.currentTotalActivities = [...data];
  }
}
