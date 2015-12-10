/**
 * @file ${#action#} View
 * @author ${#author#}
 */

define(function (require) {

    /**
     * ${#action#} View 定义
     *
     * @type {Object}
     */
    var config = {};

    /**
     * @property {Array.<string>|string} template 视图用到模板定义
     */
    config.template = require('./${#action#}.tpl');

    /**
     * @property {string} className 视图容器样式名定义
     */
    config.className = '';

    /**
     * @property {string} templateMainTarget 要渲染的主模板名称定义
     */
    config.templateMainTarget = '';

    // /**
    //  * @property {Object} events View 监听的事件定义
    //  */
    // config.events = {
    //
    //     /**
    //      * @event ready 视图ready(dom ready)事件
    //      */
    //     ready: function () {
    //         // TODO
    //     },
    //
    //     /**
    //      * @event dispose 销毁视图触发事件处理
    //      */
    //     dispose: function () {
    //         // TODO
    //     }
    //
    // };

    // /**
    //  * @property {Object} domEvents View 监听的dom事件定义
    //  */
    // config.domEvents = {
    //     // 'click:.test': onTestClickHandler
    // };

    return config;

});
