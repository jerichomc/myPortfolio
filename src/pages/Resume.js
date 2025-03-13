import React from 'react';

function Resume() {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <p>Click the button below to download my resume.</p>
            <a href={`${process.env.PUBLIC_URL}/resume.docx`} download="Jericho_McCullough_Resume.docx">
                <button className="download-btn">Download Resume</button>
            </a>
        </div>
    );
}

export default Resume;
