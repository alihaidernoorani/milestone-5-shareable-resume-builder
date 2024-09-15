"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Personal Information Form
const personalForm = document.getElementById('personalInfoForm');
personalForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updatePersonalInfo(); // Runs the function to update the Personal Information section of the resume
});
// Education Form
const educationForm = document.getElementById('educationInfoForm');
educationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updateEducation(); // Runs the function to update the Education section of the resume
});
// Experience Form
const experienceForm = document.getElementById('experienceInfoForm');
experienceForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updateExperience(); // Runs the function to update the Experience section of the resume
});
// Skills Form
const skillsForm = document.getElementById('skillsInfoForm');
skillsForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updateSkills(); // Runs the function to update the Skills section of the resume
});
// Function to Update Personal Information
function updatePersonalInfo() {
    var _a, _b, _c, _d, _e, _f, _g;
    const profilePicture = document.getElementById("profilePicture");
    const firstName = (_a = document.getElementById("firstName")) === null || _a === void 0 ? void 0 : _a.value;
    const lastName = (_b = document.getElementById("lastName")) === null || _b === void 0 ? void 0 : _b.value;
    const address = (_c = document.getElementById("address")) === null || _c === void 0 ? void 0 : _c.value;
    const linkedin = (_d = document.getElementById("linkedin")) === null || _d === void 0 ? void 0 : _d.value;
    const tel = (_e = document.getElementById("tel")) === null || _e === void 0 ? void 0 : _e.value;
    const email = (_f = document.getElementById("email")) === null || _f === void 0 ? void 0 : _f.value;
    // Get profile picture URL and update the profile picture if the URL exists
    const profilePictureFile = (_g = profilePicture.files) === null || _g === void 0 ? void 0 : _g[0];
    const profilePic = document.getElementById("profilePic");
    profilePic.innerHTML = profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture" id="profilePic">` : '';
    // Show the Personal Information Heading and Formatting
    const personalInformationHeading = document.getElementById("personalInformationHeading");
    personalInformationHeading.style.display = "block";
    // Update Personal Information
    const personalInformation = document.getElementById("personalInformation");
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
    var _a, _b, _c, _d, _e;
    const school = (_a = document.getElementById("school")) === null || _a === void 0 ? void 0 : _a.value;
    const schoolLocation = (_b = document.getElementById("schoolLocation")) === null || _b === void 0 ? void 0 : _b.value;
    const degree = (_c = document.querySelector("select")) === null || _c === void 0 ? void 0 : _c.value;
    const fieldOfStudy = (_d = document.getElementById("study")) === null || _d === void 0 ? void 0 : _d.value;
    const gradDate = (_e = document.getElementById("grad")) === null || _e === void 0 ? void 0 : _e.value;
    // Show the Education Heading and Formatting
    const educationHeading = document.getElementById("educationHeading");
    educationHeading.style.display = "block";
    // Update Education information
    const educationDetails = document.getElementById("educationDetails");
    educationDetails.innerHTML = `
        <strong>School: </strong> <span id="editSchool" class="editable">${school}, ${schoolLocation}</span><br>
        <strong>Degree: </strong> <span id="editDegree" class="editable">${degree}</span><br>
        <strong>Field of Study: </strong> <span id="editStudy" class="editable">${fieldOfStudy}</span><br>
        <strong>Graduation Date: </strong> <span id="editGrad" class="editable">${gradDate}</span>`;
    makeEditable(); // Runs the function to make the resume editable
}
// Function to Update Experience Information
function updateExperience() {
    var _a, _b, _c, _d, _e, _f, _g;
    const jobTitle = (_a = document.getElementById("jobTitle")) === null || _a === void 0 ? void 0 : _a.value;
    const employer = (_b = document.getElementById("employer")) === null || _b === void 0 ? void 0 : _b.value;
    const location = (_c = document.getElementById("location")) === null || _c === void 0 ? void 0 : _c.value;
    const isRemote = (_d = document.getElementById("remote")) === null || _d === void 0 ? void 0 : _d.checked;
    const startDate = (_e = document.getElementById("start")) === null || _e === void 0 ? void 0 : _e.value;
    const endDateInput = (_f = document.getElementById("end")) === null || _f === void 0 ? void 0 : _f.value;
    const isCurrentlyWorking = (_g = document.getElementById("work")) === null || _g === void 0 ? void 0 : _g.checked;
    // If the checkbox of I currently work here is clikcked then it puts Present in the resume otherwise uses the inputed value
    const endDate = isCurrentlyWorking ? "Present" : endDateInput;
    // If the checkbox of Remote is clikcked then it puts Remote in the resume otherwise uses the inputed value
    const remoteStatus = isRemote ? "Remote" : location;
    // Show the Experience Heading and Formatting
    const experienceHeading = document.getElementById("experienceHeading");
    experienceHeading.style.display = "block";
    // Update experience information
    const experienceDetails = document.getElementById("experienceDetails");
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
    var _a;
    // Show the Skills Heading and Formatting
    const skillsHeading = document.getElementById("skillsHeading");
    skillsHeading.style.display = "block";
    // Update skills information
    const skill = (_a = document.getElementById("skill")) === null || _a === void 0 ? void 0 : _a.value;
    const skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = `<span id="editSkills" class="editable">${skill}</span>`;
    makeEditable(); // Runs the function to make the resume editable
}
// Function to make resume editable
function makeEditable() {
    // Select all elements with the class 'editable'
    const editableElements = document.querySelectorAll(".editable");
    // Loop through each element and add a click event listener
    editableElements.forEach(element => {
        element.addEventListener("click", () => {
            var _a;
            const currentElement = element;
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
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(inputField, currentElement);
                // Automatically focus on the input field for editing
                inputField.focus();
            }
        });
    });
}
// Create container for the buttons
const buttonsContainer = document.getElementById("buttonsContainer");
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
shareableLinkButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Get the username dynamically when the button is clicked
    const username = (_a = document.getElementById("username")) === null || _a === void 0 ? void 0 : _a.value;
    if (username) {
        const uniqueName = username.replace(/\s+/g, '-').toLowerCase();
        const shareableLink = `https://${uniqueName}.vercel.app/resume`;
        try {
            yield navigator.clipboard.writeText(shareableLink);
            alert("Link copied to clipboard!");
        }
        catch (error) {
            console.error("Failed to copy link:", error);
        }
    }
    else {
        alert("Username is required to generate a shareable link.");
    }
}));
buttonsContainer.appendChild(shareableLinkButton);
