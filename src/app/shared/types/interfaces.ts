export interface ISlashCommand {
  title: string;
  description: string;
  usage: string;
  detailedDescription: string;
}

export interface IReactRole {
  id: number;
  name: string;
  emojiId: string;
  roleId: string;

  hexCode?: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  mutuallyExclusive: boolean;
  reactRoles: IReactRole[];
}

export interface IGuild {
  id: string;
  icon: string;
  name: string;
}
