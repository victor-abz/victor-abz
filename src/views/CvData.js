export const CVData = {
	personalData: {
		name: 'Abizeyimana Victor',
		title: 'Software Engineer',
		image: 'victor_Abz.jpg',
		contacts: [
			{ type: 'email', value: 'svicky.shema@gmail.com' },
			{ type: 'phone', value: '+250 789 032 290' },
			{ type: 'location', value: 'Kigali- Rwanda' },
			{ type: 'website', value: 'inepu.com/victor' },
			{ type: 'linkedin', value: 'victor-abizeyimana-6a710910a/' },
			{ type: 'twitter', value: 'www.victor_abz' },
			{ type: 'github', value: 'github.com/victor-abz' }
		]
	},
	sections: [
		{
			type: 'text',
			title: 'Career Profile',
			content:
				// eslint-disable-next-line max-len
				'Creative Software engineer, Graphic designer and an ambitious problem solver for online businesses.  Victor has a keen interest in technology, mobile applications and user experience. He is equipped with innovative ideas and a unique approach to developing designs for online websites, video, and advertising. Solid understanding of marketing principles and advertising techniques. Great attention to detail and a talent for creating great UX. Victor is an Enthusiastic team player who is committed to delivering top results on time and within the budget.',
			icon: 'usertie'
		},
		{
			type: 'common-list',
			title: 'Education',
			icon: 'graduation',
			items: [
				{
					title: 'Business Administration (BS)',
					authority: 'University of Rwanda',
					authorityWebSite: 'https://ur.ac.rw',
					rightSide: '2014 - 2018'
				},
				{
					title: 'Software Engineering',
					authority: 'Lynda.com and udemy.com',
					authorityWebSite: 'https://udemy.com',
					rightSide: '2015 - 2017'
				},
				{
					title: 'Graphic design',
					authority: 'Lynda.com and udemy.com',
					authorityWebSite: 'https://lynda.com',
					rightSide: '2014 - 2016'
				},
				{
					title: "Math-Physics and Computer science (A' Level)",
					authority: 'ES Kanombe',
					rightSide: '2010 - 2013'
				},
				{
					title: "O' Level",
					authority: 'ES Kanombe',
					rightSide: '2007 - 2009'
				},
				{
					title: 'Primary school',
					authority: 'EP Rubirizi',
					rightSide: '2003 - 2006'
				}
			]
		},
		{
			type: 'experiences-list',
			title: 'Experiences',
			icon: 'archive',
			items: [
				{
					title: 'Associate Software Engineer',
					company: 'Andela Rwanda Limited',
					description:
						// eslint-disable-next-line max-len
						'Designed systems using technology stacks like MERN(Mongo, Express, React & Redux and Node Js) and worked on projects in Postgres or MySql',
					companyWebSite: 'http://andela.com',
					companyMeta: '',
					datesBetween: '2019.11 - 2020-07',
					descriptionTags: [
						'Javascript',
						'React',
						'Node Js',
						'PostgreSQL',
						'Flutter',
						'Redux',
						'Docker'
					]
				},
				{
					title: 'Graphic Designer',
					company: 'T-Kay Investment Ltd',
					companyWebSite: 'http://tkayinvestment.com',
					companyMeta: '',
					description:
						// eslint-disable-next-line max-len
						'Designed and coordinated various packaging and branding projects, working closely with printers and both domestic and international factories.  ',
					datesBetween: '2018.12 - 2019.10',
					descriptionTags: [
						'Illustrator',
						'Wordpress',
						'Javascript',
						'Html + CSS',
						'Social media Management',
						'Photoshop'
					]
				},
				{
					title: 'Senior Software Engineer',
					company: 'Inepu Limited',
					companyWebSite: 'http://inepu.com',
					companyMeta: '',
					description:
						'Responsible for working on a range of projects, designing appealing websites.',
					datesBetween: '2017.7 - Present',
					descriptionTags: ['Javascript', 'Wordpress', 'Laravel', 'PHP', 'Social media Management']
				},
				{
					title: 'Freelance',
					company: 'Some Software Example INC',
					description:
						// eslint-disable-next-line max-len
						'I’ve worked with agencies, design studios and also taken on solo projects. The work has been primarily in the realms of  design, Video making, Video editing.',
					datesBetween: '2014 - Present',
					descriptionTags: ['Adobe Creative Suit', 'Photography', 'VideoGraphy', 'Video Editing']
				}
			]
		},
		{
			type: 'common-list',
			title: 'Conferences & Certificates',
			description: '',
			icon: 'comments',
			items: [
				{
					title: 'Smart Africa / 2019',
					authority: 'Smart Africa',
					authorityWebSite: 'https://smartafrica.org/'
				},
				{
					title: 'Global Enterprise Experience / 2017',
					authority: 'Global Enterprise Experience',
					authorityWebSite: 'https://www.geebiz.org/'
				}
			]
		},
		{
			type: 'common-list',
			title: 'Languages',
			icon: 'language',
			items: [
				{
					authority: 'English',
					authorityMeta: 'Professional'
				},
				{
					authority: 'French',
					authorityMeta: 'Intermediate'
				},
				{
					authority: 'Kinyarwanda',
					authorityMeta: 'Fluent'
				}
			]
		},
		{
			type: 'tag-list',
			title: 'Skills Proficiency',
			icon: 'rocket',
			items: [
				'React',
				'Javascript',
				'CSS',
				'SQL',
				'React',
				'Node Js',
				'PostgreSQL',
				'Flutter',
				'Redux',
				'Docker',
				'Illustrator',
				'Photoshop',
				'InDesign',
				'Microsoft suite'
			]
		},
		{
			type: 'tag-list',
			title: 'Hobbies & Interests',
			icon: 'cubes',
			items: ['Piano playing', 'Reading Books', 'Music', 'Guitar player']
		}
	]
};

export default CVData;
