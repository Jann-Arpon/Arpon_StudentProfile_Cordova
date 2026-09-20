document.addEventListener('deviceready', onDeviceReady, false);

const DEFAULT_PROFILE = {
    name: 'Jann Arpon',
    course: 'BS Information Technology',
    year: '3rd year',
    aboutPreview: 'Hello! I am Jann Arpon, an Information Technology student passionate about software engineering and mobile app development.',
    skillsPreview: 'HTML5, CSS3, JavaScript, Apache Cordova',
    projectsPreview: 'Cordova Student Profile App, Responsive Student Portfolio'
};

const DEFAULT_CONTACT = {
    email: 'jannarpon@gmail.com',
    github: 'github.com/Jann-Arpon',
    githubUrl: 'https://github.com/Jann-Arpon',
    facebook: 'https://www.facebook.com/jann.arpon',
    phone: '09457542756',
    location: 'Philippines'
};

let skillsData = [
    { id: 1, title: 'HTML5 & CSS3', category: 'Web Development', desc: 'Building responsive, modern web layouts using CSS Grid and Flexbox.' },
    { id: 2, title: 'JavaScript (ES6+)', category: 'Programming', desc: 'Core programming skills including DOM manipulation and async logic.' },
    { id: 3, title: 'Apache Cordova', category: 'Mobile Development', desc: 'Packaging web applications into cross-platform hybrid mobile apps.' }
];

let projectsData = [
    { id: 1, title: 'Cordova Student Profile App', role: 'Lead Developer', desc: 'A multi-page responsive hybrid mobile profile application.' },
    { id: 2, title: 'Responsive Student Portfolio', role: 'Frontend Developer', desc: 'A single-page adaptive portfolio site showcasing skills and background.' }
];

let editingSkillId = null;
let editingProjectId = null;

function onDeviceReady() {
    initApp();
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadProfile();
    loadContact();
    renderSkills();
    renderProjects();
}

function loadProfile() {
    const savedProfile = localStorage.getItem('studentProfile');
    const profile = savedProfile ? JSON.parse(savedProfile) : DEFAULT_PROFILE;

    const elName = document.getElementById('display-name');
    const elCourse = document.getElementById('display-course');
    const elYear = document.getElementById('display-year');
    const elAbout = document.getElementById('display-about-preview');
    const elAboutBio = document.getElementById('display-about-bio');
    const elSkills = document.getElementById('display-skills-preview');
    const elProjects = document.getElementById('display-projects-preview');

    if (elName) elName.innerText = profile.name;
    if (elCourse) elCourse.innerText = profile.course;
    if (elYear) elYear.innerText = profile.year;
    if (elAbout) elAbout.innerText = profile.aboutPreview;
    if (elAboutBio) elAboutBio.innerText = profile.aboutPreview;
    if (elSkills) elSkills.innerText = profile.skillsPreview;
    if (elProjects) elProjects.innerText = profile.projectsPreview;
}

function loadContact() {
    const savedContact = localStorage.getItem('studentContact');
    const contact = savedContact ? JSON.parse(savedContact) : DEFAULT_CONTACT;

    const elEmail = document.getElementById('display-contact-email');
    const elGithub = document.getElementById('display-contact-github');
    const elFb = document.getElementById('display-contact-facebook');
    const elPhone = document.getElementById('display-contact-phone');
    const elLoc = document.getElementById('display-contact-location');

    if (elEmail) elEmail.innerText = contact.email;
    if (elGithub) {
        elGithub.innerText = contact.github;
        elGithub.href = contact.githubUrl || contact.github;
    }
    if (elFb) {
        elFb.innerText = contact.facebook;
        elFb.href = contact.facebook;
    }
    if (elPhone) elPhone.innerText = contact.phone;
    if (elLoc) elLoc.innerText = contact.location;
}

