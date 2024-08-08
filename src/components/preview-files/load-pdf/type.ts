export interface ILoadPDF {
  fileUrl: string;
  handleGetPDFPageInfo: (params: { curtPage: number; total: number }) => void;
}
