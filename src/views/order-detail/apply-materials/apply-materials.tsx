import React, { memo, useEffect, useState } from "react";
import classNames from "classnames";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import StyledApplyMaterials from "./style";
import { IApplyMaterials } from "./type";

import BScroll from "@/components/b-scroll/b-scroll";
import { AllFileList, TFileList } from "@/components/preview-files";
import { AEmpty } from "@/components/ant-data-show-cpns";

const ApplyMaterials: React.FC<IApplyMaterials> = (props) => {
  const { fileList } = props;

  const [curtIndex, setCurtIndex] = useState(0);

  const [curtFileList, setCurtFileList] = useState<TFileList>([]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setCurtFileList(fileList?.[0]?.urlVals ?? []);
    });
  }, []);

  return (
    <StyledApplyMaterials className={"app-container"}>
      <LazyLoadComponent>
        <ul className={"type-wrap"}>
          <BScroll>
            {fileList.map((item, index) => {
              return (
                <li
                  key={index}
                  className={curtIndex === index ? "active" : ""}
                  onClick={() => {
                    window.requestAnimationFrame(() => {
                      setCurtFileList(fileList[index]?.urlVals);
                    });
                    setCurtIndex(index);
                  }}
                >
                  {item.name} ({item.curt}/{item.total})
                </li>
              );
            })}
          </BScroll>
        </ul>
        <div className={classNames(["content-wrap", "preview-www"])}>
          {curtFileList && curtFileList?.length > 0 ? <AllFileList fileList={curtFileList} /> : <AEmpty />}
        </div>{" "}
      </LazyLoadComponent>
    </StyledApplyMaterials>
  );
};

export default memo(ApplyMaterials);
