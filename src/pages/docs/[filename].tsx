import fs from 'fs-extra';
import React from 'react';
import DocumentView from '../../components/DocumentView';
import Layout from '../../components/Layout';
import basenames from '../../../public/index.json';

const Post = ({ html }: { html: string }) => {
  return (
    <Layout>
      <DocumentView html={html} />
    </Layout>
  );
};

export const getStaticPaths = async () => ({ paths: basenames.map(basename => `/docs/${basename}`), fallback: false });

export async function getStaticProps({ params }: { params: any }) {
  const filename = decodeURIComponent(params.filename as string);
  const html = await fs.readFile(`./public/raw-html/${filename}.html`, 'utf8');
  const [, bodyHTML] = html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [];
  return { props: { filename, html: bodyHTML || '' } };
}

export default Post;
