import '../styles/globals.css';
import 'animate.css';
import 'rsuite/dist/rsuite.min.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { appendTab } from '../redux/features/history';
import { store } from '../redux/store';
import { routesToNames } from '../utils/helper';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		if (router.pathname === '/404') return;
		const fileName = `${routesToNames[router.pathname]}${
			router.query.hasOwnProperty('page') ? `/${router.query.page}` : ''
		}.tsx`;
		store.dispatch(
			appendTab({
				name: fileName,
				path: router.asPath,
			}),
		);
	}, [router]);
	return (
		<Provider store={store}>
			<NextNProgress height={6} />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
