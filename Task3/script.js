// 1. Dataset: Initial Mock User List 
let users = [
    { id: 1, name: "Alex Morgan", email: "alex@edutech.com" },
    { id: 2, name: "Sarah Jenkins", email: "sarah.j@outlook.com" },
    { id: 3, name: "Michael Chang", email: "mchang@dev.io" }
];

// 2. DOM Elements Selection
const userListEl = document.getElementById('userList');
const userForm = document.getElementById('userForm');
const userNameInput = document.getElementById('userName');
const userEmailInput = document.getElementById('userEmail');
const searchBar = document.getElementById('searchBar');
const userCountEl = document.getElementById('userCount');

// 3. Render Function (Updates DOM Elements dynamically)
const renderUsers = (filteredUsers = users) => {
    // Clear previous elements inside list container
    userListEl.innerHTML = '';

    // Update real-time numerical counter 
    userCountEl.textContent = filteredUsers.length;

    // Output visual fallback if filtering yields 0 targets
    if (filteredUsers.length === 0) {
        userListEl.innerHTML = `<li class="empty-state">No users found matching the criteria.</li>`;
        return;
    }

    // Build and inject list items safely with template literals
    filteredUsers.forEach(user => {
        const li = document.createElement('li');
        li.className = 'user-item';
        li.innerHTML = `
            <div class="user-info">
                <div class="user-name">${escapeHTML(user.name)}</div>
                <div class="user-email">${escapeHTML(user.email)}</div>
            </div>
            <button class="btn-delete" data-id="${user.id}">Delete</button>
        `;
        userListEl.appendChild(li);
    });
};

// Security helper: Sanitizes form input variables to prevent raw XSS string injections
const escapeHTML = (str) => {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;");
};

// 4. Interactive Event Handlers

// Add Event Listener for handling new dynamic submission targets
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop native page reload routing

    const name = userNameInput.value.trim();
    const email = userEmailInput.value.trim();

    if (name && email) {
        const newUser = {
            id: Date.now(), // Unique structural Unix timestamp identifier
            name,
            email
        };

        // Push element into array dataset architecture
        users.push(newUser);

        // Update state across UI and clear values from fields
        renderUsers();
        userForm.reset();
        userNameInput.focus();
    }
});

// Event Delegation Architecture for active dynamic click tracking on components
userListEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const userIdToKill = parseInt(e.target.getAttribute('data-id'));
        
        // Strip targeted object matching identity out of source matrix
        users = users.filter(user => user.id !== userIdToKill);
        
        // Execute dynamic search filtering check array re-paint
        handleSearch(); 
    }
});

// 5. Input Event for Live Search / Filter Process
const handleSearch = () => {
    const searchTerm = searchBar.value.toLowerCase();
    const matchedUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm) || 
        user.email.toLowerCase().includes(searchTerm)
    );
    renderUsers(matchedUsers);
};

searchBar.addEventListener('input', handleSearch);

// Initial call paint execution to print mock elements on dashboard startup
renderUsers();