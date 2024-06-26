document.getElementById('payoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountNo = document.getElementById('accountNo').value.trim();
    const ifscCode = document.getElementById('ifscCode').value.trim();
    const upiId = document.getElementById('upiId').value.trim();
    const message = document.getElementById('message');

    if ((accountNo && ifscCode) || upiId) {
        message.style.color = 'green';
        message.textContent = 'Payout request submitted successfully!';
        // Add your AJAX request here to send the data to the server
        // Example:
        // fetch('/submit-payout', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ accountNo, ifscCode, upiId })
        // }).then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // });
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill either Account Number and IFSC Code or UPI ID.';
    }
});