(() => {
  const insertDiv = document.getElementById("insert");
  const markup = (key, keyCode, code) =>
    `<div class="key" id="event__key">
        <span>${key === " " ? "(space)" : key}</span>
        <small>event.key</small>
      </div>

      <div class="key" id="event__keyCode">
        <span>${keyCode}</span>
        <small>event.keyCode</small>
      </div>

      <div class="key" id="event__code">
        <span>${code}</span>
        <small>event.code</small>
      </div>`;
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    insertDiv.innerHTML = markup(e.key, e.keyCode, e.code);
  });
})();
