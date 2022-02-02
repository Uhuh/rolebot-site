export interface ISlashCommand {
  title: string;
  description: string;
  usage: string;
  detailedDescription: string;
}

export interface IReactRole {
  unicode: string;
  name: string;
  hexCode: string;
}

export interface ICategory {
  title: string;
  description: string;
  reactRoles: IReactRole[];
}
