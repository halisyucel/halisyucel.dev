import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import { getBookmarks } from '../lib/bookmarks';
import { TbBookmark } from 'react-icons/Tb'

const Bookmarks: NextPage = () => {
	return (
		<Layout>
			<h1 className={'flex h-12 justify-center items-center w-full text-4xl font-extrabold'}>
				<TbBookmark className={'text-5xl mr-3'} />
				Bookmarks
			</h1>
		</Layout>
	);
};

const getStaticProps = () => {
	getBookmarks({ page: 1});
	return {
		props: {},
	};
}

export default Bookmarks;
export { getStaticProps };
