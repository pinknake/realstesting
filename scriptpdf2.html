async function convertToPDF() {
  const files = document.getElementById("imageInput").files;
  const output = document.getElementById("output");

  if (files.length === 0) {
    output.innerHTML = "<p style='color:red;'>Please select images.</p>";
    return;
  }

  const pdfDoc = await PDFLib.PDFDocument.create();

  for (const file of files) {
    const reader = new FileReader();
    await new Promise((resolve) => {
      reader.onload = async () => {
        const imgBytes = reader.result;
        const image = await pdfDoc.embedJpg(imgBytes).catch(() => pdfDoc.embedPng(imgBytes));
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        resolve();
      };
      reader.readAsArrayBuffer(file);
    });
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  output.innerHTML = `<a href="${url}" download="images.pdf">⬇️ Download PDF</a>`;
}

function shareApp() {
  const msg = "🖼️ Convert images to PDF easily using Bharat Tools!";
  if (navigator.share) {
    navigator.share({
      title: "Image to PDF - Bharat Tools",
      text: msg,
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}
