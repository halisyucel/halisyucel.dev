import { toggleTheme } from '../redux/features/settings';
import { RootState } from '../redux/store';
import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from 'rsuite';

// import { elementToSVG } from 'dom-to-svg';

const ToggleThemeButton = () => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state: RootState) => state.settings);
	// const [svgData, setSvgData] = useState('');
	return (
		<React.Fragment>
			<IconButton
				size={'xs'}
				onClick={() => {
					dispatch(toggleTheme());
					// const svgDocument = elementToSVG(document.body);
					// const svgString = new XMLSerializer().serializeToString(svgDocument);
					// setSvgData(svgString);
				}}
				icon={
					theme === 'light' ? (
						<BsFillSunFill className={'text-yellow-500'} />
					) : (
						<BsFillMoonStarsFill className={'text-yellow-500'} />
					)
				}
			/>
			{/*<div
				className={`fixed inset-0 w-screen ${svgData === '' ? 'hidden' : 'visible'}`}
				dangerouslySetInnerHTML={{ __html: svgData }}
			/>*/}
		</React.Fragment>
	);
};

export default ToggleThemeButton;
