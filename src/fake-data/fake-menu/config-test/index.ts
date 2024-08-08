import { IApiMenu } from "@/apis/system/menu/type";
import { configTestPage } from "@/fake-data/fake-menu/config-test/test-page";
import { configTestBetterScroll } from "@/fake-data/fake-menu/config-test/test-better-scroll";
import { configTestDebounce } from "@/fake-data/fake-menu/config-test/test-debounce";
import { configTestTimeLine } from "@/fake-data/fake-menu/config-test/test-time-line";
import { configTestSwiper } from "@/fake-data/fake-menu/config-test/test-swiper";
import { configTestHooks } from "@/fake-data/fake-menu/config-test/test-hooks";
import { configTestPDF } from "@/fake-data/fake-menu/config-test/test-pdf";
import { configTestVideo } from "@/fake-data/fake-menu/config-test/test-video";
import { configTestSvg } from "@/fake-data/fake-menu/config-test/test-svg";
import { configTestDraggable } from "@/fake-data/fake-menu/config-test/test-draggable";
import { configTestSuperPage } from "@/fake-data/fake-menu/config-test/test-super-page";

export const configTest: IApiMenu.TBase[] = [
  {
    id: 7788,
    menuName: "测试封装",
    menuPath: "/test",
    menuType: 0,
    menuSource: 1,
    menuPermission: "",
    parentId: 0,
    icon: "",
    path: "",
    hidden: 1,
    componentPath: "",
    child: [
      ...configTestPage,
      ...configTestSuperPage,
      ...configTestBetterScroll,
      ...configTestHooks,
      ...configTestDebounce,
      ...configTestSwiper,
      ...configTestTimeLine,
      ...configTestPDF,
      ...configTestVideo,
      ...configTestSvg,
      ...configTestDraggable
    ]
  }
];
