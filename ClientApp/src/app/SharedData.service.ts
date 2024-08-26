import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
// import { AllCardDetailModel, WeconnectModel, SubMenuModel, PreferenceBlinkAccessModel } from '../models/profiledriven.model';
// import { SocialPostAddEditModel, SocialPostEditModel } from '../models/socialpost.model';
import { Subject } from 'rxjs';
@Injectable()
export class SharedDataService {

    constructor() { }
    ////Query Param Variables
    public activityName: any = null;
    public activityLabel: any = null;
    public activityFK: any = null;
    public BannerName: string = "";
  public mlsAdmin: number = 0;
  public ecAdmin: number = 0;
  public skillUpAdminManagementAccess: number = 0;

    ////Declaring Fields for storing data from Card-Wrapper-Component
    public cardViewDetails: any = null;
    public prerequisiteList: any = null;
    public associateViewDetails: any = null;
    public associateCompleteDetails: any = null;
    public cardViewViewDetails: any = null;
    public cardViewLikeDetails: any = null;
    public cardViewShareDetails: any = null;
    public cardPeopleData: any = null;
    public ratingsCommentsDetails: any = null;
    public skillList: any = null;
    public relatedResourceList: any = null;
    public reviewCount: number = 0;


    ////Declaring Fields for storing data from Search-Result.Component
    public searchResultData: any = [];
    public bookResultData: any = null;
    public searchString: string = "";
    public categoryType: string = "";
    public suggestedLinkList: any = null;
    public categoryList: any = null;
    public selectedCategoryData: any = null;
    public exactMatchCategoryData: any = null;
    public recommendedCategoryData: any = null;
    public calledScreenName: string = "";
  public sharedJustInDataString: string = ""; 
    public SharedTrendingDataString: string = "";
    public sharedPhysicalBookCount: number = 0;
    //Added to update Justin and Trending on the Search Result Data
    public sharedJustInDataArray = [];
    public SharedTrendingDataArray = [];
    public finalSearchResultData = [];

    public peopleTagged: any;
    public isManager: boolean = false;
    public isRecommended: boolean = false;
    public shareToasterMessage: string = 'Hurray, you have shared the learning resource successfully';
    public sharePostToasterMessage: string = 'Hurray, you have shared the post successfully';
    ////Declaring Fields for getting data for filters
    public categoryDataforFilters: any = [];
    public sortedArrayLengthforFilters: number = 0;
    public unselected_filterOptionsCheckbox: any = [];
    public selected_filterOptionsCheckbox: any = [];
    public unselected_filterOptionsRadio: any = [];
    public selected_filterOptionsRadio: any = [];
    public unselected_filterOptionsFilterSearch: any = [];
    public selected_filterOptionsFilterSearch: any = [];
    public unselected_filterOptionsStar: any = [];
    public selected_filterOptionsStar: any = [];
    public unselected_filterOptionsFilter: any = [];
    public selected_filterOptionsFilter: any = [];


    ////Declaring Fields for ratings and review
    public action: any;
    public associateCourseComments: any;
    public associateCourseRatings: any;

    ////Declaring Fields for storing data view-all.Component
    public categoryDataforViewAll: any = [];

    ////Declaring field for GDPR Access
    public gdprdata: any = null;
    public MLSPageAccess: number = 0;
    public SkillupPageAccess: number = 0;
    public SkillupMenuAccess: number = 0;
  public ExternalCredentialAccess: number = 0;
  public ECAdmin: number = 0;
  public SkillUpAdminManagementAccess: number = 0;
    public sharedSharedServices: number = 0;
    public sharedLearningServices: number = 0;
    public sharedBookAccess: number = 0;
    ////Declaring fields for dashboard component 
    public profileJustInData: any = null;
    public profileTrendingData: any = null;

    //Declaring fields for learningdashboard component
    public isSharedServiceContainsData: boolean = false;
    public complianceCoursesData: any = null;
    public otherAssignedCoursesData: any = null;
    public developmentPlanCoursesData: any = null;
    public userProfileDetailsData: any = null;
    public connectWithPeopleData: any = null;
    public goalProgressDetailData: any = null;
    public allPostData: any = null;
    public myPostData: any = null;
    public recommendedByManagerCourseData: any = null;
    public whatToLearnNextCourseData: any = null;
    public LearningHistoryData: any = null;
    public weConnectData: any = null;
    public FavouriteCount: number = 0;
    public isFavouriteReload: boolean = false;
    public WeConnectFavouriteCount: number = 0;
    public isWeConnectReload: boolean = false;
    public isSkillupReload: boolean = false;
    public SkillFavoriteCount: number = 0;
    //Declaring filelds for associatelife component
    public mandatoryCourses: any = null;
    public recommendedCourses: any = null;
    public relevantskill: any = null;
    public associateLifeEventProjectName: any = null;
    public peopleList: any = null;
    public mycontributionskilllist: any = null;
    public projectID: string = "";
    //Declaring pageName
    public pageName: string = "Home";

