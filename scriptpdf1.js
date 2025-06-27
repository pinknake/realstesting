async function mergePDFs() {
  const fileInput = document.getElementById("pdfFiles");
  const output = document.getElementById("output");

  if (fileInput.files.length < 2) {
    output.innerHTML = "<p style='color:red;'>Please select at least 2 PDF files.</p>";
    return;
  }

  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const file of fileInput.files) {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(bytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedBytes = await mergedPdf.save();
  const blob = new Blob([mergedBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  output.innerHTML = `
    <a href="${url}" download="merged.pdf">⬇️ Download Merged PDF</a>
  `;
}

function shareApp() {
  const message = "📎 Try Bharat PDF Merge Tool - Merge multiple PDFs easily!";
  if (navigator.share) {
    navigator.share({
      title: "Merge PDF - Bharat Tools",
      text: message,
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}
