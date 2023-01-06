import '../style.css';
import { Fragment } from 'react';

import Content from './Content';
import Header from './Header';
import Footer from './Footer';

function Template() {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default function App() {
  return (
    <Template />
  );
}
