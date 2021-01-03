(() => {
  const textArea = document.getElementById("textarea");
  const tags = document.getElementById("tags");

  function createTags(textAreaValue) {
    const currentValues = textAreaValue
      .split(",")
      .map((val) => val.trim())
      .filter((tag) => tag.length > 0)
      .map((val) => `<span class="tag">${val}</span>`)
      .join("");
    tags.innerHTML = currentValues;
  }

  function randomSelect() {
    const countOfTags = tags.querySelectorAll(".tag").length;
    const highlighterInterval = setInterval(() => {
      let highlighter = Math.floor(Math.random() * countOfTags);
      if (tags.querySelector(".tag.highlight"))
        tags.querySelector(".tag.highlight").classList.remove("highlight");
      tags.querySelectorAll(".tag")[highlighter].classList.add("highlight");
      tags.querySelectorAll(".tag")[highlighter].style.transform = "scale(1.1)";
      setTimeout(
        () =>
          (tags.querySelectorAll(".tag")[highlighter].style.transform =
            "scale(1)"),
        50
      );
    }, 100);
    setTimeout(() => {
      clearInterval(highlighterInterval);
      tags.querySelector(".tag.highlight").classList.add("done");
    }, 5000);
  }

  textArea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
      e.target.value = "";
      randomSelect();
    }
  });

  textArea.focus();
})();
