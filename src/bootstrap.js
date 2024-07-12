import { global } from "pyllar/env";
import Bootstrap from "pyllar/bootstrap";
import PiConfig from "pyllar/config";

import HomePage from "./homepage/HomePage";
import CifraView from "./cifra/CifraView";

import "./app.css"

if (window.appSettings) {
    PiConfig.load(appSettings);
}

(function () {
    if (typeof window.localStorage === 'undefined' || typeof window.sessionStorage === 'undefined') {
        (function () {
            var Storage = function (type) {
                function createCookie(name, value, days) {
                    var expires;
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                        expires = "; expires=" + date.toGMTString();
                    } else {
                        expires = "";
                    }
                    document.cookie = name + "=" + value + expires + "; path=/";
                }

                function readCookie(name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                    }
                    return null;
                }

                function eraseCookie(name) {
                    createCookie(name, "", -1);
                }

                function clearCookies() {
                    var cookies = document.cookie.split(";");
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = cookies[i];
                        var eqPos = cookie.indexOf("=");
                        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    }
                }

                return {
                    setItem: function (key, value) {
                        createCookie(key, value, 365);
                    },
                    getItem: function (key) {
                        return readCookie(key);
                    },
                    removeItem: function (key) {
                        eraseCookie(key);
                    },
                    clear: function () {
                        clearCookies();
                    }
                };
            };

            window.localStorage = new Storage('local');
            window.sessionStorage = new Storage('session');

        })();
    }
})();


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