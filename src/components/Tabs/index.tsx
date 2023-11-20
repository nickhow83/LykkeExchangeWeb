import classNames from 'classnames';
import React from 'react';
import {Link, Route} from 'react-router-dom';
import './style.css';

interface TabLinkProps {
  active?: boolean;
  label: string;
  to: string;
}

interface TabPaneProps {
  to: string;
}

export const TabLink: React.FC<TabLinkProps> = ({active, label, to}) => (
  <Route
    path={to}
    exact={true}
    // tslint:disable-next-line:jsx-no-lambda
    children={({match}) => (
      <div className={classNames('tab', {'tab--active': !!match || active})}>
        <Link to={to} className="tab__link">
          {label}
        </Link>
      </div>
    )}
  />
);

export const TabPane: React.FC<TabPaneProps> = ({to, children}) => (
  <Route
    path={to}
    exact={true}
    // tslint:disable-next-line:jsx-no-lambda
    render={({match}) => children}
  />
);
