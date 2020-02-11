import React, { useState, useRef } from 'react';
import { TimeLineHead, TimeLineRoad } from '../../../Styled';
import store from '../../../Store';

export const timeLine = [

	{
		projectName: 'Electronic Document Management System',
		date: '2019/5/22',
		slides: ['/images/app-screenshots/edms-1.png', '/images/app-screenshots/edms-2.png', '/images/app-screenshots/edms-3.png', '/images/app-screenshots/edms-4.png', '/images/app-screenshots/edms-5.png'],
		objectFit: 'contain',
		backendTec: ['Not With Me'],
		frontendTec: ['Reactjs', 'Mobx', 'Styled Components'],
		company: 'Yeganehsoft'
	},
	{
		projectName: 'Secretariat NewFace',
		date: '2018/10/22',
		slides: ['/images/app-screenshots/new-1.png', '/images/app-screenshots/new-2.png', '/images/app-screenshots/new-3.png'],
		objectFit: 'contain',
		backendTec: ['Not With Me'],
		frontendTec: ['Reactjs', 'Mobx'],
		company: 'Yeganehsoft'
	},
	{
		projectName: 'Secretariat',
		date: '2018/4/21',
		slides: ['/images/app-screenshots/old-1.png', '/images/app-screenshots/old-2.png', '/images/app-screenshots/old-3.png'],
		objectFit: 'fill',
		backendTec: ['Not With Me'],
		frontendTec: ['Reactjs', 'Mobx', 'Antd Components'],
		company: 'Yeganehsoft'
	},
	{
		projectName: 'Navasangold Website',
		date: '2017/10/23',
		slides: [
			'/images/app-screenshots/navasangold-1.png',
			'/images/app-screenshots/navasangold-2.png',
			'/images/app-screenshots/navasangold-4.png'
		],
		objectFit: 'cover',
		backendTec: ['Python', 'Django'],
		frontendTec: ['Jquery', 'Bootstrap3'],
		company: 'Navasangold'
	}
];

const Timeline = ({ className }) => {
	const [activeTimeIndex, setActiveTimeIndex] = useState(0);
	const onTimelineClick = timelineIndex => {
		store.currentTime = timelineIndex;
		setActiveTimeIndex(timelineIndex);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<TimeLineHead><span>Projects</span></TimeLineHead>
			<TimeLineRoad className={'timeline' + ' ' + className}>
				{timeLine.map((time, index) => (
					<div className="timeline-item" key={index}>
						<div
							className={`container right` + (activeTimeIndex === index ? ' js-active' : '')}
							onClick={() => {
								onTimelineClick(index);
							}}
						>
							<div className="content">
								<span className="project-name">{time.projectName}</span>
								<span className="project-date">{time.date}</span>
							</div>
						</div>
					</div>
				))}
			</TimeLineRoad>
		</div>
	);

}
export default Timeline;
