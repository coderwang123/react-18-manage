// pdf, img, 视频

import { TMaterialsFileList } from "@/views/order-detail/apply-materials/type";

export const fileListConfig: TMaterialsFileList = [
  {
    name: "主贷人身份证",
    total: 2,
    curt: 0,
    urlKeys: ["cardPortraitPhoto", "cardEmblemPhoto"],
    urlVals: []
  },
  {
    name: "关联人身份证",
    total: 2,
    curt: 0,
    urlKeys: ["relatedPersonCardPortraitPhoto", "relatedPersonCardEmblemPhoto"], // 关联人身份证人像照片URL 关联人身份证国徽照片URL
    urlVals: []
  },
  {
    name: "配偶身份证",
    total: 2,
    curt: 0,
    urlKeys: ["spouseCardPortraitPhoto", "spouseCardEmblemPhoto"],
    urlVals: []
  },
  {
    name: "商业险",
    total: 2,
    curt: 0,
    urlKeys: ["commercialInsuranceUrl"],
    urlVals: []
  },
  {
    name: "交强险",
    total: 2,
    curt: 0,

    urlKeys: ["compulsoryTrafficInsurance"],
    urlVals: []
  },
  {
    name: "行驶证",
    total: 2,
    curt: 0,
    urlKeys: ["drivingLicensePhoto"],
    urlVals: []
  },
  {
    name: "驾驶证",
    total: 2,
    curt: 0,
    urlKeys: ["driverLicenseUrl"],
    urlVals: []
  },

  {
    name: "登记证书（抵押前）",
    total: 5,
    curt: 0,
    urlKeys: ["registrationCertificateUrl"],
    urlVals: []
  },
  {
    name: "登记证书（抵押后）",
    total: 20,
    curt: 0,
    urlKeys: ["mortgagePicsUrl"],
    urlVals: []
  },
  {
    name: "GPS安装照",
    total: 20,
    curt: 0,
    urlKeys: ["gpsInstallationPicsUrl"],
    urlVals: []
  },
  {
    name: "收入证明",
    total: 20,
    curt: 0,

    urlKeys: ["incomeProofUrl"],
    urlVals: []
  },
  {
    name: "车辆评估报告",
    total: 20,
    curt: 0,
    urlKeys: ["evaluationReportUrl"],
    urlVals: []
  },

  //  -------------------
  {
    name: "结婚证",
    total: 10,
    curt: 0,
    urlKeys: ["marriageCertificateUrl"],
    urlVals: []
  },
  {
    name: "离婚证",
    total: 10,
    curt: 0,
    urlKeys: ["divorceCertificateUrl"],
    urlVals: []
  },
  {
    name: "居住证明(大于20万需要上传)",
    total: 1,
    curt: 0,
    urlKeys: ["residenceCertificateUrl"],
    urlVals: []
  },
  {
    name: "公里数照片",
    total: 1,
    curt: 0,
    urlKeys: ["mileageUrl"],
    urlVals: []
  },
  {
    name: "车辆正前",
    total: 1,
    curt: 0,
    urlKeys: ["vehicleFrontUrl"],
    urlVals: []
  },
  {
    name: "车辆左前",
    total: 1,
    curt: 0,
    urlKeys: ["leftFrontVehicleUrl"],
    urlVals: []
  },
  {
    name: "车辆右后",
    total: 1,
    curt: 0,
    urlKeys: ["rightRearVehicleUrl"],
    urlVals: []
  },
  {
    name: "发动机正前",
    total: 1,
    curt: 0,
    urlKeys: ["engineFrontUrl"],
    urlVals: []
  },
  {
    name: "车架号",
    total: 1,
    curt: 0,
    urlKeys: ["vinNumberUrl"],
    urlVals: []
  },
  {
    name: "车辆前座位",
    total: 1,
    curt: 0,
    urlKeys: ["vehicleFrontSeatUrl"],
    urlVals: []
  },
  {
    name: "中控全景",
    total: 1,
    curt: 0,
    urlKeys: ["centralControlViewUrl"],
    urlVals: []
  },
  {
    name: "车、车主和客户经理合照",
    total: 1,
    curt: 0,
    urlKeys: ["groupPhotoUrl"],
    urlVals: []
  },
  {
    name: "其他授信材料",
    total: 50,
    curt: 0,
    urlKeys: ["otherCreditMaterialsUrl"],
    urlVals: []
  }

  // {
  //   name: "结婚证",
  //   total: 2,
  //   curt: 0
  // },
  // {
  //   name: "居民证明",
  //   total: 2,
  //   curt: 0
  // },
  // {
  //   name: "车辆正前",
  //   total: 2,
  //   curt: 0
  // },
  // {
  //   name: "车辆右后",
  //   total: 2,
  //   curt: 0
  // }
];

export function getUrlInfo(url: string) {
  if (url.toString().startsWith("https") || url.toString().startsWith("http")) {
    if (url?.includes(".jpg") || url?.includes(".jpeg") || url?.includes(".png") || url?.includes(".webp")) {
      return {
        type: "image",
        url
      };
    }

    if (url?.includes(".pdf")) {
      return {
        type: "pdf",
        url:
          process.env.NODE_ENV == "production"
            ? url
            : "https://w1234567.oss-cn-hangzhou.aliyuncs.com/%E2%80%9D%E6%B5%99%E6%94%BF%E9%92%89%E2%80%9C%20xxxx%E5%BA%94%E7%94%A8%E5%AE%89%E5%85%A8%E6%8A%A5%E5%91%8A.pdf"
      };
    }

    if (url?.includes(".mp4")) {
      return {
        type: "video",
        url
      };
    }
  }
}
