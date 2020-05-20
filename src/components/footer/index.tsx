import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Index: React.FC = () => (
  <footer id="footer" className="footer style-01">
    <div className="section-010">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              © Copyright 2020 <Link to="/">Bemiracle</Link>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Index;
