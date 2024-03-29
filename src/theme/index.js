/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import _ from 'lodash';
import { softShadows, strongShadows } from './shadows';
import { THEMES } from './themes';
import typography from './typography';

const baseConfig = {
	direction: 'ltr',
	typography,
	overrides: {
		MuiLinearProgress: {
			root: {
				borderRadius: 3,
				overflow: 'hidden'
			}
		},
		MuiListItemIcon: {
			root: {
				minWidth: 32
			}
		},
		MuiChip: {
			root: {
				backgroundColor: 'rgba(0,0,0,0.075)'
			}
		}
	}
};

const themeConfigs = [
	{
		name: THEMES.LIGHT,
		overrides: {
			MuiInputBase: {
				input: {
					'&::placeholder': {
						opacity: 1,
						color: colors.blueGrey[600]
					}
				}
			},
			MuiTabs: {
				indicator: {
					display: 'none'
				}
			},
			MuiTab: {
				root: {
					position: 'relative',
					display: 'block',
					textAlign: 'center',
					transition: 'all .5s',
					padding: '10px 15px',
					color: '#555555',
					backgroundColor: '#FFFFFF',
					height: 'auto',
					opacity: '1',
					width: '100%',
					float: 'none',
					'&$selected': {
						'&, &:hover': {
							color: '#FFFFFF',
							backgroundColor: '#2BB673',
							boxShadow: '0 10px 16px -6px rgba(138, 106, 19, 0.4)'
						}
					}
				},
				labelContainer: {
					padding: '0!important',
					color: 'inherit'
				},
				label: {
					lineHeight: '24px',
					textTransform: 'uppercase',
					fontSize: '12px',
					fontWeight: '500',
					position: 'relative',
					display: 'block',
					color: 'inherit'
				}
			}
		},
		palette: {
			type: 'light',
			action: {
				active: colors.blueGrey[600]
			},
			background: {
				default: colors.common.white,
				dark: '#f4f6f8',
				paper: colors.common.white
			},
			primary: {
				main: colors.indigo[600]
			},
			secondary: {
				main: '#5850EC'
			},
			text: {
				primary: colors.blueGrey[900],
				secondary: colors.blueGrey[600]
			}
		},
		shadows: softShadows
	},
	{
		name: THEMES.ONE_DARK,
		overrides: {
			MuiInputBase: {
				input: {
					'&::placeholder': {
						opacity: 1,
						color: colors.blueGrey[600]
					}
				}
			},
			MuiTabs: {
				indicator: {
					display: 'none'
				}
			},
			MuiTab: {
				root: {
					position: 'relative',
					display: 'block',
					textAlign: 'center',
					transition: 'all .5s',
					padding: '10px 15px',
					color: '#555555',
					backgroundColor: '#FFFFFF',
					height: 'auto',
					opacity: '1',
					width: '100%',
					float: 'none',
					'&$selected': {
						'&, &:hover': {
							color: '#FFFFFF',
							backgroundColor: '#2BB673',
							boxShadow: '0 10px 16px -6px rgba(138, 106, 19, 0.4)'
						}
					}
				},
				labelContainer: {
					padding: '0!important',
					color: 'inherit'
				},
				label: {
					lineHeight: '24px',
					textTransform: 'uppercase',
					fontSize: '12px',
					fontWeight: '500',
					position: 'relative',
					display: 'block',
					color: 'inherit'
				}
			}
		},
		palette: {
			type: 'dark',
			action: {
				active: 'rgba(255, 255, 255, 0.54)',
				hover: 'rgba(255, 255, 255, 0.04)',
				selected: 'rgba(255, 255, 255, 0.08)',
				disabled: 'rgba(255, 255, 255, 0.26)',
				disabledBackground: 'rgba(255, 255, 255, 0.12)',
				focus: 'rgba(255, 255, 255, 0.12)'
			},
			background: {
				default: '#282C34',
				dark: '#1c2025',
				paper: '#282C34'
			},
			primary: {
				main: '#8a85ff'
			},
			secondary: {
				main: '#8a85ff'
			},
			text: {
				primary: '#e6e5e8',
				secondary: '#adb0bb'
			}
		},
		shadows: strongShadows
	},
	{
		name: THEMES.UNICORN,
		// overrides: {
		// 	MuiInputBase: {
		// 		input: {
		// 			'&::placeholder': {
		// 				opacity: 1,
		// 				color: colors.blueGrey[600]
		// 			}
		// 		}
		// 	},
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
		// },
		palette: {
			type: 'dark',
			action: {
				active: 'rgba(255, 255, 255, 0.54)',
				hover: 'rgba(255, 255, 255, 0.04)',
				selected: 'rgba(255, 255, 255, 0.08)',
				disabled: 'rgba(255, 255, 255, 0.26)',
				disabledBackground: 'rgba(255, 255, 255, 0.12)',
				focus: 'rgba(255, 255, 255, 0.12)'
			},
			background: {
				default: '#2a2d3d',
				dark: '#222431',
				paper: '#2a2d3d'
			},
			primary: {
				main: '#a67dff'
			},
			secondary: {
				main: '#a67dff'
			},
			text: {
				primary: '#f6f5f8',
				secondary: '#9699a4'
			}
		},
		shadows: strongShadows
	}
];

export function createTheme(settings = {}) {
	let themeConfig = themeConfigs.find(theme => theme.name === settings.theme);

	if (!themeConfig) {
		console.warn(new Error(`The theme ${settings.theme} is not valid`));
		[themeConfig] = themeConfigs;
	}

	let theme = createMuiTheme(
		_.merge({}, baseConfig, themeConfig, { direction: settings.direction })
	);

	if (settings.responsiveFontSizes) {
		theme = responsiveFontSizes(theme);
	}

	return theme;
}
