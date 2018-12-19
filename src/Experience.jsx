import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';

export class Experience extends React.PureComponent {
  render () {
    const { education, experience } = this.props;
    return (
      <div id="experience">
        <div className="row">
          <div className="header-pre"></div>
          <h2><svg className="icon-briefcase icon-fw"><use xlinkHref="#icon-briefcase"></use></svg>&nbsp;Experience</h2>
          <div className="header-post"></div>
        </div>
        {_.map(experience, ({company, position, website, startDate, endDate, highlights}) => {
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
        {_.map(education, ({institution, area, studyType, startDate, endDate, highlights, website}) => {
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
    )
  }
}