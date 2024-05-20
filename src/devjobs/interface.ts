export interface IResponse {
  data: IDevJobs[];
  totalPage: number;
  next?: string;
}

export interface IDevJobs {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: IRequirementAndRole;
  role: IRequirementAndRole;
}

interface IRequirementAndRole {
  content: string;
  items: Array<string>;
}
