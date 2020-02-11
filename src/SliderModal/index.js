import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { SliderModalInner, SliderModalDotsWrap, SliderModalDot, SliderModalShot, SliderModalImageWrap } from '../Styled';
import store from '../Store';
import { timeLine } from '../pages/Experience/Timeline/desktop';
import { hot } from 'react-hot-loader/root';
import Swiper from 'react-id-swiper';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '14px'
    }
};

Modal.setAppElement('#___gatsby')

const SliderModal = (props) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const swiper = useRef();

    const slideChangeListener = () => {
        setActiveIndex(swiper.current.activeIndex)
    }

    const onSlideChange = (slideIndex) => {
        swiper.current.slideTo(slideIndex);
    }

    const setOnSlideChange = (sw) => {
        swiper.current = sw;
        swiper.current.on('slideChange', slideChangeListener);
    }

    const onModalClose = () => {
        swiper.current.off('slideChange', slideChangeListener);
        props.onClose();
    }

    const slideStuff = () => {
        const shots = [];
        const dots = [];
        timeLine[store.currentTime].slides.map((slide, index) => {
            shots.push(<SliderModalShot className={activeIndex === index ? 'js-active' : ''} src={slide} />);
            dots.push(<SliderModalDot className={activeIndex === index ? 'js-active' : ''} onClick={() => { onSlideChange(index) }} />);
            return slide;
        });
        return {
            shots,
            dots
        }
    };

    return (
        <div>
            <Modal
                isOpen={true}
                onRequestClose={onModalClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={200}
                    defaultPositionY={100}
                >
                    <TransformComponent>
                        <SliderModalInner>
                            <SliderModalImageWrap>
                                <Swiper
                                    getSwiper={(sw) => { if (sw) { setOnSlideChange(sw); } }}
                                >
                                    {slideStuff().shots}
                                </Swiper>
                            </SliderModalImageWrap>
                            <SliderModalDotsWrap>
                                {slideStuff().dots}

                            </SliderModalDotsWrap>
                        </SliderModalInner>
                    </TransformComponent>
                </TransformWrapper>
            </Modal>
        </div>
    );
}

export default hot(SliderModal);
