import React from 'react';
import _ from 'lodash';

export class Skills extends React.PureComponent {
  render () {
    const { skills } = this.props;

    return (
      <div id="skills">
      <div className="row">
        <div className="header-pre"></div>
        <h2><svg className="icon-fw icon-code-fork"><use xlinkHref="#icon-code-fork"></use></svg>&nbsp;Skills</h2>
        <div className="header-post"></div>
      </div>
      {_.map(skills, ({name, keywords}, i) => {
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
    )
  }
}