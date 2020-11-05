import React from 'react';

import Layout from '@/components/Layout';
import ErrorView from '@/components/views/Error/ErrorView';

const Error404: React.FC = () => {
  return (
    <Layout title="Error">
      <ErrorView />
    </Layout>
  );
};
export default Error404;
