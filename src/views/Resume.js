/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import React from 'react';
import CV from 'react-cv';
import { CVData } from './CvData';

const useStyles = makeStyles(theme => ({
	grid: {
		margin: theme.spacing(2)
	}
}));
const Resume = () => {
	const classes = useStyles();
	return (
		<>
			<Grid style={{ width: '100%', marginLeft: 25 }}>
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
			<Grid md>
				<CV {...CVData} branding={false} style={{ whiteSpace: 'break-spaces' }} />
			</Grid>
			<Grid style={{ width: '100%', marginLeft: 25 }}>
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
		</>
	);
};

export default Resume;
