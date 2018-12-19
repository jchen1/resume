import React from 'react';
import _ from 'lodash';

export class Sidebar extends React.PureComponent {
  render () {
    const { basics } = this.props;
    return (
      <div className="contact col-sm-6 col-xs-6 left">
        <ul>
          <li>
            <a href={"mailto:" + basics.email}>{basics.email}</a>&nbsp;<svg className="icon-envelope-o icon-fw"><use xlinkHref="#icon-envelope-o"></use></svg>
          </li>
          <li>
            {basics.location.city}, {basics.location.region}&nbsp;<svg className="icon-map-marker icon-fw"><use xlinkHref="#icon-map-marker"></use></svg>
          </li>
          <li>
            {basics.phone}&nbsp;<svg className="icon-mobile icon-fw"><use xlinkHref="#icon-mobile"></use></svg>
          </li>
          <li>
            <a href={"http://" + basics.website} target="_blank">{basics.website}</a>&nbsp;<svg className="icon-cloud icon-fw"><use xlinkHref="#icon-cloud"></use></svg>
          </li>
        </ul>
      </div>
    )
  }
}