import React from 'react';

import { Link } from 'react-router';

export default () => (
  <div className="content-container">
    <span className="text-center">
      <pre>Please see <Link to='/locations'>locations</Link> in the menu ^</pre>
    </span>
  </div >
);