// Show selected tab
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// GST calculation
function calculateGST() {
  const amount = parseFloat(document.getElementById('amount').value);
  const gst = parseFloat(document.getElementById('gstRate').value);
  const result = document.getElementById('gstResult');

  if (isNaN(amount) || isNaN(gst)) {
    result.innerHTML = "⚠️ Enter valid amount and GST %.";
    return;
  }

  const tax = (amount * gst) / 100;
  const total = amount + tax;

  result.innerHTML = `
    GST Amount: ₹${tax.toFixed(2)}<br>
    Total Amount: ₹${total.toFixed(2)}
  `;
}

// Share the page using Web Share API
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

// Show default tab on load
window.onload = () => {
  showTab('tab1');
};
