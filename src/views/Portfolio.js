/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { Button, Paper, Grid } from '@material-ui/core';
import { MdLink } from 'react-icons/md';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { makeStyles } from '@material-ui/core/styles';

import Title from './Title';

const breakpointColumnsObj = {
	default: 2,
	1100: 2,
	700: 2,
	500: 1
};
const PortfolioWrapper = styled.div`
	margin: 40px 0;
`;

const PortfolioGrid = styled.div`
	display: block;
`;

const MasonryGrid = styled(Masonry)`
	&& {
		width: 100%;
		display: flex;
		margin: 0;
		padding: 0;
		.grid_column {
			border-right: 16px solid transparent;
			background-clip: padding-box;
			&:nth-child(even) {
				border-right: 0;
			}
		}
	}
`;
const MetaButton = styled.a`
	color: #fff;
	font-size: 32px;
	cursor: pointer;
	padding: 8px;
`;
const PortfolioDesc = styled.div`
	position: absolute;
	bottom: 0px;
	transform: translate(0px, 200px);
	left: 0;
	width: 100%;
	text-align: center;
	transition: all 600ms ease-in;
	h2 {
		color: #fff;
	}
	ul {
		padding: 0;
		margin: 0;
		li {
			display: inline-block;
			padding-right: 8px;
			color: #fff;
			background: none;
		}
	}
`;

function PortfolioFilter({ setFilter, filter }) {
	const useStyles = makeStyles(theme => ({
		root: {
			'& > *': {
				margin: theme.spacing(1)
			}
		}
	}));
	const css = useStyles();

	const filters = ['all', 'frontend', 'mobile', 'ux-ui', 'others'];
	return (
		<div className={css.root}>
			{filters.map(f => (
				<Button
					size='small'
					color={filter === f ? 'primary' : 'default'}
					variant='contained'
					onClick={() => setFilter(f)}
					key={f}
				>
					{f}
				</Button>
			))}
		</div>
	);
}

const PortfolioItem = styled(Paper)`
	&& {
		background: #fff;
		margin-bottom: 16px;
		transition: all 300ms ease-in;

		img {
			width: 100%;
			height: 300px;
			@media (max-width: 480px) {
				height: 150px;
			}
			@media (max-width: 1070px) {
				height: 250px;
			}
			margin-bottom: -10px;
			margin-left: 0px;
			transition: all 500ms ease-in;
		}
		position: relative;
		overflow: hidden;
		span {
			transition: all 500ms ease-in;
		}
		&:hover {
			span {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				z-index: 99;
				background: rgba(0, 0, 0, 0.5);
			}
			img {
				transform: rotate(-3deg) scale(1.1);
			}
			${PortfolioDesc} {
				transform: translate(0px, -50px);
				z-index: 999;
			}
		}
	}
`;

const MoreButton = styled(Button)`
	&& {
		margin: 36px auto;
		display: flex;
	}
`;

const Portfolio = () => {
	const portfolioList = [
		{
			title: 'ortfolio',
			name: 'Beats Design',
			image: 'https://lazord.netlify.com/img/portfolio/1.jpg',
			link: '#',
			category: ['all', 'frontend', 'ux-ui']
		},
		{
			title: 'portfolio',
			name: 'Camera App',
			image: 'https://lazord.netlify.com/img/portfolio/2.jpg',
			link: '#',
			category: ['all', 'mobile', 'ux-ui']
		},
		{
			title: 'portfolio',
			name: 'Movie App',
			image: 'https://lazord.netlify.com/img/portfolio/3.jpg',
			link: '#',
			category: ['all', 'frontend']
		},
		{
			title: 'portfolio',
			name: 'Ballon App',
			image: 'https://lazord.netlify.com/img/portfolio/4.jpg',
			link: '#',
			category: ['all', 'frontend', 'others']
		}
	];

	const [filter, setFilter] = useState('all');
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(portfolioList);
		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		setProjects([]);
		const filtered = portfolioList.filter(p => p.category.includes(filter));
		setProjects(filtered);
		// eslint-disable-next-line
    }, [filter]);
	return (
		<Grid>
			<PortfolioWrapper>
				<Title>Portfolio</Title>
				<form method='get' action='Victor-Web-portfolio.pdf' style={{ paddingTop: 20 }}>
					<h3>This section is still Under Construction, meanwhile download the portfolio in pdf</h3>
					<Button
						variant='contained'
						color='default'
						startIcon={<CloudDownloadIcon />}
						type='submit'
					>
						Download Portfolio
					</Button>
				</form>

				<Grid style={{ display: 'none' }}>
					<PortfolioFilter filter={filter} setFilter={setFilter} />
					<PortfolioGrid>
						<MasonryGrid breakpointCols={breakpointColumnsObj} columnClassName='grid_column'>
							{projects.map(p => (
								<PortfolioItem key={p.name}>
									<span />
									<PortfolioDesc>
										<h2>{p.name}</h2>
										<ul>
											<li>
												<MetaButton aria-label='More'>
													<MoreHorizIcon />
												</MetaButton>
											</li>
											<li>
												<MetaButton aria-label='Link'>
													<MdLink />
												</MetaButton>
											</li>
										</ul>
									</PortfolioDesc>
									<img alt='Portfolio' src={p.image} />
								</PortfolioItem>
							))}
						</MasonryGrid>
						<MoreButton>See More Projects</MoreButton>
					</PortfolioGrid>
				</Grid>
			</PortfolioWrapper>
		</Grid>
	);
};

export default Portfolio;
