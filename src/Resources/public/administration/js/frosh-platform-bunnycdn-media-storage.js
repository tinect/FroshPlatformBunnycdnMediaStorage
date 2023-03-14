!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=(window.__sw__.assetPath + '/bundles/froshplatformbunnycdnmediastorage/'),n(n.s="+c0L")}({"+c0L":function(t,e,n){"use strict";n.r(e);n("NmGX");var r=Shopware,o=r.Component,i=r.Mixin;o.register("bunnycdn-api-test-button",{template:'<div>\n    <sw-button-process\n        :isLoading="isLoading"\n        :processSuccess="isSaveSuccessful"\n        @process-finish="saveFinish"\n        @click="check"\n    >{{ btnLabel }}</sw-button-process>\n</div>\n',props:["btnLabel"],inject:["bunnycdnApiTest"],mixins:[i.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfigData:function(){for(var t=this.$parent,e=0;e<20;e++){if(t.actualConfigData)return t.actualConfigData.null;t=t.$parent}throw"Can not get pluginConfigData"}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},check:function(){var t=this;this.isLoading=!0,this.bunnycdnApiTest.check(this.pluginConfigData).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("bunnycdn-api-test-button.title"),message:t.$tc("bunnycdn-api-test-button.success")})):t.createNotificationError({title:t.$tc("bunnycdn-api-test-button.title"),message:t.$tc("bunnycdn-api-test-button.error")}),setTimeout((function(){t.isLoading=!1}),2500)}))}}});n("8Q/a");Shopware.Component.extend("bunnycdn-alert","sw-alert",{template:'\n{% block sw_alert %}\n    <div\n        class="sw-alert"\n        :class="alertClasses"\n        role="alert"\n    >\n        \n        {% block sw_alert_inner %}\n            \n            {% block sw_alert_icon %}\n                <slot name="customIcon">\n                    <sw-icon\n                        v-if="showIcon"\n                        size="20px"\n                        class="sw-alert__icon"\n                        :name="alertIcon"\n                        decorative\n                    />\n                </slot>\n            {% endblock %}\n\n            \n            {% block sw_alert_body %}\n                <div\n                    class="sw-alert__body"\n                    :class="alertBodyClasses"\n                >\n                    \n                    {% block sw_alert_title %}\n                        <div\n                            v-if="title"\n                            class="sw-alert__title"\n                        >\n                            {{ title }}\n                        </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_alert_message %}\n                        <div class="sw-alert__message">\n                            {{ message }}\n                        </div>\n                    {% endblock %}\n                </div>\n            {% endblock %}\n        {% endblock %}\n    </div>\n{% endblock %}\n',props:{message:{type:String,required:!1,default:""}}});var c=n("3nek"),a=n("NT0K");Shopware.Locale.extend("de-DE",c),Shopware.Locale.extend("en-GB",a)},"3nek":function(t){t.exports=JSON.parse('{"bunnycdn-api-test-button":{"title":"API Test","success":"Verbindung wurde erfolgreich getestet","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe die Konfiguration."}}')},"8Q/a":function(t,e){var n=Shopware,r=n.Component;n.Mixin;r.register("bunnycdn-config-restriction",{template:" ",created:function(){this.checkAndHideSetting()},updated:function(){this.checkAndHideSetting()},methods:{checkAndHideSetting:function(){var t=document.querySelectorAll('input[name^="FroshPlatformBunnycdnMediaStorage.config"],.sw-plugin-config__save-action');this.pluginConfigData().currentSalesChannelId?t.forEach((function(t){t.setAttribute("disabled","disabled")})):t.forEach((function(t){t.removeAttribute("disabled")}))},pluginConfigData:function(){for(var t=this.$parent,e=0;e<20;e++){if(t.actualConfigData)return t;t=t.$parent}throw"Can not get pluginConfigData"}}})},NT0K:function(t){t.exports=JSON.parse('{"bunnycdn-api-test-button":{"title":"API Test","success":"Connection was successfully tested","error":"Connection could not be established. Please check the config."}}')},NmGX:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,c=void 0,c=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===n(c)?c:String(c)),o)}var i,c}function i(t,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=Shopware.Classes.ApiService,l=Shopware.Application,f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,a,s=c(l);function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bunnycdn-api-test";return r(this,l),s.call(this,t,e,n)}return e=l,(n=[{key:"check",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/check"),t,{headers:e}).then((function(t){return u.handleResponse(t)}))}}])&&o(e.prototype,n),a&&o(e,a),Object.defineProperty(e,"prototype",{writable:!1}),l}(u);l.addServiceProvider("bunnycdnApiTest",(function(t){var e=l.getContainer("init");return new f(e.httpClient,t.loginService)}))}});