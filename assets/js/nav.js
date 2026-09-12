(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      document.body.classList.toggle("nav-open", !open);
    });
  }

  document.querySelectorAll(".nav-drop").forEach(function (drop) {
    var trigger = drop.querySelector(".nav-drop-trigger");
    if (!trigger) return;
    trigger.setAttribute("aria-expanded", "false");
    drop.addEventListener("mouseenter", function () {
      trigger.setAttribute("aria-expanded", "true");
    });
    drop.addEventListener("mouseleave", function () {
      trigger.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".highlight").forEach(function (block) {
    if (block.querySelector(".copy-btn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", function () {
      var code = block.querySelector("pre");
      if (!code) return;
      navigator.clipboard.writeText(code.innerText).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () {
          btn.textContent = "Copy";
        }, 1500);
      });
    });
    block.appendChild(btn);
  });
})();
