import React from 'react';
import Layout from '@/components/Layout';
import ErrorView from '@/components/views/Error/ErrorView';

const ErrorSound: React.FC = () => {
  return (
    <Layout title="Error">
      <ErrorView />
    </Layout>
  );
};
export default ErrorSound;
