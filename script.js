// DOM elements
const amountInput = document.getElementById("amount");
const gstInput = document.getElementById("gst");
const gstTypeInputs = document.getElementsByName("gstType");
const calcBtn = document.getElementById("calcBtn");
const resultBox = document.getElementById("result");

// Calculate GST logic
function calculateGST() {
  const amount = parseFloat(amountInput.value);
  const gstRate = parseFloat(gstInput.value);

  if (isNaN(amount) || isNaN(gstRate)) {
    resultBox.innerHTML = "❌ Please enter valid Amount and GST rate.";
    return;
  }

  // GST calculation
  const gstAmount = (amount * gstRate) / 100;

  let selectedType = "cgst_sgst";
  gstTypeInputs.forEach((input) => {
    if (input.checked) selectedType = input.value;
  });

  let finalAmount = 0;
  let resultText = "";

  if (selectedType === "cgst_sgst") {
    const halfGST = gstAmount / 2;
    finalAmount = amount + gstAmount;
    resultText = `
      💰 Base Amount: ₹${amount.toFixed(2)} <br>
      🔹 CGST (${(gstRate / 2).toFixed(1)}%): ₹${halfGST.toFixed(2)}<br>
      🔸 SGST (${(gstRate / 2).toFixed(1)}%): ₹${halfGST.toFixed(2)}<br>
      📦 Total GST: ₹${gstAmount.toFixed(2)} <br>
      ✅ Final Amount: ₹${finalAmount.toFixed(2)}
    `;
  } else if (selectedType === "igst") {
    finalAmount = amount + gstAmount;
    resultText = `
      💰 Base Amount: ₹${amount.toFixed(2)} <br>
      🌐 IGST (${gstRate}%): ₹${gstAmount.toFixed(2)}<br>
      ✅ Final Amount: ₹${finalAmount.toFixed(2)}
    `;
  }

  resultBox.innerHTML = resultText;
}

// Attach click event
calcBtn.addEventListener("click", calculateGST);
