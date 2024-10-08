export interface ISlashCommand {
  title: string;
  description: string;
  usage: string;
  args?: {
    name: string;
    optional: boolean;
    description: string;
  }[];
  subcommands?: {
    title: string;
    description: string;
    usage: string;
    args?: {
      name: string;
      optional: boolean;
      description: string;
    }[];
  }[];
  detailedDescription: string;
}
