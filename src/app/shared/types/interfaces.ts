export interface ISlashCommand {
  title: string;
  description: string;
  usage: string;
  detailedDescription: string;
}

export enum DisplayType {
  alpha = 0,
  reversedAlpha,
  time,
  reversedTime,
}

export interface ICategory {
  id: number;
  guildId: string;
  name: string;
  description?: string | null;
  mutuallyExclusive?: boolean;
  requiredRoleId: string | null;
  excludedRoleId: string | null;
  displayOrder: DisplayType;
}

export interface IReactRole {
  id: number;
  name: string;
  roleId: string;
  emojiId: string;
  emojiTag: string | null;
  guildId: string;
  categoryId?: number;
  categoryAddDate: Date;
}

export enum GuildReactType {
  reaction = 0,
  button,
  select,
}

export interface IGuildConfig {
  id: number;
  guildId: string;
  reactType: GuildReactType;
  hideEmojis: boolean;
}

export interface IGuild {
  id: string;
  icon: string;
  name: string;
}

export interface IGuildRole {
  id: string;
  name: string;
  color: number;
  position: number;
  permissions: string;
}

export interface IGuildEmoji {
  id: string;
  name: string;
  animated: boolean;
}

export interface IDiscordGuild {
  roles: IGuildRole[];
  emojis: IGuildEmoji[];
}
