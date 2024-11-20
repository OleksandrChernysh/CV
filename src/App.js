import React from 'react';
import Intro from './components/Intro/Intro.js';
import Skills from './components/Skills/Skills.js';
import WorkExperience from './components/WorkExperience/WorkExperience.js';
import Portfolio from './components/Portfpolio/Portfolio.js';
import Education from './components/Education/Education.js';
import Languages from './components/Languages/Languages.js';
import PersonalInfo from './components/PersonalInfo/Personalnfo.js';
import Contacts from './components/Contacts/Contacts.js';

const App = () => {
    return (
        <main>
            <Intro />
            <Skills />
            <WorkExperience />
            <Portfolio />
            <Education />
            <section>
                <div className="col-30">
                    <Languages />
                </div>
                <div className="col-30">
                    <PersonalInfo />
                </div>
                <div className="col-40">
                    <Contacts />
                </div>
            </section>
        </main>
    );
};

export default App;
