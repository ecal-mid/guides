window.addEventListener("load", init);

async function init() {
  const options = {
    headers: new Headers({
      "content-type": "text/html",
    }),
  };
  // "https://raw.githubusercontent.com/ecal-mid/guides/master/README.md";
  const url = `./README.md?dev=${Date.now()}`;
  const resp = await fetch(url, options);
  const checklistMarkdown = await resp.text();

  const mainContainer = document.createElement("section");
  mainContainer.id = "main-container";
  mainContainer.innerHTML = marked(checklistMarkdown);
  mainContainer
    .querySelectorAll('ul input[type="checkbox"]')
    .forEach(remapCheckBox);
  document.body.appendChild(mainContainer);
}

function remapCheckBox(checkbox, index) {
  const id = `checkbox-${index}`;
  const prt = checkbox.parentElement;
  const label = document.createElement("label");

  checkbox.disabled = false;
  checkbox.name = checkbox.id = id;

  label.setAttribute("for", id);
  const container = document.createElement("div");
  container.append(...prt.childNodes);
  prt.appendChild(checkbox);
  
  const customCheckbox = cloneTemplate(".checkbox");
  label.appendChild(customCheckbox);
  label.appendChild(container);
  prt.appendChild(label);
  
  // console.log(prt.childNodes)
}

function cloneTemplate(selector, deep = false) {
  return document.querySelector(`#templates>${selector}`).cloneNode(true);
}
