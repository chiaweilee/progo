import React from 'react';

function Page(props) {
  return 'Hello World!';
}

Page.getInitialProps = ctx => {
  return Promise.resolve({});
};

export default Page;
