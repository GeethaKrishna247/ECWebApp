import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ClearBreadcrumService } from '../ClearBreadcrumService.service';
import { DataService } from '../data.service';
import { LoadingService } from '../loading.service';
import { SharedDataService } from '../SharedData.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  @ViewChild('MenuListId') MenuListId;
  @ViewChild('searchFocus') searchFocus!: ElementRef<HTMLInputElement>;
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', scrollbarPosition: 'outside' };
  public searchedValue: any = '';
  public CategoryData: any;
  public popularData: any;
  public showsearch: boolean = false;
  public showSearchResult: boolean = false;
  public showPopular: boolean = false;
  public searchingFrom: any;
  public showSearchedValue: boolean = true;
  public response: any;
  public found!: number;
  public liLength: any;
  public searchData: any;
  public isPrimaryNav: boolean = false;
  public isSecondaryNav: boolean = false;
  public selectedSegment: string = "ALL";
  public isClearEnabled: boolean = false;
  public showLoadingIndicator: boolean = false;
  public sortby: string = "Latest";
  public stringErrorMethod: string = "";
  dropmenuChange: boolean = false;
  public showSegmentDropdown: boolean = false;
  menutoBS: boolean = false;
  primaryPage!: string;
  primaryPagename!: string;
  secondaryPage!: string;
  tertiaryPage!: string;
  tertiaryPagename!: string;
  secondaryPagename!: string;
  isSearch: boolean = false;
  isHamburgerClicked: boolean = false;
  isLevel2: boolean = false;
  isLevel3: boolean = false;
  selectedIndex!: number;
  selectedSubIndex!: number;
  //Modified after LMP integration on 06/25/2020 - Start
  public calledScreenName: string = "Home";
  public RecentSearchData: any = [];
  public PopularSearchData: any;
  public LearningObjectTypeData: any;
  // public goal: GoalProgressModel[];
  // public searchDetails: SearchModel[];
  // public PopularData: PopularModel[];
  // public RecentData: PopularModel[];
  public showRecentPopularSearchDetails: boolean = false;
  // public logSearchModel: LogSearchModel;
  public categoryType!: string;
  public isPopularDataAvailable!: boolean; //Added to show/hide the popular data based on the data count 
  public isRecentDataAvailable!: boolean;  //Added to show/hide the recent data based on the data count
  public CorrectedWord: any;
  // public AutoCorrectionData: PopularModel[];
  public associateId!: any;
  public forAssociateLifeMenu: any = [];
  // public searchicon: boolean = this.sharedDataService.searchicon;
  //Modified after LMP integration on 06/25/2020 - End
  insideClickExecuted: boolean = false;

  //Added to load all card related data to populate from DB to show in Card View Detail Page on 07/26/202-Start
  public activityFK: string = "";
  public activityCode: string = "";
  //Added to load all card related data to populate from DB to show in Card View Detail Page on 07/26/202-End
  public exactmatchlist: any = [];
  public commonMenuList: any = [];
  public isExternal: boolean = false;
  public iterator: number = 0;
  dropdownNavMenu = [{ title: "Associate Life", route: "/associatelife", page: "associatelife" },
  { title: "Rewards & Achievements", route: "/gamification/rewards", page: "rewards" },
  //{ title: "Books & Journals", route: "/bnj", page: "books" }, { title: "Videos",
  //route: "/videos", page: "videos" },
  //{ title: "Podcasts", route: "/podcasts", page: "podcasts" },
  //{ title: "Events", route: "/events", page: 'events' },
  //{ title: "Hands on Practice Labs", route: "/handsonpractiselabs", page: "handsonpractiselabs" },
  //{ title: "Assessments", route: "/assessments", page: "Assessments" },
  //{ title: "Bucket-list", route: "/mylearning", page: "mylearning" },
  { title: "Preferences", route: "/preferences", page: "Preferences" }
  ];


  menuData: any = [
   {
     title: "Home"
   },
   {
     title: "Learning Hub",
     subMenu: [
       {
         title: "Pathways",
         subMenu: [
           {
             title: "All Pathways"
           },
           {
             title: "Pathway Themes"
           },
           {
             title: "My Pathways"
           }
         ]
       },
       {
         title: "Trainings"
       },
       {
         title: "Books&Journals"
       },
       {
         title: "Videos"
       },
       {
         title: "Podcasts"
       },
       {
         title: "Borrow a book"
       }
     ]
   },
   {
     title: "Make-an-Impact",
     subMenu: [
       {
         title: "WeConnect",
         link: "/adminActivityDetails",
         isSameTab: false,
       },
       {
         title: "Client Interview Prep",
         link: "/adminActivityDetails",
         isSameTab: false,
       },
       {
         title: "Skill Advisor",
         subMenu: [
           {
             title: "Mentors"
           }
         ]
       }
     ]
   },
   {
    title: "My Space",
    subMenu: [
      {
        title: "Rewards & Achievements",
        link: "/adminActivityDetails",
        isSameTab: false,
      },
      {
        title: "My Learning Insights",
        link: "/adminActivityDetails",
        isSameTab: false,
      },
      {
        title: "External Certifications",
        route: "/adminActivityDetails",
        link: null,
        isSameTab: false,
      },
      {
        title: "SkillUp",
        subMenu: [
          {
            title: "Snapshot",
          },
          {
            title: "Plan Development",
          },
          {
            title: "Goal Fulfillment",
          },
        ]
      },
      {
        title: "My Preferences",
        link: "/adminActivityDetails",
        isSameTab: false,
      },
      {
        title: "Merit Mapper",
        link: null,
        // isSameTab: false,
        route:"/merit-mapper"
      },
      {
       title:"My Favorites",
       link: "/adminActivityDetails",
       isSameTab: false,
      },
      {
        title: "Learning Reels",
        link: "/adminActivityDetails",
        isSameTab: false,
      },
    ]
  },
   {
     title: "Admin Services",
     subMenu: [
       {
         title: "Pathways",
         subMenu: [
           {
             title: "All Pathways"
           }
         ]
       },
       {
         title: "Trainings"
       }
     ]
   }
  ]
  // public menuData: any;
  // public subMenuDetails: SubMenuModel[];
 
 
  menuData1:any = [
    {
      title: "Home",
      id:"home",
      // subMenu:[]
    },
    {
      title: "Learning Hub",
      id:"library",
      subMenu: [
        {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/gamification",
        subMenu: [
          {title:"All Learning Path"},
          {title:"Learning Path Themes"},
          {title:"My Learning Path"},

        ],
        title: "Learning Path",
      },
    ]
    },{
      title: "Get Involved",
      id:"participate",
      subMenu: [
        {
          isDevelopmentPlan: 0,
          isEvaluate: 0,
          isFulfillment: 0,
          isMyTeam: 0,
          isSameTab: false,
          ismobileresponsive: false,
          link: null,
          route: "/adminActivityDetails",
          subMenu: [
            {title:"My Quizzes"},
          ],
          title: "Quizzes",
        },
        {
          isDevelopmentPlan: 0,
          isEvaluate: 0,
          isFulfillment: 0,
          isMyTeam: 0,
          isSameTab: false,
          ismobileresponsive: false,
          link: null,
          route: "/adminActivityDetails",
          subMenu: [
           
          ],
          title: "Cognizant GitLab",
        }
      ]
    },{
      title: "Make-an-Impact",
      id:"collaborate",
      subMenu: [
        {
          isDevelopmentPlan: 0,
          isEvaluate: 0,
          isFulfillment: 0,
          isMyTeam: 0,
          isSameTab: false,
          ismobileresponsive: false,
          link: null,
          route: "/adminActivityDetails",
          subMenu: [
          ],
          title: "WeConnect",
        },
        {
          isDevelopmentPlan: 0,
          isEvaluate: 0,
          isFulfillment: 0,
          isMyTeam: 0,
          isSameTab: false,
          ismobileresponsive: false,
          link: null,
          route: "/merit-mapper",
          subMenu: [
          ],
          title: "Client Interview Prep",
        },
        {
          isDevelopmentPlan: 0,
          isEvaluate: 0,
          isFulfillment: 0,
          isMyTeam: 0,
          isSameTab: false,
          ismobileresponsive: false,
          link: null,
          route: "/merit-mapper",
          subMenu: [
            {title:"Mentors"},
          ],
          title: "Skill Advisor",
        },
      ]
    },
    {
      title: "My Space",
      id:"profile",
      subMenu: [
        {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/gamification",
        subMenu: [
        ],
        title: "Rewards & Achievements",
      },
      {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/merit-mapper",
        subMenu: [
        ],
        title: "My Learning Insights",
      },
      {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: true,
        ismobileresponsive: false,
        link: true,
        route: "/adminActivityDetails",
        subMenu: [
        ],
        title: "External Certifications",
      },
      {
        title: "SkillUp",
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: false,
        route: "",
        subMenu: [
          {
            isDevelopmentPlan: 0,
            isEvaluate: 0,
            isFulfillment: 0,
            isMyTeam: 0,
            isSameTab: true,
            ismobileresponsive: false,
            link: false,
            route: "/merit-mapper",
            subMenu: [
            ],
            title: "Snapshot",
          },
          {
            isDevelopmentPlan: 0,
            isEvaluate: 0,
            isFulfillment: 0,
            isMyTeam: 0,
            isSameTab: true,
            ismobileresponsive: false,
            link: false,
            route: "/merit-mapper",
            subMenu: [
            ],
            title: "Development Plan",
          },
          {
            isDevelopmentPlan: 0,
            isEvaluate: 0,
            isFulfillment: 0,
            isMyTeam: 0,
            isSameTab: true,
            ismobileresponsive: false,
            link: false,
            route: "/merit-mapper",
            subMenu: [
            ],
            title: "Goal Fulfillment",
          },
        ],
       
      },
      {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/merit-mapper",
        subMenu: [
        ],
        title: "My Preferences",
      },
      {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/merit-mapper",
        subMenu: [
        ],
        title: "Merit Mapper",
      },
      {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/merit-mapper",
        subMenu: [
        ],
        title: "My Favorites",
      },
      {
        isDevelopmentPlan: 0,
        isEvaluate: 0,
        isFulfillment: 0,
        isMyTeam: 0,
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/merit-mapper",
        subMenu: [
        ],
        title: "Learning Reels",
      },
    ]
    },
    {
      title: "Admin Services",
      id:"admin",
      // subMenu:[]
    },
  ]
 
 
  constructor(private data: DataService, 
    private breadCrum: ClearBreadcrumService, public router: Router, 
    private appComponent: AppComponent,
    private _elementRef: ElementRef,private loadingService: LoadingService,
    private sharedDataService: SharedDataService) {
    // this.menuData = this.sharedDataService.sharedMenuDetailsData;
  }
  ngOnInit() {
    // this.sharedDataService.frequentlySearched.subscribe((valuesearched) =>{
    //   this.searchedValue = valuesearched;
    // });
    this.loadingService.currentStatus.subscribe(loadingIndicator => this.showLoadingIndicator = loadingIndicator);
    this.associateId = sessionStorage.getItem('sessionAssociateId');
    this.data.primaryPage.subscribe(primaryPage => this.primaryPage = primaryPage);
    this.data.primaryPagename.subscribe(primaryPagename => this.primaryPagename = primaryPagename);
    this.data.secondaryPage.subscribe(secondaryPage => this.secondaryPage = secondaryPage);
    this.data.secondaryPagename.subscribe(secondaryPagename => this.secondaryPagename = secondaryPagename);
    this.data.tertiaryPage.subscribe(tertiaryPage => this.tertiaryPage = tertiaryPage);
    this.data.tertiaryPagename.subscribe(tertiaryPagename => this.tertiaryPagename = tertiaryPagename);
    // this.LoadLearningObjectTypeDetails()
    this.isPrimaryNav = false;
    // this.changeAnimeText();
  }
  // @HostListener('document:click', ['$event'])
  // public onDocumentClick(event: MouseEvent): void {
  //   let $this = this;
  //   const targetElement = event.target as HTMLElement;
  //   if (!targetElement.classList.contains('searchForm') && !targetElement.classList.contains('mls_search_btn_name')
  //     && !targetElement.classList.contains('searchIcon')
  //     && !targetElement.classList.contains('searchTxtBox')
  //     && !targetElement.classList.contains('segmentedSearch')
  //     && !targetElement.classList.contains('clearSearch')
  //     && !targetElement.classList.contains('drpdown-latest') && !targetElement.classList.contains('selectedText') && !targetElement.classList.contains('dropdwnImg') && !targetElement.classList.contains('greenText')) {
  //     this.isSearch = false;
  //   }
  //   if (!targetElement.classList.contains('navIcon') && !targetElement.classList.contains('subMenuTitle')) {
  //     this.isPrimaryNav = false;
  //   }
  //   if (!targetElement.classList.contains('segmentedSearch') &&

  //     !targetElement.classList.contains('dropdwnImg')) {

  //     this.showSegmentDropdown = false;

  //   }
  // }


  @HostListener('click', ['$event'])
  clickInside(event: MouseEvent) {
    //click inside is false for
    // 1.outside nav menu
    // 2. clicked on grey area
    const targetElement = event.target as HTMLElement;

    if (!(targetElement.classList.contains('searchOverlay') || targetElement.classList.contains('searchWrapper') || targetElement.classList.contains('suggestiondropdownDesktop'))) {

      this.insideClickExecuted = true;
    }
  }



  @HostListener('document:click')

  clickOutside() {

    if (this.insideClickExecuted) {

      this.insideClickExecuted = false;

      return;

    }



    if (!this.insideClickExecuted) {

      this.isSearch = false;



    }

  }

  public clearSecondaryLink() {
    // this.sharedDataService.flagForSlider = false;
    this.secondaryPage = '';
    this.secondaryPagename = '';
    // this.ResetCardViewRelatedData();
    // this.Reloadallpostforfeed();
    // this.ResetDataList();
    this.isSearch = false;
  }
  
  public clearTertiaryLink() {
    this.tertiaryPage = '';
    this.tertiaryPagename = '';
  }

  public primaryNav(event, navPopOver) {
    debugger;
    this.opnsbm = true;
    this.MenuListId
    this.isPrimaryNav = !this.isPrimaryNav;
    this.GetSubMenuDetails(this.primaryPage, navPopOver);
    if (this.MenuListId.nativeElement.querySelectorAll('.drpdown-latest .subMenuTitle.active')) {
      if (this.MenuListId.nativeElement.querySelectorAll('.drpdown-latest .subMenuTitle.active').length > 0) {
        this.MenuListId.nativeElement.querySelectorAll('.drpdown-latest .subMenuTitle.active')[0].
          classList.remove('active')
      }
    }
  }
