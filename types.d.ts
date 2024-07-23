type homeHeroType = {
  title: string;
  para: string;
  heroImage: any;
};
type afterHeroType = {
  title: string;
  para: string;
  listings: string[];
  heroImage: any;
};

type homeServicesType = {
  image: any;
  para: string;
};

type homeStatsType = {
  companies: number;
  projects: number;
  happyClients: number;
};

type processType = {
  title: string;
  Image: any;
};

type howWeWorkType = {
  para: string;
  process: processType[];
};

type latestProjectsType = {
  para: string;
};

type clientReviewType = {
  subject: string;
  author: string;
  message: string;
};

type clientTalkType = {
  para: string;
};

type aboutHeroType = {
  image: any;
  briefDescrip: string;
};

type aboutBlockType = {
  vision: string;
  mission: string;
  subTitle: string;
  para1: string;
  image: any;
};

type aboutUsType = {
  aboutHero: aboutHeroType;
  aboutBlock: aboutBlockType;
};

// type heroResponse = {
//     heroData : hereObj[]
// }

// type homeAboutData = {
//     title: string,
//     paragraph1: string,
//     paragraph2: string,
//     image: any,
//     contact: string,
// }

// Service Types here //

type serviceBlock1Type = {
  image1: any;
  image2: any;
  firstPara: string;
};

type serviceBlock2Type = {
  subject: string;
  para: string;
  subTitle: string;
  listings: string[];
  image: any;
};

type serviceBlock3Type = {
  subject: string;
  para1: string;
  para2: string;
  para3: string;
  legend1: string;
  legend2: string;
  image: any;
};

type serviceBlock4Type = {
  subject: string;
  para1: string;
  para2: string;
  listings: string[];
  image: any;
};
type serviceHeroType = {
  image: any;
  briefDescrip: string;
};

type singleServicePageDataTypes = {
  title: string;
  serviceSlug: string;
  serviceHero: serviceHeroType;
  serviceBlock1: serviceBlock1Type;
  serviceBlock2: serviceBlock2Type;
  serviceBlock3: serviceBlock3Type;
  serviceBlock4: serviceBlock4Type;
  _updatedAt: string;
};

type exploreServicesType = {
  subject: string;
  subTitle: string;
  para1: string;
  para2: string;
  image: any;
  wording: string;
};

type serviceListSectionType = {
  subject: string;
  subTitle: string;
};

type allServicesDataType = {
  servicesHero: serviceHeroType;
  exploreServices: exploreServicesType;
  serviceListSection: serviceListSectionType;
};

// Projects Types Here //

type projectBlock1Type = {
  image: any;
  firstPara: string;
};

type projectInfoType = {
  dateTime: string;
  address: string;
  category: { title: string };
  title: string;
  clientNmae: string;
};

type howProjectWorksType = {
  subject: string;
  legend1: string;
  legend2: string;
  para1: string;
  para2: string;
  para3: string;
  image: any;
};

type projectBlock4Type = {
  subject: string;
  image: any;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  listings: string[];
};

type ProjectsListType = {
  title: string;
  projectSlug: string;
  projectHero: serviceHeroType;
  projectBlock1: projectBlock1Type;
  projectInfo: projectInfoType;
  howProjectWorks: howProjectWorksType;
  projectBlock4: projectBlock4Type;
  _updatedAt: string;
};

// Contact Us Page Types Here //

type ContactHeroType = {
  image: any;
  briefDescrip: string;
};

type socialsType = {
  twitter: url;
  linkedIn: url;
  instagram: url;
  tikTok: url;
};

type ContactInfoType = {
  website: url;
  emails: { email1: string; email2: string };
  phones: { phone1: number; phone2: number };
  socials: socialsType;
  address: string;
  subject: string;
  para: string;
};

type ContactPageTypes = {
  contactHero: ContactHeroType;
  contactInfo: ContactInfoType;
};

type listingsType = {
  Image: any;
  title: string;
  para: string;
};

type whyChooseType = {
  para: string;
  image: any;
  listings: listingsType[];
};