    //Added for LearningCollection functionality to delete the card when favourite is removed
    public isLearningCollectionLoaded: boolean = false;
    // public sharedLearningCollectionData: AllCardDetailModel[] = [];

    //Declaring Alert and Approvals
    public isSharedServiceNotificationData: boolean = false;
    public AlertNotifications: any = null;
  public ApprovalNotification: any = null;

  //to geting prvider getting delay
  public search_regProvidersApi: any = [];


    //URL section should not be Modified
    //Modified to load api url's from appsettings.json dynamically - Start
  //  //Declaring and initialising fields for API URLs
public firstBannerimg: string = "Banner_UpdatedUdemy";
  public firstBannerRedirectionURL: string = "https://cognizant.udemy.com/";
  public secondBannerimg: string = "Banner_Caliber";
  public secondBannerRedirectionURL: string = "https://be.cognizant.com/sites/cognizant-academy/SitePage/868386/caliber-2021-hack-the-cloud";
  //public thirdBannerimg: string = "Banner_Hackathon_New";
  public thirdBannerimg: string = "ClientInterviewPrep_banner";
  public thirdBannerRedirectionURL: string = "https://be.cognizant.com/sites/global-human-resources/SitePage/941973/engineering-impact-mls";
  public fourthBannerimg: string = "Banner_Brian";
  public sharedSearchApiUrl: string = "https://onecsitazrapps.cognizant.com/1738/MLSSearch/";
  //public sharedSearchApiUrl: string = "https://onecdevintazrncapps.cognizant.com/1738/MLSSearch/";
  //public sharedSearchApiUrl: string = "https://localhost:44336/";
  public sharedProfileApiUrl: string = "https://localhost:44317/";
  //public sharedProfileApiUrl: string = "https://onecsitazrapps.cognizant.com/1738/MLSProfileDrivn/";
  public sharedSocialApiUrl: string = "https://onecsitazrapps.cognizant.com/1738/MLSSocialLearng/";
  public sharedMLSWebAppUrl: string = "https://onecsitazrapps.cognizant.com/1738/MLSApp/";
  public viewgoalurl: string = "https://onecsit.cognizant.com/?GlobalAppId=1738&URL=https://onecsitazrapps.cognizant.com/1738/RDPApp/rdpgoal/Proxycheck/"
  public sharedSocailMLSWebAppUrl: string = "https://onecsit.cognizant.com/Home?globalappid=1738%26URL%3Dhttps%3A%2F%2Fonecsitazrapps.cognizant.com%2F1738%2FMLSApp%2Fsocial%3FpostId%3D"
  public externalUrl: string = "https://onecsit.cognizant.com/?GlobalAppId=1738&url=https://onecsitazrapps.cognizant.com/1738/ExtCert/ExternalCertificates/Proxycheck/";
  public quizGenieUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/quizess?pagename=My%20Quizzes&ProxyId=';
  public quizBaseURL: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/quizess?pagename=My%20Quizzes&ProxyId='; //For quizgenie integration added as backup url dont delete
  public quizViewUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/viewquiz?pagename=viewquiz&ProxyId=';
  public quizCopyUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/viewquiz?pagename=viewquiz&from=copyquiz&ProxyId=';
  public quizAttemptUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/api/AttemptReport/Get/';
  public quizAttemptReportUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/api/AttemptReport/Get/attemptReport/';
  public quizAttemptCloneUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/api/AttemptReport/Get/questionReport/';
  public quizEditUrl: string = 'https://onecsitazrapps.cognizant.com/1738/QuizGenie/createquiz?value=edit&associateId=';
  public rdpGoalUrl: string = "https://onecsit.cognizant.com/?GlobalAppId=1738&URL=https://onecsitazrapps.cognizant.com/1738/RDPApp/RDPGoal/Index/setdev";
  public acceptableUsePolicyUrl: string = "https://be.cognizant.com/documents/preview/520827/Acceptable-Use-Policy";
  public codeOfEthicsUrl: string = "https://cognizantonline.sharepoint.com/sites/CorporateFunctions/SitePages/Ethics-and-Compliance.aspx";
  public viewHistoryUrl: string = "https://onecsitazrapps.cognizant.com/1738/RDPApp/RDPGoal/Index#!/contributeApprovalHistory"
  public skillUpBannerUrl: string = "https://be.cognizant.com/sites/ethics-compliance/SitePage/289365/ethics-compliance-homepage-app1";
  public UpdateYourSkillsURL: string = "https://onecognizant.cognizant.com/?globalappid=1989";
  public QuarterlyDeliverablesURL: string = "https://onecognizantbcazrapps.cognizant.com/2394";
  //public sharedPathwayApiUrl: string = "https://onecsitazrapps.cognizant.com/1738/LMPApi/api/Pathway/";
  public sharedPathwayApiUrl: string = "https://localhost:44338/api/Pathway/";
  public helpIconURLSocial: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/WeConnect.aspx";
  public helpIconURLPathway: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/Learning-Paths-Help-Page.aspx";
  public helpIconURLCreatePathway: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/Learning-Paths-Help-Page.aspx";
  public helpIconURLCIP: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/Client-Interview-Prep-Help-Page.aspx";
  public helpIconURLGAM: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/Rewards-and-Achievements.aspx";
  public helpIconURLManagerView: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/Manager-View-Help-Page.aspx";
  public helpIconURLProfile: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/PersonlizedUI.aspx";
  public helpIconURLQuizzes: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/Quizzes.aspx";
  public helpIconURLSearch: string = "https://cognizantonline.sharepoint.com/sites/LearningAndDevelopment/SitePages/MLS-Recommendations.aspx";
  public pathwayCopyUrl: string = 'https://onecdevintazrbcapps.cognizant.com/1738/MLSApp/viewpathway?page=All%20Learning%20Paths&id=';
  public lpThemesCopyUrl: string = 'https://onecdevintazrbcapps.cognizant.com/1738/MLSApp/allpathways?page=Themes';
  //public lpThemesCopyUrl: string = 'http://localhost:4200/allPathway?page=Themes';
  public reelsWebUrl: string = 'https://onecdevintazrncapps.cognizant.com/1738/MLSReels/reels?ProxyId=';
  public helpIconURLReels: string = ""
  //public firstBannerimg: string = "";
  //public firstBannerRedirectionURL: string = "";
  //public secondBannerimg: string = "";
  //public secondBannerRedirectionURL: string = "";
  //public thirdBannerimg: string = "";
  //public thirdBannerRedirectionURL: string = "";
  //public fourthBannerimg: string = "";
  //public sharedSearchApiUrl: string = '';
  //public sharedProfileApiUrl: string = '';
  //public sharedSocialApiUrl: string = '';
  //public sharedMLSWebAppUrl: string = '';
  //public viewgoalurl: string = '';
  //public sharedSocailMLSWebAppUrl: string = '';
  //public externalUrl: string = '';
  //public UpdateYourSkillsURL: string = "";
  //public QuarterlyDeliverablesURL: string = "";
  //public quizGenieUrl: string = '';
  //public quizBaseURL: string = '';
  //public quizViewUrl: string='';
  //public quizCopyUrl: string ='';
  //public quizAttemptUrl: string='';
  //public quizAttemptReportUrl: string = '';
  //public quizAttemptCloneUrl: string = '';
  //public quizEditUrl: string = '';
  //public rdpGoalUrl: string = '';
  //public acceptableUsePolicyUrl: string = '';
  //public codeOfEthicsUrl: string = '';
  //public viewHistoryUrl: string = '';
  //public skillUpBannerUrl: string = '';
  //public sharedPathwayApiUrl: string = '';
  //public helpIconURLSocial: string = '';
  //public helpIconURLProfile: string = '';
  //public helpIconURLQuizzes: string = '';
  //public helpIconURLPathway: string = '';
  //public helpIconURLCreatePathway: string = '';
  //public helpIconURLCIP: string = '';
  //public helpIconURLGAM: string='';
  //public helpIconURLManagerView: string = '';
  //public helpIconURLSearch: string = '';
  ////public knowhub: string = '';
  ////public udemy: string = '';
  //public pathwayCopyUrl: string = '';
  //public lpThemesCopyUrl: string = '';
  public searchicon: boolean = true;
  //public reelsWebUrl: string = '';
    //Modified to load api url's from appsettings.json dynamically - End

