document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropbtn");
    const dropdownItems = document.querySelectorAll(".dropdown-content a");

    /*for selecting pet */
    dropdownItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const selectedPet = this.getAttribute("data-value");
            dropdownButton.innerHTML = `<i class="fas fa-paw"></i> ${this.innerText} <i class="fas fa-chevron-down"></i>`;
            dropdownButton.setAttribute("data-selected", selectedPet);
        });
    });

    const openButtons = document.querySelectorAll(".Info-button"); // Select all info buttons
    const closeButton = document.querySelector(".closebtn"); // Select the close button
    const modal = document.getElementById("modal"); // Select the modal

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex"; // Open modal when any info button is clicked
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none"; // Close modal when close button is clicked
    });
});

// Function to open the adoption modal
function openAdoptionModal() {
    document.getElementById("adoptionModal").style.display = "block"; // Show the adoption modal
}

// Function to open pet info modal
function openModal(name, location, traits, medical, imageUrl) {
    document.getElementById('petName').innerText = name;
    document.getElementById('petLocation').innerText = location;
    document.getElementById('petTraits').innerText = traits;
    document.getElementById('petMedical').innerText = medical;
    document.getElementById('petImage').src = imageUrl;

    // Add event listener to the adopt button
    const adoptButton = document.querySelector(".adopt-btn");
    adoptButton.onclick = openAdoptionModal;

    document.getElementById('modal').style.display = 'block'; 
}

// Function to go back to pet info from adoption form
function goBackToPetInfo() {
    document.getElementById('adoptionModal').style.display = 'none';
    document.getElementById('modal').style.display = 'block';
}

// Function to close modal and redirect to adopt page
function closeAndRedirect() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('adoptionModal').style.display = 'none';
    setTimeout(() => {
        window.location.href = 'adopt.html';
    }, 300);
}

// Function for filtering pets
function filterPets(category) {
    const sections = document.querySelectorAll('.pet-section');
    
    sections.forEach(section => {
        if (category === 'all') {
            section.style.display = 'block';
        } else if (section.id === `${category}-section`) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Set default view to show all pets
window.onload = function() {
    filterPets('all');
};

// Function to search pets
function searchPets() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const petCards = document.querySelectorAll('.pet-section .pets > div');

    petCards.forEach(card => {
        const petName = card.querySelector('h4').innerText.toLowerCase();
        if (petName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Donation form functionality
document.addEventListener("DOMContentLoaded", () => {
    const cardOption = document.getElementById("card");
    const ewalletOption = document.getElementById("ewallet");
    const cardDetails = document.getElementById("cardDetails");
    const ewalletOptions = document.getElementById("ewalletOptions");

    cardOption.addEventListener("change", () => {
        cardDetails.classList.remove("hidden");
        ewalletOptions.classList.add("hidden");
    });

    ewalletOption.addEventListener("change", () => {
        cardDetails.classList.add("hidden");
        ewalletOptions.classList.remove("hidden");
    });

    document.getElementById("donationForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const amount = document.getElementById("amount").value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        let paymentInfo = "";
        if (paymentMethod === "card") {
            const cardNumber = document.getElementById("cardNumber").value;
            const expiryDate = document.getElementById("expiryDate").value;
            const cvv = document.getElementById("cvv").value;

            if (!cardNumber || !expiryDate || !cvv) {
                alert("Please fill in all card details.");
                return;
            }

            paymentInfo = `Card Number: ${cardNumber}, Expiry: ${expiryDate}, CVV: ${cvv}`;
        } else if (paymentMethod === "ewallet") {
            const wallet = document.getElementById("wallet").value;
            const phoneNumber = document.getElementById("phoneNumber").value;

            if (!wallet || !phoneNumber) {
                alert("Please fill in all e-wallet details.");
                return;
            }

            paymentInfo = `E-Wallet: ${wallet}, Phone: ${phoneNumber}`;
        }

        alert(`Donation Successful!\n\nName: ${name}\nEmail: ${email}\nAmount: ₱${amount}\nPayment: ${paymentInfo}`);
        
        document.getElementById("donationForm").reset();
        cardDetails.classList.add("hidden");
        ewalletOptions.classList.add("hidden");
    });
});