type homePageTypes = {
  homeHero: homeHeroType;
  afterHero: afterHeroType;
  whyChoose: whyChooseType;
  homeServices: homeServicesType;
  homeStats: homeStatsType;
  howWeWork: howWeWorkType;
  latestProjects: latestProjectsType;
  clientTalk: clientTalkType;
};

type aboutOverviewResponse = {
  aboutOverview: homeAboutData;
};

type operationVital = {
  figure: number;
  append: string;
  operation: string;
  operationDetail: string;
};

type operationResponse = {
  operations: operationVital[];
};

type homeContactVital = {
  chyron: string[];
  imageUrl: any;
};

type homeContactResponse = {
  homeContact: homeContactVital;
};

type clientVital = {
  name: string;
  job: string;
  message: string;
  clientImage: any;
};

type clientResponse = {
  feedbacks: clientVital[];
};

type logoVital = {
  image: any;
};

type logoResponse = {
  logos: logoVital[];
};

type aboutBriefVital = {
  aboutBrief1: string;
  aboutBrief2: string;
  firstImage: any;
  secondImage: any;
};

type aboutBriefResponse = {
  aboutBrief: aboutBriefVital;
};

type aboutServiceVital = {
  Title: string;
  image: any;
};

type aboutServiceResponse = {
  aboutService: aboutServiceVital[];
};

type visionGoalVital = {
  subject;
  body;
};

type visionGoalResponse = {
  aboutCompany: visionGoalVital[];
};

type serviceDetailResponse = {
  pageSlug: string;
  title: string;
  serviceBrief: string;
  firstPara: string;
  secondPara: string;
  mainImage: any;
  secondImage: any;
  instinctTitle: string;
  instinctPara: string;
  sharedData: string[];
};

type allServiceResponse = {
  pageSlug: string;
  title: string;
};

type projectDuration = {
  startTime: string;
  endTime: string;
};

type slugRef = {
  refSlug: string;
};

type projectResponse = {
  _id: string;
  duration: projectDuration;
  mainImage: any;
  operations: string[];
  service: slugRef[];
  country: string;
  client: string;
};

type contactVital1 = {
  briefHistory: string;
  phoneNumber: string;
  email: string;
};

type contactVital2 = {
  telephone1: string;
  telephone2: string | null;
};

type contactVital2Main = {
  telephone: contactVital2;
  image: any;
  country: string;
  address: string;
  company: string;
};

type executivesVital = {
  image: any;
  number: string | null;
  role: string;
  name: string;
  email: string | null;
  _key: string;
};

type contactResponse = {
  contactBrief: contactVital1;
  locations: contactVital2Main[];
  executives: executivesVital[];
};

type estimateVital = {
  facebook: string | null;
  linkedIn: string | null;
  twitter: string | null;
  youtube: string | null;
  instagram: string | null;
  tiktok: string | null;
};

type estimateVitalMain = {
  para_estimate: string;
  title: string;
  socials: estimateVital;
};

type estimateResponse = {
  estimate: estimateVitalMain;
};

type headerContactVital1 = {
  address: string;
  phoneNumber: string;
};

type headerContactVital2 = {
  socials: estimateVital;
};

type headerContactResponse = {
  contactBrief: headerContactVital1;
  estimate: headerContactVital2;
};

type blogSectionVital = {
  _key: string;
  subTitle: string | null;
  subPara: string | null;
  subListing: string[] | null;
  subImage: any;
};

type categoryObj = {
  slug: string;
  title: string;
};

type tagOjb = {
  tagSlug: string;
  title: string;
};

type blogResponse = {
  slug: string;
  _id: string;
  title: string;
  mainImage: any;
  mainParagraph: string;
  blogSection: blogSectionVital[];
  categories: categoryObj[];
  tag: tagOjb[];
  publishedAt: string;
};

type statementVital = {
  subject: string;
  description: string;
};

type privacyResponse = {
  policyStatement: statementVital[];
  corporatePolicy: string;
};

type footerResponse = {
  firstSummary: string;
  secondSummary: string;
  thirdSummary: string;
};
