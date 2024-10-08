import openModal from "@/ui/modal";
import log from "@log";

interface VOD {
  quality: number;
  frameRate: number;
  BaseURL: string;
}

// 상황에 따라 async function으로 구현할 수 있습니다.
export default function initVod(enable: boolean) {
  if (!enable) {
    // 기능을 비활성화 할 때 실행할 코드
    if (typeof window.chzzkExt.voddl !== "undefined") {
      clearInterval(window.chzzkExt.voddl);
      delete window.chzzkExt.voddl;
    }
    document.querySelector(`button[chzzkExt="voddl"]`)?.remove();
    return;
  }
  // 기능을 활성화 할 때 실행할 코드
  const intervaller = () => {
    const dls = document.body.getAttribute("chzzkext_dl");
    if (!dls) return;
    const apcont = document.querySelector(
      "[class*=video_information_container]"
    );
    if (document.querySelector(`button[chzzkExt="voddl"]`)) return;
    if (!apcont) return;
    const parsed = JSON.parse(dls) as VOD[];

    const dlrow = document.createElement("div");
    dlrow.style.marginTop = "15px";
    dlrow.style.display = "flex";
    dlrow.style.flexWrap = "wrap";
    dlrow.style.justifyContent = "flex-end";
    dlrow.style.alignItems = "center";
    dlrow.style.width = "100%";
    dlrow.style.overflow = "hidden";

    const dlbutton = document.createElement("button");
    dlbutton.setAttribute("chzzkExt", "voddl");
    dlbutton.style.backgroundColor = "var(--color-content-chzzk-02)";
    dlbutton.style.color = "var(--color-content-09)";
    dlbutton.style.fontWeight = "bold";
    dlbutton.style.border = "none";
    dlbutton.style.borderRadius = "17px";
    dlbutton.style.height = "34px";
    dlbutton.style.padding = "0 12px";
    dlbutton.style.fontSize = "14px";
    dlbutton.style.cursor = "pointer";
    dlbutton.style.display = "flex";
    dlbutton.style.alignItems = "center";
    dlbutton.style.justifyContent = "center";
    dlbutton.style.letterSpacing = "-0.3px";

    const run = () => {
      let downloading = false;
      const voddllist = document.createElement("div");
      voddllist.style.padding = "10px";
      voddllist.style.display = "flex";
      voddllist.style.flexWrap = "wrap";
      voddllist.style.flexDirection = "column";
      voddllist.style.gap = "5px";

      const id = Math.random().toString(36).substr(2, 9);
      const onclis: Array<() => void> = [];
      const createVodItem = (v: VOD) => {
        const voditem = document.createElement("button");
        voditem.style.width = "100%";
        voditem.style.padding = "7px";
        voditem.style.background = "var(--color-bg-overlay-05)";
        voditem.style.border = `2px solid var(--color-bg-overlay-05)`;
        voditem.style.borderRadius = "8px";
        voditem.innerText = `${v.quality}p ${v.frameRate}fps`;
        voditem.setAttribute("chzzkExt", "voddl_" + id);

        voditem.onclick = async () => {
          // open url v.BaseURL
          window.open(v.BaseURL, "_blank");
        };

        return voditem;
      };
      parsed.forEach((v) => {
        voddllist.appendChild(createVodItem(v));
      });

      openModal({
        title: "VOD 다운로드",
        body: voddllist,
        onClose() {
          onclis.forEach((v) => v());
        },
      });
    };

    dlbutton.onclick = run;

    dlbutton.innerText = "VOD 다운로드";
    dlrow.appendChild(dlbutton);

    apcont.appendChild(dlrow);
  };
  window.chzzkExt.voddl = setInterval(intervaller, 100);
}