secMenuList :any= [];
  public secondaryNavElements(event, navPopOver) {
    this.opntertiarysbm = true;
    debugger;
    if(this.tertiaryPagename != null && this.tertiaryPagename != ""){
      let primaryChild = this.menuData.filter(ele =>{ return ele.title == this.primaryPage})[0].subMenu;
      let secondaryChild = primaryChild.filter(ele =>{ return ele.title == this.secondaryPage})[0].subMenu;
      this.secMenuList = [...secondaryChild];
      if(this.secMenuList.length == 0){
        // navPopOver.popover.hide();
      }
    }else{
      // navPopOver.popover.hide();
    }

debugger;

  }

  public secondaryNav() {
    this.isSecondaryNav = !this.isSecondaryNav;
  }

  public addBreadcrum(pageName, pageLink) {
  }

  changeToBS() {
    this.menutoBS = !this.menutoBS;
  }

  
  public HideNavPopOver(navPopOver) {
    // navPopOver.popover.toggle();
    // navPopOver.hide();
    this.isPrimaryNav = !this.isPrimaryNav;
  }

  public GetSubMenuDetails(MenuTitle, navPopOver) {
    this.commonMenuList = [];
    // if (this.sharedDataService.sharedAssociateLifeEventData != null) {
    //   this.forAssociateLifeMenu = this.sharedDataService.sharedAssociateLifeEventData
    // }
    // else {
    //   this.forAssociateLifeMenu = [];
    // }
    for (let menu of this.menuData) {
      if (menu.title == MenuTitle) {
        if (menu.subMenu != null) {
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Associate Life' && (this.forAssociateLifeMenu.length == 0 ||
              this.sharedDataService.sharedMLSPageAccess == 0)) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'My Learning Insights' &&
              this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
           
            if (menu.subMenu[i].title == 'Learning Reels' &&
              this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'My Preferences' && this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Learning Paths' && this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Client Interview Prep' &&
              this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Reels-Create Video' &&
              this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Learning Shared Services' &&
              this.sharedDataService.sharedSharedServices == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Learning Solutions' &&
              this.sharedDataService.sharedLearningServices == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'MLS Management' && this.sharedDataService.mlsAdmin == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'EC – Admin Access' && this.sharedDataService.ecAdmin == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          //for (let i = 0; i < menu.subMenu.length; i++) {
          //  if (menu.subMenu[i].title == 'My Favorites' && this.sharedDataService.sharedMLSPageAccess == 0) {
          //    //menu.subMenu.splice(i, 1);
          //  }
          //}
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'WeConnect' && this.sharedDataService.sharedMLSPageAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Books and Journals' && this.sharedDataService.sharedBookAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'SkillUp Admin Management' && this.sharedDataService.skillUpAdminManagementAccess == 0) {
              //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'External Certifications' && this.sharedDataService.sharedBookAccess == 0) {
              // //menu.subMenu.splice(i, 1);
            }
          }
          for (let i = 0; i < menu.subMenu.length; i++) {
            if (menu.subMenu[i].title == 'Merit Mapper' && this.sharedDataService.skillUpAdminManagementAccess == 0) {
              // //menu.subMenu.splice(i, 1);
            }
          }
          // for (let i = 0; i < menu.subMenu.length; i++) {
          //   if (menu.subMenu[i].title == 'SkillUp') {
          //     if (this.sharedDataService.goalProgressDetailData != null) {
          //       this.goal = this.sharedDataService.goalProgressDetailData;
          //       if (this.goal[0].goalExempted == 1) {
          //         //menu.subMenu.splice(i, 1); //To splice skillup menu when Associate excempted to take goals
          //       }
          //     }
          //     if (this.sharedDataService.sharedSkillupMenuAccess == 0 || this.sharedDataService.goalProgressDetailData == null) {
          //       if (menu.subMenu[i] && menu.subMenu[i].title == 'SkillUp') {
          //         menu.subMenu.splice(i, 1); //To splice skillup menu when (this.sharedDataService.sharedSkillupMenuAccess == 0 AND this.sharedDataService.goalProgressDetailData == null)
          //       }
          //     }
          //   }
          // }
          // for (let i = 0; i < menu.subMenu.length; i++) {
          //   if (menu.subMenu[i].title == 'Evaluate') {
          //     if (this.sharedDataService.sharedSubMenu.length > 0) {
          //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
          //       if (this.subMenuDetails[0].isEvaluate == 0) {
          //         menu.subMenu.splice(i, 1);
          //       }
          //     }
          //   }
          // }
          // for (let i = 0; i < menu.subMenu.length; i++) {
          //   if (menu.subMenu[i].title == 'My Team') {
          //     if (this.sharedDataService.sharedSubMenu.length > 0) {
          //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
          //       if (this.subMenuDetails[0].isMyTeam == 0) {
          //         menu.subMenu.splice(i, 1);
          //       }
          //     }
          //     if (menu.subMenu[i] && menu.subMenu[i].title == 'My Team') {
          //       let childMenu = menu.subMenu[i].subMenu
          //       for (let j = 0; j < childMenu.length; j++) {
          //         if (childMenu[j].title == 'SkillUp My Team' && this.subMenuDetails[0].isMyTeam == 0) {
          //           childMenu.splice(j, 1);
          //         }
          //       }
          //       if (childMenu.length == 0) {
          //         menu.subMenu.splice(i, 1);
          //       }
          //     }
          //   }
          // }
          // for (let i = 0; i < menu.subMenu.length; i++) {
          //   if (menu.subMenu[i].subMenu != null) {
          //     for (let j = 0; j < menu.subMenu[i].subMenu.length; j++) {
          //       if (menu.subMenu[i].subMenu[j].title == 'Development Plan') {
          //         if (this.sharedDataService.sharedSubMenu.length > 0) {
          //           this.subMenuDetails = this.sharedDataService.sharedSubMenu;
          //           if (this.subMenuDetails[0].isDevelopmentPlan == 0) {
          //             menu.subMenu[i].subMenu.splice(j, 1);
          //           }
          //         }
          //       }
          //       if (menu.subMenu[i].subMenu[j].title == 'Goal Fulfillment') {
          //         if (this.sharedDataService.sharedSubMenu.length > 0) {
          //           this.subMenuDetails = this.sharedDataService.sharedSubMenu;
          //           if (this.subMenuDetails[0].isFulfillment == 0) {
          //             menu.subMenu[i].subMenu.splice(j, 1);
          //           }
          //         }
          //       }
          //     }
          //   }
          // }
          this.commonMenuList = menu.subMenu;
        }
      }
    }
    if (this.commonMenuList.length == 0) {
      this.isPrimaryNav = false;
      // navPopOver.popover.hide();
    }
  }
  nav1Popover:any;
  skill1Popover:any;
  tertiaryLinkPopover:any;

  public NavigateToComponent(componentRouter, navPopOver) {
    // this.stringErrorMethod = '';
    // navPopOver.popover.toggle();
    this.isPrimaryNav = !this.isPrimaryNav
    this.stringErrorMethod = '';
    if (componentRouter != null && componentRouter != ''){
       if (componentRouter.indexOf("adminActivityDetails") > -1) {
        this.router.navigate([componentRouter]);
      }
      else if (componentRouter.indexOf("merit-mapper") > -1) {
        this.router.navigate([componentRouter]);
      }
    }

  }
  
  public ResetCoursesDataProperties() {
    // this.sharedDataService.complianceCoursesData = null;
    // this.sharedDataService.otherAssignedCoursesData = null;
    // this.sharedDataService.developmentPlanCoursesData = null;
    // this.sharedDataService.recommendedByManagerCourseData = null;
    // this.sharedDataService.whatToLearnNextCourseData = null;
    // this.sharedDataService.LearningHistoryData = null;
  }
  opnsbm:boolean = false;
  opntertiarysbm:boolean = false;
  public OpenSubMenu(event) {
    this.opntertiarysbm = true;
    if (event.target.parentElement.parentElement.getElementsByClassName('active') &&
      event.target.parentElement.parentElement.getElementsByClassName('active').length > 0) {
      event.target.parentElement.parentElement.getElementsByClassName('active')[0].classList.remove('active')
    }
    if (event.target.classList.contains("active") && event.target.parentElement.parentElement.classList.contains("level2")) {
      event.target.classList.remove("active");
    }
    else if (event.target.parentElement.parentElement.classList.contains("level2")) {
      event.target.classList.add("active");
    }
  }

  public SelectChildPopOver(event, listPopover, parentPopover) {
    this.isPrimaryNav = false;
    // listPopover.popover.toggle();
    // parentPopover.popover.hide();
    event.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement.firstElementChild.classList.remove("active");
  }

  addclass(element) {
    element.target.nextElementSibling.classList.add("show");
  }

  public selectPathway(event, pathwayName) {
    event.target.parentElement.parentElement.parentElement.parentElement.classList.remove('show');
  }

  selectSort(event, sortType, listPopover) {
    //listPopover.hide();
    this.selectedSegment = sortType;
  }


}
