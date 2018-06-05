webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		160
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_2__profile__["b" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_oeuvre_get_oeuvre__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//customs *


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, gop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gop = gop;
        this.data_bdd = new Array();
        console.log(this.data_bdd);
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad listPage");
        this.gop.getDATA().subscribe(function (data) {
            _this.data_bdd = data;
        });
    };
    ListPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter ListPage");
    };
    ListPage.prototype.showContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color="rd">\n    <ion-title>\n      Carte aux trésors\n    </ion-title>\n    <ion-buttons right (click)="showContact()">\n        <button ion-button navPop icon-only>\n                  <ion-icon name="information-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Liste des Oeuvres</h2>\n  <br/>\n\n  <ion-list>\n    <ion-item *ngFor="let xyz of data_bdd">\n            <ion-avatar>\n              <img [src]="xyz.img" />\n            </ion-avatar>\n            {{xyz.name}}{{xyz.lastname}}\n            <ion-icon [name]="xyz.fav ? \'star\':\'star-outline\'" item-right></ion-icon>\n\n\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_get_oeuvre_get_oeuvre__["a" /* GetOeuvreProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_find_oeuvre_find_oeuvre__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_oeuvre_get_oeuvre__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//customs *




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, fop, appCtrl, gop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fop = fop;
        this.appCtrl = appCtrl;
        this.gop = gop;
        this.data_bdd = new Array();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad HomePage");
        this.gop.getDATA().subscribe(function (data) {
            _this.data_bdd = data;
        });
        this.Total = this.data_bdd['lenght'];
        console.log("Total: " + this.data_bdd['lenght']);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter HomePage");
        this.initPage();
    };
    HomePage.prototype.initPage = function () {
        var _this = this;
        this.fop
            .getShowOeuvre()
            .then(function (dbdata) {
            (_this.dataToShow = dbdata);
            console.log("1: " + _this.dataToShow);
        })
            .catch(function () {
            _this.fop
                .getShowOeuvre()
                .then(function (dbdata) {
                (_this.dataToShow = dbdata);
                console.log("2: " + _this.dataToShow);
            });
        });
    };
    HomePage.prototype.showProfile = function (code) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], { idalCode: code });
    };
    HomePage.prototype.rm = function () {
        for (var rmx = 0; rmx < this.dataToShow.length; rmx++) {
            var element = this.dataToShow[rmx];
            this.fop.resetDATA(element);
        }
        this.appCtrl.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="rd">\n    <ion-title>Chasse aux Oeuvres</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 *ngIf="dataToShow && dataToShow.length > 1">Oeuvres trouvées:</h4>\n  <h4 *ngIf="dataToShow && dataToShow.length == 1">Oeuvre trouvée:</h4>\n\n  <ion-grid *ngIf="dataToShow && dataToShow.length; else noOeuvres">\n    <ion-item *ngFor="let xyz of dataToShow" (click)="showProfile(xyz.code)">\n      <img [src]="xyz.img" />\n      <div>\n      <ion-badge color="danger">{{xyz.code}}</ion-badge>\n      <ion-icon name="checkmark-circle-outline"></ion-icon>\n    </div>\n    </ion-item>\n    \n  </ion-grid>\n\n\n  <button ion-button color="danger" icon-start full (click)="rm()" *ngIf="dataToShow && dataToShow.length">\n    <ion-icon name="trash"></ion-icon>Retour vers le passé !</button>\n\n  <ng-template #noOeuvres>\n\n    <div class="p_desole">\n\n      <p>Oups ! Il faut chasser du QrCode !\n\n        <ion-icon class="p_icon" name="flag" item-left></ion-icon>\n      </p>\n    </div>\n\n  </ng-template>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_find_oeuvre_find_oeuvre__["a" /* FindOeuvreProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__providers_get_oeuvre_get_oeuvre__["a" /* GetOeuvreProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_find_oeuvre_find_oeuvre__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_get_oeuvre_get_oeuvre__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_data_data__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//plugins add ======



//pages defaults






//customs making




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'SafePipe', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_find_oeuvre_find_oeuvre__["a" /* FindOeuvreProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_get_oeuvre_get_oeuvre__["a" /* GetOeuvreProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.showSplash = true; // <-- show animation
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3500).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="lds-css ng-scope">\n    <div class="lds-spinner" style="width:100%;height:100%"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n    <style type="text/css">@keyframes lds-spinner {\n      0% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    @-webkit-keyframes lds-spinner {\n      0% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .lds-spinner {\n      position: relative;\n    }\n    .lds-spinner div {\n      left: 94px;\n      top: 48px;\n      position: absolute;\n      -webkit-animation: lds-spinner linear 0.9s infinite;\n      animation: lds-spinner linear 0.9s infinite;\n      background: #f3f3da;\n      width: 12px;\n      height: 24px;\n      border-radius: 40%;\n      -webkit-transform-origin: 6px 52px;\n      transform-origin: 6px 52px;\n    }\n    .lds-spinner div:nth-child(1) {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n      -webkit-animation-delay: -0.825s;\n      animation-delay: -0.825s;\n    }\n    .lds-spinner div:nth-child(2) {\n      -webkit-transform: rotate(30deg);\n      transform: rotate(30deg);\n      -webkit-animation-delay: -0.75s;\n      animation-delay: -0.75s;\n    }\n    .lds-spinner div:nth-child(3) {\n      -webkit-transform: rotate(60deg);\n      transform: rotate(60deg);\n      -webkit-animation-delay: -0.675s;\n      animation-delay: -0.675s;\n    }\n    .lds-spinner div:nth-child(4) {\n      -webkit-transform: rotate(90deg);\n      transform: rotate(90deg);\n      -webkit-animation-delay: -0.6s;\n      animation-delay: -0.6s;\n    }\n    .lds-spinner div:nth-child(5) {\n      -webkit-transform: rotate(120deg);\n      transform: rotate(120deg);\n      -webkit-animation-delay: -0.525s;\n      animation-delay: -0.525s;\n    }\n    .lds-spinner div:nth-child(6) {\n      -webkit-transform: rotate(150deg);\n      transform: rotate(150deg);\n      -webkit-animation-delay: -0.45s;\n      animation-delay: -0.45s;\n    }\n    .lds-spinner div:nth-child(7) {\n      -webkit-transform: rotate(180deg);\n      transform: rotate(180deg);\n      -webkit-animation-delay: -0.375s;\n      animation-delay: -0.375s;\n    }\n    .lds-spinner div:nth-child(8) {\n      -webkit-transform: rotate(210deg);\n      transform: rotate(210deg);\n      -webkit-animation-delay: -0.3s;\n      animation-delay: -0.3s;\n    }\n    .lds-spinner div:nth-child(9) {\n      -webkit-transform: rotate(240deg);\n      transform: rotate(240deg);\n      -webkit-animation-delay: -0.225s;\n      animation-delay: -0.225s;\n    }\n    .lds-spinner div:nth-child(10) {\n      -webkit-transform: rotate(270deg);\n      transform: rotate(270deg);\n      -webkit-animation-delay: -0.15s;\n      animation-delay: -0.15s;\n    }\n    .lds-spinner div:nth-child(11) {\n      -webkit-transform: rotate(300deg);\n      transform: rotate(300deg);\n      -webkit-animation-delay: -0.075s;\n      animation-delay: -0.075s;\n    }\n    .lds-spinner div:nth-child(12) {\n      -webkit-transform: rotate(330deg);\n      transform: rotate(330deg);\n      -webkit-animation-delay: 0s;\n      animation-delay: 0s;\n    }\n    .lds-spinner {\n      width: 150px !important;\n      height: 150px !important;\n      -webkit-transform: translate(-75px, -75px) scale(0.75) translate(75px, 75px);\n      transform: translate(-75px, -75px) scale(0.75) translate(75px, 75px);\n    }\n    </style></div>\n      </div>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_get_oeuvre_get_oeuvre__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_find_oeuvre_find_oeuvre__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//plugins add

//pages defaults






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, bcs, gop, fop, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bcs = bcs;
        this.gop = gop;
        this.fop = fop;
        this.viewCtrl = viewCtrl;
        this.newData = new Array();
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter TabsPage");
        this.viewCtrl._didEnter();
    };
    TabsPage.prototype.scanRun = function () {
        var _this = this;
        var options = {
            torchOn: false,
            showFlipCameraButton: true,
            showTorchButton: true
        };
        this.bcs.scan(options)
            .then(function (res) {
            _this.result = res;
            // transform 'string" to a 'number'
            _this.code = parseFloat(_this.result.text);
            console.log("code: " + _this.code);
            // find object where 'code' is
            _this.findObjectfromCode(_this.code);
            console.log("object find: " + _this.objectFind);
            // send too var -> an Object and a number
            _this.fop.addToList(_this.objectFind);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */], {
                idalCode: _this.code
            });
        })
            .catch(function () {
            _this.bcs.scan(options)
                .then(function (res) {
                _this.result = res;
                // transform 'string" to a 'number'
                _this.code = parseFloat(_this.result.text);
                console.log("code: " + _this.code);
                // find object where 'code' is
                _this.findObjectfromCode(_this.code);
                console.log("object find: " + _this.objectFind);
                // send too var -> an Object and a number
                _this.fop.addToList(_this.objectFind);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */], {
                    idalCode: _this.code
                });
            });
        });
    };
    TabsPage.prototype.findObjectfromCode = function (codex) {
        var _this = this;
        this.gop.getDATA()
            .subscribe(function (data) {
            _this.newData = data;
        });
        console.log("nexData: " + this.newData);
        for (var array_key = 0; array_key < this.newData.length; array_key++) {
            var element = this.newData[array_key].code;
            console.log("element: " + element + " newData: " + this.newData[array_key].code);
            if (element == codex) {
                console.log("newData: " + this.newData);
                this.objectFind = this.newData[array_key];
                console.log("array_key: " + array_key);
                console.log("name: " + this.newData[array_key].name +
                    " lastname: " + this.newData[array_key].lastname);
                break;
            }
            else {
                console.log("Le code n'existe pas !");
            }
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\tabs\tabs.html"*/'<ion-tabs color="rd">\n  <ion-tab [root]="tab1Root" tabTitle="Oeuvres" tabIcon="star-outline"></ion-tab>\n  <ion-tab (ionSelect)="scanRun()" tabTitle="Scanner" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Liste" tabIcon="list"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_6__providers_get_oeuvre_get_oeuvre__["a" /* GetOeuvreProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_find_oeuvre_find_oeuvre__["a" /* FindOeuvreProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetOeuvreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GetOeuvreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GetOeuvreProvider = /** @class */ (function () {
    function GetOeuvreProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        this.UrldataDB = "../data/data_db.json";
        console.log('Hello GetOeuvreProvider Provider');
        if (this.platform.is("cordova") && this.platform.is("android")) {
            this.UrldataDB = "/build/data_db.json";
        }
    }
    GetOeuvreProvider.prototype.getDATA = function () {
        return this.http.get("" + this.UrldataDB);
    };
    GetOeuvreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]])
    ], GetOeuvreProvider);
    return GetOeuvreProvider;
}());

