const t={body:document.querySelector("body"),buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};t.buttonStart.addEventListener("click",(function(e){o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(e){clearInterval(o),t.buttonStart.disabled=!1}));let o=null;
//# sourceMappingURL=01-color-switcher.b219fabc.js.map
