import React from 'react';
import { timeLine } from './desktop';
import store from '../../../Store';
import { TimeLineHead } from '../../../Styled';

export default class HorizontalTimeLine extends React.Component {
	state = { activeTimeIndex: 0 };
	
	onTimelineClick = timelineIndex => {
		store.currentTime = timelineIndex;
		this.setState({ activeTimeIndex: timelineIndex });
	};

	render() {
		const { activeTimeIndex } = this.state;
		return (
			<div className={`${this.props.className}`}>
				<div class="swiper-container">
				<TimeLineHead>Projects</TimeLineHead>
					<p class="swiper-control" />
					<div className="swiper-wrapper timeline">
						{timeLine.map((item, index) => (
							<div className={"swiper-slide" + (activeTimeIndex === index ? ' js-active' : '')} onClick={() => { this.onTimelineClick(index); }}>
								<div className="timestamp" key={index}>
									<span className="date">{item.date}</span>
								</div>
								<div class="status">
									<span>{item.projectName}</span>
								</div>
								<span className="timeline-divider"/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