//# sourceMappingURL=get-oeuvre.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.addOeuvre = false;
        this.url = "http://tcc.1click.pf/museum/index.php?mat=FVK96BLUEL&oeuvre=";
        this.fromScanAcode = this.navParams.get('idalCode');
        this.url = this.url + this.fromScanAcode;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ProfilePage');
        //Refresh HomePage et PrimaryTabsPage
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.refreshHome();
    };
    ProfilePage.prototype.refreshHome = function () {
        this.appCtrl.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="rd">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<iframe [src]="url | safe"></iframe>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ContactPage");
    };
    ContactPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter ContactPage");
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="rd">\n    <ion-title>\n      Contact / Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Contact</ion-list-header>\n    <ion-card>\n\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <p>LENOIR Tetuaoro</p>\n        <ion-icon name="call"></ion-icon>\n        <p>+689 87 XX XX XX</p>\n        <ion-icon name="mail"></ion-icon>\n        <p>tlenoir.tcc@gmail.com</p>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </ion-item>\n\n    </ion-card>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Information</ion-list-header>\n\n    \n      <p padding>\n        Partez à la chasse aux Oeuvres dans le MuseumTCC et scannez tous les Codes\n        que vous trouverez.\n      </p>\n\n      <p padding>\n        xD ne peut que scanner les codes, pas les urls, pas les noms! xD\n      </p>\n   \n      <p padding>Elit dolor nostrud sit minim. Exercitation eiusmod nisi quis est exercitation anim voluptate fugiat aute nulla. Aliquip\n        consectetur aliquip culpa dolor occaecat ipsum mollit sint sunt sunt ullamco. Duis velit nostrud dolor commodo ea\n        aliquip Lorem et ad exercitation cillum magna eu. Nulla Lorem ipsum duis sunt mollit minim et in sunt velit ea. Aliqua\n        aute et nisi voluptate. Esse consequat aute laborum tempor amet adipisicing. Irure dolore nostrud Lorem non occaecat\n        commodo. Proident culpa sunt aliquip fugiat deserunt non dolore et. Lorem deserunt adipisicing in ut. Ullamco ullamco\n        fugiat sit sit eu cillum. Mollit veniam aliqua Lorem mollit exercitation do sunt labore Lorem commodo dolor qui.\n        Fugiat ad magna sit do enim in ex. Irure mollit dolor officia culpa cillum non eiusmod esse deserunt cillum et ad.\n        Voluptate ad nostrud officia laborum culpa velit. Non duis deserunt reprehenderit irure sunt incididunt occaecat\n        officia qui anim. Amet irure minim laborum qui fugiat duis. Aliqua ea velit ex aute qui ex Lorem consequat magna\n        aliquip aliqua cupidatat anim fugiat. Tempor laboris ex tempor consequat nostrud ut reprehenderit occaecat cupidatat\n        laborum consectetur enim magna. Sunt tempor nulla reprehenderit ut exercitation excepteur id velit sit occaecat veniam\n        sint aliqua enim. Adipisicing officia amet magna quis commodo duis proident. Officia Lorem ullamco adipisicing amet\n        ad tempor qui aliqua adipisicing deserunt. Irure pariatur nostrud Lorem elit. Ipsum tempor minim pariatur fugiat\n        deserunt in tempor non aliqua.</p>\n   \n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\DGEN\Desktop\WEB TEACH\AppM-oeuvre\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindOeuvreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATA_KEY = "data_";
var find;
/*
  Generated class for the FindOeuvreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FindOeuvreProvider = /** @class */ (function () {
    function FindOeuvreProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello FindOeuvreProvider Provider');
    }
    // to using functions, you need to input an object from data
    // not a value
    // =========
    // in fact, this functions create a new Array from the object
    // of the data_db.json and saved into storages'mobile.
    FindOeuvreProvider.prototype.addToList = function (likeacode) {
        this.storage.set(this.getDataKey(likeacode), JSON.stringify(likeacode));
    };
    FindOeuvreProvider.prototype.resetDATA = function (likeacode) {
        this.storage.remove(this.getDataKey(likeacode));
    };
    FindOeuvreProvider.prototype.isAddFromScan = function (likeacode) {
        return this.storage.get(this.getDataKey(likeacode));
    };
    FindOeuvreProvider.prototype.checkedDATA = function (likeacode) {
        var _this = this;
        this.isAddFromScan(likeacode).then(function (isFavorite) {
            return isFavorite
                ? _this.resetDATA(likeacode)
                : _this.addToList(likeacode);
        });
    };
    FindOeuvreProvider.prototype.getDataKey = function (likeacode) {
        find = DATA_KEY + likeacode.id.toString();
        console.log("dataKeys: " + find);
        return find;
    };
    // return number of 'oeuvre' whos
    // set in storage
    FindOeuvreProvider.prototype.getShowOeuvre = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var results = [];
            _this.storage
                .keys()
                .then(function (keys) {
                return keys
                    .filter(function (key) { return key.includes(DATA_KEY); })
                    .forEach(function (key) {
                    return _this.storage.get(key).then(function (data) { return results.push(JSON.parse(data)); });
                });
            });
            return resolve(results);
        });
    };
    FindOeuvreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FindOeuvreProvider);
    return FindOeuvreProvider;
}());

//# sourceMappingURL=find-oeuvre.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map