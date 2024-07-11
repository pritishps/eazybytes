document.addEventListener('DOMContentLoaded', () => {
    const contactsTableBody = document.querySelector('#contactsTable tbody');
    const addContactBtn = document.getElementById('addContactBtn');

    const contacts = [
        { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', company: 'Example Inc.' },
        { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', company: 'Sample LLC' }
    ];

    function loadContacts() {
        contactsTableBody.innerHTML = '';
        contacts.forEach(contact => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
                <td>${contact.company}</td>
                <td class="actions">
                    <button onclick="editContact('${contact.name}')">Edit</button>
                    <button onclick="deleteContact('${contact.name}')">Delete</button>
                </td>
            `;
            contactsTableBody.appendChild(row);
        });
    }

    function editContact(name) {
        alert(`Edit contact: ${name}`);
    }

    function deleteContact(name) {
        alert(`Delete contact: ${name}`);
    }

    addContactBtn.addEventListener('click', () => {
        const name = prompt('Enter contact name:');
        const email = prompt('Enter contact email:');
        const phone = prompt('Enter contact phone:');
        const company = prompt('Enter contact company:');
        if (name && email && phone && company) {
            contacts.push({ name, email, phone, company });
            loadContacts();
        }
    });

    loadContacts();
});
