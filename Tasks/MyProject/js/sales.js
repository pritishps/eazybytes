document.addEventListener('DOMContentLoaded', () => {
    const salesTableBody = document.querySelector('#salesTable tbody');
    const addSaleBtn = document.getElementById('addSaleBtn');

    const sales = [
        { dealName: 'Deal 1', stage: 'Prospect', value: '$1000', closeDate: '2024-07-31' },
        { dealName: 'Deal 2', stage: 'Negotiation', value: '$5000', closeDate: '2024-08-15' }
    ];

    function loadSales() {
        salesTableBody.innerHTML = '';
        sales.forEach(sale => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sale.dealName}</td>
                <td>${sale.stage}</td>
                <td>${sale.value}</td>
                <td>${sale.closeDate}</td>
                <td class="actions">
                    <button onclick="editSale('${sale.dealName}')">Edit</button>
                    <button onclick="deleteSale('${sale.dealName}')">Delete</button>
                </td>
            `;
            salesTableBody.appendChild(row);
        });
    }

    function editSale(dealName) {
        alert(`Edit sale: ${dealName}`);
    }

    function deleteSale(dealName) {
        alert(`Delete sale: ${dealName}`);
    }

    addSaleBtn.addEventListener('click', () => {
        const dealName = prompt('Enter deal name:');
        const stage = prompt('Enter stage:');
        const value = prompt('Enter value:');
        const closeDate = prompt('Enter close date:');
        if (dealName && stage && value && closeDate) {
            sales.push({ dealName, stage, value, closeDate });
            loadSales();
        }
    });

    loadSales();
});
