import Layout from '@/components/Layout';

export default function Schema(): JSX.Element {
  return <Layout>schema</Layout>;
}

export const getServerSideProps = async () => {
  // sleep 2 seconds

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    props: {},
  };
};
