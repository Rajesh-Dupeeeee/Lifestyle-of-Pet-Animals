<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FureverFriends</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Basic styles for modal popup */
        .modal {
            display: none;
            position: fixed;
            z-index: 999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background: #fff;
            padding: 20px 30px;
            border-radius: 10px;
            position: relative;
            width: 90%;
            max-width: 500px;
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 25px;
            cursor: pointer;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group.invalid input,
        .form-group.invalid textarea {
            border: 2px solid red;
        }
        .error-message {
            color: red;
            font-size: 12px;
            display: none;
        }
        .form-group.invalid .error-message {
            display: block;
        }
        .submit-btn {
            background-color: #ff7f50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <!-- Fixed Navigation Bar -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <img src="images/logo.png" width="250px" alt="FureverFriends Logo">
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutDogs">About Dogs</a></li>
                <li><a href="#careTip">Care Tips</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#adopt" id="adoptNav">Adopt</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <div class="container">
        <div class="hero-section" id="home">
            <div class="hero-content">
                <p>Find Your</p>
                <p>Furever</p>
                <p>Friend</p>
                <button class="conBtn" type="button" id="adoptBtn">Adopt Now</button>
            </div>
            <div class="hero-image">
                <img src="images/hero.png" alt="Happy dogs together">
            </div>
        </div>
    </div>

    <!-- About Dogs Section -->
    <section id="aboutDogs">
        <div class="container">
            <h2 class="section-title">About Dogs</h2>
            <div class="about-content">
                <div class="about-text animate-on-scroll">
                    <h3>Man's Best Friend</h3>
                    <p>Dogs have been our loyal companions for thousands of years...</p>
                    <!-- Add your content here -->
                </div>
                <div class="about-image animate-on-scroll">
                    <img src="images/about-dog.jpg" alt="Various dog breeds">
                </div>
            </div>
        </div>
    </section>

    <!-- Care Tips Section -->
    <section id="careTip">
        <div class="container">
            <h2 class="section-title">Dog Care Tips</h2>
            <div class="tips-container">
                <!-- Add your tip cards here -->
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="Gallery">
        <div class="container">
            <h2 class="section-title">Adorable Gallery</h2>
            <div class="gallery-container">
                <!-- Add gallery items here -->
            </div>
        </div>
    </section>

    <!-- Adoption Form Modal -->
    <div class="modal" id="adoptModal">
        <div class="modal-content">
            <span class="close-btn" id="closeModal">&times;</span>
            <h2 class="form-title">Adoption Application</h2>
            <form id="adoptionForm">
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Enter your full name">
                    <div class="error-message" id="nameError">Please enter at least 3 characters</div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email">
                    <div class="error-message" id="emailError">Enter a valid email</div>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                    <div class="error-message" id="phoneError">Enter at least 10 digits</div>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Enter your address">
                    <div class="error-message" id="addressError">Enter at least 10 characters</div>
                </div>
                <div class="form-group">
                    <label for="home">Home Environment</label>
                    <textarea id="home" name="home" placeholder="Describe your home..."></textarea>
                    <div class="error-message" id="homeError">Enter at least 20 characters</div>
                </div>
                <button type="submit" class="submit-btn">Submit Application</button>
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2023 FureverFriends. All rights reserved.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        const adoptNav = document.getElementById('adoptNav');
        const adoptBtn = document.getElementById('adoptBtn');
        const modal = document.getElementById('adoptModal');
        const closeBtn = document.getElementById('closeModal');
        const form = document.getElementById('adoptionForm');

        // Open modal
        adoptNav.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        adoptBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Validation functions
        function validateName() {
            const name = document.getElementById('fullName').value.trim();
            const formGroup = document.getElementById('fullName').closest('.form-group');
            if (name.length < 3) {
                formGroup.classList.add('invalid'); return false;
            }
            formGroup.classList.remove('invalid'); return true;
        }
        function validateEmail() {
            const email = document.getElementById('email').value.trim();
            const formGroup = document.getElementById('email').closest('.form-group');
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) { formGroup.classList.add('invalid'); return false; }
            formGroup.classList.remove('invalid'); return true;
        }
        function validatePhone() {
            const phone = document.getElementById('phone').value.trim();
            const digits = phone.replace(/\D/g,'');
            const formGroup = document.getElementById('phone').closest('.form-group');
            if (digits.length < 10) { formGroup.classList.add('invalid'); return false; }
            formGroup.classList.remove('invalid'); return true;
        }
        function validateAddress() {
            const address = document.getElementById('address').value.trim();
            const formGroup = document.getElementById('address').closest('.form-group');
            if (address.length < 10) { formGroup.classList.add('invalid'); return false; }
            formGroup.classList.remove('invalid'); return true;
        }
        function validateHome() {
            const home = document.getElementById('home').value.trim();
            const formGroup = document.getElementById('home').closest('.form-group');
            if (home.length < 20) { formGroup.classList.add('invalid'); return false; }
            formGroup.classList.remove('invalid'); return true;
        }

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const valid = validateName() && validateEmail() && validatePhone() && validateAddress() && validateHome();
            if (valid) {
                // Popup
                const overlay = document.createElement('div');
                overlay.style.position='fixed'; overlay.style.top='0'; overlay.style.left='0';
                overlay.style.width='100%'; overlay.style.height='100%'; overlay.style.background='rgba(0,0,0,0.5)';
                overlay.style.zIndex='9998';
                const popup = document.createElement('div');
                popup.style.position='fixed'; popup.style.top='50%'; popup.style.left='50%';
                popup.style.transform='translate(-50%, -50%)'; popup.style.background='#fff';
                popup.style.padding='20px 30px'; popup.style.borderRadius='10px';
                popup.style.textAlign='center'; popup.style.zIndex='9999';
                popup.innerHTML = `
                    <h2>Application Submitted!</h2>
                    <p>Thank you for your adoption application! We will review your information and contact you soon.</p>
                    <button id="popupCloseBtn" style="
                        background-color:#ff7f50;color:white;border:none;padding:10px 20px;
                        border-radius:5px;cursor:pointer;margin-top:10px;">OK</button>
                `;
                document.body.appendChild(overlay);
                document.body.appendChild(popup);
                document.getElementById('popupCloseBtn').addEventListener('click', () => {
                    popup.remove(); overlay.remove();
                });
                modal.style.display='none';
                document.body.style.overflow='auto';
                form.reset();
            }
        });
    </script>
</body>
</html>
