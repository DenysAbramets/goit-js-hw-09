!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=null;t.addEventListener("click",(function(){d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0})),e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.011dd1ec.js.map
