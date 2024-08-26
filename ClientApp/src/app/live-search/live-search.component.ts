import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SharedDataService } from '../SharedData.service';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent implements OnInit {
  // menuData:any=[];
  // menuData:any=[{subMenu:[]}]
  menuData:any = [
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
        isSameTab: false,
        ismobileresponsive: false,
        link: null,
        route: "/adminActivityDetails",
        subMenu: [
        ],
        title: "External Certifications",
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
            title: "Snapshot",
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
            title: "Development Plan",
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
            title: "Goal Fulfillment",
          },
        ],
        title: "SkillUp",
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
 
  constructor(private _eref: ElementRef, private data: DataService,
     private router: Router, private sharedDataService: SharedDataService){}
  ngOnInit(){

   
    // this.menuData[4].subMenu[1] = {
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/gamification",
    //   subMenu: [],
    //   title: "Rewards & Achievements",
    // };
  
    // this.menuData[2].subMenu.push({
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/challenges",
    //   subMenu: [],
    //   title: "Challenges"
    // });
  
    // this.menuData[1].subMenu.push({
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/browse-learnings",
    //   subMenu: [],
    //   title: "Browse Learnings"
    // });
  
    // this.menuData[3].subMenu[2] = {
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/skill-advisor",
    //   subMenu: [],
    //   title: "Skill Advisor"
    // };
    // this.menuData[2].subMenu.push({
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/assessments",
    //   subMenu: [],
    //   title: "Assessments"
    // });
  
    // this.menuData[4].subMenu.push({
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/performanceAnalytics",
    //   subMenu: [],
    //   title: "Performance Analytics"
    // });
    // this.menuData[2].subMenu.push({
    //   isDevelopmentPlan: 0,
    //   isEvaluate: 0,
    //   isFulfillment: 0,
    //   isMyTeam: 0,
    //   isSameTab: false,
    //   ismobileresponsive: false,
    //   link: null,
    //   route: "/hackathon",
    //   subMenu: [],
    //   title: "Hackathons & Stretch Assignments"
    // });
  }
 
  isHamburgerClicked: boolean = false;
  isLevel2: boolean = false;
  isLevel3: boolean = false;
  selectedIndex!: any;
  selectedSubIndex!: any;
  showcontent = '';
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    let $this = this;
    const targetElement = event.target as HTMLElement;
    if (!targetElement.classList.contains('menuItem') && !targetElement.classList.contains('hamburger-icon')) {
      this.isHamburgerClicked = false;
    }
  }
  onClick(event) {
    if (this.isHamburgerClicked) {
      if (!this._eref.nativeElement.getElementsByClassName('level1')[0].classList.contains(event.target)) {
        this.isHamburgerClicked = false;
      }
    }
  }

  showMenu(element) {
    this.selectedIndex = null;
    this.selectedSubIndex = null;
    this.isHamburgerClicked = !this.isHamburgerClicked;
  
  }

  hideMenu(subMenu) {
    if (subMenu) {
      this.isHamburgerClicked = false;
    }
  }

  closeMenu() {
    this.isHamburgerClicked = false;
  } public alertViewAll: boolean = false;
  public approvalViewAll: boolean = false;
  // public subMenuDetails!: SubMenuModel[];
  public MLSAccess: number = 1;
  public isMLSAccess: boolean = true;
  public isAlertNotifications: any = 0;
  public forAssociateLifeMenu: any = [];

  showSubmenu(element, level, index, subMenu) {

    if (subMenu && subMenu.length > 0) {

      if (level === 'level2') {
        this.isHamburgerClicked = true;
        this.selectedIndex = index;
        this.selectedSubIndex = -1;
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Associate Life' && (this.forAssociateLifeMenu.length == 0 || this.MLSAccess == 0)) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'My Learning Insights' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'My Preferences' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Learning Reels' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        //for (let i = 0; i < subMenu.length; i++) {
        //  if (subMenu[i].title == 'My Favorites' && this.MLSAccess == 0) {
        //    subMenu.splice(i, 1);
        //  }
        //}
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'WeConnect' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Learning Paths' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Client Interview Prep' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Rewards & Achievements' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'SkillUp') {
        //     if (this.sharedDataService.goalProgressDetailData != null) {
        //       this.goal = this.sharedDataService.goalProgressDetailData;
        //       if (this.goal[0].goalExempted == 1) {
        //         subMenu.splice(i, 1); //To splice skillup menu when Associate excempted to take goals
        //       }
        //     }
        //     if (this.sharedDataService.sharedSkillupMenuAccess == 0 ||
        //       this.sharedDataService.goalProgressDetailData == null) {
        //       if (subMenu[i] && subMenu[i].title == 'SkillUp') {
        //         subMenu.splice(i, 1); //To splice skillup menu when (this.sharedDataService.sharedSkillupMenuAccess == 0 AND this.sharedDataService.goalProgressDetailData == null)
        //       }
        //     }
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Evaluate') {
        //     if (this.sharedDataService.sharedSubMenu.length > 0) {
        //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
        //       if (this.subMenuDetails[0].isEvaluate == 0) {
        //         subMenu.splice(i, 1);
        //       }
        //     }
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Learning Shared Services' && this.sharedDataService.sharedSharedServices == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Learning Solutions' && this.sharedDataService.sharedLearningServices == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'MLS Management' && this.sharedDataService.mlsAdmin == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'My Team') {
        //     if (this.sharedDataService.sharedSubMenu.length > 0) {
        //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
        //       if (this.subMenuDetails[0].isMyTeam == 0) {
        //         console.log('My Team1' + subMenu[i].subMenu.length)
        //         console.log(subMenu[i].subMenu[0].title)
        //         if (subMenu[i].subMenu.length <= 1) {
        //           //console.log('My Team title1' + subMenu[i].subMenu.title)
        //           if (subMenu[i].subMenu[0].title != 'Team Insights')
        //               subMenu.splice(i, 1);
        //         }
        //       }
        //     }
        //     if (subMenu[i] && subMenu[i].title == 'My Team') {
        //       let childMenu = subMenu[i].subMenu
        //       for (let j = 0; j < childMenu.length; j++) {
        //         if (childMenu[j].title == 'SkillUp My Team' && this.subMenuDetails[0].isMyTeam == 0) {
        //           childMenu.splice(j, 1);
        //         }
        //       }
        //       if (childMenu.length == 0) {
        //         subMenu.splice(i, 1);
        //       }
        //     }
        //   }
        // }
      }
      else if (level === 'level3') {
        this.isHamburgerClicked = true;
        this.selectedSubIndex = index;
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Development Plan') {
        //     if (this.sharedDataService.sharedSubMenu.length > 0) {
        //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
        //       if (this.subMenuDetails[0].isDevelopmentPlan == 0) {
        //         subMenu.splice(i, 1);
        //       }
        //     }
        //   }
        //   if (subMenu[i].title == 'Goal Fulfillment') {
        //     if (this.sharedDataService.sharedSubMenu.length > 0) {
        //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
        //       if (this.subMenuDetails[0].isFulfillment == 0) {
        //         subMenu.splice(i, 1);
        //       }
        //     }
        //   }
        // }
      }
      else if (level === 'level4') {
        this.isHamburgerClicked = false;
        this.selectedSubIndex = index;
      }
    }
    else {
      this.isHamburgerClicked = false;
      if (index == 0 && level === 'level2') {
        this.isHamburgerClicked = false;
        this.data.getBreadcrumbDetails('Home', 'home', "", "", "", "");
        // this.LoadDashBoard();
      }
    }
  }
  public LoadDashBoard() {
    // this.sharedDataService.flagForSlider = false;
    // if (this.MLSAccess == 0) {
    //   if (this.sharedDataService.sharedExternalCredentialAccess == 1) {
    //     window.location.replace(this.sharedDataService.externalUrl + sessionStorage.getItem('sessionAssociateId'));
    //   }
    //   else {
    //     window.location.replace(this.sharedDataService.viewgoalurl + sessionStorage.getItem('sessionAssociateId'));
    //   }
    // }
    // else {
    //   this.stringErrorMethod = 'LoadDashBoard';
    //   this.ResetCardViewRelatedData();
    //   this.LoadFavoriteDataAfterUnFavorite();
    // }
  }

  showSubmenuOnHover(element, level, index, subMenu) {

    if (subMenu ) {

      if (level === 'level2') {
        this.isHamburgerClicked = true;
        this.selectedIndex = index;
        this.selectedSubIndex = -1;
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Associate Life' && (this.forAssociateLifeMenu.length == 0 || this.MLSAccess == 0)) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'My Learning Insights' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'My Preferences' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Learning Reels' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        //for (let i = 0; i < subMenu.length; i++) {
        //  if (subMenu[i].title == 'My Favorites' && this.MLSAccess == 0) {
        //    subMenu.splice(i, 1);
        //  }
        //}
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'WeConnect' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Learning Paths' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Client Interview Prep' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Rewards & Achievements' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'External Certifications' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        for (let i = 0; i < subMenu.length; i++) {
          if (subMenu[i].title == 'Merit Mapper' && this.MLSAccess == 0) {
            subMenu.splice(i, 1);
          }
        }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'SkillUp') {
        //     if (this.sharedDataService.goalProgressDetailData != null) {
        //       this.goal = this.sharedDataService.goalProgressDetailData;
        //       if (this.goal[0].goalExempted == 1) {
        //         subMenu.splice(i, 1); //To splice skillup menu when Associate excempted to take goals
        //       }
        //     }
        //     if (this.sharedDataService.sharedSkillupMenuAccess == 0 || this.sharedDataService.goalProgressDetailData == null) {
        //       if (subMenu[i] && subMenu[i].title == 'SkillUp') {
        //         subMenu.splice(i, 1); //To splice skillup menu when (this.sharedDataService.sharedSkillupMenuAccess == 0
        //         ////AND this.sharedDataService.goalProgressDetailData == null)
        //       }
        //     }
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Evaluate') {
        //     if (this.sharedDataService.sharedSubMenu.length > 0) {
        //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
        //       if (this.subMenuDetails[0].isEvaluate == 0) {
        //         subMenu.splice(i, 1);
        //       }
        //     }
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Learning Shared Services' && this.sharedDataService.sharedSharedServices == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Learning Solutions' && this.sharedDataService.sharedLearningServices == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'MLS Management' && this.sharedDataService.mlsAdmin == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'EC – Admin Access' && this.sharedDataService.ecAdmin == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'Books and Journals' && this.sharedDataService.sharedBookAccess == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'SkillUp Admin Management' && this.sharedDataService.skillUpAdminManagementAccess == 0) {
        //     subMenu.splice(i, 1);
        //   }
        // }
        // for (let i = 0; i < subMenu.length; i++) {
        //   if (subMenu[i].title == 'My Team') {
        //     if (this.sharedDataService.sharedSubMenu.length > 0) {
        //       this.subMenuDetails = this.sharedDataService.sharedSubMenu;
        //       if (this.subMenuDetails[0].isMyTeam == 0) {
        //         console.log('My Team' + subMenu[i].subMenu.length)
        //         console.log(subMenu[i].subMenu[0].title)
        //         if (subMenu[i].subMenu.length <= 1) {
        //           //console.log('My Team title' + subMenu[i].subMenu.title)
        //           if (subMenu[i].subMenu[0].title != 'Team Insights')
        //             subMenu.splice(i, 1);
        //         }
        //       }
        //     }
        //     if (subMenu[i] && subMenu[i].title == 'My Team') {
        //       let childMenu = subMenu[i].subMenu
        //       for (let j = 0; j < childMenu.length; j++) {
        //         if (childMenu[j].title == 'SkillUp My Team' && this.subMenuDetails[0].isMyTeam == 0) {
        //           childMenu.splice(j, 1);
        //         }
        //       }
        //       if (childMenu.length == 0) {
        //         subMenu.splice(i, 1);
        //       }
        //     }
        //   }
        // }
      }
      // else if (level === 'level3') {
      //   this.isHamburgerClicked = true;
      //   this.selectedSubIndex = index;
      //   for (let i = 0; i < subMenu.length; i++) {
      //     if (subMenu[i].title == 'Development Plan') {
      //       if (this.sharedDataService.sharedSubMenu.length > 0) {
      //         this.subMenuDetails = this.sharedDataService.sharedSubMenu;
      //         if (this.subMenuDetails[0].isDevelopmentPlan == 0) {
      //           subMenu.splice(i, 1);
      //         }
      //       }
      //     }
      //     if (subMenu[i].title == 'Goal Fulfillment') {
      //       if (this.sharedDataService.sharedSubMenu.length > 0) {
      //         this.subMenuDetails = this.sharedDataService.sharedSubMenu;
      //         if (this.subMenuDetails[0].isFulfillment == 0) {
      //           subMenu.splice(i, 1);
      //         }
      //       }
      //     }
      //   }
      // }
      else if (level === 'level4') {
        this.isHamburgerClicked = false;
        this.selectedSubIndex = index;
      }
    }
    else {
      //this.isHamburgerClicked = false;
      //if (index == 0 && level === 'level2') {
      //  this.isHamburgerClicked = false;
      //  this.data.getBreadcrumbDetails('Home', 'home', "", "", "", "");
      //  this.LoadDashBoard();
      //}
    }
  }

  hideSubmenuOnHover(level) {
    if (level === 'level2') {
      this.selectedIndex = -1;
    }
    else if (level === 'level3') {
      this.selectedSubIndex = -1;
    }
  }

  public NavigateToComponent(componentRouter, componentQueryParams) {
    // this.stringErrorMethod = '';
    if (componentRouter != null && componentRouter != ''){
       if (componentRouter.indexOf("adminActivityDetails") > -1) {
        this.router.navigate([componentRouter]);
      }
      else if (componentRouter.indexOf("merit-mapper") > -1) {
        this.router.navigate([componentRouter]);
      }
    }

  }
  public addBreadcrum(primaryName, primaryLink, secondaryName, secondaryLink) {
    this.data.getBreadcrumbDetails(primaryName, primaryLink, secondaryName, secondaryLink, "", "");
  }

  

  public Weconnect: any = "0";
  public TotalFavcount: number = 0;
  public LearningFavcount: number = 0;
  public WeconnectFavcount: number = 0;
  public SkillFavCount: number = 0;
  public associateId!: string;
  // public menuData: any = [];
  public AlertCount: number = 0;
  public AppovalCount: number = 0;
  public NotificationCount: number = 0;

  // public AletDetailList: AlertDetailsModel[];
  // public ApprovalDetailList: ApprovalDetailsModel[];

  // public AletDetailFullData: AlertDetailsModel[];
  // public ApprovalDetailFullData: ApprovalDetailsModel[];

  public iterator: number = 0;
  public showLoadingIndicator: boolean = false;
  // public alertViewAll: boolean = false;
  // public approvalViewAll: boolean = false;
  // public subMenuDetails: SubMenuModel[];
  // public MLSAccess: number = 1;
  // public isMLSAccess: boolean = false;
  // public isAlertNotifications: any = 0;
  public isApprovalNotification: any = 0;



  public LoadFavoriteData() {

  }
  public settings = [{
    topic: "Content",
    img: "content",
    subtopic: [{ text: "Some one commented on your pathway", isChecked: "checked", inputCheck: true },
    { text: "Your manager recommended content", isChecked: "", inputCheck: false },
    { text: "Someone shared content", isChecked: "checked", inputCheck: true }]
  },
  {
    topic: "My Feeds",
    img: "weconnect_blue",
    subtopic: [{ text: "Someone commented on your post", isChecked: "checked", inputCheck: true },
    { text: "Someone replied to your comment", isChecked: "", inputCheck: false },
    { text: "Someone mentioned you in a post", isChecked: "checked", inputCheck: true }]
  }];

  @Output() enableTourMode = new EventEmitter();
  tourModeEvent($event) {
    this.enableTourMode.emit();
  }

  notification() {
    // this.showNotification = false;
    // if (this.notificationPopover.popover.visible) {
    //   this.sharedDataService.sharedAssociateId = sessionStorage.getItem('sessionAssociateId');
    //   forkJoin([
    //     this.profileDrivenService.GetAlertDetails(this.sharedDataService.sharedAssociateId).
    //       pipe(catchError(error => of(this.LogServiceErrorOutDetails(error), error.status))),
    //     this.profileDrivenService.GetApprovalDetails(this.sharedDataService.sharedAssociateId).
    //       pipe(catchError(error => of(this.LogServiceErrorOutDetails(error), error.status))),
    //   ])
    //     .subscribe(result => {
    //       if (result[0].length > 0) { this.sharedDataService.AlertNotifications = result[0]; }
    //       if (result[1].length > 0) { this.sharedDataService.ApprovalNotification = result[1]; }

    //       //Added to log the service errors into MLS Database table - Start
    //       if (this.sharedDataService.sharedServiceErrorList.length > 0) {
    //         this.iterator = 0
    //         for (this.iterator = 0; this.iterator <= this.sharedDataService.sharedServiceErrorList.length - 1; this.iterator++) {
    //           this.searchService.PostMLSApplicationErrorDetails(this.sharedDataService.sharedServiceErrorList[this.iterator],
    //             this.sharedDataService.sharedAssociateId)
    //         }
    //         this.sharedDataService.sharedServiceErrorList = [];
    //       }
    //       //Added to log the service errors into MLS Database table - End
    //       this.LoadNotificationCount();
    //       this.showNotification = true;
    //       this.sharedDataService.isNotificationTab = true;
    //     },
    //       (error) => {
    //         //console.log(error)
    //         this.router.navigate(['/error']);
    //       }
    //     );
    // }
    // else {
    //   this.showNotification = false;
    // }
  }
  public isPreferenceBlinkAccess: boolean = false;

  public LoadPreferenceData() {

  }
  public RedirectHelpPage() {

    if (window.location.href != null) {
      if (window.location.href.indexOf("/social") > -1) {
        window.open(this.sharedDataService.helpIconURLSocial, '_blank')
      }
      else if (window.location.href.indexOf("/dashboard") > -1) {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }
      else if (window.location.href.indexOf("/mylearning") > -1) {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }
      else if (window.location.href.indexOf("/associatelife") > -1) {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }
      else if (window.location.href.indexOf("/preference") > -1) {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }
      else if (window.location.href.indexOf("/searchResult") > -1) {
        window.open(this.sharedDataService.helpIconURLSearch, '_blank')
      }
      else if (window.location.href.indexOf("/quizzes") > -1) {
        window.open(this.sharedDataService.helpIconURLQuizzes, '_blank')
      }
      else if (window.location.href.indexOf("/favorites") > -1) {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }
      else if (window.location.href.indexOf("/cis") > -1) {
        window.open(this.sharedDataService.helpIconURLCIP, '_blank')
      }
      else if (window.location.href.indexOf("/gamification") > -1) {
        window.open(this.sharedDataService.helpIconURLGAM, '_blank')
      }
      else if (window.location.href.indexOf("/gamification-management") > -1) {
        window.open(this.sharedDataService.helpIconURLGAM, '_blank')
      }
      else if (window.location.href.indexOf("/Pathway/allPathway") > -1) {
        window.open(this.sharedDataService.helpIconURLPathway, '_blank')
      }
      else if (window.location.href.indexOf("/Pathway/previewpathway") > -1) {
        window.open(this.sharedDataService.helpIconURLCreatePathway, '_blank')
      }
      else if (window.location.href.indexOf("/Pathway/pathwaycontent") > -1) {
        window.open(this.sharedDataService.helpIconURLCreatePathway, '_blank')
      }
      else if (window.location.href.indexOf("/Pathway/createpathway") > -1) {
        window.open(this.sharedDataService.helpIconURLCreatePathway, '_blank')
      }
      else if (window.location.href.indexOf("/notification") > -1) {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }

      else if (window.location.href.indexOf("/manager-board") > -1) {
        window.open(this.sharedDataService.helpIconURLManagerView, '_blank')
      }
      else if (window.location.href.indexOf("/reels") > -1) {
        window.open(this.sharedDataService.helpIconURLReels, '_blank')
      }
      else {
        window.open(this.sharedDataService.helpIconURLProfile, '_blank')
      }
    }
  }

  public showNotification: boolean = false;
  
}
