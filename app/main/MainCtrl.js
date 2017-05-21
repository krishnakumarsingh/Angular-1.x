class MainCtrl {
    constructor($state) {
        this.$state = $state;
        this.message = 'Angular with Webpack and Babel!';
        this.name = "KK";
    }

    clickIt() {
        return this.$state.go('about');
    }
}

export { MainCtrl }