    public isWeConnectFavoriteLoaded: boolean = false;
    // public sharedWeConnectFavoriteData: WeconnectModel[] = [];
    public isLoadDashboard: boolean = false;
    public SelectedTab = "All Posts";
    public SortType: string = "Latest";
    public isFeedBackSubmit: boolean = false;
  public socialPostDetailContent = [];
  public didYouMean = '';
//   public search_ID: number;
//   public match: number;

    // Added for fav search values
    public learningCollectionFavSearchValue: string = '';
    public skillUpFavSearchValue: string = '';
    public weConnectFavSearchValue: string = '';
    //Added for dasboard optimization
    public socialCopyURL: string = '';
    public socialCopyURLFragment: string = '';
    public sharedSkillupFavoriteData: any = null;
    public sharedMenuDetailsData: any = null;
    public sharedAlertDetailsData: any = null;
    public knowhub: string = '';
    public udemy: string = '';
    public sharedApprovalDetailsData: any = null;
    public sharedAssociateLifeEventData: any = null;
    public sharedWeconnectCountData: any = null;
    public sharedServiceErrorList: any = null;
    public sharedAssociateId: string = '';
    public sharedGDPRDetails: number = 0;
    public sharedMLSPageAccess: number = 0;
    public sharedSkillupPageAccess: number = 0;
    public sharedSkillupMenuAccess: number = 0;
    public sharedAdminMenuAccess: number = 0;
    public sharedExternalCredentialAccess: number = 0;
    public sharedAssociateName: string = '';
    public sharedAssociateServiceName: string = '';
    public sharedAssociateRole: string = '';
    public OverAllFavoriteCount: any = null;
    public isNotificationTab: boolean = false;

