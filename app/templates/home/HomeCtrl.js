import img from 'file!./image1.jpg'
class HomeCtrl {
    constructor($state) {
        this.$state = $state;
        this.message = 'Angular with Webpack and Babel!1';
        this.img = img
    }
}

export { HomeCtrl }
