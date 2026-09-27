# Student Profile Application

## 1. Project Description

A hybrid mobile Student Profile application built using Apache Cordova, HTML, CSS, and JavaScript. The application allows users to view student information, edit profile details, manage skills and projects, view contact information, and update the profile picture using the device camera.

## 2. Application Pages

### Profile

The Profile page displays the student's main information, including the profile picture, full name, course, year level, contact information, About Me summary, Skills summary, and Projects summary.

The profile picture can be tapped to access the camera and capture a new profile picture.

### About

The About page contains the student's biography, educational background, goals, and aspirations.

### Skills

The Skills page displays the student's technical skills. Users can edit existing skills, delete skills, and add new skills.

### Projects

The Projects page displays the student's projects, including project descriptions and roles. Users can edit existing projects, delete projects, and add new projects.

### Contact

The Contact page displays the student's email address, GitHub account, social media information, phone number, and location.

## 3. Profile Editing

The Edit Profile functionality allows the user to update personal profile information through an editing form.

The following information can be modified:

- Full Name
- Course / Program
- Year Level
- About Me
- Skills Summary
- Projects Summary

The application uses JavaScript to validate and save the information. Updated profile information is stored in browser localStorage using JSON data.

Saved profile information is automatically loaded when the application starts, allowing the user's changes to persist between sessions.

## 4. Camera Integration

The application uses the Cordova Camera Plugin to access the device camera.

The profile picture itself is interactive. When the user taps the profile picture, the application opens the camera through the Cordova Camera API.

The camera process is:

**Change Profile Picture → Open Camera → Capture Image → Update Profile Picture**

The application uses:

`navigator.camera.getPicture()`

with the camera source configured as:

`Camera.PictureSourceType.CAMERA`

This allows the application to capture a new photograph using the device camera.

The user can also press the Exit button in the camera interface to cancel the operation without replacing the existing profile picture.

## 5. Device Feature Integration

Apache Cordova is used to provide access to native device features from the web-based application.

The camera feature is integrated through the Cordova Camera Plugin instead of using only a normal HTML image or static file.

Cordova provides a bridge between the application's HTML, CSS, and JavaScript code and the device's native camera functionality.

This allows the Student Profile application to use device hardware while maintaining a hybrid web-based application structure.

## 6. Image Handling

After the user captures a photograph, the Cordova Camera Plugin returns the captured image to the application.

The application converts the returned image data into a data URL and assigns it to the profile image using JavaScript.

The captured image is displayed using:

`image.src = dataUrl`

The image is also saved to localStorage using the key:

`studentProfilePicture`

When the application starts again, the saved profile picture is loaded from localStorage and displayed automatically.

If there is no saved profile picture, the application uses the default:

`img/profile.jpeg`

## 7. Error Handling

The application includes error handling for different camera situations.

### Camera Permission Denial

If camera access is denied or unavailable, the application displays an error message informing the user that camera permissions should be checked.

### Camera Cancellation

If the user cancels the camera operation or presses the Exit button, the application keeps the previous profile picture.

The captured image is not saved when the operation is cancelled.

### Camera Errors

If the camera cannot be opened because of a device or plugin error, the application displays an error message and keeps the previous profile picture.

The application also prevents multiple camera requests from being started at the same time.

## 8. Responsive Design

The application uses responsive CSS to support different screen sizes.

### Desktop

The application uses a centered layout with appropriately sized cards, navigation, and content.

### Tablet

The flexible layout adjusts spacing, navigation, and content areas to fit medium-sized screens.

### Mobile

The application uses a compact single-column layout with touch-friendly controls and mobile-specific spacing.

The camera interface also adjusts its size for smaller screens.

## 9. How to Run

### Install Dependencies

Clone the repository and open the project folder:
git clone https://github.com/Jann-Arpon/Arpon_StudentProfile_Cordova.git
cd Arpon_StudentProfile_Cordova

## 10. Application Screenshots

Student profile and Change profile picture 

<img width="1918" height="911" alt="image" src="https://github.com/user-attachments/assets/6a8b19dd-ac27-4f5a-9fd6-9eabe092a342" />
<img width="378" height="819" alt="image" src="https://github.com/user-attachments/assets/0d025c72-4ee6-481c-a011-6eec64162c3b" />

Camera
<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/c4a5292d-0eda-429d-88c6-399d49cf0243" />
<img width="376" height="817" alt="image" src="https://github.com/user-attachments/assets/3cc2c242-c43f-40b8-bfb1-5d60fbdd46a1" />

Captured Image and Updated Profile Picture
<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/6ce90951-da22-4d47-b738-c9de50948f32" />
<img width="376" height="817" alt="image" src="https://github.com/user-attachments/assets/e63b619e-287a-452f-b367-95f2a88afc13" />

