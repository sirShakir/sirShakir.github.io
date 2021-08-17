(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zyris/zyris.component */ "./src/app/zyris/zyris.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");







const routes = [
    { path: '', component: _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_3__["ZyrisComponent"] },
    { path: 'story', component: _story_story_component__WEBPACK_IMPORTED_MODULE_2__["StoryComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goStory() {
        if (this.pageFocus != "Story") {
            this.pageFocus = "Story";
            document.getElementById("heading").className = "heading";
            document.getElementById("menubar").style.display = "none";
            document.getElementById("story").className = "defaultPFocus";
            document.getElementById("projects").className = "defaultP";
            document.getElementById("menuTransition").style.display = "block";
            window.setTimeout(goNow, 700);
            this.router.navigate(['/story']);
        }
        else {
            this.closeMenu();
        }
        function goNow() {
            document.getElementById("menuTransition").style.display = "none";
        }
    }
    goProjects() {
        if (this.pageFocus != "Projects") {
            this.pageFocus = "Projects";
            document.getElementById("heading").className = "heading";
            document.getElementById("menubar").style.display = "none";
            document.getElementById("story").className = "defaultP";
            document.getElementById("projects").className = "defaultPFocus";
            document.getElementById("menuTransition").style.display = "block";
            window.setTimeout(goNow, 700);
            this.router.navigate(['/projects']);
        }
        else {
            this.closeMenu();
        }
        function goNow() {
            document.getElementById("menuTransition").style.display = "none";
        }
    }
    goZyris() {
        if (this.pageFocus != "Zyris") {
            this.pageFocus = "Zyris";
            document.getElementById("heading").className = "headingF";
            document.getElementById("menubar").style.display = "none";
            document.getElementById("story").className = "defaultP";
            document.getElementById("projects").className = "defaultP";
            document.getElementById("menuTransition").style.display = "block";
            window.setTimeout(goNow, 700);
            this.router.navigate(['/']);
        }
        else {
            this.closeMenu();
        }
        function goNow() {
            document.getElementById("menuTransition").style.display = "none";
        }
    }
    goIcon(icon_number) {
        document.getElementById("menubar").style.display = "none";
        switch (icon_number) {
            case 0:
                window.location.href = 'https://github.com/zeyeland';
                break;
            case 1:
                window.location.href = 'https://www.linkedin.com/in/shakirze/';
                break;
            case 2:
                window.location.href = 'https://www.youtube.com/watch?v=CJZpEIenlQg&t=1s';
                break;
            case 3:
                window.location.href = 'https://stackoverflow.com/users/9636850/z-eyeland';
                break;
            case 4:
                // alert("This will link to resume...coming soon")
                window.location.href = 'https://getsome.tech/resume';
                break;
            case 5:
                window.location.href = 'https://www.wyzant.com/match/tutor/88523989';
                break;
        }
    }
    // goContact(){
    // }
    expandMenu() {
        document.getElementById("menubar").style.display = "block";
        document.body.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu() {
        document.getElementById("menubar").style.display = "none";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 0, consts: [["width", "26px", "height", "26px", "viewBox", "0 0 1339 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "", 3, "click"], ["d", "M0 0h1102.769v78.769h-1102.769v-78.769z", 2, "fill", "#E4BB97"], ["d", "M0 315.077h1339.077v78.769h-1339.077v-78.769z", 2, "fill", "#840032"], ["d", "M0 630.154h945.231v78.769h-945.231v-78.769z", 2, "fill", "#E4BB97"], ["d", "M0 945.231h1220.923v78.769h-1220.923v-78.769z", 2, "fill", "#840032"], ["id", "menuTransition", "src", "https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif", "alt", "Girl in a jacket"], ["id", "menubar"], ["id", "heading", 1, "headingF", 3, "click"], [1, "fab", "fa-github", "i1", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-linkedin-in", "i1", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-youtube", "i1", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-stack-exchange", "i1", 2, "font-size", "18px", 3, "click"], [1, "fas", "fa-book", "i1", 2, "font-size", "18px", 3, "click"], [1, "fas", "fa-chalkboard-teacher", "i1", 2, "font-size", "18px", 3, "click"], ["id", "story", 1, "defaultP", 3, "click"], ["id", "projects", 1, "defaultP", 3, "click"], ["action", "/action_page.php"], [1, "formP", 3, "click"], [1, "fas", "fa-book", "i2", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-linkedin-in", "i2", 2, "font-size", "18px", 3, "click"], [1, "fas", "fa-chalkboard-teacher", "i2", 2, "font-size", "18px", 3, "click"], ["id", "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_0_listener() { return ctx.expandMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_h1_click_7_listener() { return ctx.goZyris(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Zyris Shakir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_9_listener() { return ctx.goIcon(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_10_listener() { return ctx.goIcon(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_11_listener() { return ctx.goIcon(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_12_listener() { return ctx.goIcon(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_13_listener() { return ctx.goIcon(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_14_listener() { return ctx.goIcon(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_15_listener() { return ctx.goStory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Main Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_17_listener() { return ctx.goProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_20_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_22_listener() { return ctx.goIcon(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_25_listener() { return ctx.goIcon(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_28_listener() { return ctx.goIcon(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Tutoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#menuTransition[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n#menubar[_ngcontent-%COMP%]{\r\n    opacity: 0.8;\r\n    top: 10px;\r\n    left: .8%;\r\n    width: 97%;\r\n    background-color: black;\r\n\r\n    color: #E4BB97;\r\n    position: absolute;\r\n    border-style: solid;\r\n    border-color: #E4BB97;\r\n    z-index: 5;\r\n    -webkit-animation: bounceIn 1s;\r\n            animation: bounceIn 1s;\r\n    font-family: 'ZCOOL KuaiLe';\r\n\r\n     \r\n}\r\n\r\n#app[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]{\r\n    width: 52px;\r\n    height: 52px;\r\n    z-index: 2;\r\n    vertical-align: middle; \r\n    position: fixed;\r\n    left: 10px;\r\n    top: 10px;\r\n}\r\n\r\n.defaultP[_ngcontent-%COMP%]{\r\n    \r\n    -webkit-animation: fadeInLeft;\r\n            animation: fadeInLeft; \r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s; \r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n    text-align: center;\r\n    text-decoration-thickness: 4px;\r\n    font-size:x-large;\r\n\r\n}\r\n\r\n.defaultPFocus[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeInLeft;\r\n            animation: fadeInLeft; \r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s; \r\n    text-decoration: line-through;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n    text-align: center;\r\n    text-decoration-thickness: 4px;\r\n    font-size:x-large;\r\n\r\n}\r\n\r\n.formP[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeInLeft;\r\n            animation: fadeInLeft; \r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s; \r\n\r\n    -webkit-text-decoration-color: #840032;\r\n\r\n            text-decoration-color: #840032;\r\n    text-align: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n    border-top-style: solid;\r\n    border-width: 1px;\r\n    border-color: #840032;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n\r\n    -webkit-animation: flipInY;\r\n\r\n            animation: flipInY;\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    padding-left: 3%;\r\n    display: inline-block;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n\r\n}\r\n\r\n.headingF[_ngcontent-%COMP%]{\r\n\r\n    -webkit-animation: flipInY;\r\n\r\n            animation: flipInY;\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    padding-left: 3%;\r\n    display: inline-block;\r\n    text-decoration: line-through;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n}\r\n\r\n.i1[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeIn;\r\n            animation: fadeIn; \r\n    -webkit-animation-duration: 8s;\r\n            animation-duration: 8s;\r\n    padding-left: 6%;\r\n    display: inline-block;\r\n    position: relative;\r\n    color: #840032;;\r\n\r\n}\r\n\r\n.i2[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeIn;\r\n            animation: fadeIn; \r\n    -webkit-animation-duration: 8s;\r\n            animation-duration: 8s;\r\n     \r\n    display: block;\r\n    position: relative;\r\n    color: white;\r\n    \r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCOztJQUV2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMkJBQTJCOzs7QUFHL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUUsZ0VBQWdFO0lBQ3ZGLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBRSxvQ0FBb0M7SUFDNUQsMEJBQTBCO0lBQzFCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFFLGdFQUFnRTtJQUN2Riw4QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUUsb0NBQW9DO0lBQzVELDZCQUE2QjtJQUM3QixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBRSxnRUFBZ0U7SUFDdkYsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFLG9DQUFvQzs7SUFFNUQsc0NBQThCOztZQUE5Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSwwQkFBa0I7O1lBQWxCLGtCQUFrQjtJQUNsQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7O0FBRWhDOztBQUVBOztJQUVJLDBCQUFrQjs7WUFBbEIsa0JBQWtCO0lBQ2xCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQzs7QUFHQTtJQUNJLHlCQUFpQjtZQUFqQixpQkFBaUIsRUFBRSxnRUFBZ0U7SUFDbkYsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLHlCQUFpQjtZQUFqQixpQkFBaUIsRUFBRSxnRUFBZ0U7SUFDbkYsOEJBQXNCO1lBQXRCLHNCQUFzQjtLQUNyQixpQkFBaUI7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNtZW51VHJhbnNpdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNtZW51YmFye1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLjglO1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGNvbG9yOiAjRTRCQjk3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0U0QkI5NztcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZUluIDFzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdaQ09PTCBLdWFpTGUnO1xyXG5cclxuICAgICBcclxufVxyXG5cclxuI2FwcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zdmd7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kZWZhdWx0UHtcclxuICAgIC8qIC0tYW5pbWF0ZS1kZWxheTogMXM7ICAqL1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0OyAvKiByZWZlcnJpbmcgZGlyZWN0bHkgdG8gdGhlIGFuaW1hdGlvbidzIEBrZXlmcmFtZSBkZWNsYXJhdGlvbiAqL1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgLyogZG9uJ3QgZm9yZ2V0IHRvIHNldCBhIGR1cmF0aW9uISAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcblxyXG59XHJcbi5kZWZhdWx0UEZvY3Vze1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0OyAvKiByZWZlcnJpbmcgZGlyZWN0bHkgdG8gdGhlIGFuaW1hdGlvbidzIEBrZXlmcmFtZSBkZWNsYXJhdGlvbiAqL1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgLyogZG9uJ3QgZm9yZ2V0IHRvIHNldCBhIGR1cmF0aW9uISAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcblxyXG59XHJcblxyXG4uZm9ybVB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbkxlZnQ7IC8qIHJlZmVycmluZyBkaXJlY3RseSB0byB0aGUgYW5pbWF0aW9uJ3MgQGtleWZyYW1lIGRlY2xhcmF0aW9uICovXHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOyAvKiBkb24ndCBmb3JnZXQgdG8gc2V0IGEgZHVyYXRpb24hICovXHJcblxyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjODQwMDMyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzg0MDAzMjtcclxufVxyXG5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHJcbiAgICBhbmltYXRpb246IGZsaXBJblk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5oZWFkaW5nRntcclxuXHJcbiAgICBhbmltYXRpb246IGZsaXBJblk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5pMXtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluOyAvKiByZWZlcnJpbmcgZGlyZWN0bHkgdG8gdGhlIGFuaW1hdGlvbidzIEBrZXlmcmFtZSBkZWNsYXJhdGlvbiAqL1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogIzg0MDAzMjs7XHJcblxyXG59XHJcblxyXG4uaTJ7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbjsgLyogcmVmZXJyaW5nIGRpcmVjdGx5IHRvIHRoZSBhbmltYXRpb24ncyBAa2V5ZnJhbWUgZGVjbGFyYXRpb24gKi9cclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgICAgLyogd2lkdGg6IDQ0JTsgICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zyris/zyris.component */ "./src/app/zyris/zyris.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _story_story_component__WEBPACK_IMPORTED_MODULE_4__["StoryComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
        _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_6__["ZyrisComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _story_story_component__WEBPACK_IMPORTED_MODULE_4__["StoryComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                    _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_6__["ZyrisComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
        var ele = document.getElementById('scroller');
        ele.addEventListener("click", this.checkScrollDirection);
        var eleSelect = document.getElementById("selectCat");
        eleSelect.onchange = function () {
            var setnone = document.getElementsByTagName("span");
            //console.log(setnone);
            for (let z = 0; z < setnone.length; z++) {
                setnone[z].style.display = "none";
            }
            switch (eleSelect.value) {
                //Projects
                case 'Showtimes':
                    for (let z = 0; z < setnone.length; z++) {
                        setnone[z].style.display = "block";
                    }
                    break;
                case 'Corporate':
                    document.getElementById("spanC1").style.display = "block";
                    document.getElementById("spanC2").style.display = "block";
                    document.getElementById("spanC3").style.display = "block";
                    document.getElementById("spanC4").style.display = "block";
                    document.getElementById("spanC5").style.display = "block";
                    break;
                case 'Freelance':
                    document.getElementById("spanF1").style.display = "block";
                    document.getElementById("spanF2").style.display = "block";
                    document.getElementById("spanF3").style.display = "block";
                    document.getElementById("spanF4").style.display = "block";
                    document.getElementById("spanF5").style.display = "block";
                    break;
                case 'Games':
                    document.getElementById("spanG1").style.display = "block";
                    document.getElementById("spanG2").style.display = "block";
                    document.getElementById("spanG3").style.display = "block";
                    document.getElementById("spanG4").style.display = "block";
                    break;
                case 'Projects':
                    document.getElementById("spanP1").style.display = "block";
                    document.getElementById("spanP2").style.display = "block";
                    document.getElementById("spanP3").style.display = "block";
                    document.getElementById("spanP4").style.display = "block";
                    break;
            }
        };
    }
    checkScrollDirection(e) {
        var id = e.target['id'];
        //console.log(e.target)
        if (this.focusEle != id && id != "" && id != null && id != "scroller") {
            this.focusEle = id;
            var eles = document.getElementsByClassName('positionFocus');
            for (let z = 0; z < eles.length; z++) {
                eles[z].className = "positionOrgin";
            }
            var ele = document.getElementById(id).className = "positionFocus";
            var eleupdate = document.getElementById('noActionZoneImage');
            eleupdate.className = "noActionZoneBackgroundImageFocus";
            document.getElementById('pop1').style.display = "inline-block";
            document.getElementById('pop2').style.display = "inline-block";
            document.getElementById('pop3').style.display = "inline-block";
            var spanText;
            switch (e.target['id']) {
                //Projects
                case 'spanP1':
                    spanText = "JavaScript Robotics & Computer Vision Project\n(JSmpeg, opencv, python )";
                    break;
                case 'spanP2':
                    spanText = "Security Camera Systems - Object Recognition";
                    break;
                case 'spanP3':
                    spanText = "Audio Notecards";
                    break;
                case 'spanP4':
                    spanText = "Zmovies";
                    break;
                //Games
                case 'spanG1':
                    spanText = "Stick vs Zombie - HTML5(mobile) Game";
                    break;
                case 'spanG2':
                    spanText = "Turkey Bay - Phaser Game";
                    break;
                case 'spanG3':
                    spanText = "Dungeon Kids";
                    break;
                case 'spanG4':
                    spanText = "Arcade Island";
                    break;
                //Freelance
                case 'spanF1':
                    spanText = "Dawg Tutors";
                    break;
                case 'spanF2':
                    spanText = "Meza Mechanical";
                    break;
                case 'spanF3':
                    spanText = "Lydia Harris";
                    break;
                case 'spanF4':
                    spanText = "SEW Inc";
                    break;
                case 'spanF5':
                    spanText = "LEG Consulting";
                    break;
                //Corporate Starts here
                case 'spanC1':
                    spanText = "Accenture\nSystem Developer Senior Analyst\nCost Model Tool";
                    break;
                case 'spanC2':
                    spanText = "MicroTrain Technologies\nWeb Developer\nInstructor (10 Week Dev Bootcamp)";
                    break;
                case 'spanC3':
                    spanText = "Wyzant\nVirtual Tutor\n Web, Java, Kids Robotics";
                    break;
                case 'spanC4':
                    spanText = "Robotics Academy Houston";
                    break;
                case 'spanC5':
                    spanText = "TX Computers";
                    break;
            }
            document.getElementById('noActionZoneText').innerText = spanText;
        }
        else if (this.focusEle == id) {
            this.focusEle = null;
            var eleupdate = document.getElementById('noActionZoneImage');
            eleupdate.className = "noActionZoneBackgroundImage";
            var ele = document.getElementById(id).className = "positionOrgin";
            document.getElementById('noActionZoneText').innerText = "";
            document.getElementById('pop1').style.display = "none";
            document.getElementById('pop2').style.display = "none";
            document.getElementById('pop3').style.display = "none";
        }
        // document.body.scrollIntoView({behavior: "auto"});
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 76, vars: 0, consts: [["id", "categoriesContainer"], ["name", "cars", "id", "selectCat"], ["value", "Showtimes"], ["value", "Corporate"], ["value", "Freelance"], ["value", "Games"], ["value", "Projects"], ["id", "noActionZoneText", 1, "noActionZoneText"], ["id", "noActionZoneImage", 1, "noActionZoneBackgroundImage"], ["id", "pop1", "src", "https://media0.giphy.com/media/KAeUm0GNLIP3VNOFu9/giphy.gif?cid=6c09b952cl2kz4hbpn2hdifu0lpx8vczm9fyms2q5y8r9vfo&rid=giphy.gif", "alt", "Girl in a jacket", "width", "12%", "height", "12%", 2, "top", "75%", "left", "3%", "position", "fixed", "opacity", "1"], ["id", "pop2", "src", "https://media0.giphy.com/media/KAeUm0GNLIP3VNOFu9/giphy.gif?cid=6c09b952cl2kz4hbpn2hdifu0lpx8vczm9fyms2q5y8r9vfo&rid=giphy.gif", "alt", "Girl in a jacket", "width", "12%", "height", "12%", 2, "top", "66%", "left", "23%", "position", "fixed", "opacity", "1"], ["id", "pop3", "src", "https://media0.giphy.com/media/KAeUm0GNLIP3VNOFu9/giphy.gif?cid=6c09b952cl2kz4hbpn2hdifu0lpx8vczm9fyms2q5y8r9vfo&rid=giphy.gif", "alt", "Girl in a jacket", "width", "12%", "height", "12%", 2, "top", "68%", "left", "36%", "position", "fixed", "opacity", "1"], ["id", "soda1", "src", "/assets/soda.png", "alt", "Girl in a jacket", "width", "3%", "height", "6%", 2, "top", "68%", "left", "36%", "position", "fixed", "opacity", "1"], ["id", "soda2", "src", "/assets/soda.png", "alt", "Girl in a jacket", "width", "3%", "height", "6%", 2, "top", "78%", "left", "18%", "position", "fixed", "opacity", "1"], ["id", "candy1", "src", "/assets/candy1.png", "alt", "Girl in a jacket", "width", "4%", "height", "13%", 2, "top", "65%", "left", "6%", "position", "fixed", "opacity", "1"], ["src", "assets/showtimes.png", "id", "showtimesimg", 1, ""], ["id", "scroller", 1, "scroller"], ["id", "spanC1", 1, "positionOrgin"], ["id", "spanC2", 1, "positionOrgin"], ["id", "spanC3", 1, "positionOrgin"], ["id", "spanC4", 1, "positionOrgin"], ["id", "spanC5", 1, "positionOrgin"], ["id", "spanP1", 1, "positionOrgin"], ["id", "spanP2", 1, "positionOrgin"], ["id", "spanP3", 1, "positionOrgin"], ["id", "spanP4", 1, "positionOrgin"], ["id", "spanG1", 1, "positionOrgin"], ["id", "spanG2", 1, "positionOrgin"], ["id", "spanG3", 1, "positionOrgin"], ["id", "spanG4", 1, "positionOrgin"], ["id", "spanF1", 1, "positionOrgin"], ["id", "spanF2", 1, "positionOrgin"], ["id", "spanF3", 1, "positionOrgin"], ["id", "spanF4", 1, "positionOrgin"], ["id", "spanF5", 1, "positionOrgin"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Showtimes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Corporate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "article", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#categoriesContainer[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    position: fixed;\r\n    display: inline-block;\r\n    width: 100%;\r\n    z-index: 2;\r\n     top: 10%;\r\n    \r\n}\r\n\r\n#selectCat[_ngcontent-%COMP%]{\r\n    margin: auto auto;\r\n    display: block;\r\n    background-color: rgb(142, 144, 115);\r\n    border-style: outset;\r\n}\r\n\r\n.scroller[_ngcontent-%COMP%] {\r\n    padding-top: 25%;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n\r\n    background-color: rgb(142, 144, 115);\r\n    \r\n    \r\n}\r\n\r\n#pop1[_ngcontent-%COMP%], #pop2[_ngcontent-%COMP%], #pop3[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.noActionZoneText[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    \r\n    \r\n    font-weight: bold;\r\n    position: fixed;\r\n    touch-action: none;\r\n    width: 100%;\r\n    height: 100%; \r\n    color: blue;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: x-large;\r\n    text-align: center;\r\n    z-index: 1;\r\n\r\n     \r\n    \r\n}\r\n\r\n.noActionZoneBackgroundImage[_ngcontent-%COMP%]{\r\n    padding-left: 1%;\r\n    top: 20%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    width: 50%;\r\n    height: 70%;\r\n    background-image: url('/assets/movie2.png'); \r\n    background-size: 95% 100%;\r\n    background-position:center bottom;\r\n    background-repeat: no-repeat;\r\n    opacity: 1;\r\n    -webkit-animation-name: noActionAnime;\r\n            animation-name: noActionAnime;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n}\r\n\r\n@-webkit-keyframes noActionAnime {\r\n    0%   {    opacity: .4;   }\r\n    100% {    opacity: 1; }\r\n  }\r\n\r\n@keyframes noActionAnime {\r\n    0%   {    opacity: .4;   }\r\n    100% {    opacity: 1; }\r\n  }\r\n\r\n.noActionZoneBackgroundImageFocus[_ngcontent-%COMP%]{\r\n    opacity: .2;\r\n    padding-left: 1%;\r\n    top: 20%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    width: 50%;\r\n    height: 70%;\r\n    background-image: url('/assets/movie2.png'); \r\n    background-size: 95% 100%;\r\n    background-position:center bottom;\r\n    background-repeat: no-repeat;\r\n\r\n    -webkit-animation-name: noActionAnimeFocus;\r\n\r\n            animation-name: noActionAnimeFocus;\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n\r\n}\r\n\r\n@-webkit-keyframes noActionAnimeFocus {\r\n    0%   {    opacity: 1;   }\r\n    100% {    opacity: .2; }\r\n  }\r\n\r\n@keyframes noActionAnimeFocus {\r\n    0%   {    opacity: 1;   }\r\n    100% {    opacity: .2; }\r\n  }\r\n\r\n.scroller[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    \r\n    width: 30%; \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.positionOrgin[_ngcontent-%COMP%]{\r\n     margin: auto;    \r\n     \r\n     left: 40%;\r\n    background-color: red;\r\n    transform: skewY(20deg); \r\n    z-index: 2;\r\n    border: 1px solid;\r\n    box-shadow: 5px 10px;\r\n    opacity: 1;\r\n    -webkit-animation-name: exampleOrgin;\r\n            animation-name: exampleOrgin;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n\r\n@-webkit-keyframes exampleOrgin {\r\n    0%   {transform: skewY(0deg); left: -25%;}\r\n    25%  {transform: skewY(5deg); }\r\n    50%  {transform: skewY(10deg); }\r\n    75%  {transform: skewY(15deg); }\r\n    100% {transform: skewY(20deg); left:  40%;}\r\n  }\r\n\r\n@keyframes exampleOrgin {\r\n    0%   {transform: skewY(0deg); left: -25%;}\r\n    25%  {transform: skewY(5deg); }\r\n    50%  {transform: skewY(10deg); }\r\n    75%  {transform: skewY(15deg); }\r\n    100% {transform: skewY(20deg); left:  40%;}\r\n  }\r\n\r\n.positionFocus[_ngcontent-%COMP%]{\r\n    margin: auto;    \r\n    opacity: .1;\r\n    left:  -25%;\r\n    background-color: blue;\r\n    transform: skewY(0deg);\r\n    z-index: 2;\r\n\r\n    -webkit-animation-name: exampleFocus;\r\n\r\n            animation-name: exampleFocus;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n\r\n    border: 1px solid;\r\n    box-shadow: 5px 10px;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes exampleFocus {\r\n       0%   {transform: skewY(20deg); left: 40%; opacity: 1;}\r\n       25%  {transform: skewY(15deg); opacity: 1;}\r\n       50%  {transform: skewY(10deg); opacity: 1;}\r\n       75%  {transform: skewY(5deg); left:  -25%; }\r\n       100% {transform: skewY(0deg);  opacity: .1;}\r\n}\r\n\r\n@keyframes exampleFocus {\r\n       0%   {transform: skewY(20deg); left: 40%; opacity: 1;}\r\n       25%  {transform: skewY(15deg); opacity: 1;}\r\n       50%  {transform: skewY(10deg); opacity: 1;}\r\n       75%  {transform: skewY(5deg); left:  -25%; }\r\n       100% {transform: skewY(0deg);  opacity: .1;}\r\n}\r\n\r\n#spanF1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/dawg.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/meza.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/lydia.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/sew.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF5[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/leg.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/yt.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/bp.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/notecard.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/zmovies.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/stick.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/turkeybay.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/dk.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/arcade.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC1[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/png;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC2[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/jpeg;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC3[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/jpeg;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC4[_ngcontent-%COMP%]{\r\n    background-image: url('https://scontent.fhou1-2.fna.fbcdn.net/v/t1.18169-9/1457736_10152023606058624_1520971379_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=kTQLSFJUjdAAX_0rKkl&tn=o62Ar1KgU2rfPy25&_nc_ht=scontent.fhou1-2.fna&oh=7d16486592e87c529f75f369cf792897&oe=60E09118');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC5[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/jpeg;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#showtimesimg[_ngcontent-%COMP%]{\r\n    height: 30vh;\r\n    width: 30%; \r\n    margin: auto;\r\n    left: 55%;\r\n    top: 10%;\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0tBQ1QsUUFBUTtJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsb0NBQW9DOztJQUVwQzs7O29DQUdnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCO2dDQUM0QjtJQUM1QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7Ozs7QUFJZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLDJDQUEyQztJQUMzQyx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVSxXQUFXLElBQUk7SUFDekIsVUFBVSxVQUFVLEVBQUU7RUFDeEI7O0FBSEY7SUFDSSxVQUFVLFdBQVcsSUFBSTtJQUN6QixVQUFVLFVBQVUsRUFBRTtFQUN4Qjs7QUFJRjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdB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OztBQUVBO0lBQ0ksKzJKQUErMko7SUFDLzJKLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGd2UUFBZ3ZRO0lBQ2h2USwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw0MEpBQTQwSjtJQUM1MEosMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc1JBQXNSO0lBQ3RSLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRyUUFBNHJRO0lBQzVyUSwwQkFBMEI7QUFDOUI7O0FBS0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcmllc0NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgICB0b3A6IDEwJTtcclxuICAgIC8qbGVmdDogMTUlOyAqL1xyXG59XHJcblxyXG4jc2VsZWN0Q2F0e1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDE0NCwgMTE1KTtcclxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG59XHJcblxyXG4uc2Nyb2xsZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDI1JTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQyLCAxNDQsIDExNSk7XHJcbiAgICBcclxuICAgIC8qICAjODQwMDMyICAjRTRCQjk3XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTsgKi9cclxufVxyXG5cclxuI3BvcDEsI3BvcDIsI3BvcDN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubm9BY3Rpb25ab25lVGV4dHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL21vdmllLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5ub0FjdGlvblpvbmVCYWNrZ3JvdW5kSW1hZ2V7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbW92aWUyLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTUlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBub0FjdGlvbkFuaW1lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBub0FjdGlvbkFuaW1lIHtcclxuICAgIDAlICAgeyAgICBvcGFjaXR5OiAuNDsgICB9XHJcbiAgICAxMDAlIHsgICAgb3BhY2l0eTogMTsgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuLm5vQWN0aW9uWm9uZUJhY2tncm91bmRJbWFnZUZvY3Vze1xyXG4gICAgb3BhY2l0eTogLjI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbW92aWUyLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTUlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiBub0FjdGlvbkFuaW1lRm9jdXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBub0FjdGlvbkFuaW1lRm9jdXMge1xyXG4gICAgMCUgICB7ICAgIG9wYWNpdHk6IDE7ICAgfVxyXG4gICAgMTAwJSB7ICAgIG9wYWNpdHk6IC4yOyB9XHJcbiAgfVxyXG5cclxuLnNjcm9sbGVyIHNwYW4ge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgLyogc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47ICovXHJcbiAgICB3aWR0aDogMzAlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuICBcclxuICAucG9zaXRpb25PcmdpbntcclxuICAgICBtYXJnaW46IGF1dG87ICAgIFxyXG4gICAgIC8qIG1hcmdpbi1yaWdodDogMHB4OyAqL1xyXG4gICAgIGxlZnQ6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHRyYW5zZm9ybTogc2tld1koMjBkZWcpOyBcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlT3JnaW47XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG59XHJcbkBrZXlmcmFtZXMgZXhhbXBsZU9yZ2luIHtcclxuICAgIDAlICAge3RyYW5zZm9ybTogc2tld1koMGRlZyk7IGxlZnQ6IC0yNSU7fVxyXG4gICAgMjUlICB7dHJhbnNmb3JtOiBza2V3WSg1ZGVnKTsgfVxyXG4gICAgNTAlICB7dHJhbnNmb3JtOiBza2V3WSgxMGRlZyk7IH1cclxuICAgIDc1JSAge3RyYW5zZm9ybTogc2tld1koMTVkZWcpOyB9XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNrZXdZKDIwZGVnKTsgbGVmdDogIDQwJTt9XHJcbiAgfVxyXG5cclxuLnBvc2l0aW9uRm9jdXN7XHJcbiAgICBtYXJnaW46IGF1dG87ICAgIFxyXG4gICAgb3BhY2l0eTogLjE7XHJcbiAgICBsZWZ0OiAgLTI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKDBkZWcpO1xyXG4gICAgei1pbmRleDogMjtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZUZvY3VzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4O1xyXG59XHJcblxyXG4vKiBAa2V5ZnJhbWVzIGV4YW1wbGVGb2N1cyB7XHJcbiAgICAgICAgMCUgICB7dHJhbnNmb3JtOiBza2V3WSgyMGRlZyk7IG1hcmdpbi1yaWdodDogMHB4O31cclxuICAgICAgICAyNSUgIHt0cmFuc2Zvcm06IHNrZXdZKDE1ZGVnKTsgbWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuICAgICAgICA1MCUgIHt0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTsgbWFyZ2luLXJpZ2h0OiAxMDBweDt9XHJcbiAgICAgICAgNzUlICB7dHJhbnNmb3JtOiBza2V3WSg1ZGVnKTsgbWFyZ2luLXJpZ2h0OiAgMTIwcHg7fVxyXG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2tld1koMGRlZyk7IG1hcmdpbi1yaWdodDogIG5vbmU7fVxyXG59ICovXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZXhhbXBsZUZvY3VzIHtcclxuICAgICAgIDAlICAge3RyYW5zZm9ybTogc2tld1koMjBkZWcpOyBsZWZ0OiA0MCU7IG9wYWNpdHk6IDE7fVxyXG4gICAgICAgMjUlICB7dHJhbnNmb3JtOiBza2V3WSgxNWRlZyk7IG9wYWNpdHk6IDE7fVxyXG4gICAgICAgNTAlICB7dHJhbnNmb3JtOiBza2V3WSgxMGRlZyk7IG9wYWNpdHk6IDE7fVxyXG4gICAgICAgNzUlICB7dHJhbnNmb3JtOiBza2V3WSg1ZGVnKTsgbGVmdDogIC0yNSU7IH1cclxuICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2tld1koMGRlZyk7ICBvcGFjaXR5OiAuMTt9XHJcbn0gXHJcblxyXG5cclxuI3NwYW5GMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9kYXdnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuRjJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbWV6YS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhbkYze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2x5ZGlhLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuRjR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvc2V3LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuRjV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbGVnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuUDF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMveXQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5QMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9icC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhblAze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL25vdGVjYXJkLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuUDR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvem1vdmllcy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3Bhbkcxe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3N0aWNrLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuRzJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdHVya2V5YmF5LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuRzN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZGsucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5HNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9hcmNhZGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5DMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQkhWQk1WRVgvLy8rcEYvNy8vL25Nayt2Ky9QMmlBUGYvKy8vOC8vdi84UC8vLy8yaEs5Nm9FLzZwRi96Ly9QNy8rdi8vLy9pdkUvK3BHUGovOS8vLy9QbjYvZi82Ly9pYUFPNm1HZno1Ly8zOC8vVC85Zi8vOHYvLzZ2Ly8vL0dtR3ZmMy8vS3dGZldUQU9iejFQYW9HKzNzeHZUKzQvMnJBUCtSSmNxZkFPcXNZdGV0QVArWkFPS3BHK3FYQVBLWEFPR2tBT3Evb3M2NWdNMzIvdXFxVTlYWXIrYkhoOW1ZSS9URWh1YjEwL3JkdE8rYk1kdjUyL3lVRE5TdFpOWGl3dXFqTjlqTmxkL1JvZCs5Y3RXbVE5U1lBTm03ZU9Pa1R0YXVhTTZSTjh1MFgrVFRvK3V6ZU5pcmF0cWNKZUNiUXRuVG51T2lRc3VVUHJpM2FPVG12Zk9rVjhuRGZkYkxhOTNNY2ZPbEx1YkltdHVVTE11bVNNbVBJTlRZbStYSWcrWmV2K2hYQUFBTkRFbEVRVlI0bk8yZGUxdlR5QnJBa3pUSmRKaEpNcFByQk5vMHZWb29sTE1GbE5JcUlBVmRYSFdQckh0MlhmVDdmNHd6VThURmM5U2xrQnQ5OHZzRC9jTkg4M011ZWQrNXZKR2trcEtTa3BLU2twS1NrcEtTa3BLU2twS1NrcEtTa3BLU2twS1NWRkJVMVZVVkFQSitqdFJRUFFpQXFocHEzZytTR3FIS0pOVUtMU1h2QjBrTDZObnNYeisxMXBRUnpQdFIwb0xac05JZjdPeFdKWGpsQ0s5L3N5UkFSVlVxR2tIK1lLOWxoWTdEWE1kVnJHVlN2REtVVVJDUndmcnVhaGdxSm5QZFpScVZWNFpZUnVneDJ1aGZQdGszR3FPUUxWTS92VGFVTVNFNGlyVForcmltaDBza2VOMUxaVXdweFFSalBpSVBLaFBvU1R3S2dJcmlQWHpYYThPL1FZRS9mWHF4YW5rdWdKS1I5L1Bkbi84MzVJNEUrd2RIWGNuekZMQ01iU2hqSExWajBodXVQNnNabzBiZUQzaHZ2bW1JU1JERk1Sb2M4b2FjLzZINWp3ZmFuTi9xcGRmd1dXZjJ0R015SHB5ckhyRHFWdDRQZXlkK1pFaVJITkgreVhGTllxTTZkRjFZei90cDc4S1BES01Ba1NnaTJ2QjV4NVNVT29NUHNoRi9aQ2lHWklENHF4STFUNDY3ZGhnK3lIZkhQeGpTZVNRUWtaNC9mZFV4UFlWSlN2akE0dklmRzk0QVJiTy9qcXVPeDF6Sk1CNVNZOTdlVU1RQnc5T1d4SmpuZVhrLzlnTGMyakNLQWhuSFd2TnN0MllDbHZkakw4Q3REWGxNam5CRXFlYlBQdTNiOHlqZ1lZekhXeHRlZGRYNUQyMTRNcTRCMVFrTkZVaW1DWXU5RUxtWW9ZQmlGUFQ5bGZjdG5ZZm1QTllwZWtzdWJvaDU3a0ZFSExDelczV1o2MWtGWDJsZDNKQjNWU3kzcVloYVYvWmFhMGJSbDNRV04rUVREcVZpeFNPU2VVTytHSzlKSVpCVXhiSkFNYk9QTzdUaFY3cDQrUEpvb29mQU5WVkpMV1IvdmFlaFRBanFEMzhlMndyMFFtVVoyMUJ1UnhqSHNYOVE2ZG9GWGJhNnIySEFKOWNvNElIQWJMMWpYLzJOT1J2OUwvYzFuQ01DQVV4bkg0NjZFak1kUTRjOHFvTk8zbXFmU2NSd2JrbFE1QStmUHJNbDBGQU54U3JNeEpxWUlTVThEc0M5NXN2akdtU3FZeFZtUFNBeFE4eEJRY3h6NWRucE0xdDNDaE1JSkdZNEg0d0lCUkVtWlBqbXZBczk2RXBXUGN5OXV5Wm5lQlBjbjc3cUdQWFExU1hEMEpmUmtNY0J3ZkRzWTAwQ25nZHlYdktBaXBHQ0lhS2JiUlJyUEZkZTVZckxhQ2ppZ0JoajZnL1BqcXZ6TnN4dk1NSzY3VlVJNFVtZm1BeVROcFVEcEYyKzM3Y2JvYU9hS3VEcGNnN3pqbTZLUFdEZXFlUTBETVVtejlic2JGemxjWUN5Q21FZWhxcFY3N3djSWhLbjBvYjg3NDF4MFBNZkhiVjB4Z3cxangwc2h5bm0yc1V2MDRGb3hNUU5lZWVuYlVSam9qVjVpaVVaZVJpcXJnc2FIcHljSC9aN21LZnRCQ1ArM2s3S2xjYzVTS1ppNFlOczlGOVhXcXBpT2Fxa2hDQmoxZm0vdG5yeHJxbVJtQ0pLVTJoTFdRUTgyN1AxY2RVWjFYWGJOTEk5RE1uSHY2RXlUNWtjZmRoQ2xGQ0tVQ3FPaFBRR0w0OG14andReUxnTk9ZN0JIYXNYNzZhUEE1TEdpQlRFN1lER3pmV082WTJzVEVNZDdxY29ERHFxQzBKNzh0T2pyUUNuMDRqOGY0NFBTK29mN3RXKy9OT1ppbDc5b3E2T2Q0YStHSXc0clJFWmFjTVhGMVdsQVpobDViRE53NmRXdTdYMzJxY29hcWZVVzNtNkhBME9LMTNUWTY2Wi9YS0hpSzZZVkJ2L050VVFTYWtSZWRSSzVhM3A4NDQ5YXJpWkcwcUdycXRzWk5tZEo1Zk5sQm94RU51UjdWanpEei9Xc28va0dGUXNTNVhjRU1EYStLekpZNEJZVER6elYzZENVQ3dpS0NKSHROY2JublpzeUV3ck5Gd0dNajVJcDBEVHRGdWZadjRHajFvcGp3V1NFdndLcERYZkhIY3R4a0xIMUtWc3B4MEFEVlBsSTNMM1pMQkJJeHFuOUFxSlk3UTFlOVV4WVdpNU1NelVVTVFCcHRFQWtyNS9PdHZhU2lQM0VDRGNiZ2Z4NEVRc1EwcG14b1pBQWNBMEhENnAxOTcrT3VpbFl5alNOaHhSN0w5KzNzclU3NGJwL0tmKzdIU21VU3lpQUJTa29vcDY4MzFseDhubnFBZnpQTHY3OGREZjNxUXlicWRpR0VVazN2eDN0U0hsdEE4SlBlQ0dCayt4L0cxQ1VqRVVjYUs4V1J2bGRmWmFOWGl5N0lWNjk4ODN6ZTJVMGlzZUIyeFdHemtkRFlBTVdLRmp1TUNEcXhlblBGZm1qNE9RYU13RVpTa21LMVZGejN0WEJ5cTYzVDA2OUhza2pua3FtZXlTQUZxcEFqMzNJMGlLdzU5aDdlTHBERzIwQ1NFMHNXQ3VNSVpRZ1ViRGsrWU42Y3NrMFNGWkJFT1JDYmpNTlJRSHN1cDRaM3JWU1pQU0xJTGhOVmM1ano3WlcvRTFLZ2NCVGlTWExKTGhGUXdZdGZGT1UrUEpCNDJpWlRSMHZBYlA2bHFmWHZ1VUpORlZpMmVvRzZwcXVKNnpkdjdiMUY5S1F6NnhocGJxTWcrWSswOE8rRHN5a09tYzVURzh4Z0JzdFh0ODFrVHozT1BPYThxRk52U2dJWm1kOTBPZkozczhOcjliS3hiWkVIcWVWUjhCcVhwOE1xRFJYWmV0Q213SURRTXFubTZxS2pQMlQvbXNjN2NNcThDR04rQ2hRTzM0eEVlSVVpU09GQytmb1ZnUWNLcXQzNmZiUE00UnA4S1gwQkNFSVdEMTJ0dGZaM3htWFVwRGNmbExuUGJxL21mUjVQRWhHSHFXSTRrd3B3NUVVTDZVaHJxdGVnM1FIZjkyMlE4V1huWjhDSWE2MTREbTVPaURqd2xaVGtQVFdyM1ltV2xvKzNFZ0wvNU9MS3poOVYwOThTcXMvTUY3SjQxRWJMcDRjRnBRUTlWU0pGRlB5d0hPeGZxd2orK3hZRnhNUThzejdGVURRbGo5ODZBZkx6NzJpbS9vcUt3eFlucm5uZGd2Zm96UWdtSE1BekEwSURBbmI5LzRsSXB6N1BkYmp5cVdJVkNnWVVrdVZQVE83MU90TjYvZkU4VDBYaHVwaFRJRXFtNVlMcEM2UFB5TWt0cFJMSlFoajY4dHhXNjlHbTZKODVyTGFNaER6Kzc1bTJZdjNud2NKYmJGbjcvaGpkTTlQSldmYmVOWURML2tEakhrYmNpOEVFRG9Nc2RScXVPVHBwLzAvbUh1aHJBT2VkNm5ocUd6djdkQzd4QlhGOTVRQXN3YmpiemErZGxRNUExSXZzZXJ2YUNHcmdmVzl2Y2U5WkZZRVUzbDNHSk9odUt1aTJXNWZKcFpHKzhNTlNUT2g0cktQQWtxOGg1UEVLSXgvcVBxbWRrYmlwc2dMdU9oV2VYRGdLWnpXZ2pqS05xTVNhLzVsd25NSEU0TmN5U2UxemExbEU3U3lPSWNQOGJhOE9sRlZUSFY3QXY4akpTMTF0RWp2eGUzMnpRbHgwQ20vWVBLaEk5MGFHUjBvdmJtSmF6VmkvV1p6MGRlSk82NHBTS0kvTm42TTF0bElKUU1EMlp5UUJHR29lSkp1bW93MEQxYUdWenRRaVJzaHpHZldZS0lZcTIvVXBuQTYyV1FiT0F6cCt1YW9CSGFuYWVEalhhRTBqbGJLbVpQV1J2dVhLdzZpcGZ0L09KQUhsZGIwcVJ5MENkMEdLQjBEQkdLa0xieXBPVll6RklOSjlOckNUdzBnOVdMRjlQUFdYczZ4NE54NU05T3huWTlkTjJRQjROcU5qMVVzU3lSdG9kSzkrZ05mem1JTzZBQlNsSlExQTRsQ01jUjN0aTZmREtSNnRBMGdhZUFqSW93R0FZUHJWMm0ySjNUeTM0NnIvYjVYWXROc29HR08rZTFiRTkxQy9nTUNxQlVlM3ZvYThrZVY3c0prZ08wZGZsKzN4elZzNzh1NDRtZHpkT3BGbSsyZ3pSeUkxa0VvSGg3ZG5LOHhqeEwxM09vOEZKN2U5SkVtTTh2NGtKOUtvWkltejEvcHJzc3RFUXg3VXlrZUU0TGdLNUxQT0x0UEo4MjczakM0RWVJemtCcEVNUVVvZUhKeCt1cmgxbmRQUlJYVnAzNnlKT3F1MmZEZm9SSWt1ZGh2NEJsRWdmSW41NjJETS9MK05xSUFSclFrUFRPKzJtZjRFRFUwMHREa0VaQmIvdnd2Q3QyY0Z5UWJUMWl3MVBucDdVMFVWZWZwblRmRU5QKzdKZG56Z2k0aG1rYkdaZVM1Q25FK05MZklOSDhlQ2hOTUhtSWVOZms0dytqdU9lL09hOHBsbTVBRDBqQWd0bmVHSUc2bFh4dGt6bFkzSi9nbWEwMmUzZGg1MWhVQ1JwcEdRWmltMDFySGxhNlNvUHBPWlp2U2Mzd3NVeTJwKy9HZHFpNmJwNmx2MUl6Uk1nLytITmlocUhPTE1mSnNRa1RyeE5GVVlCalN2cXpkMk5SQTB1bzVWcnVLM2xEUkRjajVIODRhdkdzdlFpRnY1TTFGTGRCTjBtditmTzRxb1IxL200dndFNWc0b1k4TWFxMGVFNHJibWJESXBSUlRzYVF2OXZGYWtjN0ZvV3dxd3BqMEhVTm5oL2xiU2RJeEpCRVVUQXZsZlQ2MDZRb1JUMi9rRXdiOG1pZDl2eXo0MXJZS0Z4QitpUU1vNERFbXl2UE95WmdycG45MHNzL2tJUWg2alYzZHF1d0FWekhVcGFsRFVVT0lnNTNvUWhqZi9hbFVrRGVsVHkveFIwTlJSb3BxajBnS3FvOU9GbFhlMWlFZS9SU1NucmE5S3BpaDVSeHhZNUZ1S09oU0pNalVXcFdjZk9vdXJJSWl4bnk0U2NXK3VXQTlucXowODZxNVpsS0tHVmZPV2NSRmpNTWdpZ09nbmJjOHcrUGNxaCtkQ2NXL0VhSnFHQ0Z0ZW1MbkNwWTNZVUZleWtoL3VDd010RXQ1aHFGaTgrK3pXS0dWNVhrckFaaml2TlFQaGgwTzhQNS91RzhHbUQzK3F2QkQySU1DbTVsaU9KMmdPUG0rb1VOUXFXNHMrYTN1WlVoSWIzaHk3Mld6dDhMakJYeVF5US80QmFHQ1BWRlpWVTRxdXVxWXpVZTBoZkpCTjh4L0Z3ZGQvNnBydXZxdUliRUU0Y2lyQzB0eHZmYThPOEt4MmU3YS9sVU9FNkk3eGgrcmxLdFBmcXBaWWdxMVE4a2Z2a1czKzJsQkcvTnpvNUZwWEVucDByakNmRWR3NnRxOFdZamRLQ3RzM3lxeFNmRTE0WlJJQ0pQRWtlRC9DditKOFhYaGlqYWpNUlhHNTd2MjE2akFPdlZTZkMxSVNGRW0zOTV3L004a1BPM1JaTGk2KzliME8zcHE0NHVqdEtwdVg4OUpUR2c0MVUwTkI5K3BGbWtMK0FrQmxSQVJjTXgyZGdhbmo1Yk5aWENmTVVvTVJpRVQ3Ykp4cGN2VVMyaG9RR1Boc09ublZYSmF6aUdvaXhONS95Q3F6ZDI5N29Tc0JWMS9rVUd1SHlOZU0zU3RkME5sdG10cEtTa3BLU2twS1NrcEtTa3BLU2twS1NrcEtTa3BLU2twS1NrcEtUZy9CZE16RmhZdUV5NHBRQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5DMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQllXRlJnV0ZoWVpHUmdaR2hvWUdod2FHUmdrSEI0WUhCd2NHaUVZR1J3Y0lTNGxIaDRySHhnY0p6Z21LeTh4TlRVMUdpUTdRRHMwUHk0ME5URUJEQXdNRUE4UUhoSVNIakVySlNzME5EUTBQVFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBOUC9BQUJFSUFPRUE0UU1CSWdBQ0VRRURFUUgveEFBYkFBRUFBd0VCQVFFQUFBQUFBQUFBQUFBQUFnTUVBUVVHQi8vRUFFUVFBQUVEQXdJREJnSUhCQWdGQlFBQUFBRUFBaEVEQkJJaE1RVkJVUVlUSW1GeGdUS2hCeFFWa2JIQjhETkNVdEVqTldKeWM3TzA0VFNTc3NMeEpDVW1kWUwveEFBYUFRRUJBUUVCQVFFQUFBQUFBQUFBQUFBQUFRSURCQVVHLzhRQUl4RUFBd0FDQXdBQ0FnTUJBQUFBQUFBQUFBRVJBaUVERWpFRVFSTXlJbEZoRlAvYUFBd0RBUUFDRVFNUkFEOEErNGhkUmRDK1Fld3pWR1FmSlJBV3B6SkN6a0lEa0xvQzdDUWdFTFRTZElXY0JXTU1GQVhvaTZBZ09Mc0xzSW9DaW8zVlFoWFZXcXVGUWNoRktFaFFGbFBaVFVLU3NoQWNSZGhkUUZWVFpWcTl6U2RBSk1xdDlNdE1FUVZRUWhGYzJrQzB1eUFJNWN5cW9TQ2s2ZXluQ2tYTlB3dHhIUmRhNGlZTytoOUUrd1FVbk1pTlJxSjAvTmNoQ29EaUxzSWdwVTVoRVR6RSt5NndEbk8zS04vZFJVbXRKTURVcWc1Q3JxczVxOXpDMHdRUVZaUm9GelhFSDRmbWlUc0pVZWZDNkFwdlpCOGxmYzRTTUppTlpuZjNWbWkwem9yYUZjdG1BRElqWDhsV3BvR29NY0d0SkcrM21GMWpablVDQk92UHlWREhhcTRCTkE0aW01aEc0STlWZmJXMlFKbU9TTEZ0eEViUzJaU0ZUQzFNYU1nRHRNRmFPSUJtT2dHWDlucDV3cXNhbXc4dHc4OWxKenRnVDZMaGF0bGxkQm9NZ21kZEZuclB5Y1hkVWFVVzlrM1M5MW01b3lNZVk5Vld1bXU5d2lTUVBMcDFJWFdNSk1EZE1vM29xdjJSaElWOVcxYzBTWUk4bGRiMmdjMlNUN0lzTW01QThsS1lpNGpVYUVLdW80dU11TWxhNnRFTmRpVHBJKzRsYXJ1M2FHazRnUU5DRlZnMm52d2p5VlI1TEtaT3dKOUF1T2JHK2kyMkZacmNzdWNjaXFydXNIT21JRVFwMVhXM1lyc0xHMmpzY3ROcGlkWVhMYWtIT2dtRk50dzRzeDhvSmd5cVd0Sk1EZFZ5cUJYZExMbWtHdWdIbEt1bzFtaGtFYTY2UnVxbjJ6Z0pJK2FuYTJ1UWttQjVLcFpkdElqazJ6TENMMHZxRGVwK1NMWFRJbmZFeU1xVSs3Z2daUWVXcytxelVYNHVEaHlXcTFzczJoeE1BN2RZVUtscmk1clNkSEhkUnJLSmxUVzBWMTY1Y1pLZ3hwT2drK1FYcjFMVm1KR0lHbTZ5OE9xTkVnNkU3ZWZrcThIMjIvU0xKVFNNTDJjaUlWbjJjL0dkT3NUcXRQRW5ESURtQnFwL1g0YjhKSkE5dlZSWTRwdE5sdVVUUmdzcllQZEJNQUNkRlpmV29aRUdablE3clBTcU9hWmFZSzBWN2VwOFR0Znk5dVNpang4MlhkOU5GbTJuaDRzWjFtWW4yOXVpelVYd1FSeUtuWjJXWWttQnk4MU4xa1d1QW53dU1TcTFrMG5DSnF2WjI2dU1vMGlGWFNjN1pzNjhndlIrcU5pSTk1MVZGaUFIT0U2OHZNU3E4SDJWZnBPeW1qRzVoQmdnZ3JUOW5ralYwSDBWdkVIUmoxbVZkYlY4aHRxTi93RFpYSERHdE1qeWNwbHQrSDZuTFVEYU9mbXUzMXF3TmtDRHk4L0pabTFuRjBnbVoyL0tPaTMzdEJ6Z0lPM0xxcWxpMDRnNm1xeTYzTFMwWTdmcmRZVFdhSDVEYlkvelZsaGJ1YVNYYVQrdVNrYklUb1lIUkdzbWxFUlJOa3J1cU1OUDN0dngvSlVXbFp3SWJ1RDhsdDdzUmpFaEtkSnJmaEFuNXJUeHllU2RJbWtvZWJjdGNYR1J2K3RGTnRrNXpmRTRnOGdkdmZvdDllcUdpU2x2V0RoSTlGRng0OXRzdlp3OCtqdzkwK0tJL0ZhSzlrMGlSNGZ3Vk5hNWNId05BREVkVnJ2R0Z6U0J2b29sakdrZzNsVnM3Yk5hR2dOTSthelZhb2ErUVBJcWRqUklrblRsQzdYdE1uU0RFN3F1dkZSQlJQWlpXclF6SWM5dmRaTEt1UVEySkJQM0xlMm1BM0hrb1U3ZHJUSUdxMDhjbTB5SnFORnFJaTZHVHllRjNicEREcU9YVVIrUzdmNVpHZHVYb3Q5SzFZMHkxc0gzK1VxMTdnMFNUQUM1ZEgxalpxcTFHVmpIT3B3VHFldlR6V2VsWXVrVG9QMXN2U3B2RGhJTWhacTEyV3Z4eG5iMTE2SThjZE5oWlBhUjI0c3c0eURCNXEyaGJ0YU5PZTVLN1hCeE1ieG9zOWlINjVUSEtlcXN4V1hnMjhmVHRRVTJFRWdBOHRQbkhKYUgxQUdsMjhDVm11clBJek1MU3ltQTBOM0FFYW9yV29ISWpIYVh4YzdFZ2E3UXFlS1RrT2thZXM2L2t0OUcxWTB5QnIrdGxhNW9PNGxUcTNqR3gyU2RTTWxwazZtUVoxa0ErU29aYU95MUVEcnA4bDZMQ0R0OGxWV3VBMGdFSThGRTIvQXNuWEJYdGc0enFEc3AwYVFhSUNrNG1ERy9KWjdRdTF5Mjg5NVd0SitiSnVGNURRWjBCUHBxcHFpNHRnK0pKRUs0QlZXZ3FwM0RYT0xSdUV1WE9BOE82c2F3Q1NCdnVwSkhKUVFweVFKMzVxaGxyRHNwNXl0U2k1NEVUek1JMG5MOURZcTB3NFFWeWpTRFJBVTFCaGRySUVUcEhUelNLMGhJdEM2b1ZXWkNKSTlOMU1LZ2cycUNTMmRRdTFIRUFrQ1QwWFEwVE1hcnFiQkNtU1FKRUZWbTM4V1dSOVB5VjZLUytsQ0lpb012ZFA3ekxMd1J0cjAvbnJLdXEwdzVwYWRpcGx3RzY2b2tDdTNvaG9nVDExVThSTXhyMVhHdTFPa1J6Nm84RWpRd2VxdWt0RUpLSWNOcDFYVndNRXpHdTArU0FQZEFKaVlSanBBTUVUeUtraUFwZUg1QWdqSG1GYTRTSVhVU0FxdDZBWUlIcXB1WUR1QVYyVjBwRkJRaUJjTEJNODBCMHFMSFNKMUhydXBJcUNKblQ1cVNJZ09OYkM2aUlBaUlnQ0lpQUlpSUFpSWdDSWlBNUM2aUlBaUxGeGU4TktpK29CSmFOUFVrQVQ1U1ZNbWtxeU54VTJvdnoyMjdSMTJ1RG5QTGhQaWFRSUk1Z1FORDBoZm9TNWNQTGp5Sno2TTRjaXk4Q0lpN0d3aUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlJZ0NJaUFJaUlBaUlnQ0lpQUlpSURMeEhpREtEQytvNkdqN3llalJ6SytIdWUzemFtVFBxMlZOMHRPVDRKYWVvRFNBZmRYZHRuUHFWbTBoSmdORFc5WE9QL2dMeVQyWW9oMkRyeGphL05wYjRRNytIS2QvMUM4cnk1ZVRMSmNhOFBOeWNqc1RoNmZBYmV6cVBEbXVmbURMYVZSelEwa2E2RU44VVJzZGVvWDFiZUxnT3hlMHRQUG4rZ3Z6TzY0ZlVvUHhxTnhPN1NENFhEK0pydWY0cjZsMXc1MXJUcVZQakRpMXJqdTlrYm4zblh5ODE0OHVUazQwM2hwcmJVMHowZkQ2NTUvanlYdjlIMnJYQWlRWkJVbDg5MlZ2QzRPYWYzWUk5RE0vTWZOZlFoZlE0T1g4dUN5L3M2OHZHK1BONHY2Q0w0UGczYUsrdmc5dHUyalROS3BVcDFLcjJQTFphNXdaVHBzRHBjN0hGem5Fd010QXFtZHFMK25jT3NLbEtsVXUzQnJxRDI1dG91cG5LYWxZR1hORGNUb056b09wOUhSbktuNkN2SnZPTVlYVkMyN3N1NzV0UjJZT2pjQURCRWF6UFZmUFgvRnIreWZTZmN1dDYxdStvMms4MDJQWTZtWG1HdThUaUMyZCtleTlqaVhHWDA3NjF0bWh2ZDEyVjNQSkJ5QnB0QkdKbUFOZFpCOWs2aW52b3ZrZUtjZXVLbDA2enNXVXkra0d1cjFxdVJaVHkxREd0YnE1NUd2VFQxaWl0eHE5czYxSVh2YzFiZXU5dEp0YWsxelhNcXVuRVZHdUpCYVkzRzBIMExxeFQ3VkY4VnhudGZWbzNyN1JsSnRWNXBVM1VHTmtQZlVjWFpadkp4YXhyV2x4TWN0OVZPNTdRWGRyYnROMVRwVkx1dFY3dTNvMjVlR3VscllEaS9VUWNpVHFJTGRlanF4VDdKUXFQRFdseDJhQ1Q2QVNWOGhVSEdhYk84eXM2ang0blVHc3FDUnVXc3FGM3hkSkVUMVZYRSswZHhjV0Riamg5RnIzdmM1bFZsV0FhYlExd2VENDIrSU9BOVFaaE9vcDlCMmQ3Ulc5Nnh6N2Q1Y3hyc1NTMXpmRkFNUTRkQ0Y2Ni9FUG9ndXI5b3h0Nk5OMXM2dTN2bnVqSm5oYk9JN3h2N3NmdW5kZTF4UDZUTGlqZVhOc0tMS21EalRvTVl4K2JxaGMwTnpJY1pBYVhHQTBFa0FhS3ZEZWhUOVZSZm5CN1ozbHBaVkxqaUZBTnJHcUdVR05BYUhTM0tYRUYwQVE2ZWVnSE5ZRzlvZVBtajlaRnRRN3ZIdk1jZkZoR1VobmVaN2F4dW5SaW42WHhXOUZHaFZyRVNLZE45UWlZa05hWFJQTGJkZVIySzdUamlGQjlkdE0wdzJvYWVKY0hFdzFqcGtBZnh4SGtzUEErMkp1dUcxcnRqQTJwU1pWeVk2WE5GUmpNeDBKYVFXbmtkU0o1ckIyWDdaM0Z6d3k2dlh0cGlwUU5iQnJXdkREaFNiVUdRTGlUcTR6QkdpZGRDbjM2TDhuNE4yNTRuZlVnTFcycEdxMG52YWpwYlNhRDhMR0I3OVhFQ1RxZDl1YTlQc1AyM3VhMTFVc2IyazFsZG9jV2xvalZzRXNjSklKeDhRY0RCQTkwZURGUDBWRjg5ZWNScXRlNGgwTWFYQWpGdUFMYzREM0VaQXU3c1JIOGJSMEx2b1FzdFFvUkVVQVhDVjBMNXJ0dTl3b0FOa05Md0hSL0RCZ0h5TG8rUzNoajJ5U09YTnkvaXdlY3NORnpadGZkVXF6U0hORXRkQkJoeld1TFNZOWZrT3EvSmIrN3pjOS9Oem5PLzVpVCthK2o3S3VlMjhwaW5NT2tQQTJMQTBrbDNvWTE2d3ZqZU4wblVhdFNrNlFXT0xQWWJIM0VIM1gwdmkvSHg0czhzVS9kbnlPVGsvNmNNY2twcy9YYjExR214bEEwYys2YTNISXlKeGlUTy9vVjQ5L2NPcXV5Y2R0QUJvQU9nQ2xaOW9MVzZwc3FQcnRwVkExcmFqSGcvRUJxVy94QThvOHRpdlQ0TldvVkttTkZycWtDWFZIQ0d0NllnaVNTZXZtWlg1ajVQdy9tY25Ma21wamZUOUw4ZjVmeGVIQk5mczlmNmF1ekZsM1ljNXhBYytJYWQ4UjVlYy9JTDZJTDRqRWtrdStLZFozbGZYY09jNDAybDI4RDE5L1pQZ2ZJV2Q0a21vYStWZyszZHV0bnpIMFpOQXRha0RlNnVTZk01eCtBSDNLTlFmKy9NLyt1ZC9ud3ZVN0ljSGZhMEhVM3VhNXpxMVdvQzBrakY3aTREVURXTjFFOEdxZmFRdkpaM1l0VGI0eTdQTTFBK1lpTVk4NThsOVc3WjR6ei9wVC93Q0FkL2kwUDgxcWx4eit1T0hmNGQxLzBOWG9kcytEUHU3WTBhYm1oeGZUZExpUTJHUGE4N0FtWUJUaVBCM3Z2clc1QmFHVVdWMnVCSnlKcU5hRzRpSUkwTXlRaWFnUEkram40K0k1Zkg5b1Y4cDN4OE9QdDhVTDZmaTl6UVl6SzRMQXpKbzhiY2htVERkSU9zN0x3T0s5bjdsbHk2OHNYMDIxS2pXdHIwcW9kM2RYSFJyNWJxMTRFaWY5NXErdzd5N3IwbjN4b3NvMEhpclRvVVM1MlZWdXpxcm5BU0c2d0FJTTYrWnh1Z2phVWdlTzEzRWVKdGxUZzlKZUovQk9QNC9iSERzdHU3dWNPbWVBbjN4L0plclE0Szl2RWF0MlN6Qjl1eWlHeWNzbXV5SklpSWp6VSsxWFo4WGROb2E4MHExSjRxVWFyZDJQSE1qbTA4eDZkRXFxQjdpK0Q3SFJIRmNQZyt0M0VkTXNSbkhsTWUwTFZWcDhaZXp1aTZ5cGt5MTFkaHFsMkoweVpUSWdQOVRIb3ZjNER3S25hMnpiZGtsb0Rzbk8rSjduYXVlNDlTVDdhRGtwNEQ0WDZCLytFci80L3dEMk1XSHN0UWE3dEhkbHdCTEJWZTN5ZExHU1AveTl3OTE2SFpic0p4Q3h1QjNWMVROcTZvMTFScG5ON0c4c1N3Z09qU1E0TDErQ2RrYTFIaXR4Zk9kVE5PcTE0YTBGMll5Y3dqSUZzZnVuWTlGcHRWdWdzK2tqdFN5eHBVLzZGbGFwVWM0VTJ2RXRHSUdUaUlrL0UwUUluTGRlVGYyWEdxbHZVZFd1YmUyWUtiM1BaU1pMZzBNSkxjaVBDWTBrTzA2cjJmcEU3SGZhTkpnYThNcTBpNHNMcHhJY0JreDBhZ0hGcGtBeEd5OEJ2WlRqTnd6dUx1K1kyZ1JpL0FCMVJ6ZFBDU0dOSkJHaEpkcnpCVEdSRVo1djBhZjFKeEQxdVA4QVRNVWZvKy9xRGlQcmRmNmFtdlc3STlpYisybzNkcytwUk5HdFNxTllHbHgvcG5OREE4K0FFTnhHb24ySzlEc3gyTXIyL0RicXllK21hbGMxY1hOTDhSblNiVEdVdEIwYzA3QTZRcjJXeWxIMEpNSDJjNHhxYTc1OC9Dd2EreThRai81VTN6Qi8wWkg1TDdmNlBlemxTd3RUUXF1WTUzZVBmTEM2SWNHaVBFQVo4SlhtbnNiVysyUnhIT24zUUJHTXV6L1lHbHRqajhSbmZaU3FzazBmYU90V0Z3Y1dOTGhFT0xST20ycXVRSXVab0lpSUFvVktZY0Mxd0JCMElJQkJIUWdxYTRRZ2FwbHMrSDBxVTkzVFl5ZDhXZ0UrcEM4UHRSMk90NzBoN2lhZFFDQTlzYWdjbnRPamdQWSthOTUxaXc4ajk1L211ZlVHZWYzcmVQSmxqbDJUMlkvSGhPczBmQzhQK2pkckhlTzREbS8yV1FUOTdpQjgxOXZ3NndwMFdCbE1BRGNtZFNlcFBNcTBXamZQNy84QVpTRnUzelcrVG16ei9abU1QajhlR1haTFpFMnJDY2kxcFBXQXRDZ0tRVWdGNTFqaXZFZDIyenorK2ZrNFpOTTFRd1MwNk53RHpzZFNvZlhDUzdvSDBzVERteUhWTUR6MUF4T3VnUFNOOTRvTmt1eEVraHhQOW9ERUgxeDA5RkZ0b3dURFdqSWduVGN0T1FQczdWYklZUHJqeUhaWXhtd054eUJBTmMwOVRPdWpRZVc1R3lsOWVjTXljWS9wTWRDSUxLbUhpTTZneURwRVFWdjdobjhJNjdjdzdQOEE2alBxdVZMZHBCQWEzVU9HclpIaU11a2N3VHFSelFHWDY2V1VhbFJ6UzgwKzhsdEpwTG5ZRTZOYVRxNHh0TzVYUHJ6bjBXVkd0Y3cxTzdodFJwRG01bG9oN1FkSEFPMm5jTFZaMjRZekVSdTV4Z1FKYzR1TURrSkt0Y3dIY1RxRHIxQmtIN3dvRHpHMzFRNW5BQnVZWXduYkx2ZTZrK0tYRFoyemVubXJYM0QydWNDV2tORk1iR1M1NzhTZDlBQnNOZDk5TmRSdG1lTHdEeC9GcHY2cVJ0MlFSaUlJQUk2Z2JBcWc4NjV1bjR2YzBocmhUckVIVWdGanNRY1pnblJUZlhlSE9hQzNMdkF5WEJ4SDdIdkNRM0xUVWJBcllMVm1PT0RjWUxZZ1JpN1VpT2hYUlFhTmNSTXo3NDR6NjQ2ZWlBd3N2bk9jeU1RMTJHUU01UzVqbnlET3d4QTI2cTM3Ui84QVVkeDNWWDluM3ZlWWYwUHhZNFp6OGZQR050VjE5aTAxR09ob0RJeGhveTBEbWdaVG8wQngwajMxSVcxQVlLdDA3eGtSQWV5bTBRU2NuRnJjbmE3ZUxiVFFiNnFuNisrVy9CRWdQME9wNzBVcGJyb056clBJTGM2MllTNGxvbHdoMm04UnY5dys0TG90MmFlRWFBQWFiQnBEZ1BZZ0ZRR1ZsMjdMRjBBNWxzUWRHWXVjMXdNK0tjUnJwekVTRlI5WWU0Wk5jR2x6Ylk3U1BHOXdjQUo2RmVnNjBZUVFXTmh4eU9tNTZsZE5zeU1jUkVORVJ5YnEwZTNKVUdDNXUzTkRpMlBEM3JqbGtaRElPSTEwbWZRZEZleTVjYXBiNGNKYzNZNVMxclhUTXhIaU9rZEZwTkJobVdnemtEcHZsOFgzcW42b085N3p3ekJBaHNIWEVFdWRPdWpmTDNnSVExb2lLRkNJaUFJaUlBaUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlJZ0NJaUFJaUlBaUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlJZ0NJaUFJaUlBaUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlpOThjaWZSU1VBUlJFeWRvNWRWMGlVQjFjeTFoR2lORjFVQkFpNWtKaWRVQjFFUkFFUkVBUkVRQkVSQUVSRUFSRVFCRVVHdmtrUWRPb1VCTkZGd01hYUZTQ29DNFNtSW1ZMVhVQkNtNlJNRWV1NmpVRHBHSkVjK3FrS3JaeGtUMFZkMWNZY3BKV1cxQy9aZW9NcEJzeHpVTGV2a0ppSTNXVjFkK1hUeS9KSGt0TUpNM2xHdUIyVlZ5MGx1aXJzbWtUUDZLZHR3VFZMYXRkcmRDckhPMG55bFUxN1lPTXpIVlhSQ0swYU05dGNseElJVXJwamlCajExMVhlOVkweElCL1B6WGExY05FbjJDbjF0ajcwVFpNQ2QrYWdLSXl5VUtOeUhHSWhWMTdod2NRTklWYnhsS2s3RFlpOC82MDd5KzVGbjhpTDFaNkNMa3FGYXFHQ1RNZVFYUXdXSW9zZklCNjZxbnZIZDVqSWlKMjM4djEwVW9OQzVLalZZSENEc3FMRjdNY1duVWI5WjZwZGo2TEgzQURzY1hFbm9OUHZWanBqVGRaTHkrd0lBQUo1K244MCswbVl6clBTRHY2clBaZVVzWnFvaDBlSWdueTJDVktUWGZFSmhlTzIvZk84K1VDUFRxcnIzdkhDUzBodlNSOTVoT3loZXJwNmdkT3lxZGROQmlWbTRaVGdFKzN1b1hGdmlScm9UN284bktoRlliYTFiRnM3OUZYYjNPUmdqN2xmZ0lpTkZsdGNRNXc1ekE5RWRxQ2tPWGRSd2R1UU9Tdm91TG16c1NQMFZHOXFORFRNU2RoNXF0bkVHUnJJUFNQd1RTYnJIcThLcmV6Y0hBbllhNzdyWGMyNGNOZENOaXNMNzUyVXQwSFE4L1ZjZGVPY0NJOVNBVmxQRlZGanRObGlSaUk4NTlWRzVlQTVwNmIraXcyNEpPa3lWYlZwT2J2elU3YTBoTm0zNjAyTi9rVlF5N01tZFFma3VXMUFPRWtuZU5GVVdnT2c3QS9KSGxscGhKRTdxNXlFQVFQeFViZW84K0Z2ejVlNnZ2S2pNQ0pCNkxQYVhRWklJME91aVA5dHNMelNLNjFJdE1IbXQzMUpzUkpuclA1TEZkVjhqSTBBMFV2cnJvaVI2eHFpZUtiRFRab3NScWVxc3ZRTVo1OGxnWTQ2YXJybkU3a2xSWmZ4aGV1Nlc5NTVMcW9SWnJOUTdaMTJ0ZTRrNkdRRHIxMFY5N2ROTGNXbVNZK1JsZVdWb2ZiRU1EcEdzYWV2bXRwdVF5MHFhS0YvaTBBdG1OSmxaNnRjdWRsc2VVY2tzOGNobHQ1N1Q1cWQ4VzVlR0lqV05wMVJ0d2FvZStvNXMrSWo5ZE4xanRxV1RnMmQrZnpXdWh4UU5iampKRzJ1bnVzTEtoYVE0R0NGSE5CR3k5c2NBSEF5Smo5ZmN0WERMZHBia1FISHo1THpiaTdlLzRqb09pcmE4amJSS2s2a0k0YnE3bXRyU0JvQ0NZOXBXK3BlTUxUQm1SRWFyd3BXNjN0bkZzaU5GVms5d2RVWFd0empJSWtiKzZYRnpueWdCWjJsWDNUR2pIRXoxMTlGSzRJcWRGdzdZSDVhcWtxMjB1QTJaRy9NS3V0VWx4Y28vUFF2U3k0czNCdVVqUWJLRmpSRG5HZVFtT3FyZmV1YzJDZFBUVlVOZEd5T1hRM0RiZjBtdGNNZEpHeTAyOXl3TkdzUU5SNS9tdktjNG5jejZxVk5oY1lBa3FwNzBPdWpSUmZpUTRlcXRyVjhvMGlGUkVhZE5GWVdESEtkWjJVVmtMRWNhNGpZa2VpNUs0MDY2NnJyM0FuUVFPaUZJUGFTTkFUMTBWYXRkV2NBUURvZDFSS0F2dUtHTWFneXBXcm1nbkllbS81TE5LU3Bka21qUkk1YmN2UmRsVnNPaWxLRkpTaWpLNmdLTG40bmYzaitLMFAvWXQvdmZ6UkZ0ZlpsL1JqWEt2d29paFRPRVJGQ25RcmFIeE4vdkQ4VVJBYXVJL3RmdVcyeCtGLzY1SWkxajZaZmhoWFFpTEpvQkhiRkVVSVp5dWhjUkNuUXRuRFBqOWorU0l0WStrZmdyZkVmVS9pb29pajlLdkFpSW9DdXB5VUVSQUVSRUJiVDJVa1JBRVJFQi8vMlE9PScpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuQzN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQncwUUVBOFFFQThRRUJBUUR3OFNGeEFWRmc4TkVCRVBGaEVXRmhVZEZoY1lIU2dnR0Jvbkd4VVZJVEloSlNrckxpNHVHQjh6T0RNdE9DZ3RMaXNCQ2dvS0RnME9HaEFRR2kwZkhTWXRMUzB0THkwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBT0VBNFFNQkVRQUNFUUVERVFIL3hBQWJBQUVBQWdJREFBQUFBQUFBQUFBQUFBQUFBZ1VEQmdFRUIvL0VBREFRQUFNQUFRSUZBZ1VEQkFNQkFBQUFBQUFCQWdNRkVRUXhRVkZoRWlFR0lySEIwVkp4OEJNalF1SmlrZUVVLzhRQUdnRUJBQUlEQVFBQUFBQUFBQUFBQUFBQUFBRUZBZ01FQnYvRUFDb1JBUUFDQWdFRUFRUUJCQU1BQUFBQUFBQUJBZ01SQkFVU0lURkJNbEZoc1NJVEk2SHdRbUxSLzlvQURBTUJBQUlSQXhFQVB3RFdUSmtBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVDZUREVjFNUW5WVTlrbHpiSXZhS1J1ZlNFdUs0ZThWMUZ5NXFYczEvT2FJeDVLNUs5MVozQnRpTTBnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUU4R0c3cFJFdXFwN0tWemJNYjNpa2QwamZ0QTBTT0duMVBhczFMM3I5SzdUNCtwNXZsOHVjODZqNldxYmJaTmMwZU9KanBPU1Y4dC9aOTBZOFhsMndXL0h5Uk9ubi9FOFBlSzZpNWMxTDJhL0hkSHBjZVN1U3ZkWDAyYjJ4R1lCSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFKNGNWWFV4Q2RWVDJTWE5zeHZldEk3cDlEZnRBMFNPR25kN1ZscGU5ZEV1MCtQUFU4M3krWE9hZFI5TFZhMjF1Y2JFSUZacm1qeHhNZEp5U3ZsdjdQdWpyNG5LdGh0K0UxblR6N2llSHZIZFJjdWFsN05mem1qMG1QSlhKV0xWbncyN1l6WWtBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFKNE1OM1V4RXVxcDdKTG0yWVh2Rkt6YVJ2MmdhSlBEVDZxMnJOUzk2NlN1MC9ucWVkNWZNbk5PbzhWYXJXMnR6aFlnQUFCVjY3bzhjVEhTY3NyNWIrejdvN09MeTV3Vy9DWW5UUU9LNGU4VjFGeTVxWDdyOGQwZWp4NUs1S3hhcmF4R3hJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlBCaHZKVXhFdXFwN0tWemJOZVRKWEhXYldud1BSL2gzNGZqaG8zcmFzMXI1cTZTdTArUFBVOFp6K3FYNUYvNFRxa2VvYklwNFdPU052Mkl4Wll2SDVjOTZkcUJ0WUFBQUFTTWJXaUV4RzFkcnVpeHhNZEp5eXZsdjdWM1gwTm5ENTk4Ri9QbVBtRzJJOFBQZUo0ZThWMUZ5NXFYczEvT2FQVzRzdGNsWXRXZHhLV0kyQUFBQUFBQUFBQUFBQUFBQUFBQUFFOEdHOGxURVM2cW5zcFhOczE1TWxjZFp0ZWRSQTlIK0c5QWpoWjlWYlZucGZOWFNWK21mSG5xZUw2bDFLM0p0Mng0ci92bHRyWFM3S3BtNHBKK3pNcTNtczdoRm8yNnVTR3YyN2xuaXl4ZUhKZWsxUk5yQUFKR05yeFZNUnROSExhZTcyMnhHZ2hLcTE3Ulk0bU9rNVpYeTM5cTdyNkhkd2ViYmozMS94bjJQUHVKNGU4ZDFGeTVxWHMwLzU3bzlkaXkxeTFpOVo4REViQUFBQUFBQUFBQUFBQUFBQUFBSjRNTjVLbUlsMWRQWlN1YlpydmtyU3MydE9vZzl2Ui9odlFJNFdmVlcxWjZYelZ6VXI5TS9ucWVMNmwxSzNKdDJ4NHJEYld1bDJWVE1BQWNWS2ZNeXJlYXp1RVdpSmRYSkRSWjRzc1hqOHVTOU8xRkl6dGJ0WXhHMDBjdHJibHQxb01VaElBVld2YUxIRXgwbkxLK1cvdFhkZlE3dUZ6cmNlLzhBMW40SG4zRThQZU82aTVjMUwyYS9uTmVUMTJMSlhMV0xWbndNUnNBQUFBQUFBQUFBQUFBQUFDZUhGVjBvbE9xcDdKTG0yWVpNbGFWbTFwMUNhMW0wNnE5QytHTkh4OE10NjJyTlM5NzZUL3huODlUeGZVdW9YNU02anhWMzI0YzByM2UvdTJBcVhPQUFBQUREeFdhWlh2N3Q4bDNOdUtMYjNEYmk0ODVwN1k5ZmQxOEdWVXZQVkhUTXpQdHI1SEVuQlBqekgzWkRGeWhLUUFBQXFkZjBqSHhNL3B5eXZsdjdWM1gwT3ZoOVF0eHI2OTErenN3OE8yU3N6UGo3UFB1SXdYanFvdE9hbDdOUCtjajJHTExYTFNMMG5jUzViMG1rNmxqTnJBQ1FBQUFBQUFBQUFBRUNlSEZWMHBsT3FwN0pMbTJZNU1sY2RadGFkUkNhMW0wNmoyM3ZRTkZuaDU5VmJWbHBlOWRKWGFmeWVONmoxRzNKdHF2aXNMdmpjYU1VYm4ydHlyZFduWndadWovN01aaFg4bmovQVBLck9ZdUVDUUlZZUo0aFF1N2ZKZC8vQUEyVXB0dXc0WnkyMUhwVVpMZE50dmRzNm9qUzl4NDY0Njl0ZlRpS2FlNjVneVk2M3JNV1dHRE1xWG5zUTg3eWVOT0czbjE4TWdjd0FJRWJvd3RaWWNUaWQvOEFLL3BqTlMyMHE5YzBlT0pucE9TVjh0L2F2SDBMSHAvVUxjYTMzclB1UC9ITnlPTlhMSDVhRnhHQzhkVkZ5NXFYczB6MmVMTFRMU0xVOUtTMUxWblZtTTJzUUFBQUFBQUFBQUFuaHhWZEtaVHFxZXlTNXRtR1RKWEhXYlduVVFtdFp0T285dDcwRFJaNGVmVlcxWnFYdlhOU3UwL2s4YjFEcUZ1UmJ0cjRwQzc0M0dqRkc1OXJjcTNXQUFPemd6ZEgvd0JtTXdyK1R4OWZ5cXptTGc5TVBFOFFvVy9OOUYzL0FQRE9sSnMzNGNFNVoxOEtqSmJwdHQ3dG5YRVJIcGVZOGNZNjlzSWtzd0RtS2FlNjVoaGt4MXlSMjJXR0RNcVhucWpGNTNrOGEyRzM0WkNITWpkR0ZyTERpY1R2L2xmMHhtcGJmR2dKQUt2WE5IamlaNlRsbGZMZjJyeDlDeDRIVUw4YTJ2ZFo5dzVlVHhvelIrV2hjUmd2SFZSY3VhbDdOTTlwaXkxeTFpMUozQ2t0V2F6Mnl4bXhpQUFBQUFBQUFBTjcrRzlLeFlzYXlKemt1NVQ5YTkwbDJuN25qZXFjM0pseVRqOVZoZGNUQldsZTczSzZLZDJoSUFBQVIrR1gvd0N2MHo3Kzc2ZVJGTnk1TW5EN3I3cjYrVmJreU9tMjM3czZvcnFOTERIanJqalZVU1dZQUFBY3hUVDNYTWFZWk1kY2xlMjNwM296K3BkbWFyenBWVTZmMjMzYnpId0dsWS9IZ0FBQUFGVDhRYVZqejQzVGFpNFRheVAyU1hhdkgwTFRwdk55WWNrVmp6RS9EazVXQ3VTdTU4UzBBOXBIcmFqOUJJQUFBQUFBQUJDMjBEV3E0ZXZUVzlZcWZ2UE55KzgvanFWZlVlblY1TmU2UHFqL0FEK0hYeHVUT09kVDZiNWh5emNxcHBWTkxkTmNtanh0OGRzZHByYU5USHd1NjJpMGJqMG1ZTWdBQkc2MkppTnBpR0J2YzJ4R216VEhVbWNTbmFKa2tBQUFKVEpqTW9aRTlqRFcwYVo0dmMxVFhUWE1KRUlBQUVjbHFVNnBwSkp0dCt5UzhtVktXdlBiWHpLTFRFUnVmVFJ2aUhYSHhEOUVickNuK3p0OTM0N0k5aDAzcHRlUFh1djV0K2xMeXVWT1NkUjZVcGJPSUpTQUFBQUFBQUFDRUxmUU5hcmg2OU5iMWhwKzg5WmZlZngxS3ZxUFRxOG12ZFh4YVA4QWZMcjQzS25IT3A5Tjd3NVp1VlV0Vk5MZE5lNmFQSFh4MngybXN4clM3cmFMUnVQU1pneVJ1dGlZamFZaGdwN20ySTAyUkRna0FJVkpsRXBSTWtnRXBreG1VSm1LQURsUFlleWZMUEY3bW0xZE5jd2tRaEhKYWxPcWFTUzNiZnNra1pWck41N2ErWlJNeEVibG8zeERyajRoK2lOMWhUL1oyKzc4ZGtldjZkMHl1Q3ZmZnpaUzhybFRsblZmRUtVdUhFQklBQUFBQUFBQUFBQUxmUU5hcmg2OU5iMWhwKzg5WmZlZngxS3ZxUFRxOG11NDhYai9BQzYrTnlaeFRxZlRlWXp4VXE1YXFhVzZhNU5IanJZclV0TkxlL2xkMG1MUnVQTEczdVpSR202SWNFZ0FBQVFxVEtKVEJNaVpOcG1LQUFBQTVUSW1Oa3h0bGVXVkxwdEpKTnR2MlNSaEdPMXJkdFk4eTFXMVh6UHBwSHhEcmp6dHhHNndwL3M3YTZ2eDJSNjdwdlRZd1IzMityOUtUazhxY3M5dGZTbExoeGdBQUFBQUFBQUFBQUFBQkF0ZEUxaXNEOU5iMWliOTExbDkxK0N0NmgwK3ZJanVyNHQ4ZmwyY1hsVGhuVS9TM1RGa21rcWxxcGEzVFhKbzhsZWxxVzdiUjVYMWJ4YU53a1lzZ0FBQW92aURXLzZlK0xFLzduV3YwZjdmUXVlbTlOL3FUL1V5L1QrMWJ6T1oyZndwN1kvaC9XL1Z0aXl2NXVVMi93REx3L1BucWJPcGRNN1A3bU9QSHpIMlk4UG03L2hrOS9FdGhLSmFBQUFCeGRxVTIya2t0MjM3SkltdFp0YUsxamN5aTB4V056NmFicnV0UE0vUkc2eEovczdhNnZ4NFBWOU82ZEdHTysvMWZwUmN2bHpsbnRyNlU1Yk9FQUFBQUFBQUFBQUFBQUFBQkFRbGFhSnE5WUs5TmJ2RTM3cm01ZmRmZ3Jlb2RQcnlJM0hpL3dDM1p4T1ZPR2RUNmJyaXlUU1ZTMDVhM1RYSm84bGVscVRNV2pXbC9XMFdqdWowa1lwQUtMWDliL3A3NHNUL0FMbld2MGY3ZlF1ZW5kTy9xZjNNbjAvRWZkWGN6bWRrZGxQYlVXejFFUnFOS1Naa0d0amF2aC9XL1Z0aXl2NXVVMi84dkQ4L1U4MzFMcHZiL2R4ZXZtUHN1T0h6SW1PeTdZU2lXZ0J4ZEpKdHRKSmJ0djJTUk5hemEzYkh0RnBpc2JuMDAzWGRaZWQraU4xaVQvWjIxMWZqd2VyNmQwNk1FZDkvcS9TaDVmTG5MUGJYMHB5MmNJRWdBQUFBQUFBQUFBQUFBQUFBQUlGcG9tcjFnZnByZDRtL2RjM0w3cjhGYjFEZ1Y1RWJqeGI0L0xzNG5LbkZPcCtsdXVMSk5TcWxxcHBicHIzVFI1SzlMVXROYlJxWVgxYlJhTndwTmYxditudml4UDhBdWNuWFAwZjdmUXQrbmROL3FheVpQcCtJKzdnNW5MN1A0VTl0UmJQVVJHdkVLU1oyQUFnRStVdHErSDliOWUyTEsvbTVUYi95OFB6OVR6ZlV1bTltOHVMMTh3dU9Gek54Mlg5dGd1a2syMmtrdDIzN0pJcEsxbTA2ajJzNW5VYmxwdXU2eTh6OUVickVuK3p0OTM0OEhxdW5kT2pCSGRmNnYwb2VYeTV5ejIxOUtjdG5DQklBQUFBQUFBQUFBQUFBQUFBQUFBQWdkM2d0VnpZWXVJcjJydjcrbDk1N001TS9CeFpyeGUwZVkveTZNWEp2aXJOYXo0ZEpzNjRpSTlPY0FFZ0FBRWFpZkE3M0ZhdG55NDV4MVh5eno3MzI5WGZZNDhQQXc0c2s1S3g1L1RveWNuSmVrVm1mRG9uYTVnSkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvL1onKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhbkM0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Njb250ZW50LmZob3UxLTIuZm5hLmZiY2RuLm5ldC92L3QxLjE4MTY5LTkvMTQ1NzczNl8xMDE1MjAyMzYwNjA1ODYyNF8xNTIwOTcxMzc5X24uanBnP19uY19jYXQ9MTA5JmNjYj0xLTMmX25jX3NpZD0wOWNiZmUmX25jX29oYz1rVFFMU0ZKVWpkQUFYXzByS2tsJnRuPW82MkFyMUtnVTJyZlB5MjUmX25jX2h0PXNjb250ZW50LmZob3UxLTIuZm5hJm9oPTdkMTY0ODY1OTJlODdjNTI5Zjc1ZjM2OWNmNzkyODk3Jm9lPTYwRTA5MTE4Jyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5DNXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQllXRlJnVkZSWVpHQmdaR2hnWUdCb2FHQmdhR1JnWUdCZ2FHUmdZR1JnY0lTNGxIQjRySVJnWUpqZ21LeTh4TlRVMUdpUTdRRHMwUHk0ME5URUJEQXdNRUE4UUhoSVNIalFoSVNFME5ERTBNVFEwTkRRME5EUXhORFEwTkRRME5EUTBORFEwTkRReE5EUTBORFEwTkRRME5ERTBORFEwTkRRME5EUTBOUC9BQUJFSUFPRUE0UU1CSWdBQ0VRRURFUUgveEFBYkFBQUJCUUVCQUFBQUFBQUFBQUFBQUFBRUFBRUNBd1VHQi8vRUFEOFFBQUlCQWdRREJBZ0RCd1FCQlFBQUFBRUNBQU1SQkJJaE1RVkJVU0poY1pFR0V6S0JvYkhCMFJSQzhCVWpVbktTb3VFellvS3lGaVJUd3RMaS84UUFHUUVBQXdFQkFRQUFBQUFBQUFBQUFBQUFBQUVDQXdRRi84UUFJeEVBQWdJQ0FnTUJBQU1CQUFBQUFBQUFBQUVDRVJJeEF5RVRRWUZSTW1HUkJQL2FBQXdEQVFBQ0VRTVJBRDhBcEVrSXdqaWVtY1E4UU1lTURBQnhKQ1JCamlBNkpYaWpYandDaVFqM2taSVFFS09JZ0pJQ0FEV2pBU1lFY0NBRVlyU1ZvclFBamFLMGtSSTJnTkNNYTBlSW1BeGlJakl0VkEzTW9iRkRsY3lYSkwyQ2l3aTBRRXpxbkVBT2FqMzNQbEJYeGpIYk8zZ01vK05wTDVZb3Z4dG0yVEpxUk1uQTQ4RVdQTGNIZGZHYVFPbHhLak5TMFp5ZzBUWlkxcEhQSHZLRlFvbzJhS093Qlk0RUF3SEVWcUFhMmJhMzJod2tLU2FzZER4cE1VeVltVURuY3hQa2lpbENUR0JrZ1pBU1FFcE8xWkw2ZEV4SlNJRW1vakVJQ1NDeEFTWVdBRFdrZ3NrQkpiUUVSQ3g3Ujh3bFRWUU9nOS8waWNrT21Xa1JqS0RVSjJCUGdMZk9Kc08rNUFVZFdQM2t1UTFFazlRZGZLVTFNU0IvazJsZFZrWDI2dzhFRi84QXI5NHNYdzhMcUFENDZuNG1aeW16U01Vd2QrSWREZjhBbEJNb3FZbHorVS84aUFQS1dtaTNoNy9vTGZPSVlYdjhnUG52TVhOczJVVUNrdWZ6QWZ5cVQ4VHBJRkFkeVc4VytpM2gzNGNkTCtPdnprd2drV1ZRQ2xJOGhid0FIeFAya1hYa1dGK2hZL1Mxb2VSQXFtRUJXd052Y0lXRkFqb2I4d3c1OC9mL0FCRHZoZUV4eEJ5dG9mN1c3d1lTMkZCVWRSYjlYbWJXb2xkR0Z4NUQvd0RKK0VjWk5Qb1RqWnVKVXZxSllKZzBNVXlia2xSejVyM01PWTc1c1VjVUdBMitoOEoxUTVWTFpoS0RXaStLUnpSVFcwWjBjN2hPRnU5bWY5MnVoMDBjMjZkUGZPa1FXSGQxTzhoejZ4RUU3eno4bXpxVVVobnFrN1NDeVR4aTBMS29kUkppRHRpbEc1RitsOWZJU0J4WFFFKzZ3L3VuVEhsaWtrYzdnMnc1Ukh6RHJBM2NyN2JvbmN6M2Ira2F5aHVJMFIrZDMva1RLUE5yR1B5TjZRc0V0czFDOGRhNDVhK0F2TXpENDRPd1duUXpNZHN4WnlmY0xUVndHRXhsWm1WRnlGZmFHVUpsdnRjdHFESGsvYm9sdExYWk5VYzdJYmRTYkNRYXc5cW9pOXc3UitGNFYvNHZYYW5VcVZYSU5Na1pXSllrcUFkRHRiV2J1RDlES0ttbUhMTVNyTTR1QUxnTHBwcnUzV1M1eFczWWxrOUk1TnNSU0gvdVAvYVBpZnBMY005UjlLT0h2eTJaL2xZVHUrSDhLdzFsckpTQ2dvU0ZidGN4WnJHK3ZmM3diRDEycFVNS3FITG5jQTZBOWwySk8rMjhueUwwZ2FhMi93RERuNmZBTWM5Z2JVdzNlcTIwSi9KcnlsOUwwTFUxRldwWERNYmxnTldBQTN1VDFzTnVjNlNoWFpzZFVVazVVcGl3dWJBbktTYmRkWUx3UDhNY1FUUXpFaEh6TTE5U1dTMXIrRGNwRDVKRFVWZjJ1ekI0dDZONFVZWjZ0Qm5MSXlxU3gzT2RWSXRZZnhiaUM0MGFlK2J2RjZpVmNHajAxS0w2NU95TFdKOVpsSmJyMW1IamR2ZkZicnMxNDByNk0xcFdSTDJFcUlrRzVXd2pXam1NWWhqR1ZOdExHMk1yZGRJd0NGMmpQVEJHc2tJOFFHVmlNSVYxWGJwOXZ0dEFrWXFicjcxNUU5MzhKblFzc0R4R0VEYWpRL3J6alRFMEJmajIvaGVLUy9CTjNmM2ZlS1BKazBqYVRhOFl5eW12WmtXV1pqUURpR2EraEk4QUwvRWZTVmVvSjNCUDh4SkhsZjZRc3AyeExyUVJRRW1HUGNQRC9GcGVtRkZ4N3YxcEx3SktpTzBQRWZPVkVsbkpZNUMxVjIwQUx1ZFNCK1k4cEtoaGdkY3d0dHAvbTBWTkZjc3pIYlcyMit0NVpoblZSdXd1VGEzbHJ0MG5vY2NGN09DY24zUjNmb2ZTRkREWWpFS0xzR1dtcHNMZ2Rrc0I0NXg1Q2RaVXhSYW5TY0lhYlZhOU1NRDdWbFBQYmtueG5LZWluR3FDVUdwVm1La1ZSVUZnVG15NVNCNW9QT2FQL21sTWdscVJabFl0VDEwRndRTDk0Qk01WnhibTZSVVpKUjdmbzdDeXRtVS9uTFgvQU9ObE1xcVYvd0EvSVVuWWVCS2tmQlp3MVAwanhMNWZWcGRnSDFWR1luTVF6RzNkQTF4V01xMDJLbGlpTGtZclpRRkExVTIzMDNpWEUvYkcrZGVrZEo2UGNZT0lhc0hLcXhUS2cyVURXOWg3eEt1SjhRcEpVd3RMT0N0RWd1dzFGd0FCdDRmR2Mvd3IwZHExVTlZcktvTjhvWWtNd1VnTXdGdGdUTmFqNkoweVdEVnl4UmxWd3FtNFpteWdYSjZ5bkdDZS9oQ2Mya3ErajBmU1drbUpyMVNHWlhDcXRoeUFBTjc3YlFhdDZYcWh2UXc2TDJXWHh6V056bEEvaG1yUjlFcUN1TXhaa3lrSFcxM3poUnRzTjlKS3Z3N0RVWFdqNmpNYW1ZaGdNeFh0aFYxSjBVQTZtRGxEMHJHb3pydDBjYmdlTTFXRlBEM0hxODRhMlVYSkRaL2EzM21sakR0NzRmNlNNQmlLZE5XbzVRN0hJaWdNbVdtZmJJOFRwTTdHSGIzeVpPMWVqbzRZMTBCTkt6SnVaV1RNbWRBMGdZNU1hOFF5TGJTSjVlNk8rMFliaUNBSVdJeFJRc0JSUmpGR0lVVVVVQkJPWHNpUk12cWJDVXRJQkEvNXBaSURjeVJnTVViTmE1Nks1OGxKam1VNHRyVTZoNlUzK0l5L1dWSFlwYU9WRkppZENCY0Fhc05kQnl2ZVdvdXFpNDI3OWJzWU5RWlFRekU2SFlENmtpRTBHQkl5bzdFYldQUTNHZ0U3b3lqUnhTaXowRDBYNEhTcTRacWhRdlVaMlVaV3NhZkpXSzNGeGMzTytuTGVkRnhmZzFHbWpaS2FETWFDanNpNFByTE5xZGRSYS9XY2w2TzhmcjRlaXFKaGJzcGF6c3JMY09ReEIydnNOYjhoQ2w5SmNibHlrMDEzTjJLRTZrbm1UMTZUQ1NrNVg2SFVhcXV6dHpVSmQxQmUxMVVNRlVDbVFMMkY5V0I1bXhIS1ovQjhJRGgzVm5MQ28xWm1aY28vTmxJSFFzQVQ1emphL0ZNUzE4K0xBQkZyS1cyOEZVQ1p1UkFNcHJzUnZaVnNQaTMwaVVPdGc3dTZPNTREaXFLMEtmcmFsSXFwTEtEWVBUYlBjRGZiYzMwOTRsMkk5SmFTRmorSURrdWhBVkQyS1lhN0M5dTEyYjY3enowQ2lPVHQ0a0Q1TEpyVXBqMmFGLzVpNStzYmhHN2JCS1ZVZFhWOU1xS3FGQVkyckY5Z0FVOVlhaWdhNzZyNVFXcjZkWDFTaGQ3MnpGaWV4bnpaTW9HK3d2TUFZcGg3Rkttdi9CZm1RWW14VmMvbnkrR255aXFLS1VaZnBwZnRTcGlLNnMrSFdrRnpzV1ZDcFlzdHUyNTlxU3hqYWp3bUl5Vkc5cHlmMTN3cWxtdFlzVzhUcklrMTZONFJhTERJR1BJdEliTlNNWXg0eGlBZzIwUTNFWmpFdnREOWNvSmdFeFJScndBUmlqeUJqQWU4ZVFpZ0kwYWtvZVhWSlM1a1dDS1YzTWtZeTg0NWdoakdRYzZFWlF3SXNRd3VEcmZiM1NjWXgyS2dFTzZuc0pUVHdSQWZsSjU2NTNxRWVGd1BLRTJrZ0pXVEZpZ1Q4T3g5cDJNbXVESE1rKzh3cThZMVY2anpFcFNaTGlnZDhJdHhwTHhoMTZDUmF1dHgyaHBKZmlGNy9Jd3lZS0tKaEJKWlpTY1V2NnQ5VEluRmpwOHZwZUt4MFhGWTFwU2NWL3QvN2Y4QTFnVGNXRjdBZFFkOUxlTUI5R2lSRkJVcU13dmNEd0grWTV6ZnhINGZhVFpRUVRJa3daZ09iSCtxMHJZcHpZZjFSQUZNd2xiVjFINWg1aUNsNmZkSS9pVUhQNEdBQkxWbE94djRSNmI5b2UrWjlUaUtBMnVmS0lZbEgzTnVsOVBqR0J0QXlVeTByT3V4ekR2K2pEL01JWEhMK2E2bnYyODRBRW1NWStZR05HQTk0MFVVQkdoVWxMckxDWkZwamtVa0ErdEkydEltdWVxL3IzeU9Kd291VHRLVXBBYjZ5ZkpRWWxwci93QzhmQ1oyUHhWUU1Nak1SYld3Ry9sTkFJdlFTYWhlZ2k4djlDY1FHalVjKzBUOGZ2cENRaC8zZVErb2hLV2sxQWg1V1BFRXlXL2krQStrZDZkeFlaZ1R6dWRPK0hxa2t0T0hsWXNUbnFXQ3FYdXdKMTExdmNDSG9vRzZnZUkxOHBxQ2xKZW9qOHJCUW9HUkY3L0tPY3ZRd24xRXZ3ZUdUT1BXWnN2UExhL2R2SnpmNlhpWmpGZWg4NEhXd1ZNa3RrWUU3MmZUeXkvV2J1Tnd5QnYzZVlyYjh3QU4vY1QzUU5xUGRIR2JRWWdaZXk1VlVLQm9Pdm5CSFRyTkIwZzdxSldRbWdJMDVXYWZkQzJBbGJFUjVDb0dOTWRKRW9KZXhFclp4MWpzUlUrSEZyMmxacENINlpMOG9FYXE5UktzQ3RjeTdIOWVFdFhHblpoS3pXWHJJTlZYckN4QnRLcXY1R3lucHQ4RG9ZV21LWWUwTDk0MFBrWmhNeWRZNllvcnMwYVlIUWZqbDZIeWltSCswajNSUmdkbkZHdkhFNTJhSXFxaVplSnhBVmlMSFR3NmVNMW1uTTQ0M3FQNDI4dEpteWxHd3hNVGZaVDE1ZmVKOFRZWEtuNFFDOWphNUh2bHJYSTFOOVI4Wk5qZkRLck5GSGExN2ZHV3JtbEZGbUdsaGIzd3FuWEkzWHlNaklyd3lvcW9WM1ludU5vUlJxT2I3YWQwWEI2bE1hMUF4QlppY3RyNzhqWS9LZFB3Sk1HUStjc3BMbkxjN0wrWFVEZmVPN01wUmt0bzVxdmlYUlMxZ2JkeCs4Mk9FVUhxb1hKVVdZcmJLZVFITy9mTkxqZkNzTWFmWXJBRXNpaStvN1RBRW13dm9MbjNTL2dkQUtoQUlZZXNlekRaZ0d0Y2VVamtiakVjWDJEamhqZGZKZjhBTXFxNEJnVkYvYU52WjVkWjBhSks2dE83MHgvT2ZJRDd6QlRsK2xtQ3ZEem55WnZ5aHZaSFcwdkhDQnpadkpmdE5lblJCck4zSW8rTi9yRGZ3d2xaU0E0UDBuNGN0T2tIVm11WEMvbDJJSjVEdW5HVkMzVStjOUg5T3FOcUtEcS95VS9lY0E5T2RYQzNqMlMwQkcvVXlwaERHcHlzMDV0Wk5BYkNSdEN6U2plcWpURlFXdy9jZjhSTW5MTm1vdjd1M2NQcE0vSkxiRlFKbGk5WERja2NKRllxQXhSa3hoaEMvVi9yV1RWSlZnQ2ZoaDBpaC9xNG9XQnVVS2dZWGxvZ3FVOHJrZzZIbENCTW1XaDJNNSt2aFhERmlwQUxING5TYnJ3UGlER3dDdXgxdnJsMHRxTmhNcGJLVXNVWm40QjdtNm5udXA1d3lqZ2lvVjlBRFVBc1RxQ0FEcU43YWJ6VDRaaGNSVlFPdFd3TjlDTmRDUjA3b1hSd0ZZNG1sVHFWYzI3aXdYVHN0eUsyL0wwbVRmOEFaZm42cWdHbFJsN1VkSjNGUGdnTzczOGFkRS8vQUFrT0llajZDbTc1eU1xTzJpSU5sSjVDWTA3T2hmOEFYR3FhUEpUakhUc2dpMit3NWt5SzQ1eXc3WDJub2RQME5Sc09sUm1GL1ZoN1pBYmRuTmE5Ky9lQTRIME9WNmF2bVVFMzB5RTdFamZOM1RwVTQxMmpqY3JlekdxZzlrZDQrYzduMGNUL0FOT25mbVBtNW5OOFI0TTZNZ3pLMmJPZGlMWkZKTjlUT2o0VXRWYUtBWlBZQkZ3OTlSZlhYdm1FKzBhT1NiNk5nV0VpYmVzWHVWL2piN1ROclBXenFMMGdiTVJjdjNBL09UcDFxcHFhS2hzbXZiWUFkb2pmSnZNa2lTLzhVcVZLaGJxaTkycVgxSThQbDFsdjdRWmN6T3E1VkJKc0dCc3BJTmpxRHNlbmpNWitJTUhxZzBXWTVnU3lFc0VJV3cxeTkvZDlZRlJkdFZhblV5SE5tQUJ6RU1TU0wyNTVtM3Z1WjZYQkNPRHV2dS9oTTZ0YitHbDZiMlpLVnRRU3pEd3NQdk9JZWgzVHErUDhSRlVJb1JrQ1pyQmhiUTJBdDRXbUc0bUs2R3RHVWNJZVFsTDRWdWhtbGk2cUlGemc2M0FZQzRITFUzMDNnbGFzbGg3WE5BQ2hMRzI1R3Zmck5ZbFl0Z2pZYzlENVNKb0hvWk9yV3A3NTJzUm1GbE50aU5QRFhUN1N5aGxjTmxZMkhVRVdKRzk5QjN5MGlaUmFWa0hXNlc4SlI2azlEQzJ0bDFPVUFYdjNEV0RmaUVadXpVNzdkb2FBY3RKbzBTazJSOVYzUlpPNk90ZENkS291VDFQTW5RZCtvdDRTWHJRUWJWRjAxdm5Jc0xqUzMxNzRxSGl5QnB5YXJMWHNiRUVFVzN2ZS92NXhyUjBaa2NzVW5hS0ZBYVlrd0pXcGxnbWNpa1JxV0FKWTJYbWVZSFVUSEZVRm5zOTFHYXhhMjJvQkltdGlUMlQrdWN4VFdCdU9XbytJKzB5ZmJGSmRXZER3VEZPS1p5RUd4T1hzZ0RyMU12cDhSZGNRS2pCV1pFdFliRGNIWHFNeG1YaGlvUmUycUVBc0FUbERYTzJoRi84QU1WQnlIN0JwNjNCSlBaczI1QkoxT2t3VWFiSEpycWp2T0Vla2ZyTXh5aXl0WUVBaS9UY3k3MGg0eGxwT3RoZDBkZDlWMEF1UjA3VTUraFdDaW5TcHF1ZHFZY3NpaStiUGJVYyt0enlnZkZEVkxFTytlMWxCSUFBSnRldzc3QVNRV05kbmUxemx3cEcxcUlIOWdFbzRhZzlUVEJGK3pmenVmckg0MWRjTzR2c3FyL2NvdkhvSExUUWRFWDVDS1dpR1lYcEVBSFcybVdsV2J6WEtKdFlOTElnNklvOGxFNTdqMVROVWV4QnRSdHAxYW9vK3M2WkJZV2t5MGk0R1p4T2l6T3R1U25scHFSOXBYaFdJejZxRGJuY1hHaDY5ODNWRXhzVHc0MUs3a0JkRlJkZThYNkdKSTBUSytFRWlsWFpRTGx3QU54ZTlyZkdYNGZHdXJmdkNBdnV2ZVE0VFFQNGQxQUJPYzZjamxJKzBDL1pWVkh1Mlp4WTZXWWkrb0doOTAwZXdGNlQxY3pwYitFLzlqOXBndERjVUd6ZHNNRDBhNE52Zjc0SzRta2RBQll5aG5VS1dVQ3pBZ2drM094Qjl3K01HT0RLaENycm5UT08xZXh6azY5YjZ3NTFsTGliUlpXYlNvQnE4TFVwVFRPT3htekc5cjV0ZFBmTGNOaEF0TElXRnlwQklOOVdINjhwYTBySW1rV1JLVW1xS1NoTnNvdVZ1UUxnWE5pQUw4dDRMZ2VIRlZET0d6SVNWVE1DcE8rbHR2T0dNbmRHbXJKVW1sUm1ZZkR1b3MxTmpkdzJ0ckxZM0pGamUvd0FKUlh3cjZ1cU1NeGNNQ3ZVM0JBOENQZUp0SHhpREhxZk9Jcnl2OEdxb0JZQUFBQVNFc01ZaVVaRVlwS0tBQnF5MVpVaGxxekNXeWxveitObjkzYnFSOVQ5Sm5Wa0hZUWN5b05yYTNoUHBHNXlJQmYyaVRib0IvbVhjRXd5dW1aeGNqSVJxZENmQ1JMcFdTd3VyZ2xCZGt1dVFncUFUYStsK2VtOEJGSDFycXBzU1NOU1R2cjAxTzh1NG5VcUlMSWZhMU8rb3VMWnN4TnpwOEpsVitJUFRZNUdJNjJBdm9BUjRhM21hVGFFenFuNHMxRnNpV0pSQWdObUk3S2l3RnpwcVcyK3NhcnhwNnFxSFJReGRHdXEydlpqY0hVNjZpY0hScnVqak5tMzdTa25YcURlYU5iR09wWXFXV3hGZ1RxcHVTTEgzUitLZ3M5WjR2aW1hZ2M2NVNXVVcxNjM1Z2RJVFV4UlRLQnRsRTRyaC9IWHJZVUdvU3pKVXNXdGE0QzNHdHJYN1V5RjlOS3hlN3FoVyt3QkZoM0c4anh5WVdkUnhIRjU2N0MzdGVxVGtiZHNOMDdwMTRuQ1lPcXIxMUkxelZLUkg4b0JKK2s3dFpsTlZSY1N4WlJnZjlTb2U5UjVBaVhyQmNFMmxadWp2OEJKS0Y2TmY2Tityc2ZqTmtURzlINlkvRHBmZXpkUitZOUpwaWtPcmYxTWZtWS9ZamsvU2ovVzhGWDZtWVRDYlBwQi9ydnFUYkx2YitFVElZVGFPaWxvb2NTbGhMM2xMVFZBeWgxbFRDWG1WTnNackVsbFJPc1lpSk56SmtTM3NncklqV2t6R2pRRVlvOGFVS3hSUldpZ0t3cERMQVlLalM1WG1FdG1pQmVJYnIzWDVIdTZTdWhWZFJaSHk3WEFBT28yOXJXSHJpMVRza0E4NGppRWI4aStRbU1wTzZvYmRxZ0l1NTNlOXY5aS9hQmhNMTlSMm50YktwMEI2a1hHMDBxZ1U3TGIza2ZLQ05RSFNDWm5RTGkrSEFrRzdFczRCOTl5VDhJMzdQWHNwYzl0anFiYkxjRFNFUFNJSU45dFJ2RXFQbVVqWEp0S1VuK2hRMkZ3cnJUZFFkSE9WUnFOUzJRa2pseThvRy9CM1VYc0Q3UTBQOE43NytCbXFqdU1nS2syT1k5Ky8xTVQ0a2tCYmZtSlBneE4vZ3hoa3hVYWZvc2pDdFRVaXdCMTI5cFV1UmYzejBkWjUzNk5ZcFJXek1iQUYyOHdCNzUyYThZcDlUL1Naejh2OGpXSzZOWlptNGQvM0ZadXZyRC9iRU9NSi9DNThGL3pNNWNiYkRNdVZybFc3VnV6cWJiek5iS28zdUNpMUJCL3QrcGg5NWhZTGlKVkVVVTJObEF2cHJwdkNsNGc1MnBIK29mYUp5VmhSenZHbXZXZithM2tBUHBNNW9YajNMVkhKRmlXYTQzdHJ0QkhuUkhRTW9lVVBMMmxMVFZDS0dsVGJTMXBXKzAxaVF5cW51Wkl5TlBuSkdhUFlpSmtUSkdSalFoakdNbEdNWkkwVVY0b3dCbHJHU0ZZOVp6NmNSY2JpRlUrS0x6MC9YZkpjRUdUTlpqYzNNbWdnTlBGcWVjSVdwM3lIeGp5Q3lKSktjR1dwTGxyVE44YkhrRXBoNVlsRFhTVkppWVRUeEk2ek53a08wRXJoL1pQUVM3OE5mbEs2ZUtYckNscmp1bWNveUgwUXcvRGxKMVVIM0NGcHd3RDJTeS95c1JGaDhVQVlhbUtXWlN5TFZGQnc5VlIyYXJmOGdyU3B4V0ZMSlpDcDU2aHZhdjhBT2FEWWxiU0wxMXlnU1UydlEyWjlMaU9KUUFXdUJvTHF1M0xheGhDZWtiajI2WTkxMStkNFlIU1YxS2FHTzA5b1JqVnF1WmkzOFJKdDRtOHBKbGxWVmd6NmM1dEZnT3hsRlNSZXFSS0h4RTJpUzJUWVNwOXBFNGdTRDFRUk5vN0lZa084a1pCRzM4Wk84MGV3c2pGR01SZ0lZeG84aVl4Q2lqUlFBd0tQRUViUjFCOFJlRW5DVVg3djVUOURNeHNNWkVZWWpVTmFWWk5CL3dDeHVhUGJ1Tng4UktqZ0s2N0RNTzdYL01WTEdWVU9wRGVNMGFYSEd0Wms4aVBySDBIWm1uSE9oc3lrZU8va1lSVDRzT2YybFBFcXBxTUNGSUFGdFNQcEF2Vjl4a3NadlVzZXAvVjRVbUlYa1p6QzB4ejBsaW0yekg1L09La0IxSzFKWW1JSW5NSmluR3hCOHhDcVhFanpCOHIvQUNrdUtZV2RJbUtNS1RHdE9jcDhTSGRmOWNvVW1PVXlKY2EvQ2xJM3hpekpmaWoxblA4QTRvSFkvV00xWXlQQ2lzanEweGhqVk1UcE9WWEZNTmphV2pIUHpONVBoSGtIVmE1dktXcm1ER3JlUUx5MXhrNUZ6VlpXenlzbVJKbHFBV094akx2SU1ZeXRLVVNXeDNiV042eHVzaG1pdkt4RlpiK0lNUXhKZzcxQU9ZbFRWeDQvcnZsVUt3OFlrUnhYWHJNeHF4NUFTc3VldmxDZ3MyUFdqcjhZcGkzOGZNeDRZaFpXMFpJb29NWTFXU1NLS0lCTnVaRXhSUVlBemM1RmQ0b29nTEJKcEZGQkFRcmJRbkMrejd6RkZHQVZUK29talRqeFNXQ0dmbElEZUtLQXkyTVlvb3hER1JNVVVhQVl5c2J4UlJnUmd0ZUtLQ0FwcHlRaWlsRWtUSkxGRkFCUlJSUmdmLy9aJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuI3Nob3d0aW1lc2ltZ3tcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHdpZHRoOiAzMCU7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGVmdDogNTUlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoryComponent.ɵfac = function StoryComponent_Factory(t) { return new (t || StoryComponent)(); };
StoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryComponent, selectors: [["app-story"]], decls: 7, vars: 0, consts: [["id", "container"], ["width", "50%", "height", "20%", "src", "https://www.youtube.com/embed/CJZpEIenlQg", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "assets/3seats.png", 1, "img1"], ["src", "assets/3seats.png", 1, "img2"], ["src", "assets/3seats.png", 1, "img3"], ["id", "top"], ["id", "bottom"]], template: function StoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#container[_ngcontent-%COMP%]{\r\n display: flex;\r\n justify-content: center;\r\n \r\n margin: 0;\r\n flex-direction: column;\r\n}\r\n\r\n#top[_ngcontent-%COMP%]{\r\n    height: 65vh;\r\n    width: 100vw;\r\n    background: radial-gradient(circle, rgb(255,214,10) , rgb(15,15,15) );\r\n}\r\n\r\n#bottom[_ngcontent-%COMP%]{\r\n    height: 35vh;\r\n    width: 100vw;\r\n    background: radial-gradient(circle, rgb(255,214,10) , rgb(7,7,7) );\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin: auto;\r\n}\r\n\r\n.img1[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, rgba(255,255,255,.8));\r\n    transform: skewY(-20deg); \r\n    display: inline-block;\r\n    z-index: 1;\r\n}\r\n\r\n.img2[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, rgba(255,255,255,.8));\r\n    transform: skewY(-20deg); \r\n    margin-left: 20%;\r\n    display: inline-block;\r\n    z-index: 2;\r\n\r\n}\r\n\r\n.img3[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, rgba(255,255,255,.8));\r\n    transform: skewY(-20deg); \r\n    margin-left: -20%;\r\n    display: inline-block;\r\n    z-index: 0;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n    position: absolute;    \r\n    width: 40%;\r\n    height: 40%;\r\n    top: 35%;\r\n    margin-left: 55%;\r\n    transform: skewY(-20deg); \r\n    z-index: 3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLFNBQVM7Q0FDVCxzQkFBc0I7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsK0VBQStFO0lBQy9FLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtFQUErRTtJQUMvRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtFQUErRTtJQUMvRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS9zdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuI2NvbnRhaW5lcntcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiBtYXJnaW46IDA7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jdG9we1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDI1NSwyMTQsMTApICwgcmdiKDE1LDE1LDE1KSApO1xyXG59XHJcblxyXG4jYm90dG9te1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDI1NSwyMTQsMTApICwgcmdiKDcsNyw3KSApO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwuOCkpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMjBkZWcpOyBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pbWcye1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwuOCkpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMjBkZWcpOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxufVxyXG5cclxuLmltZzN7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDI1NSwyNTUsMjU1LC44KSk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG5pZnJhbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMjBkZWcpOyBcclxuICAgIHotaW5kZXg6IDM7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-story',
                templateUrl: './story.component.html',
                styleUrls: ['./story.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/zyris/zyris.component.ts":
/*!******************************************!*\
  !*** ./src/app/zyris/zyris.component.ts ***!
  \******************************************/
/*! exports provided: ZyrisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZyrisComponent", function() { return ZyrisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



//const gui = new dat.GUI()
class ZyrisComponent {
    constructor() {
        //lightX = 58; //-1600 or 1600
        this.click3 = 0;
    }
    ngOnInit() {
        var ele = document.getElementById('canvasgl');
        ele.addEventListener("click", clickDetection);
        function clickDetection(e) {
            let random = Math.random();
            if (random < .2) {
                pointLight.position.x = -1600;
                pointLight.color.set(getRandomColor());
            }
            else if (random >= .2 && random <= .6) {
                pointLight.position.x = 58;
            }
            else {
                pointLight.position.x = 1600;
            }
        }
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        //const gui = new dat.GUI()
        // Canvas
        const canvas = document.querySelector('canvas.webgl');
        // Scene
        const scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        const geometry = new three__WEBPACK_IMPORTED_MODULE_1__["TorusGeometry"](.7, .2, 16, 100);
        const material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]();
        material.color = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xff0000);
        const sphere = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
        scene.add(sphere);
        //const pointLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 0.1);
        this.pointLight_main = pointLight;
        pointLight.position.x = 92; //-1600
        pointLight.position.y = 35.97;
        pointLight.position.z = 48.89;
        pointLight.intensity = 1;
        scene.add(pointLight);
        // gui.add(pointLight.position, 'y').min(-300).max(300).step(0.01)
        // gui.add(pointLight.position, 'x').min(-1600).max(1600).step(0.01)
        // gui.add(pointLight.position, 'z').min(-300).max(300).step(0.01)
        // gui.add(pointLight, 'intensity').min(0).max(1).step(0.01)
        const lightColor = {
            color: 0xcccccc
        };
        // gui.addColor(lightColor, 'color')
        //     .onChange(() => {
        //         pointLight.color.set(lightColor.color)
        //     })
        var camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = 130.5293518410083;
        camera.position.y = 40.55023493489639;
        camera.position.z = 123.50386003251126;
        camera.rotation.set(-0.1796765527406611, 0.2501208004301373, 0.04492831959926583);
        scene.add(camera);
        this.camera = camera;
        // const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
        // scene.add(pointLightHelper)
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
            canvas: canvas
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        //const controls = new OrbitControls(camera, renderer.domElement)
        camera.rotation.set(-0.1796765527406611, 0.2501208004301373, 0.04492831959926583);
        const clock = new three__WEBPACK_IMPORTED_MODULE_1__["Clock"]();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            // Update objects
            sphere.rotation.y = .5 * elapsedTime;
            // if(pointLight.position.x < -300){
            // }
            // else if(pointLight.position.x > -300 && pointLight.position.x < 300){
            //   pointLight.position.x += 5
            // }
            // else if(pointLight.position.x > -300){
            // }
            //pointLight.position.x += 5
            // if(imageMesh){
            //     //imageMesh.rotation.y = .5 * elapsedTime
            //     imageMesh.rotation.y = camera.position.y 
            // }
            // Update Orbital Controls
            //controls.update()
            // Render
            renderer.render(scene, camera);
            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
        };
        tick();
        /* */
        let fontLoader = new three__WEBPACK_IMPORTED_MODULE_1__["FontLoader"]();
        fontLoader.load('assets/zcool.json', function (font) {
            let geometrySetting = {
                font: font,
                size: 40,
                height: 5,
                curveSegments: 20,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 0.5,
                bevelSegments: 20
            };
            let textGeoGame = new three__WEBPACK_IMPORTED_MODULE_1__["TextGeometry"]('Zyris', geometrySetting);
            let textGeoStop = new three__WEBPACK_IMPORTED_MODULE_1__["TextGeometry"]('Shakir', geometrySetting);
            let textMatGame = new three__WEBPACK_IMPORTED_MODULE_1__["MeshLambertMaterial"]({ color: 0xE4BB97 });
            let textMatStop = new three__WEBPACK_IMPORTED_MODULE_1__["MeshLambertMaterial"]({ color: 0x840032 });
            let textGame = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](textGeoGame, textMatGame);
            let textStop = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](textGeoStop, textMatStop);
            textGame.position.set(-100, 0, 20);
            textStop.position.set(30, 0, 20);
            scene.add(textGame);
            scene.add(textStop);
            window.addEventListener('keydown', function (event) {
                switch (event.keyCode) {
                    case 16: // Shift
                        console.log(camera);
                        console.log(pointLight);
                        camera.position.x += 2;
                        break;
                }
            });
        });
    }
}
ZyrisComponent.ɵfac = function ZyrisComponent_Factory(t) { return new (t || ZyrisComponent)(); };
ZyrisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZyrisComponent, selectors: [["app-zyris"]], decls: 2, vars: 0, consts: [["id", "container"], ["id", "canvasgl", 1, "webgl"]], template: function ZyrisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["canvas[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    outline: none;\r\n}\r\n\r\n\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    white-space: nowrap; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvenlyaXMvenlyaXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7QUFDakI7Ozs7QUFJQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC96eXJpcy96eXJpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZyrisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zyris',
                templateUrl: './zyris.component.html',
                styleUrls: ['./zyris.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Apache24\htdocs\ngResume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map