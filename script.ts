// Personal Information Form
const personalForm = document.getElementById('personalInfoForm') as HTMLFormElement;
personalForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updatePersonalInfo(); // Runs the function to update the Personal Information section of the resume
});

// Education Form
const educationForm = document.getElementById('educationInfoForm') as HTMLFormElement;
educationForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updateEducation(); // Runs the function to update the Education section of the resume
});

// Experience Form
const experienceForm = document.getElementById('experienceInfoForm') as HTMLFormElement;
experienceForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updateExperience(); // Runs the function to update the Experience section of the resume
});

// Skills Form
const skillsForm = document.getElementById('skillsInfoForm') as HTMLFormElement;
skillsForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updateSkills(); // Runs the function to update the Skills section of the resume
});

// Function to Update Personal Information
function updatePersonalInfo() {
    const profilePicture = document.getElementById("profilePicture") as HTMLInputElement;
    const firstName = (document.getElementById("firstName") as HTMLInputElement)?.value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement)?.value;
    const address = (document.getElementById("address") as HTMLInputElement)?.value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement)?.value;
    const tel = (document.getElementById("tel") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;

    // Get profile picture URL and update the profile picture if the URL exists
    const profilePictureFile = profilePicture.files?.[0];
    const profilePic = document.getElementById("profilePic") as HTMLElement;
    profilePic.innerHTML = profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture" id="profilePic">` : '';

    // Show the Personal Information Heading and Formatting
    const personalInformationHeading = document.getElementById("personalInformationHeading") as HTMLElement;
    personalInformationHeading.style.display = "block";

    // Update Personal Information
    const personalInformation = document.getElementById("personalInformation") as HTMLElement;
    personalInformation.innerHTML = `
        <strong>Name: </strong> <span id="editName" class="editable">${firstName} ${lastName}</span><br>
        <strong>Address: </strong><span id="editAddress" class="editable">${address}</span><br>
        <strong>LinkedIn: </strong><span id="editLinkedin" class="editable"><a href="${linkedin}" target="_blank">${linkedin}</a></span><br>
        <strong>Phone No: </strong><span id="editPhone" class="editable">${tel}</span><br>
        <strong>Email: </strong><span id="editEmail" class="editable">${email}</span>`;

    makeEditable(); // Runs the function to make the resume editable
}

// Function to Update Education Information
function updateEducation() {
    const school = (document.getElementById("school") as HTMLInputElement)?.value;
    const schoolLocation = (document.getElementById("schoolLocation") as HTMLInputElement)?.value;
    const degree = (document.querySelector("select") as HTMLSelectElement)?.value;
    const fieldOfStudy = (document.getElementById("study") as HTMLInputElement)?.value;
    const gradDate = (document.getElementById("grad") as HTMLInputElement)?.value;

    // Show the Education Heading and Formatting
    const educationHeading = document.getElementById("educationHeading") as HTMLElement;
    educationHeading.style.display = "block";

    // Update Education information
    const educationDetails = document.getElementById("educationDetails") as HTMLElement;
    educationDetails.innerHTML = `
        <strong>School: </strong> <span id="editSchool" class="editable">${school}, ${schoolLocation}</span><br>
        <strong>Degree: </strong> <span id="editDegree" class="editable">${degree}</span><br>
        <strong>Field of Study: </strong> <span id="editStudy" class="editable">${fieldOfStudy}</span><br>
        <strong>Graduation Date: </strong> <span id="editGrad" class="editable">${gradDate}</span>`;
    
    makeEditable(); // Runs the function to make the resume editable
}

// Function to Update Experience Information
function updateExperience() {
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)?.value;
    const employer = (document.getElementById("employer") as HTMLInputElement)?.value;
    const location = (document.getElementById("location") as HTMLInputElement)?.value;
    const isRemote = (document.getElementById("remote") as HTMLInputElement)?.checked;
    const startDate = (document.getElementById("start") as HTMLInputElement)?.value;
    const endDateInput = (document.getElementById("end") as HTMLInputElement)?.value;
    const isCurrentlyWorking = (document.getElementById("work") as HTMLInputElement)?.checked;

    // If the checkbox of I currently work here is clikcked then it puts Present in the resume otherwise uses the inputed value
    const endDate = isCurrentlyWorking ? "Present" : endDateInput

     // If the checkbox of Remote is clikcked then it puts Remote in the resume otherwise uses the inputed value
    const remoteStatus = isRemote ? "Remote" : location;

    // Show the Experience Heading and Formatting
    const experienceHeading = document.getElementById("experienceHeading") as HTMLElement;
    experienceHeading.style.display = "block";

    // Update experience information
    const experienceDetails = document.getElementById("experienceDetails") as HTMLElement;
    experienceDetails.innerHTML = `
        <strong>Job Title:</strong> <span id="editTitle" class="editable">${jobTitle}</span><br>
        <strong>Employer:</strong> <span id="editEmployer" class="editable">${employer}</span><br>
        <strong>Location:</strong> <span id="editLocation" class="editable">${remoteStatus}</span><br>
        <strong>Start Date:</strong> <span id="editStart" class="editable">${startDate}</span><br>
        <strong>End Date:</strong> <span id="editEnd" class="editable">${endDate}</span>`;

    makeEditable(); // Runs the function to make the resume editable
}

// Function to Update Skills Information
function updateSkills() {
    // Show the Skills Heading and Formatting
    const skillsHeading = document.getElementById("skillsHeading") as HTMLElement;
    skillsHeading.style.display = "block";

    // Update skills information
    const skill = (document.getElementById("skill") as HTMLInputElement)?.value;
    const skillsList = document.getElementById("skillsList") as HTMLElement;
    skillsList.innerHTML = `<span id="editSkills" class="editable">${skill}</span>`

    makeEditable(); // Runs the function to make the resume editable
}

// Function to make resume editable
function makeEditable() {
    // Select all elements with the class 'editable'
    const editableElements = document.querySelectorAll(".editable");

    // Loop through each element and add a click event listener
    editableElements.forEach(element => {
        element.addEventListener("click", () => {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Check if the current element is a <p> or <span>
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                // Create an input field
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;

                // Add blur event to save changes when the input loses focus
                inputField.addEventListener('blur', () => {
                    currentElement.textContent = inputField.value; // Save the new value
                    currentElement.style.display = "inline"; // Restore visibility
                    inputField.remove(); // Remove the input field
                });

                // Hide the current element and insert the input field
                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(inputField, currentElement);

                // Automatically focus on the input field for editing
                inputField.focus();
            }
        });
    });
}

// Create container for the buttons
const buttonsContainer = document.getElementById("buttonsContainer") as HTMLElement;

// Add Download PDF button
const downloadButton = document.createElement('button');
downloadButton.textContent = "Download PDF";
downloadButton.addEventListener("click", () => {
    window.print();
});
buttonsContainer.appendChild(downloadButton);

// Create a shareable link button
const shareableLinkButton = document.createElement('button');
shareableLinkButton.textContent = "Shareable Link";

// Add click event listener to generate the link and copy it
shareableLinkButton.addEventListener("click", async () => {
    // Get the username dynamically when the button is clicked
    const username = (document.getElementById("username") as HTMLInputElement)?.value;
    
    if (username) {
        const uniqueName = username.replace(/\s+/g, '-').toLowerCase();
        const shareableLink = `https://${uniqueName}.vercel.app/resume`;
        
        try {
            await navigator.clipboard.writeText(shareableLink);
            alert("Link copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy link:", error);
        }
    } else {
        alert("Username is required to generate a shareable link.");
    }
});
buttonsContainer.appendChild(shareableLinkButton);