import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalCertificationService {

  constructor() { }

  public totalActivities = [
    {
      associateId: 651094,
      activityCode: 'DES 100',
      activityName: 'Design Thinking Basics',
      activityType: 'Certification',
      requestId: 'RE0001',
      requestDate: '28/06/2023',
      approveDate: '6/07/2023',
      requestAge: 50,
      status: 'Pending with Academy',
      poc: 'John'
    },
    {
      associateId: 651095,
      activityCode: 'CUT 156',
      activityName: 'Usability Testing',
      activityType: 'Training',
      requestId: 'RE0002',
      requestDate: '28/06/2023',
      requestAge: 60,
      approveDate: '6/07/2023',
      status: 'Rejected',
      poc: 'Vikram'
    },
    {
      associateId: 651096,
      activityCode: 'URM 235',
      activityName: 'User Research Methods',
      activityType: 'Certification',
      requestId: 'RE0003',
      requestDate: '28/06/2023',
      requestAge: 30,
      approveDate: '6/07/2023',
      status: 'Pending with Academy',
      poc: 'Shawn'
    },
    {
      associateId: 651097,
      activityCode: 'UED 159',
      activityName: 'Mobile UX',
      activityType: 'Training',
      requestId: 'RE0004',
      requestDate: '28/06/2023',
      requestAge: 80,
      approveDate: '6/07/2023',
      status: 'Completed',
      poc: 'Mike'
    },
  ];

  getTotalActivities(): any {
    return this.totalActivities;
  }
}
