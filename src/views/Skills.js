/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { LinearProgress, Grid } from '@material-ui/core';
import Title from './Title';

const ProfessionalSkills = styled(Paper)`
	&& {
		background: #fff;
		padding: 24px;
	}
`;

const Skill = styled.div`
	padding: 8px;
	position: relative;
	p {
		margin-bottom: 8px;
		color: #e74c3c;
	}
	span {
		position: absolute;
		top: 0;
		right: 0;
		padding: 8px;
		color: #2980b9;
	}
`;

class Skills extends Component {
	render() {
		const skillsList = [
			{
				node: {
					frontmatter: {
						title: 'skills',
						name: 'Backend',
						amount: 80
					}
				}
			},
			{
				node: {
					frontmatter: {
						title: 'skills',
						name: 'Branding',
						amount: 90
					}
				}
			},
			{
				node: {
					frontmatter: {
						title: 'skills',
						name: 'Mobile App',
						amount: 60
					}
				}
			},
			{
				node: {
					frontmatter: {
						title: 'skills',
						name: 'Web Design',
						amount: 75
					}
				}
			}
		];
		return (
			<Grid>
				<Title>Professional Skills</Title>
				<ProfessionalSkills>
					<Grid container>
						{skillsList.map((s, i) => (
							<Grid item xs={12} md={6} key={s.node.frontmatter.name}>
								<Skill>
									<p>{s.node.frontmatter.name}</p>
									<span>{`${s.node.frontmatter.amount}%`}</span>
									<LinearProgress
										variant='determinate'
										value={parseInt(s.node.frontmatter.amount, 10)}
									/>
								</Skill>
							</Grid>
						))}
					</Grid>
				</ProfessionalSkills>
			</Grid>
		);
	}
}

export default Skills;
