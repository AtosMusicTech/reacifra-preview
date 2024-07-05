import { global } from "pyllar/env";
import Bootstrap from "pyllar/bootstrap";
import PiConfig from "pyllar/config";

import HomePage from "./homepage/HomePage";
import CifraView from "./cifra/CifraView";

import "./app.css"

if (window.appSettings) {
    PiConfig.load(appSettings);
}

PiConfig.set('request.fetch', function (url, settings, success, error, next) {
    next();
});

new Bootstrap()
    .onLoad((boot) => {
        
    })
    .onReady((boot) => {
        const homepage = new HomePage();
        homepage.render(global.app.$element);
        homepage.setView(new CifraView());
    })
    .load();