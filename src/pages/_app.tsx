import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import Layout from '@/components/layout'
Amplify.configure(awsExports);

function App({ Component, pageProps }: AppProps) {
  
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  );
}

export default withAuthenticator(App);