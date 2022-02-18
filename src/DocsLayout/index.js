import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({
	wrapper: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		height: '100%',
		overflow: 'hidden',
		paddingTop: 64,
		[theme.breakpoints.up('lg')]: {
			paddingLeft: 256
		}
	},
	contentContainer: {
		flex: '1 1 auto',
		overflow: 'auto'
	},
	content: {
		paddingBottom: 120
	}
}));

function DocsLayout({ children }) {
	const classes = useStyles();
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<>
			<TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<NavBar onMobileClose={() => setMobileNavOpen(false)} openMobile={isMobileNavOpen} />
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<Container maxWidth='md' className={classes.content}>
						<p> Hello World</p>
					</Container>
				</div>
			</div>
		</>
	);
}

DocsLayout.propTypes = {
	children: PropTypes.any
};

export default DocsLayout;
