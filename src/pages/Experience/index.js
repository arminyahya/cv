import React from 'react';
import { DesktopStyledTimeLine, MobileStyledTimeLine, ExperienceInner, MobileExperienceInner } from '../../Styled';
import DesktopLaptopSlider from './LaptopSlider/desktop';
import MobileLaptopSlider from './LaptopSlider/mobile';
import SliderModal from '../../SliderModal'
import store from '../../Store';
import { observer } from 'mobx-react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    store.reset();
  }

  render() {
    const { openDesktopSliderModal, openMobileSliderModal } = store;
    return (
      <>
        <ExperienceInner>
          <DesktopStyledTimeLine />
          <DesktopLaptopSlider />
          {openDesktopSliderModal && <SliderModal onClose={() => { store.openDesktopSliderModal = false }} />}
        </ExperienceInner>
        <MobileExperienceInner>
          <MobileStyledTimeLine />
          <MobileLaptopSlider />
          {openMobileSliderModal && <SliderModal onClose={() => { store.openMobileSliderModal = false }} />}
        </MobileExperienceInner>
      </>
    );
  }
}

export default observer(Experience);
