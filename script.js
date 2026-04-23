// Navber Design 
document.getElementById("nav").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">

            <!-- Logo -->
            <a class="logo navbar-brand fw-bold" href="#"><img src="logo.png" alt="">Zurich</a>

            <!-- Toggle Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menu -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>

                    <!-- Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Insurance Plans
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="car.html">Car Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Health Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Life Insurance</a></li>
                            <li><a class="dropdown-item" href="bike.html">Bike Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Home Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Medical Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Mobile Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Cyber-Risk Insurance</a></li>
                            <li><a class="dropdown-item" href="#">Engineering Insurance</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>

                    <!-- Button -->
                    <li class="nav-item">
                        <a class="btn btn-warning ms-3 px-4" href="#">Get Quote</a>
                    </li>

                </ul>
            </div>

        </div>
    </nav>`

// Footer Design
document.getElementById("footer").innerHTML = `
<footer class="footer">
        <div class="footer-container">

            <div class="footer-box" style="margin-right: 220px;">
                <h2>Zurich Insurance</h2>
                <p>We provide reliable insurance services for cars, health, and life to keep you safe and secure.</p>
            </div>
            <div class="footer-text"></div>
            <div class="footer-box">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Policies</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="footer-box">
                <h3>Our Services</h3>
                <ul>
                    <li><a href="#">Car Insurance</a></li>
                    <li><a href="#">Health Insurance</a></li>
                    <li><a href="#">Life Insurance</a></li>
                    <li><a href="#">Travel Insurance</a></li>
                </ul>
            </div>

            <div class="footer-box">
                <h3>Contact Us</h3>
                <p>Email: info@safecraze.com</p>
                <p>Phone: +92 300 1234567</p>
                <p>Location: Karachi, Pakistan</p>
            </div>

        </div>

        <div class="footer-bottom">
            <p>© 2026 Zurich Insurance | All Rights Reserved</p>
        </div>
    </footer>`

