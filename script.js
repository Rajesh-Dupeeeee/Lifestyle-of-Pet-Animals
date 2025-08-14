   // Modal functionality
        const adoptNav = document.getElementById('adoptNav');
        const adoptBtn = document.getElementById('adoptBtn');
        const modal = document.getElementById('adoptModal');
        const closeBtn = document.getElementById('closeModal');
        
        adoptNav.addEventListener('click', ()=>{
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        adoptBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
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
        
        // Form validation
        const form = document.getElementById('adoptionForm');
        const nameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const addressInput = document.getElementById('address');
        const homeInput = document.getElementById('home');
        
        // Validation functions
        function validateName() {
            const name = nameInput.value.trim();
            const formGroup = nameInput.closest('.form-group');
            
            if (name.length < 3) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            formGroup.classList.remove('invalid');
            return true;
        }
        
        function validateEmail() {
            const email = emailInput.value.trim();
            const formGroup = emailInput.closest('.form-group');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            formGroup.classList.remove('invalid');
            return true;
        }
        
        function validatePhone() {
            const phone = phoneInput.value.trim();
            const formGroup = phoneInput.closest('.form-group');
            const digits = phone.replace(/\D/g, '');
            
            if (digits.length < 10) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            formGroup.classList.remove('invalid');
            return true;
        }
        
        function validateAddress() {
            const address = addressInput.value.trim();
            const formGroup = addressInput.closest('.form-group');
            
            if (address.length < 10) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            formGroup.classList.remove('invalid');
            return true;
        }
        
        function validateHome() {
            const home = homeInput.value.trim();
            const formGroup = homeInput.closest('.form-group');
            
            if (home.length < 20) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            formGroup.classList.remove('invalid');
            return true;
        }
        
        // Event listeners for input validation
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        phoneInput.addEventListener('input', validatePhone);
        addressInput.addEventListener('input', validateAddress);
        homeInput.addEventListener('input', validateHome);
        
        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isAddressValid = validateAddress();
            const isHomeValid = validateHome();
            
            if (isNameValid && isEmailValid && isPhoneValid && isAddressValid && isHomeValid) {
                // Form is valid - show success message
                alert('Thank you for your adoption application! We will review your information and contact you soon.');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                form.reset();
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.form-group.invalid');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        
        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });