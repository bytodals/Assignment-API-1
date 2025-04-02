const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});



window.addEventListener("scroll", function() {
    let image = document.getElementById("scrollImage"); 
    if (!image) return; 

    let scrollPosition = window.scrollY; 
    let maxScroll = document.body.scrollHeight - window.innerHeight; 
    let opacity = Math.min(1, 0.3 + (scrollPosition / (maxScroll / 4))); 

    image.style.opacity = opacity;
});



async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error collecting data:', error);
    }
}

function displayUsers(users) {
    const userContainer = document.getElementById('users');
    userContainer.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <button class="toggle-btn" onclick="toggleDetails(this)">more</button>
            <div class="details" style="display: none;">
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            </div>
        `;
        userContainer.appendChild(userCard);
    });
}

function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'hide';
    } else {
        details.style.display = 'none';
        button.textContent = 'more';
    }
}

fetchUsers();

