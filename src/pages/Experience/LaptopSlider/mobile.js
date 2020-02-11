import React, { useState, useEffect } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { LaptopSliderWrap, MobileLaptopAppShot, MobileLaptopSliderInner, Dot, ProjectInfo, ProjectInfoItem, ProjectInfoItemTitle, ProjectInfoItemContent, ProjectInfoItemHead } from '../../../Styled';
import store from '../../../Store';
import { timeLine } from '../Timeline/desktop';

const MobileSlider = () => {
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
            shots.push(<MobileLaptopAppShot
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
        <LaptopSliderWrap style={{ marginTop: '80px' }}>
            <MobileLaptopSliderInner onClick={() => { store.openMobileSliderModal = true; }}>
                {slideStuff().shots}
                <div
                    style={{ position: 'absolute', bottom: 70, textAlign: 'center', width: '100%' }}
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    {slideStuff().dots}
                </div>
            </MobileLaptopSliderInner>


            <ProjectInfo style={{ flexDirection: 'column', margin: '0px auto', flexWrap: 'wrap' }}>
                <ProjectInfoItem style={{ margin: 5 }}>
                    <ProjectInfoItemHead>
                        Backend Technology
                            </ProjectInfoItemHead>
                    {getBackendTec().map((tec, index) => (
                        <ProjectInfoItemContent key={index}>
                            {tec}
                        </ProjectInfoItemContent>
                    ))}

                </ProjectInfoItem>

                <ProjectInfoItem style={{ margin: 5 }}>
                    <ProjectInfoItemHead>
                        Frontend Technology
                            </ProjectInfoItemHead>
                    {getfrontTec().map((tec, index) => (
                        <ProjectInfoItemContent key={index}>
                            {tec}
                        </ProjectInfoItemContent>
                    ))}
                </ProjectInfoItem>

                <ProjectInfoItem style={{ margin: 5 }}>
                    <ProjectInfoItemHead>
                        Company
                            </ProjectInfoItemHead>
                    <ProjectInfoItemContent>
                        {getCompany()}
                    </ProjectInfoItemContent>
                </ProjectInfoItem>
            </ProjectInfo>
        </LaptopSliderWrap>
    );
}

export default observer(MobileSlider);