function openEditSection(section) {
    hideAllPages();

    if (section === 'profile') {
        const savedProfile = localStorage.getItem('studentProfile');
        const profile = savedProfile ? JSON.parse(savedProfile) : DEFAULT_PROFILE;

        document.getElementById('edit-name').value = profile.name;
        document.getElementById('edit-course').value = profile.course;
        document.getElementById('edit-year').value = profile.year;
        document.getElementById('edit-about-preview-input').value = profile.aboutPreview;
        document.getElementById('edit-skills-preview-input').value = profile.skillsPreview;
        document.getElementById('edit-projects-preview-input').value = profile.projectsPreview;
        document.getElementById('edit-form-profile').classList.add('active');
    } 
    else if (section === 'about') {
        const savedProfile = localStorage.getItem('studentProfile');
        const profile = savedProfile ? JSON.parse(savedProfile) : DEFAULT_PROFILE;

        document.getElementById('edit-about-bio').value = profile.aboutPreview;
        document.getElementById('edit-about-edu').value = document.getElementById('display-about-edu')?.innerText || profile.course;
        document.getElementById('edit-about-goals').value = document.getElementById('display-about-goals')?.innerText || '';
        document.getElementById('edit-form-about').classList.add('active');
    } 
    else if (section === 'contact') {
        const savedContact = localStorage.getItem('studentContact');
        const contact = savedContact ? JSON.parse(savedContact) : DEFAULT_CONTACT;

        document.getElementById('edit-contact-email').value = contact.email;
        document.getElementById('edit-contact-github').value = contact.github;
        document.getElementById('edit-contact-facebook').value = contact.facebook;
        document.getElementById('edit-contact-phone').value = contact.phone;
        document.getElementById('edit-contact-location').value = contact.location;
        document.getElementById('edit-form-contact').classList.add('active');
    }
}

function saveProfileInfo() {
    const name = document.getElementById('edit-name').value.trim();
    const course = document.getElementById('edit-course').value.trim();
    const year = document.getElementById('edit-year').value.trim();
    const aboutPrev = document.getElementById('edit-about-preview-input').value.trim();
    const skillsPrev = document.getElementById('edit-skills-preview-input').value.trim();
    const projectsPrev = document.getElementById('edit-projects-preview-input').value.trim();

    if (!name) {
        alert('Please enter your full name.');
        return;
    }
    if (!course) {
        alert('Please enter your course/program.');
        return;
    }
    if (!year) {
        alert('Please enter your year level.');
        return;
    }
    if (!aboutPrev) {
        alert('Please enter your About Me description.');
        return;
    }

    const updatedProfile = {
        name: name,
        course: course,
        year: year,
        aboutPreview: aboutPrev,
        skillsPreview: skillsPrev,
        projectsPreview: projectsPrev
    };

    localStorage.setItem('studentProfile', JSON.stringify(updatedProfile));

    loadProfile();
    switchPage('profile');
}

function saveAboutInfo() {
    const bioText = document.getElementById('edit-about-bio').value.trim();
    if (!bioText) {
        alert('About Me cannot be empty.');
        return;
    }

    const savedProfile = localStorage.getItem('studentProfile');
    const profile = savedProfile ? JSON.parse(savedProfile) : DEFAULT_PROFILE;
    profile.aboutPreview = bioText;

    localStorage.setItem('studentProfile', JSON.stringify(profile));

    const edu = document.getElementById('edit-about-edu').value.trim();
    const goals = document.getElementById('edit-about-goals').value.trim();
    if (document.getElementById('display-about-edu')) document.getElementById('display-about-edu').innerText = edu;
    if (document.getElementById('display-about-goals')) document.getElementById('display-about-goals').innerText = goals;

    loadProfile();
    switchPage('about');
}

function saveContactInfo() {
    const email = document.getElementById('edit-contact-email').value.trim();
    const github = document.getElementById('edit-contact-github').value.trim();
    const facebook = document.getElementById('edit-contact-facebook').value.trim();
    const phone = document.getElementById('edit-contact-phone').value.trim();
    const location = document.getElementById('edit-contact-location').value.trim();

    const contactData = {
        email: email,
        github: github.replace(/^https?:\/\//, ''),
        githubUrl: github.startsWith('http') ? github : 'https://' + github,
        facebook: facebook,
        phone: phone,
        location: location
    };

    localStorage.setItem('studentContact', JSON.stringify(contactData));
    loadContact();
    switchPage('contact');
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = '';
    skillsData.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `
            <div class="card-title-row">
                <h4>${escapeHtml(skill.title)}</h4>
                <button type="button" class="edit-item-btn" onclick="openEditSingleSkill(${skill.id})">edit</button>
            </div>
            <span class="category-tag">${escapeHtml(skill.category || 'General')}</span>
            <p>${escapeHtml(skill.desc || '')}</p>
        `;
        container.appendChild(card);
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `
            <div class="card-title-row">
                <h4>${escapeHtml(project.title)}</h4>
                <button type="button" class="edit-item-btn" onclick="openEditSingleProject(${project.id})">edit</button>
            </div>
            <p class="role-text"><strong>Role:</strong> ${escapeHtml(project.role || 'Developer')}</p>
            <p>${escapeHtml(project.desc || '')}</p>
        `;
        container.appendChild(card);
    });
}

