
import svgr from "vite-plugin-svgr";
export function setupSvgr() {
    return svgr({ svgrOptions: { icon: true } })
}