import React from 'react';
import { Button } from 'rsuite';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/features/settings';

const ToggleThemeButton = () => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state: RootState) => state.settings);
	return (
		<Button
			size={'xs'}
			onClick={() => dispatch(toggleTheme())}
		>
			{theme === 'light' ?
				<BsFillSunFill className={'h-5 text-yellow-500'}/> :
				<BsFillMoonStarsFill className={'h-5 text-yellow-500'}/>
			}
		</Button>
	);
};

export default ToggleThemeButton;