    //We Connect Favorite Flag to reload Dashboard
    public isWeConnectUnFavorited: boolean = false;

    //Profile driven - We Connect Favourite
    public favPostID: string = "";
    public isFavPostLoaded: boolean = false;

    //Detail page - All Data
    public detailMap = new Map();

    //Added for SocialPost-Optimization on 16/11/2020- start
    public socialPostID: string = "";
    public isSocialPostEdit: boolean = false;
    public editPostIndexId: number = -1;
    public editPostId: number = 0;
    // public updatedSocialPostDetail!: SocialPostAddEditModel;
    // public editPostDetail!: SocialPostEditModel;

    //Added for SocialPost-Optimization on 16/11/2020- End

    //Detail page - Report
    public ReportedPage: string = "";

    //Splice from Favourite
    public isWeConnectFavoriteLoadedFromFav: boolean = false;
    public isLearningCollectionLoadedFromFav: boolean = false;

    public isFirstAcces: boolean = true;

    // public sharedSubMenu: SubMenuModel[] = [];

    //Added for preference Icon Blink Access - Start
    public isPreferenceBlinkAccess: boolean = false;
    // public sharedPreferenceBlinkAccess: PreferenceBlinkAccessModel[] = [];
    //Added for preference Icon Blink Access - End

    //Areas of Interest
    public RelavantSkillsArray: any = [];
    public InterestPageName: string = "";
    public addNewskill: any = [];
    public isContinueClicked: boolean = false;
    public isBackClicked: boolean = false;
    public sharedRelevantSkills: any = [];
    public sharedContributionSkills: any = [];
    public isPreference: boolean = false;
    public isQuiz: boolean = false;
  public isReels: boolean = false;

    public showBeaMentor: boolean = false;
    public showBeaFaculty: boolean = false;
    public showBeaMatterExpert: boolean = false;
    public showBeaContentCreator: boolean = false;

    //Added for show filter in learning history
    public initiateDataLoad = new Subject();
    //Added for Menu Tour
    showEditWidgets = new Subject<boolean>();
    showTourMode = new Subject();

    public sharedModuleName: string = "";
    public sharedFilterName: string = "";
    public sharedManagerViewApiUrl: string = "https://localhost:44380/";
    public LoadFilterData: any = null;
    public LearningHistoryData1: any = null;
    //added for pathway functionalities
    public reviewtextdisplayLoad = new Subject();

    public reportedpathwayLoad = new Subject();
    //Declaring for getting ActivityFK in pathways
    public pathwayActivityFK: any = null;
    public isCompletedPathway: boolean = false;

    //Declaring values for Quiz
  public isQuizBasedURL: boolean = true;
  public quizActivityFK: any = null;
  public isQuizViewURL: boolean = false;
  public showReviseQA: boolean = true;
  public showOtherTabsInCipAdmin: boolean = true;

  public Shared_Providers: any = [];
  public dataList: any = [];
  public contentProvidersFiltered: any = [];

  public searchValkey: any = null;
  public searchedValue: any = null;
  public AISURL: any = null;
  public SearchUrl: any = null;
  public isWeconnect: number = 0;
  public isSkillup: number = 0;
  public iswhatToLearnNextCourseData: number = 0;
  public isAlertNotifications: number = 0;
  public isApprovalNotification: number = 0;
  public errorurl: any = null;
  public backuperrorurl: any = null;
  public LoadCount: number = 1;
  public flagForSlider: boolean = true;
  public Logincount!: number;
  public testcount!: number;
  public IsProxyPage: boolean = false;
  public flagforprod!: string;
  public hiderecomendedpopup: boolean = false;
  public filteredCards: any = [];
  public mydidyoumean: boolean = false;

}
