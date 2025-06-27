async function convertPDF() {
  const input = document.getElementById("pdfInput");
  const output = document.getElementById("imagesArea");
  output.innerHTML = "";

  if (!input.files[0]) {
    output.innerHTML = "<p style='color:red;'>Please upload a PDF file.</p>";
    return;
  }

  const file = input.files[0];
  const fileReader = new FileReader();

  fileReader.onload = async function () {
    const typedArray = new Uint8Array(this.result);
    const pdf = await pdfjsLib.getDocument(typedArray).promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 2 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;

      const img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      output.appendChild(img);
    }
  };

  fileReader.readAsArrayBuffer(file);
}

function shareApp() {
  const msg = "📄 Convert PDF to images easily using Bharat Tools!";
  if (navigator.share) {
    navigator.share({
      title: "PDF to Image - Bharat Tools",
      text: msg,
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}
