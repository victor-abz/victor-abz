/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Grid, Hidden, ListItemIcon, Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	cover: {
		position: 'relative',
		height: 130,
		width: 190,
		marginBottom: theme.spacing(5),
		backgroundColor: 'yellow'
	},
	avatar: {
		height: 200,
		width: 190,
		top: -50,
		position: 'absolute'
	},
	img: {
		height: '100%',
		width: '100%',
		borderRadius: '4px'
	},
	list: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	bio: {
		margin: theme.spacing(0, 3)
	},
	divider: {
		backgroundColor: 'white',
		marginBottom: theme.spacing(2)
	},
	mobileProfile: {
		flexGrow: 1,
		height: 130,
		position: 'relative',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		'&:before': {
			position: 'absolute',
			content: '" "',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.32) 100%)'
		}
	},
	MobileAvatar: {
		height: 120,
		width: 120,
		top: theme.spacing(4),
		left: theme.spacing(3),
		position: 'absolute'
	},
	mobileContainer: {
		flexGrow: 1,
		height: 130,
		backgroundColor: 'yellow'
	},
	con: {
		flexGrow: 1,
		width: '100%',
		height: 130,
		position: 'relative',
		marginBottom: theme.spacing(5)
	},
	namesMobile: {
		marginLeft: '46%'
	}
}));

const Profile = () => {
	const classes = useStyles();

	const user = {
		name: 'Abizeyimana Victor',
		bio: 'Software Engineer',
		avatar: 'victor_Abz.jpg',
		cover: '/DSC_4677.jpg',
		connectedStatus: 'not_connected',
		email: 'svicky.shema@gmail.com',
		phone: '+250 789 032 290',
		address: 'Kigali, Rwanda',
		twitter: '@vicky-abz',
		description:
			"Software Developer | Graphic designer | Video Editor | Guitarist | Pianist.I 'd love to discus with you on how I can improve your business."
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item md={3} sm={12} container direction='row'>
					<Hidden xsDown>
						<Grid item className={classes.cover}>
							<Paper elevation={5} className={classes.avatar}>
								<Avatar variant='square' alt='Person' className={classes.img} src={user.avatar} />
							</Paper>
						</Grid>
					</Hidden>
					<Hidden smUp>
						<Grid container>
							<Grid item className={classes.con}>
								<Avatar alt='Person' className={classes.MobileAvatar} src={user.avatar} />
								&nbsp;
								<Grid>
									<Grid item className={classes.namesMobile}>
										<Typography
											component='h1'
											variant='h5'
											style={{ fontWeight: 600, color: '#FFF', textTransform: 'uppercase' }}
										>
											{user.name}
										</Typography>
										<Typography
											component='h2'
											gutterBottom
											variant='overline'
											style={{ color: '#FFF' }}
										>
											{user.bio}
										</Typography>
										<Grid style={{ width: '100%' }}>
											<form method='get' action='CV-Victor-Abizeyimana.pdf'>
												<Button
													variant='contained'
													color='default'
													className={classes.button}
													startIcon={<CloudDownloadIcon />}
													type='submit'
												>
													Download PDF
												</Button>
											</form>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Hidden>
					<Hidden smDown>
						<Grid style={{ width: '100%' }}>
							<form method='get' action='CV-Victor-Abizeyimana.pdf'>
								<Button
									variant='contained'
									color='default'
									className={classes.button}
									startIcon={<CloudDownloadIcon />}
									type='submit'
								>
									Download PDF
								</Button>
							</form>
						</Grid>
					</Hidden>
				</Grid>
				<Grid item md={4} sm={12} container className={classes.bio}>
					<Grid item>
						<Hidden smDown>
							<Typography
								component='h1'
								variant='h4'
								style={{ fontWeight: 900, color: '#FFF', textTransform: 'uppercase' }}
							>
								{user.name}
							</Typography>
							<Typography component='h2' gutterBottom variant='overline' style={{ color: '#FFF' }}>
								{user.bio}
							</Typography>
							<Divider className={classes.divider} />
						</Hidden>
						<Typography>{user.description}</Typography>
					</Grid>
				</Grid>
				<Grid
					item
					md={4}
					sm={12}
					container
					style={{ background: 'url(/personal-info-sep.png) no-repeat left top' }}
				>
					<List className={classes.root}>
						<ListItem>
							<ListItemIcon>
								<EmailIcon />
							</ListItemIcon>
							<ListItemText primary={`${user.email}`} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CallIcon />
							</ListItemIcon>
							<ListItemText primary={`${user.phone}`} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary={`${user.address}`} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<TwitterIcon />
							</ListItemIcon>
							<ListItemText primary={`${user.twitter}`} />
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
