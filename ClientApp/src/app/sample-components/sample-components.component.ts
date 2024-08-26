import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker'
import { IAngularMyDpOptions, IMyDateModel } from '@nodro7/angular-mydatepicker';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-sample-components',
  templateUrl: './sample-components.component.html',
  styleUrls: ['./sample-components.component.css']
})
export class SampleComponentsComponent {
  selectDate: Date | null = null;
  datePickerConfig: Partial<BsDatepickerConfig>;
  @ViewChild('dp', { static: false }) datepicker!: BsDatepickerDirective;

  constructor() {
    this.datePickerConfig = {
      containerClass: 'custom-datepicker',
      dateInputFormat: 'MM/DD/YYYY',
      showWeekNumbers: false,
      adaptivePosition: false,
    };
  }

  ngOnInit(): void {
  }

  tabs: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50];

  editorContent = '';

  editorModules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],    // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['link'],
        // [{ 'align': [] }],
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }]
      ]
    }
  };

  public donutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.raw !== null) {
              label += context.raw.toString();
            }
            return label;
          }
        }
      }
    }
  };

  public donutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public donutChartData: ChartConfiguration['data'] = {
    labels: this.donutChartLabels,
    datasets: [{
      data: [350, 450, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  public donutChartType: ChartType = 'doughnut';

  currentDate = new Date();
  myDpOptions: IAngularMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    dateRange: false,
    firstDayOfWeek: "su",
    markWeekends: { marked: false, color: '' },
    disableSince: {
      year: new Date().getUTCFullYear(), month: new Date().getUTCMonth() + 1, day:
        new Date().getUTCDate() + 1
    }
  };
  completion_date: string = '';

  @ViewChild('scrollbar', { static: false }) scrollbar!: NgScrollbar;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    if (this.scrollbar) {
      this.scrollbar.disabled = true;
    }
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    if (this.scrollbar) {
      this.scrollbar.disabled = false;
    }
    document.body.style.overflow = 'auto';
  }
}
