/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { Avatar, Button, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

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
	contactInfo: {
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(1)
		}
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
		bio: 'Fullstack Software developer with Javascript and Python.',
		avatar: 'victor_Abz.jpeg',
		cover: '/DSC_4677.jpg',
		// connectedStatus: 'not_connected',
		email: 'svicky.shema@gmail.com',
		phone: '+250 789 032 290',
		linkedin: 'victor-abizeyimana-6a710910a/',
		address: 'Kigali, Rwanda',
		twitter: '@vicky-abz',
		description:
			'A problem-solving software engineer with over 6 years of experience developing financial software in a variety of industries, primarily finance and government services. I am driven to collaborate with remote and local teams all over the world to design, build, and continuously improve processes using scalable solutions.\nsimply, I Collaborate, Design, Build, and Improve.'
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
				<Grid item md={8} sm={12} className={classes.bio}>
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
					<Grid container>
						<IconButton aria-label='linkedin'>
							<LinkedInIcon />
						</IconButton>
						<IconButton aria-label='email'>
							<EmailIcon />
						</IconButton>
						<IconButton aria-label='github'>
							<GitHubIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
