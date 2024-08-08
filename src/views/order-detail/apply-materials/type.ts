import { TFileList } from "@/components/preview-files";

export interface IApplyMaterials {
  detailInfo: any;
  fileList: TMaterialsFileList;
}
export type TMaterialsFileList = {
  name: string;
  total: number;
  curt: number;
  urlKeys: string[];
  urlVals: TFileList;
}[];
