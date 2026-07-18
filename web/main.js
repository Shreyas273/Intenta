(function () {
  var base = (window.INTENTA_API_BASE || "").replace(/\/$/, "");

  function setLink(id, path, label) {
    var el = document.getElementById(id);
    if (!el) return;
    var href = path ? base + path : base + "/";
    el.href = href;
    if (label !== undefined) el.textContent = label;
  }

  setLink("link-docs", "/docs");
  setLink("link-health", "/health");
  setLink("link-api", "/", base);

  var snippet = document.getElementById("curl-snippet");
  if (snippet) {
    snippet.textContent =
      "curl -X POST \"" + base + "/predict\" \\\n" +
      "  -H \"Content-Type: application/json\" \\\n" +
      "  -d '{\"text\": \"my model training failed\"}'";
  }
})();
