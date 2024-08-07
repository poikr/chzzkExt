const createCustomAlertBox = (content: string) => {
  const outer = document.createElement("div");
  outer.style.padding = "4px 8px";
  outer.style.marginBottom = "3px";

  const outerinner = document.createElement("div");
  outerinner.style.fontSize = "13px";
  outerinner.style.fontWeight = "500";
  outerinner.style.lineHeight = "18px";
  outerinner.style.textAlign = "left";
  outerinner.style.wordWrap = "break-word";
  outerinner.style.color = "var(--color-content-04)";
  outerinner.style.wordBreak = "break-all";
  outer.appendChild(outerinner);

  const inner = document.createElement("div");
  inner.style.display = "flex";
  inner.style.padding = "11px 18px 12px";
  inner.style.backgroundColor = "var(--color-bg-layer-01)";
  inner.style.borderRadius = "8px";
  outerinner.appendChild(inner);

  inner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: 15px; color:var(--color-content-02);flex:none;margin:1px 10px 0 0" height="40" viewBox="0 -960 960 960" width="40"><path fill="currentColor" d="M354.667-120H186.666q-27 0-46.833-19.833T120-186.666v-168.001q45.333-3.333 78.333-33.166 33-29.834 33-74.167t-33-74.167Q165.333-566 120-569.333v-168.001q0-27 19.833-46.833T186.666-804H358q7.333-40.667 36-68.333Q422.667-900 463.333-900q40.667 0 69.334 27.667 28.666 27.666 36 68.333h168.667q27 0 46.833 19.833T804-737.334v168.667q40.667 7.334 67.333 37.334 26.667 30 26.667 70.666 0 40.667-26.667 68.334-26.666 27.666-67.333 35v170.667q0 27-19.833 46.833T737.334-120H569.333q-3.333-48.667-34.166-80-30.834-31.333-73.167-31.333T388.833-200Q358-168.667 354.667-120Zm-168.001-66.666h115.001q24.667-62.667 72.259-87 47.591-24.333 87.999-24.333 40.408 0 88.075 24.333 47.666 24.333 72.333 87h115.001v-236.667H794q16 0 26.667-10.667 10.667-10.666 10.667-26.667 0-16-10.667-26.667Q810-498.001 794-498.001h-56.666v-239.333H500.667V-796q0-16-10.667-26.667-10.666-10.667-26.667-10.667-16 0-26.667 10.667Q426-812 426-796v58.666H186.666v116.001q50.1 18.544 80.717 62.124 30.616 43.579 30.616 97.357 0 52.852-30.666 96.518-30.667 43.667-80.667 62.667v116.001Zm276.667-274.001Z"/></svg>`;
  const p = document.createElement("p");
  p.innerHTML = content;
  inner.appendChild(p);
  return outer;
};

export default createCustomAlertBox;