function openEditSingleSkill(id) {
    const skill = skillsData.find(s => s.id === id);
    if (!skill) return;

    editingSkillId = id;
    hideAllPages();
    document.getElementById('edit-single-skill-title').value = skill.title;
    document.getElementById('edit-single-skill-category').value = skill.category;
    document.getElementById('edit-single-skill-desc').value = skill.desc;
    document.getElementById('edit-form-single-skill').classList.add('active');
}

function saveSingleSkill() {
    const title = document.getElementById('edit-single-skill-title').value.trim();
    if (!title) {
        alert('Skill Title cannot be empty.');
        return;
    }

    const category = document.getElementById('edit-single-skill-category').value.trim();
    const desc = document.getElementById('edit-single-skill-desc').value.trim();

    const index = skillsData.findIndex(s => s.id === editingSkillId);
    if (index !== -1) {
        skillsData[index].title = title;
        skillsData[index].category = category || 'General';
        skillsData[index].desc = desc;
    }

    renderSkills();
    switchPage('skills');
}

function deleteSingleSkill() {
    if (editingSkillId !== null) {
        skillsData = skillsData.filter(s => s.id !== editingSkillId);
        renderSkills();
        switchPage('skills');
    }
}

function openAddSkillForm() {
    hideAllPages();
    document.getElementById('add-skill-title').value = '';
    document.getElementById('add-skill-category').value = '';
    document.getElementById('add-skill-desc').value = '';
    document.getElementById('edit-form-add-skill').classList.add('active');
}

function saveNewSkill() {
    const title = document.getElementById('add-skill-title').value.trim();
    if (!title) {
        alert('Skill Title cannot be empty.');
        return;
    }

    const category = document.getElementById('add-skill-category').value.trim();
    const desc = document.getElementById('add-skill-desc').value.trim();

    skillsData.push({
        id: Date.now(),
        title: title,
        category: category || 'General',
        desc: desc
    });

    renderSkills();
    switchPage('skills');
}

function openEditSingleProject(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    editingProjectId = id;
    hideAllPages();
    document.getElementById('edit-single-proj-title').value = project.title;
    document.getElementById('edit-single-proj-role').value = project.role;
    document.getElementById('edit-single-proj-desc').value = project.desc;
    document.getElementById('edit-form-single-project').classList.add('active');
}

function saveSingleProject() {
    const title = document.getElementById('edit-single-proj-title').value.trim();
    if (!title) {
        alert('Project Title cannot be empty.');
        return;
    }

    const role = document.getElementById('edit-single-proj-role').value.trim();
    const desc = document.getElementById('edit-single-proj-desc').value.trim();

    const index = projectsData.findIndex(p => p.id === editingProjectId);
    if (index !== -1) {
        projectsData[index].title = title;
        projectsData[index].role = role || 'Developer';
        projectsData[index].desc = desc;
    }

    renderProjects();
    switchPage('projects');
}

function deleteSingleProject() {
    if (editingProjectId !== null) {
        projectsData = projectsData.filter(p => p.id !== editingProjectId);
        renderProjects();
        switchPage('projects');
    }
}

function openAddProjectForm() {
    hideAllPages();
    document.getElementById('add-proj-title').value = '';
    document.getElementById('add-proj-role').value = '';
    document.getElementById('add-proj-desc').value = '';
    document.getElementById('edit-form-add-project').classList.add('active');
}

function saveNewProject() {
    const title = document.getElementById('add-proj-title').value.trim();
    if (!title) {
        alert('Project Title cannot be empty.');
        return;
    }

    const role = document.getElementById('add-proj-role').value.trim();
    const desc = document.getElementById('add-proj-desc').value.trim();

    projectsData.push({
        id: Date.now(),
        title: title,
        role: role || 'Developer',
        desc: desc
    });

    renderProjects();
    switchPage('projects');
}

function switchPage(pageName) {
    const targetPage = document.getElementById('page-' + pageName);
    if (targetPage) {
        hideAllPages();
        targetPage.classList.add('active');

        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => btn.classList.remove('active'));

        const activeNav = document.getElementById('nav-' + pageName);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    } else {
        window.location.href = pageName + '.html';
    }
}

function escapeHtml(str) {
    return str ? str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : '';
}