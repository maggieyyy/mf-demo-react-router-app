import React from 'react';
import { Button, Modal } from 'antd';

const PageA: React.FC = () => {
  const showModal = () => {
    Modal.info({
      title: 'Hello from Page A',
      content: 'This is a modal from antd!',
    });
  };

  return (
    <div style={{ backgroundColor: 'pink', minHeight: '100vh', padding: '20px' }}>
      <Button onClick={showModal}>Open Modal</Button>
    </div>
  );
};

export default PageA;