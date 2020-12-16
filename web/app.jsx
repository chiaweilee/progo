import React, { useState, useEffect } from 'react';
import service from '@/service';

function Page(props) {
  const [status, setStatus] = useState(undefined);
  const [settings, setSettings] = useState(undefined);

  useEffect(() => {
    service.status(res => {
      setStatus(res.status);
      if (res.settings) setSettings(res.settings);
    });
  }, []);

  return `Hello World! ${JSON.stringify(status)} ${JSON.stringify(settings)}`;
}

Page.getInitialProps = ctx => {
  return Promise.resolve({});
};

export default Page;
