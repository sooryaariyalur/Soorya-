const pdfInput = document.getElementById("pdfInput");
const fileName = document.getElementById("fileName");
const pdfContainer = document.getElementById("pdfContainer");

pdfInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
        alert("PDF கோப்பை மட்டும் தேர்வு செய்யவும்.");
        this.value = "";
        fileName.textContent = "";
        return;
    }

    fileName.textContent = "தேர்வு செய்யப்பட்ட கோப்பு: " + file.name;

    const pdfURL = URL.createObjectURL(file);

    pdfContainer.innerHTML = "";

    const item = document.createElement("div");
    item.className = "pdf-item";

    const name = document.createElement("span");
    name.className = "pdf-name";
    name.textContent = "📄 " + file.name;

    const view = document.createElement("a");
    view.className = "view-button";
    view.href = pdfURL;
    view.target = "_blank";
    view.textContent = "PDF பார்க்க";

    item.appendChild(name);
    item.appendChild(view);

    pdfContainer.appendChild(item);
});
