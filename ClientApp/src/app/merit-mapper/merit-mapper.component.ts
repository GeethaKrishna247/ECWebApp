import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import { LoadingService } from '../loading.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-merit-mapper',
  templateUrl: './merit-mapper.component.html',
  styleUrls: ['./merit-mapper.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeritMapperComponent implements OnInit {

  constructor(public Appcomponent: AppComponent, private shareStats: DataService, 
    private loadingService: LoadingService) { }
  search:any=""
  // pointToBeNoted: string =  "*Profile report will be refreshed after 2 hours."
  pointToBeNoted: string = "*If you are unable to find the report, it is still being refreshed. You will receive a mail once the report is available.";
 
  public scrollbarOptions = { 
    axis: "y",
    theme: "minimal-dark",
    scrollbarPosition: "outside"
  };

  @ViewChild("topicDetailPopup") topicDetailPopup!: ModalComponent;
  activityCode: string = "";
  activityName: string = "";
  DateOfCompletion: any = "";
  mainIndex: any = 0;
  attemptIndex: any = 0;
  topicIndex: any = 0;
  dummyArr:any = [];
  courseArr:any = [];
  ngOnInit() {
    this.loadingService.changeStatus(true);

    this.shareStats.getBreadcrumbDetails("My Space", "profile", "Merit Mapper", "/merit-mapper", "", "");
    // this.courseArr = [];
    // this.loadingService.changeStatus(false);
    this.copyCourseArray();
  }
  copyCourseArray(){
    // added timeout for showing loading text 
    setTimeout(() => {
      this.courseArr = this.courseArrCopy;
      this.loadingService.changeStatus(false);
    }, 1000)
   
  }
  courseArrCopy: any = [
    {
      courseName:"ADM - Angular 11 - Knowledge Based Assessment [201 - Intermediate]ADM - Angular 11 - Knowledge Based Assessment [201 - Intermediate]",
      courseID: "ATHET160014",isToggle : false,isView:true, isdownload:false,
      overallscore:"70",
      attempts:[
        {no:2,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"95",
        topicDetails:[
          {name:"Angular - Intro", desc: "Angular - Intro" ,score: "80"},
          {name:"SetUp", desc: "SetUp" ,score: "0"},
          {name:"Syntax", desc: "Syntax" ,score: "100"},
          {name:"Bootcamp", desc: "Bootcamp" ,score: "70"},
          {name:"Bonus Lectures", desc: "Bonus Lectures" ,score: "100"},

        ]},
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:"40",
        topicDetails:[
          {name:"Angular - Intro", desc: "Angular - Intro" ,score: "80"},
          {name:"SetUp", desc: "SetUp" ,score: "0"},
          {name:"Syntax", desc: "Syntax" ,score: "100"},
          {name:"Bootcamp", desc: "Bootcamp" ,score: "70"},
          {name:"Bonus Lectures", desc: "Bonus Lectures" ,score: "100"},
        ]},
      ]
    },
    {
      courseName:"PROJECT MANAGEMENT - KNOWLEDGE BASED ASSESSMENT [101-Basics]",
      courseID: "APMSM001",isToggle : false,isView:true, isdownload:false,
      overallscore:"90",
      attempts:[
        {no:2,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"90",
        topicDetails:[
          {name:"Project Mngt Basics2b", desc: "Project Mngt Basics" ,score: "80"},
          {name:"Project Mngt Reviews", desc: "Project Mngt Reviews" ,score: "0"},
          {name:"Risk Mngt", desc: "Risk Mngt" ,score: "70"},
          {name:"Status & performance Reporting", desc: "Status & performance Reporting" ,score: "100"},
  
        ]},
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:60,
        topicDetails:[
          {name:"Project Mngt Basics2a", desc: "Project Mngt Basics" ,score: "80"},
          {name:"Project Mngt Reviews", desc: "Project Mngt Reviews" ,score: "0"},
          {name:"Risk Mngt", desc: "Risk Mngt" ,score: "70"},
          {name:"Status & performance Reporting", desc: "Status & performance Reporting" ,score: "100"},
  
        ]},
      ]
    },{
      courseName:"HtmlCssJavascript Conftidence Based Assessment [201 - INTERMEDIATE]",
      courseID: "ATHCH171632_NP",isToggle : false,isView:true, isdownload:false,
      overallscore:"85",
      attempts:[
        {no:1,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"75",
        topicDetails:[
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
          {name:"Javascript JavascriptJavascriptJavascript Javascript Javascript ", desc: "Javascript" ,score: "74"},
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
          {name:"Javascript JavascriptJavascriptJavascript Javascript Javascript ", desc: "Javascript" ,score: "74"},
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
          {name:"Javascript JavascriptJavascriptJavascript Javascript Javascript ", desc: "Javascript" ,score: "74"},

        ]},
      ]
    },{
      courseName:"CDB HTML and CSS - On The Job Training",
      courseID: "ATHDW213439",isToggle : false,isView:false, isdownload:true,
      overallscore:"80",
      attempts:[
        {no:1,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"85",
        topicDetails:[
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
        ]},
      ]
    },{
      courseName:"CSS - Skill Based Assessment",
      courseID: "27fc5a80-4d76-4091-838b-394e87585066_PL1 27fc5a80-4d76-4091-838b-394e87585066_PL1",isToggle : false,isView:true, isdownload:true,
      overallscore:"80",
      attempts:[
        {no:2,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"90",
      topicDetails:[
        {name:"CSS - Intro", desc: "CSS - Intro" ,score: "94"},
        {name:"CSS3", desc: "CSS3" ,score: "94"},
        {name:"SASS", desc: "SASS" ,score: "94"},

      ]
    },
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:"60",
        topicDetails:[
        {name:"CSS - Intro", desc: "CSS - Intro" ,score: "94"},
        {name:"CSS3", desc: "CSS3" ,score: "94"},
        {name:"SASS", desc: "SASS" ,score: "94"},
        ]},
      ]
    },{
      courseName:"Angular 9 - Confidence Based Assessment [101 - BASICS]",
      courseID: "ATHNG180015",isToggle : false,isView:true, isdownload:false,
      overallscore:"60",
      attempts:[
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:"90",
        topicDetails:[
          {name:"Angular - Intro", desc: "Angular - Intro" ,score: "80"},
          {name:"SetUp", desc: "SetUp" ,score: "0"},
          {name:"Bootcamp", desc: "Bootcamp" ,score: "70"},
          {name:"Bonus Lectures", desc: "Bonus Lectures" ,score: "100"},
  
        ]},
      ]
    },
{
      courseName:"CSS - [201-Intermediate]",
      courseID: "27fc5a80-4d76-4091-838b-394e87585066_PL2",isToggle : false,isView:true, isdownload:false,
      overallscore:"80",
      attempts:[
        {no:2,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"90",
      topicDetails:[
        {name:"CSS - Intro", desc: "CSS - Intro" ,score: "94"},
        {name:"CSS3", desc: "CSS3" ,score: "94"},
        {name:"SASS", desc: "SASS" ,score: "94"},

      ]
    },
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:"70",
        topicDetails:[
        {name:"CSS - Intro", desc: "CSS - Intro" ,score: "94"},
        {name:"CSS3", desc: "CSS3" ,score: "94"},
        {name:"SASS", desc: "SASS" ,score: "94"},
        ]},
      ]
    },{
      courseName:"PROJECT MANAGEMENT - KNOWLEDGE BASED ASSESSMENT [201- Intermediate]",
      courseID: "APMSM001",isToggle : false,isView:true, isdownload:false,
      overallscore:"90",
      attempts:[
        {no:2,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"90",
        topicDetails:[
          {name:"Project Mngt Basics2b", desc: "Project Mngt Basics" ,score: "80"},
          {name:"Project Mngt Reviews", desc: "Project Mngt Reviews" ,score: "0"},
          {name:"Risk Mngt", desc: "Risk Mngt" ,score: "70"},
          {name:"Status & performance Reporting", desc: "Status & performance Reporting" ,score: "100"},
  
        ]},
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:60,
        topicDetails:[
          {name:"Project Mngt Basics2a", desc: "Project Mngt Basics" ,score: "80"},
          {name:"Project Mngt Reviews", desc: "Project Mngt Reviews" ,score: "0"},
          {name:"Risk Mngt", desc: "Risk Mngt" ,score: "70"},
          {name:"Status & performance Reporting", desc: "Status & performance Reporting" ,score: "100"},
  
        ]},
      ]
    },{
      courseName:"HtmlCssJavascript Conftidence Based Assessment [101 - BASICS]",
      courseID: "ATHCH171632_NP",isToggle : false,isView:true, isdownload:false,
      overallscore:"85",
      attempts:[
        {no:1,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"75",
        topicDetails:[
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
          {name:"Javascript JavascriptJavascriptJavascript Javascript Javascript ", desc: "Javascript" ,score: "74"},
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
          {name:"Javascript JavascriptJavascriptJavascript Javascript Javascript ", desc: "Javascript" ,score: "74"},
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
          {name:"Javascript JavascriptJavascriptJavascript Javascript Javascript ", desc: "Javascript" ,score: "74"},

        ]},
      ]
    },{
      courseName:"CDB HTML and CSS - Knowledge Based Assessment [301 - Advanced]",
      courseID: "ATHDW213439",isToggle : false,isView:true, isdownload:false,
      overallscore:"80",
      attempts:[
        {no:1,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"85",
        topicDetails:[
          {name:"HTML", desc: "HTML" ,score: "50"},
          {name:"CSS", desc: "CSS" ,score: "94"},
        ]},
      ]
    },{
      courseName:"ADM - Angular 11 - Knowledge Based Assessment [101 - Basics]",
      courseID: "ATHET160014",isToggle : false,isView:true, isdownload:false,
      overallscore:"70",
      attempts:[
        {no:2,DOE:"06/14/2023", DOC:"07/14/2023",isVisible:false, score:"95",
        topicDetails:[
          {name:"Angular - Intro", desc: "Angular - Intro" ,score: "80"},
          {name:"SetUp", desc: "SetUp" ,score: "0"},
          {name:"Syntax", desc: "Syntax" ,score: "100"},
          {name:"Bootcamp", desc: "Bootcamp" ,score: "70"},
          {name:"Bonus Lectures", desc: "Bonus Lectures" ,score: "100"},

        ]},
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:"40",
        topicDetails:[
          {name:"Angular - Intro", desc: "Angular - Intro" ,score: "80"},
          {name:"SetUp", desc: "SetUp" ,score: "0"},
          {name:"Syntax", desc: "Syntax" ,score: "100"},
          {name:"Bootcamp", desc: "Bootcamp" ,score: "70"},
          {name:"Bonus Lectures", desc: "Bonus Lectures" ,score: "100"},
        ]},
      ]
    },{
      courseName:"Angular 9 - Confidence Based Assessment [301 - ADVANCED]",
      courseID: "ATHNG180015",isToggle : false,isView:true, isdownload:false,
      overallscore:"60",
      attempts:[
        {no:1,DOE:"06/14/2023", DOC:"06/14/2023",isVisible:false, score:"90",
        topicDetails:[
          {name:"Angular - Intro", desc: "Angular - Intro" ,score: "80"},
          {name:"SetUp", desc: "SetUp" ,score: "0"},
          {name:"Bootcamp", desc: "Bootcamp" ,score: "70"},
          {name:"Bonus Lectures", desc: "Bonus Lectures" ,score: "100"},
  
        ]},
      ]
    },
  ]



  overallScore:any="";
  viewTopicDetails(cid,cname,score, attmptarray, index){
    this.activityCode = cid;
    this.activityName = cname;
    this.dummyArr = attmptarray[index].topicDetails;
    this.DateOfCompletion = attmptarray[index].DOC;
    this.overallScore = score;
    this.topicDetailPopup.show();
    this.Appcomponent.ReinitScrollBar(false);
  }
  CurrentPageData:any = [
    
  ];
  paginationResultUpdated(data) {
    this.CurrentPageData = [...data];
  }

  courseIndex: number = 0;
  emitCourseIndex(index){
    this.courseIndex = index;
  }
  nodata:string="No matching reports found";
  filterReports(searchTerm) {
    let initialArr = this.CurrentPageData;
    if(this.search.length>0 && searchTerm  && this.search && this.search!=''){
      let copyReports =  this.courseArr.filter(course =>
        course.courseName.toLowerCase().includes(this.search.toLowerCase()) ||
        course.courseID.toLowerCase().includes(this.search.toLowerCase())
      );
      // this.CurrentPageData = copyReports;
      this.courseArrCopy = copyReports;
      console.log(copyReports.length);
    this.paginationResultUpdated(copyReports.slice(0,10));

    }
    
    else{
    
    let slicedArrayBasedOnItemsPerPage = this.courseArrCopy.slice(0,10);
    this.paginationResultUpdated(slicedArrayBasedOnItemsPerPage);
    }
    }

    closesearch(){
    let slicedArrayBasedOnItemsPerPage = this.courseArr;
    this.paginationResultUpdated(slicedArrayBasedOnItemsPerPage);
    this.CurrentPageData = slicedArrayBasedOnItemsPerPage;
    this.courseArrCopy = this.CurrentPageData;
    
    this.search = '';
    // this.filterReports();
    }
}
