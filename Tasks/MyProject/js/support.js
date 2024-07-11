document.addEventListener('DOMContentLoaded', () => {
    const supportTableBody = document.querySelector('#supportTable tbody');
    const addTicketBtn = document.getElementById('addTicketBtn');

    const tickets = [
        { ticketId: 'T001', customerName: 'John Doe', issue: 'Login problem', status: 'Open' },
        { ticketId: 'T002', customerName: 'Jane Smith', issue: 'Payment failure', status: 'Resolved' }
    ];

    function loadTickets() {
        supportTableBody.innerHTML = '';
        tickets.forEach(ticket => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${ticket.ticketId}</td>
                <td>${ticket.customerName}</td>
                <td>${ticket.issue}</td>
                <td>${ticket.status}</td>
                <td class="actions">
                    <button onclick="editTicket('${ticket.ticketId}')">Edit</button>
                    <button onclick="deleteTicket('${ticket.ticketId}')">Delete</button>
                </td>
            `;
            supportTableBody.appendChild(row);
        });
    }

    function editTicket(ticketId) {
        alert(`Edit ticket: ${ticketId}`);
    }

    function deleteTicket(ticketId) {
        alert(`Delete ticket: ${ticketId}`);
    }

    addTicketBtn.addEventListener('click', () => {
        const ticketId = prompt('Enter ticket ID:');
        const customerName = prompt('Enter customer name:');
        const issue = prompt('Enter issue:');
        const status = prompt('Enter status:');
        if (ticketId && customerName && issue && status) {
            tickets.push({ ticketId, customerName, issue, status });
            loadTickets();
        }
    });

    loadTickets();
});
