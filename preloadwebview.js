document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("body").addEventListener("click", function (e) {
    const atag = e.path.find((item) => item.nodeName === "A");

    if (atag) {
      if (atag.href && atag.target === "_blank") {
        window.open(atag.href);
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });
});
