# Student Profile Application

## 1. Project Description
A hybrid mobile application built with Apache Cordova, HTML, CSS, and JavaScript that serves as an interactive student portfolio with persistent profile editing capabilities.

## 2. Application Pages
* **Profile:** Displays core student information, avatar, and navigation overview.
* **About:** Contains personal biography, educational background, and development goals.
* **Skills:** Highlights technical skills and programming competencies.
* **Projects:** Showcases completed software projects with descriptions and roles.
* **Contact:** Displays contact details, GitHub links, and social profiles.

## 3. Profile Editing
The Edit Profile functionality enables users to dynamically update profile details via an inline form.
* **Modifiable Information:** Full Name, Course/Program, Year Level, About Me bio, Skills summary, and Projects summary.


## 4. JavaScript Functionality
* **Form Handling:** Intercepts form submission via `preventDefault()` to handle data asynchronously without reloading.
* **Validation:** Checks that required input fields are filled out before allowing submission.
* **Profile Updates:** Re-renders DOM elements in real-time with updated user data.
* **Save:** Writes updated inputs into `localStorage` and updates the active view.
* **Cancel:** Discards pending changes and returns to the profile view.


## 5. Local Data Storage
Uses browser `localStorage` to save profile details as serialized JSON objects. Data automatically loads on application launch (`deviceready` / `DOMContentLoaded`), ensuring edits persist across app restarts.


## 6. Responsive Design
* **Desktop:** Utilizes multi-column grid layouts and expanded navigation bars.
* **Tablet:** Rearranges elements into flexible 2-column viewports.
* **Mobile:** Stacks content into single-column touch-friendly cards.


## 7. How to Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Jann-Arpon/Arpon_StudentProfile_Cordova.git](https://github.com/Jann-Arpon/Arpon_StudentProfile_Cordova.git)
   cd Arpon_StudentProfile_Cordova

## 8. Application Screenshots 

**Student Profile**

Before

<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/5020e774-3143-4dec-b8ee-2ad6bea147c9" />  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/6891da13-4a96-471d-8cb9-deb3878d491c" />

After

<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/1e1a94c8-3eea-4369-bdee-cceac373b456" />  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/3a47dcbf-d6dd-4613-87e3-0e27f1303fa9" />

**Contact**

Before

<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/0f026c20-b581-4f60-869a-e9e38933eb44" />  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/4028d497-b75b-459d-a21d-4902e92c006a" />

After

<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/0f2533e3-79ca-4439-8e10-0855312ade4a" />  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/520620da-c27f-446c-9751-37aaa2966d3c" />

