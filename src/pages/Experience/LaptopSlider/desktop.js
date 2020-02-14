import React, { useState, useEffect } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import {
	LaptopSliderWrap,
	LaptopAppShot,
	LaptopSliderInner,
	Dot,
	ProjectInfo,
	ProjectInfoItem,
	ProjectInfoItemTitle,
	ProjectInfoItemContent
} from '../../../Styled';
import store from '../../../Store';
import { timeLine } from '../Timeline/desktop';

const LaptopSlider = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		setActiveSlide(0);
		removeSrc();
		lazyLoad();
	}, [store.currentTime]);

	const lazyLoad = () => {
		let lazyImages = [...document.querySelectorAll('.lazy-image')];
		let inAdvance = 300;
		lazyImages.forEach(image => {
			if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
				image.src = image.dataset.src;
				image.onload = () => image.classList.add('loaded');
			}
		});
	};

	const removeSrc = () => {
		let lazyImages = [...document.querySelectorAll('.lazy-image')];
		let inAdvance = 300;
		lazyImages.forEach(image => {
			if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
				image.removeAttribute("src");
			}
		});
	}

	useEffect(() => {
		lazyLoad();
	}, []);

	const getBackendTec = () => {
		return timeLine[store.currentTime].backendTec;
	};

	const getfrontTec = () => {
		return timeLine[store.currentTime].frontendTec;
	};

	const getCompany = () => {
		return timeLine[store.currentTime].company;
	};

	const onSlideChange = slideIndex => {
		setActiveSlide(slideIndex)
	};



	const slideStuff = () => {
		const shots = [];
		const dots = [];
		timeLine[store.currentTime].slides.map((slide, index) => {
			shots.push(<LaptopAppShot
				key={index}
				className={'lazy-image'}
				data-src={slide}
				style={{ objectFit: timeLine[store.currentTime].objectFit, opacity: index === 0 || activeSlide === index ? 1 : 0 }}

			/>);
			dots.push(<Dot
				key={index}
				className={activeSlide === index ? 'js-active' : ''}
				onClick={() => {
					onSlideChange(index);
				}}
			/>);
			return slide;
		});
		return {
			shots,
			dots
		}
	};
	return (
		<LaptopSliderWrap>
			<LaptopSliderInner
				onClick={() => {
					store.openDesktopSliderModal = true;
				}}
			>
				{slideStuff().shots}
				<div
					style={{ position: 'absolute', bottom: 70, textAlign: 'center', width: '1000px' }}
					onClick={e => {
						e.stopPropagation();
					}}
				>
					{slideStuff().dots}

				</div>
			</LaptopSliderInner>

			<ProjectInfo style={{ width: '820px' }}>
				<ProjectInfoItem>
					<ProjectInfoItemTitle>Backend Technology</ProjectInfoItemTitle>
					{getBackendTec().map((tec, index) => (
						<ProjectInfoItemContent key={index}>{tec}</ProjectInfoItemContent>
					))}
				</ProjectInfoItem>

				<ProjectInfoItem>
					<ProjectInfoItemTitle>Frontend Technology</ProjectInfoItemTitle>
					{getfrontTec().map((tec, index) => (
						<ProjectInfoItemContent key={index}>{tec}</ProjectInfoItemContent>
					))}
				</ProjectInfoItem>

				<ProjectInfoItem>
					<ProjectInfoItemTitle>Company</ProjectInfoItemTitle>
					<ProjectInfoItemContent>{getCompany()}</ProjectInfoItemContent>
				</ProjectInfoItem>
			</ProjectInfo>
		</LaptopSliderWrap >
	);
}

export default observer(LaptopSlider);
