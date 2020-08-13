window.addEventListener("load", init);

async function init() {
  const options = {
    headers: new Headers({
      "content-type": "text/html",
    }),
  };
  // "https://raw.githubusercontent.com/ecal-mid/guides/master/README.md";
  const url = noCacheURL('./README.md');
  const resp = await fetch(url, options);
  const checklistMarkdown = await resp.text();

  const mainContainer = document.createElement("section");
  mainContainer.id = "main-container";
  mainContainer.innerHTML = marked(checklistMarkdown);
  mainContainer
    .querySelectorAll('ul input[type="checkbox"]')
    .forEach(remapCheckBox);
  document.body.appendChild(mainContainer);

  document
    .querySelectorAll("h1, h2")
    .forEach((elem) =>
      clickableHeading(
        elem,
        "javascript:window.location.href=window.location.href"
      )
    );
}

function noCacheURL(url) {
  return `${url}?dev=${Date.now()}`;
}

function remapCheckBox(checkbox, index) {
  const id = `checkbox-${index}`;
  const prt = checkbox.parentElement;
  const label = document.createElement("label");

  checkbox.disabled = false;
  checkbox.name = checkbox.id = id;

  label.setAttribute("for", id);
  const container = document.createElement("div");
  container.className = "item";
  container.append(...prt.childNodes);

  prt.appendChild(checkbox);

  const customCheckbox = cloneTemplate(".checkbox");
  label.appendChild(customCheckbox);
  label.appendChild(container);
  prt.appendChild(label);

  setCollapse(container);

  // console.log(prt.childNodes)
}

function clickableHeading(elem, link) {
  let aTag = document.createElement("a");
  aTag.href = link;
  let children = elem.childNodes;
  aTag.append(...children);
  elem.appendChild(aTag);
  return aTag;
}

function clickCollapse(e) {
  e.preventDefault();
  this.previousSibling.classList.toggle("collapsed");
}

function setCollapse(container) {
  container.querySelectorAll(":scope>ul").forEach(function (ul) {
    // let item = ul.parentElement;
    // let btn = cloneTemplate('.btn-more');
    // item.appendChild(btn)
    // item.classList.toggle('collapsed');

    let siblings = getPreviousSiblings(ul);
    // summaryInner.parentElement.insertBefore(details, ul);
    // let clickable = document.createElement('div');
    // prev.parentElement.insertBefore('clickable', prev)
    console.log(siblings);
    let summary = document.createElement("summary");
    let details = document.createElement("details");
    ul.parentElement.insertBefore(details, ul);
    summary.append(...siblings);
    details.appendChild(summary);
    details.appendChild(ul);

    let prt = details.parentElement;
    prt.parentElement.insertBefore(details, prt);
    prt.remove();
  });

  function toggleCollapse() {
    console.log("hey", this);
    // this.classList.toggle('collapsed')
  }
}

function cloneTemplate(selector, deep = false) {
  return document.querySelector(`#templates>${selector}`).cloneNode(true);
}

function getPreviousSiblings(elem, filter) {
  var sibs = [];
  while ((elem = elem.previousSibling)) {
    if (!filter || filter(elem)) sibs.unshift(elem);
  }
  return sibs;
}
