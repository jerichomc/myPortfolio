import React from 'react';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you'd like to connect, feel free to reach out through any of the platforms below!</p>

            <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:jerichomc255@gmail.com">jerichomc255@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+14252219493">(425)-221-9493</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jericho-mccullough-1a6a85209/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/jerichomc" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
            </div>
        </div>
    );
}

export default Contact;
