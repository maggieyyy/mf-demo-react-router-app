import React from 'react';
import { Button, message } from 'antd';

const PageB: React.FC = () => {
  const showMessage = () => {
    message.success('Hello from Page B!');
  };

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', padding: '20px' }}>
      <Button onClick={showMessage}>Show Message</Button>
    </div>
  );
};

export default PageB;