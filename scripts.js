const devices = {
    apple: ['iPhone 15','iPhone 14', 'iPhone 13'],
    samsung: ['Galaxy S23', 'Galaxy Z Flip', 'Galaxy A54']
};

// Initialize Repair Form
document.addEventListener('DOMContentLoaded', function () {
    const deviceSelect = document.getElementById('device');
    
    if (deviceSelect) {
        deviceSelect.innerHTML = '<option value="">Select Device</option>'; // Clear previous options

        // Populate device options
        Object.entries(devices).forEach(([brand, models]) => {
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = `${brand.toUpperCase()} - ${model}`;
                deviceSelect.appendChild(option);
            });
        });
    }

    // Handle Form Submission
    const repairForm = document.getElementById('repairForm');
    if (repairForm) {
        repairForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Form Validation
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const device = deviceSelect.value;

            if (!name || !phone || !address || !device) {
                alert('Please fill out all required fields.');
                return;
            }

            // Display success message (Replace with actual backend integration)
            alert(`Repair scheduled successfully for ${device}!`);
            repairForm.reset();
        });
    }
});

// Show Models
function showModels(brand) {
    const modelList = document.getElementById('modelList');
    if (!modelList) return; // Ensure the element exists

    modelList.innerHTML = devices[brand].map(model => {
        const imgSrc = `${brand}-${model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg`; // Format filename safely
        return `
            <div class="model-card">
                <img src="${imgSrc}" alt="${model}">
                <h4>${model}</h4>
                <button onclick="location.href='repair.html?model=${encodeURIComponent(model)}'">Select</button>
            </div>
        `;
    }).join('');
}
