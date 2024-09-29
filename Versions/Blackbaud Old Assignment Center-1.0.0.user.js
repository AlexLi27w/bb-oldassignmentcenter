// ==UserScript==
// @name         Blackbaud Old Assignment Center
// @namespace    https://github.com/AlexLi27w/bb-oldassignmentcenter
// @version      1.0.0
// @description  Automatically redirects to the old Blackbaud Assignment Center.
// @author       AL
// @match        */lms-assignment/assignment-center/student*
// @license      MIT
// @icon         https://avatars.githubusercontent.com/u/1738029?s=280&v=4
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

'use strict';

window.location.href = "/app/student#studentmyday/assignment-center";

})();