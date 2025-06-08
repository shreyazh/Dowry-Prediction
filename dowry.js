document.getElementById('dowryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const brideIncome = parseFloat(document.getElementById('brideFamilyIncome').value);
    const groomIncome = parseFloat(document.getElementById('groomFamilyIncome').value);
    const brideEducation = document.getElementById('brideEducation').value;
    const groomEducation = document.getElementById('groomEducation').value;
    const caste = document.getElementById('caste').value;
    const region = document.getElementById('region').value;
    const marriageType = document.getElementById('marriageType').value;

    // Basic validation
    if (!brideIncome || !groomIncome || !brideEducation || !groomEducation || !caste || !region || !marriageType) {
        document.getElementById('result').innerHTML = '<p class="text-danger">Please fill all fields.</p>';
        return;
    }

    // Placeholder calculation (simplified for demo)
    let baseDowry = brideIncome * 0.14; // Based on average dowry as 14% of household income[](https://www.bbc.com/news/world-asia-india-57677253)
    if (region === 'kerala') baseDowry *= 1.5; // Higher dowry in Kerala[](https://www.bbc.com/news/world-asia-india-57677253)
    if (marriageType === 'arranged') baseDowry *= 1.2; // Arranged marriages often have higher dowry
    if (caste === 'general') baseDowry *= 1.1; // Higher caste may expect more

    document.getElementById('result').innerHTML = `<p>Estimated Dowry: ₹${Math.round(baseDowry).toLocaleString()}</p>
        <p class="text-muted">Note: This is an estimate based on general trends and not a legal or definitive value.</p>`;
});
