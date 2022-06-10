export type MatterState = {
  step: number;
  loading: boolean;
  matterName: string;
  matterId: number | undefined;
  files: File[];
};

export type CreateMatterRequestArgs = {
  matter_name: string;
};

export type AddDocumentsRequestArgs = {
  files: File[];
};
