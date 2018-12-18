import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';

import {configure} from './Configuration';

import rawResume from './resume.json';
import config from './config.json';

const resume = configure(rawResume, config);

export class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Helmet>
            <title>{`${resume.basics.name} - Résumé`}</title>
        </Helmet>
        <div className="superheader">
          <a href="./resume.pdf">Download PDF</a>
        </div>
        <div className="content row">
          <div className="header col-md-12 col-sm-6 col-xs-6">
              <h1>{resume.basics.name}</h1>
          </div>
          <div className="contact col-sm-6 col-xs-6 left">
            <ul>
              <li>
                  <a href={"mailto:" + resume.basics.email}>{resume.basics.email}</a>&nbsp;<svg className="icon-envelope-o icon-fw"><use xlinkHref="#icon-envelope-o"></use></svg>
              </li>
              <li>
                  {resume.basics.location.city}, {resume.basics.location.region}&nbsp;<svg className="icon-map-marker icon-fw"><use xlinkHref="#icon-map-marker"></use></svg>
              </li>
              <li>
                  {resume.basics.phone}&nbsp;<svg className="icon-mobile icon-fw"><use xlinkHref="#icon-mobile"></use></svg>
              </li>
              <li>
                  <a href={"http://" + resume.basics.website} target="_blank">{resume.basics.website}</a>&nbsp;<svg className="icon-cloud icon-fw"><use xlinkHref="#icon-cloud"></use></svg>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-xs-12 right">
            <div id="experience">
              <div className="row">
                <div className="header-pre"></div>
                <h2><svg className="icon-briefcase icon-fw"><use xlinkHref="#icon-briefcase"></use></svg>&nbsp;Experience</h2>
                <div className="header-post"></div>
              </div>
              {_.map(resume.work, ({company, position, website, startDate, endDate, highlights}) => {
                return <div key={company + position}>
                  <div className="row">
                    <h3 className="col-md-8 col-sm-6 col-xs-12"><a href={website} target="_blank">{company}</a> &mdash; <em>{position}</em></h3>
                    <em className="col-md-4 col-sm-6 col-xs-12"><h4>{startDate} - {endDate}</h4></em>
                  </div>
                  <ul>
                    {_.map(highlights, (h, i) => <li key={i}><ReactMarkdown source={h} linkTarget="_blank" className="rendered-markdown"/></li>)}
                  </ul>                
                </div>;
              })}
              {_.map(resume.education, ({institution, area, studyType, startDate, endDate, highlights, website}) => {
                return <div key={institution + area}>
                  <div className="row">
                    <h3 className="col-md-8 col-sm-8 col-xs-12"><a href={website} target="_blank">{institution}</a> &mdash; <span><em>{studyType} {area}</em></span></h3>
                    <em className="col-md-4 col-sm-4 col-xs-8"><h4>{startDate} - {endDate}</h4></em>
                    <ul>
                      {_.map(highlights, (h, i) => <li key={i}><ReactMarkdown source={h} linkTarget="_blank" className="rendered-markdown"/></li>)}
                  </ul>  
                  </div>
                </div>
              })}
            </div>
            <div id="projects">
              <div className="row">
                <div className="header-pre"></div>
                <h2><svg className="icon-code icon-fw"><use xlinkHref="#icon-code"></use></svg>&nbsp;Selected Projects</h2>
                <div className="header-post"></div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <ul>
                      {_.map(resume.projects, ({name, summary, site}) => {
                        return <li key={name}><ReactMarkdown source={summary} linkTarget="_blank" className="rendered-markdown" /></li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="skills">
              <div className="row">
                <div className="header-pre"></div>
                <h2><svg className="icon-fw icon-code-fork"><use xlinkHref="#icon-code-fork"></use></svg>&nbsp;Skills</h2>
                <div className="header-post"></div>
              </div>
              {_.map(resume.skills, ({name, keywords}, i) => {
                return <div className="col-xs-12" key={i}>
                  <div className="row">
                    <strong className="col-md-2 col-sm-2 col-xs-12">{name}</strong>
                    <ul className="col-md-10 col-sm-10 col-xs-12">
                      {_.map(keywords, (k, i) => <li key={i}>{k}</li>)}
                    </ul>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// If we're in dev mode
if (module.hot) {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  module.hot.accept();
}
