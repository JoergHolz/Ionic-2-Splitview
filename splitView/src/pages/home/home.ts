import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    public isTablet: boolean;

    constructor(public navCtrl: NavController, public platform: Platform) {
        this.platform.ready().then(() => {
            this.isTablet = (<any>window).isTablet;
        });
    }
}
