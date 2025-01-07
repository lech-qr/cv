// Clone article to english version
let article = document.getElementById('lang_pl');
let clonedArticle = article.cloneNode(true);
clonedArticle.id = 'lang_en';
article.parentNode.insertBefore(clonedArticle, article.nextSibling);

const headers = {
    contact_pl: "Kontakt", contact_en: "Contact",
    job_profile_pl: "Profil zawodowy", job_profile_en: "Job profile",
    skills_pl: "Umiejętności", skills_en: "Skills",
    interests_pl: "Zainteresowania", interests_en: "Interests",
    experience_pl: "Doświadczenie", experience_en: "Experience",
    skills2_pl: "Umiejętności", skills2_en: "Skills",
    achievements_pl: "Osiągnięcia", achievements_en: "Achievements",
    education_pl: "Wykształcenie / Kursy i szkolenia", education_en: "Education / Courses and trainings"
};

// Skills
const skillsContainer_pl = document.querySelector('#lang_pl .skillsContainer');
const skillsContainer_en = document.querySelector('#lang_en .skillsContainer');

skills.forEach(skill => {
    const p = document.createElement('p');
    p.textContent = skill.name;
    const span = document.createElement('span');
    span.setAttribute('data-value', skill.value);

    skillsContainer_pl.appendChild(p);
    skillsContainer_pl.appendChild(span);
});
skills.forEach(skill => {
    const p = document.createElement('p');
    p.textContent = skill.name;
    const span = document.createElement('span');
    span.setAttribute('data-value', skill.value);

    skillsContainer_en.appendChild(p);
    skillsContainer_en.appendChild(span);
});

const rodo = {
    rodo_pl: "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji, jak również na potrzeby przyszłych rekrutacji, zgodnie z art. 6 ust. 1 lit. a\xa0Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w\xa0sprawie ochrony osób ﬁzycznych w\xa0związku z przetwarzaniem danych osobowych i w\xa0sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).",
    rodo_en: "I consent to the processing of my personal data for recruitment purposes, as well as for future recruitment purposes, in accordance with Art. 6 section 1 letter a Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
};

// Language - polish
// Headers
const headers_pl = document.querySelectorAll('#lang_pl [data-header]');
headers_pl.forEach(header => {
    const dataHeader = header.getAttribute('data-header');
    if (headers[dataHeader + '_pl']) {
        header.textContent = headers[dataHeader + '_pl'];
    }
});
// Content
const contents_pl = document.querySelectorAll('#lang_pl [data-content]');
contents_pl.forEach(content => {
    const dataContent = content.getAttribute('data-content');
    if (contents[dataContent + '_pl']) {
        content.innerHTML = contents[dataContent + '_pl'];
    }
});
// Language - english
// Headers
const headers_en = document.querySelectorAll('#lang_en [data-header]');
headers_en.forEach(header => {
    const dataHeader = header.getAttribute('data-header');
    if (headers[dataHeader + '_en']) {
        header.textContent = headers[dataHeader + '_en'];
    }
});
// Content
const contents_en = document.querySelectorAll('#lang_en [data-content]');
contents_en.forEach(content => {
    const dataContent = content.getAttribute('data-content');
    if (contents[dataContent + '_en']) {
        content.innerHTML = contents[dataContent + '_en'];
    }
});
// Title
document.title = 'Lech Kurant CV - ' + title.title_pl;

// Top
document.querySelector('#lang_pl [data-id="title"]').textContent = title.title_pl;
document.querySelector('#lang_en [data-id="title"]').textContent = title.title_en;
// Left
document.querySelector('#lang_pl [data-id="rodo"]').textContent = rodo.rodo_pl;
document.querySelector('#lang_en [data-id="rodo"]').textContent = rodo.rodo_en;