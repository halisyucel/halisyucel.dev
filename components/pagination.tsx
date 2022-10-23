import React from 'react';
import {
	BsChevronDoubleLeft,
	BsChevronDoubleRight,
	BsChevronLeft,
	BsChevronRight,
} from 'react-icons/bs';
import { Button, IconButton } from 'rsuite';

interface PaginationProps {
	currentPage: number;
	pageSize: number;
	total: number;
	onChange: (page: number) => void;
}

interface PaginationButtonProps {
	type: 'prev' | 'next' | 'page' | 'prev-first' | 'next-last';
	value: number;
	isCurrent: boolean;
	onClick: (value: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ type, value, isCurrent, onClick }) => {
	return (
		<label
			className={'mr-2 font-source-sans last:mr-0'}
			onClick={() => !isCurrent && onClick(value)}
		>
			{type === 'page' && (
				<Button size={'sm'} appearance={isCurrent ? 'primary' : 'default'}>
					<span className={'h-[30px] font-extrabold'}>{value}</span>
				</Button>
			)}
			{type === 'prev' && <IconButton size={'sm'} icon={<BsChevronLeft />} />}
			{type === 'next' && <IconButton size={'sm'} icon={<BsChevronRight />} />}
			{type === 'prev-first' && <IconButton size={'sm'} icon={<BsChevronDoubleLeft />} />}
			{type === 'next-last' && <IconButton size={'sm'} icon={<BsChevronDoubleRight />} />}
		</label>
	);
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, pageSize, total, onChange }) => {
	const numberOfPages = Math.ceil(total / pageSize);
	return (
		<div>
			{numberOfPages <= 5 ? (
				<React.Fragment>
					{Array.from({ length: numberOfPages }, (_, i) => (
						<PaginationButton
							key={i}
							type={'page'}
							value={i + 1}
							isCurrent={i + 1 === currentPage}
							onClick={(value) => onChange(value)}
						/>
					))}
				</React.Fragment>
			) : (
				<React.Fragment>
					{currentPage > 4 && (
						<PaginationButton
							type={'prev-first'}
							value={1}
							isCurrent={false}
							onClick={(value) => onChange(value)}
						/>
					)}
					{currentPage > 3 && (
						<PaginationButton
							type={'prev'}
							value={currentPage - 3}
							isCurrent={false}
							onClick={(value) => onChange(value)}
						/>
					)}
					{currentPage < 3 ? (
						// first or second page
						<React.Fragment>
							{Array.from({ length: 5 }, (_, i) => (
								<PaginationButton
									key={i}
									type={'page'}
									value={i + 1}
									isCurrent={i + 1 === currentPage}
									onClick={(value) => onChange(value)}
								/>
							))}
						</React.Fragment>
					) : currentPage > numberOfPages - 3 ? (
						// last or second to last page
						<React.Fragment>
							{Array.from({ length: 5 }, (_, i) => (
								<PaginationButton
									key={i}
									type={'page'}
									value={numberOfPages - 4 + i}
									isCurrent={numberOfPages - 4 + i === currentPage}
									onClick={(value) => onChange(value)}
								/>
							))}
						</React.Fragment>
					) : (
						// middle page
						<React.Fragment>
							{Array.from({ length: 5 }, (_, i) => (
								<PaginationButton
									key={i}
									type={'page'}
									value={currentPage - 2 + i}
									isCurrent={currentPage - 2 + i === currentPage}
									onClick={(value) => onChange(value)}
								/>
							))}
						</React.Fragment>
					)}
					{currentPage < numberOfPages - 2 && (
						<PaginationButton
							type={'next'}
							value={currentPage < 3 ? 6 : currentPage + 3}
							isCurrent={false}
							onClick={(value) => onChange(value)}
						/>
					)}
					{currentPage < numberOfPages - 3 && (
						<PaginationButton
							type={'next-last'}
							value={numberOfPages}
							isCurrent={false}
							onClick={(value) => onChange(value)}
						/>
					)}
				</React.Fragment>
			)}
		</div>
	);
};

export default Pagination;
