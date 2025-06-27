// Show selected tab
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// GST Direct Calculation
function calculateGST() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('gstRate').value);
  const result = document.getElementById('gstResult');

  if (isNaN(amount) || isNaN(rate)) {
    result.innerHTML = "<p style='color:red'>Please enter valid values.</p>";
    return;
  }

  const gstAmount = (amount * rate) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const total = amount + gstAmount;

  result.innerHTML = `
    <p>GST @ ${rate}%: ₹${gstAmount.toFixed(2)}</p>
    <p>CGST: ₹${cgst.toFixed(2)} | SGST: ₹${sgst.toFixed(2)}</p>
    <h3>Total: ₹${total.toFixed(2)}</h3>
  `;
}

// Manual Calculator
let manualInput = "";

function press(val) {
  manualInput += val;
  document.getElementById("manualDisplay").value = manualInput;
}

function clearManual() {
  manualInput = "";
  document.getElementById("manualDisplay").value = "";
}

function calculateManual() {
  try {
    const result = eval(manualInput);
    document.getElementById("manualDisplay").value = result;
    manualInput = result.toString();
  } catch (e) {
    document.getElementById("manualDisplay").value = "Error";
    manualInput = "";
  }
}

// Service + Electricity
function calculateServiceElectric() {
  const service = parseFloat(document.getElementById("serviceCharge").value) || 0;
  const units = parseFloat(document.getElementById("unitsUsed").value) || 0;
  const rate = parseFloat(document.getElementById("unitRate").value) || 0;

  const electricity = units * rate;
  const total = service + electricity;

  document.getElementById("serviceElectricResult").innerHTML = `
    <p>Service Charge: ₹${service.toFixed(2)}</p>
    <p>Electricity Cost (${units} × ₹${rate}): ₹${electricity.toFixed(2)}</p>
    <h3>Total Bill: ₹${total.toFixed(2)}</h3>
  `;
}

// TDS Calculator
function calculateTDS() {
  const amount = parseFloat(document.getElementById("tdsAmount").value) || 0;
  const rate = parseFloat(document.getElementById("tdsRate").value) || 0;

  const tds = (amount * rate) / 100;
  const payable = amount - tds;

  document.getElementById("tdsResult").innerHTML = `
    <p>TDS Deducted: ₹${tds.toFixed(2)}</p>
    <p>Net Payable: ₹${payable.toFixed(2)}</p>
  `;
}

// Excise Duty
function calculateExcise() {
  const price = parseFloat(document.getElementById("excisePrice").value) || 0;
  const rate = parseFloat(document.getElementById("exciseRate").value) || 0;

  const excise = (price * rate) / 100;
  const total = price + excise;

  document.getElementById("exciseResult").innerHTML = `
    <p>Excise Duty: ₹${excise.toFixed(2)}</p>
    <p>Total Price: ₹${total.toFixed(2)}</p>
  `;
}

// Share App
function sharePage() {
  const message = "💰 Check out Bharat Tax Calculator - Calculate GST, TDS, and more!";
  if (navigator.share) {
    navigator.share({
      title: "Bharat Tax Calculator",
      text: message,
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}

// Load default tab
window.onload = () => {
  showTab('tab1');
};
