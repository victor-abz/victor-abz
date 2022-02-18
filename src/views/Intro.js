/* eslint-disable max-len */
import { AppBar, Box, Grid, Hidden, Tabs, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Example from './Resume';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	};
}

function MobileTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box style={{ backgroundColor: '#2BB673' }} p={3}>
					{children}
				</Box>
			)}
		</Typography>
	);
}

function mobileA11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		boxShadow:
			'0px 4px 8px -2px rgba(0,0,0,0.4), 0px 8px 10px 0px rgba(0,0,0,0.28), 0px 2px 20px 0px rgba(0,0,0,0.24)'
	},
	root: {
		display: 'flex',
		minHeight: 280,
		minWidth: 1000,
		maxWidth: 1000
	},
	desktopContainer: {
		backgroundColor: '#282c34',
		minHeight: '100vh',
		justifyContent: 'center',
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center'
	},
	mobileContainer: {
		backgroundColor: '#282c34',
		minHeight: '100vh',
		justifyContent: 'center',
		flexGrow: 1,
		alignItems: 'center'
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		textAlign: 'left'
	},
	profileContainer: {
		// backgroundColor: '#2BB673',
		minHeight: '90vh',
		justifyContent: 'center',
		display: 'flex',
		flexGrow: 1
	}
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	return (
		<div>
			<Hidden smDown>
				<Grid className={classes.desktopContainer}>
					<Grid className={classes.root}>
						<Tabs
							orientation='vertical'
							variant='scrollable'
							value={value}
							onChange={handleChange}
							aria-label='Vertical tabs example'
							className={classes.tabs}
						>
							<Tab label='About' {...a11yProps(0)} />
							<Tab label='Resume' {...a11yProps(1)} />
							{/* <Tab label='Portfolio' {...a11yProps(2)} />
							<Tab label='Contact' {...a11yProps(3)} /> */}
						</Tabs>
						<TabPanel value={value} index={0} style={{ width: '100%', backgroundColor: '#2BB673' }}>
							<Profile />
						</TabPanel>
						<TabPanel
							value={value}
							index={1}
							style={{
								width: '100%',
								maxHeight: '70vh',
								overflow: 'scroll',
								backgroundColor: '#2BB673'
							}}
						>
							<Example />
						</TabPanel>
						<TabPanel
							value={value}
							index={2}
							style={{
								width: '100%',
								maxHeight: '70vh',
								overflow: 'scroll',
								backgroundColor: '#2BB673'
							}}
						>
							<Portfolio />
						</TabPanel>
						<TabPanel
							value={value}
							index={3}
							style={{
								width: '100%',
								maxHeight: '70vh',
								overflow: 'scroll',
								backgroundColor: '#2BB673'
							}}
						>
							<Contact />
						</TabPanel>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden smUp>
				<Grid className={classes.mobileContainer}>
					<AppBar position='fixed' color='default' className={classes.appBar}>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor='primary'
							textColor='primary'
							variant='fullWidth'
							aria-label='full width tabs example'
						>
							<Tab label='About' {...mobileA11yProps(0)} />
							<Tab label='Resume' {...mobileA11yProps(1)} />
							{/* <Tab label='Portfolio' {...mobileA11yProps(2)} />
							<Tab label='Contact' {...mobileA11yProps(3)} /> */}
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
					>
						<MobileTabPanel value={value} index={0} dir={theme.direction}>
							<Grid container className={classes.profileContainer}>
								<Profile />
							</Grid>
						</MobileTabPanel>
						<MobileTabPanel value={value} index={1} dir={theme.direction}>
							<Example />
						</MobileTabPanel>
						{/* <MobileTabPanel value={value} index={2} dir={theme.direction}>
							<Portfolio />
						</MobileTabPanel>
						<MobileTabPanel value={value} index={3} dir={theme.direction}>
							<Contact />
						</MobileTabPanel> */}
					</SwipeableViews>
				</Grid>
			</Hidden>
		</div>
	);
}

// VerticalTabs.getTheme = () => ({
// 	MuiTabs: {
// 		indicator: {
// 			display: 'none'
// 		}
// 	},
// 	MuiTab: {
// 		root: {
// 			position: 'relative',
// 			display: 'block',
// 			textAlign: 'center',
// 			transition: 'all .5s',
// 			padding: '10px 15px',
// 			color: '#555555',
// 			backgroundColor: '#FFFFFF',
// 			height: 'auto',
// 			opacity: '1',
// 			width: '100%',
// 			float: 'none',
// 			'&$selected': {
// 				'&, &:hover': {
// 					color: '#FFFFFF',
// 					backgroundColor: '#2BB673',
// 					boxShadow: '0 10px 16px -6px rgba(138, 106, 19, 0.4)'
// 				}
// 			}
// 		},
// 		labelContainer: {
// 			padding: '0!important',
// 			color: 'inherit'
// 		},
// 		label: {
// 			lineHeight: '24px',
// 			textTransform: 'uppercase',
// 			fontSize: '12px',
// 			fontWeight: '500',
// 			position: 'relative',
// 			display: 'block',
// 			color: 'inherit'
// 		}
// 	}
// });
