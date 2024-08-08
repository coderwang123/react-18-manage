export interface IPreviewFileModal {
  fileList: TFileList;
  curtIndex: number;
  handleClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  scrollPosition: any;
}

export type TFileList = { type: "image" | "pdf" | "video"; url: string }[];
