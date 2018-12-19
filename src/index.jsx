import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import { configure } from './Configuration';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Sidebar } from './Sidebar';
import { Skills } from './Skills'

import rawResume from './resume.json';
import config from './config.json';

const resume = configure(rawResume, config);

export class Resume extends React.PureComponent {
  render () {
    const { basics, education, work, projects, skills } = resume;
    return (
      <div className="container">
        <div className="superheader">
          <a href="./resume.pdf">Download PDF</a>
        </div>
        <div className="content row">
          <div className="header col-md-12 col-sm-6 col-xs-6">
              <h1>{basics.name}</h1>
          </div>
          <Sidebar basics={basics} />
          <div className="col-sm-12 col-xs-12 right">
            <Experience education={education} experience={work} />
            <Projects projects={projects} />
            <Skills skills={skills} />
          </div>
        </div>
      </div>
    );
  }
};

// If we're in dev mode
if (module.hot) {
  ReactDOM.render(
    <Resume />,
    document.getElementById('resume')
  );
  module.hot.accept();
}
