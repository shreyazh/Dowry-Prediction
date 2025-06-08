document.getElementById('alimonyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const higherEarnerIncome = parseFloat(document.getElementById('higherEarnerIncome').value);
    const dependentIncome = parseFloat(document.getElementById('dependentIncome').value);
    const marriageDuration = parseFloat(document.getElementById('marriageDuration').value);
    const children = parseInt(document.getElementById('children').value);
    const lifestyle = parseFloat(document.getElementById('lifestyle').value);
    const employability = document.getElementById('dependentEmployability').value;
    const assets = parseFloat(document.getElementById('assets').value);

    // Basic validation
    if (!higherEarnerIncome || !dependentIncome || !marriageDuration || isNaN(children) || !lifestyle || !employability || !assets) {
        document.getElementById('result').innerHTML = '<p class="text-danger">Please fill all fields.</p>';
        return;
    }

    // Placeholder calculation (simplified for demo)
    let alimony = 0;
    if (dependentIncome < higherEarnerIncome * 0.5) {
        alimony = lifestyle * 12 * (marriageDuration / 10); // Base on lifestyle and duration
        if (children > 0) alimony += children * 50000; // Add per child support
        if (employability === 'low') alimony *= 1.2; // Adjust for low employability
        if (assets > 1000000) alimony *= 0.9; // Reduce if high assets
    }

    document.getElementById('result').innerHTML = `<p>Estimated Annual Alimony: ₹${Math.round(alimony).toLocaleString()}</p>
        <p class="text-muted">Note: This is an estimate based on general trends and not a legal or definitive value.</p>`;
});
