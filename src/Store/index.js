import { observable, decorate } from "mobx"

class ExperienceStore {
    currentTime = 0;
    openDesktopSliderModal = false;
    openMobileSliderModal = false;
    reset() {
        this.currentTime = 0;
    }
}

decorate(ExperienceStore, {
    currentTime: observable,
    openDesktopSliderModal: observable,
    openMobileSliderModal: observable
});

const experienceStore = new ExperienceStore();

export default experienceStore;