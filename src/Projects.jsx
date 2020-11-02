import React from "react";
import ReactMarkdown from "react-markdown";
import _ from "lodash";

export class Projects extends React.PureComponent {
  render() {
    const { projects } = this.props;
    if (projects.length === 0) {
      return <></>;
    }
    return (
      <div id="projects">
        <div className="row">
          <div className="header-pre"></div>
          <h2>
            <svg className="icon-code icon-fw">
              <use xlinkHref="#icon-code"></use>
            </svg>
            &nbsp;Selected Projects
          </h2>
          <div className="header-post"></div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-12">
              <ul>
                {_.map(projects, ({ name, summary, site }) => {
                  return (
                    <li key={name}>
                      <ReactMarkdown
                        source={summary}
                        linkTarget="_blank"
                        className="rendered-markdown"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
