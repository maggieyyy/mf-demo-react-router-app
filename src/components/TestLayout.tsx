import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const TestLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { key: '/test/A', label: 'Page A' },
    { key: '/test/B', label: 'Page B' },
  ];

  return (
    <div style={{width:'60%', margin:'auto'}}>
      <Menu
        mode="horizontal"
        items={items}
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
      />
      <Outlet />
    </div>
  );
};

export default TestLayout;