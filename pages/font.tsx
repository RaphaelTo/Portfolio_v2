import React from 'react';
import Layout from '@/components/Layout';
import ErrorView from '@/components/views/Error/ErrorView';

const ErrorFont: React.FC = () => {
  return (
    <Layout title="Error">
      <ErrorView />
    </Layout>
  );
};
export default ErrorFont;
