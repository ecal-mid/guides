window.addEventListener("load", init);

async function init() {
  const options = {
    headers: new Headers({
      "content-type": "text/html",
    }),
  };
    // "https://raw.githubusercontent.com/ecal-mid/guides/master/README.md";
  const url =`./README.md?dev=${Date.now()}`;
  const resp = await fetch(url, options);
  const checklistMarkdown = await resp.text();
  console.log(url, checklistMarkdown)
  document.body.innerHTML = marked(checklistMarkdown);

  document.querySelectorAll('ul input[type="checkbox"]').forEach(remapCheckBox);
}

function remapCheckBox(checkbox, index) {
  checkbox.disabled = false;
  checkbox.name = `checkbox-${index}`;
  console.log(checkbox.nextSibling);
}
