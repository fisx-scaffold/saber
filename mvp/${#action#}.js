/**
 * @file ${#action#} Action
 * @author ${#author#}
 */

define(function (require) {

    /**
     * ${#action#} Action 定义
     *
     * @type {Object}
     */
    var config = {};

    /**
     * @property {Object} view 视图
     */
    config.view = require('./${#action#}View');

    /**
     * @property {Object} model 模型
     */
    config.model = require('./${#action#}Model');

    // /**
    //  * @property {Object} events Action 监听的事件定义
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
    //      * ${#action#} model xx 事件处理
    //      */
    //     'model:xx': function () {
    //         // TODO
    //     },
    //
    //     /**
    //      * ${#action#} view xx 事件处理
    //      */
    //     'view:xx': function () {
    //         // TODO
    //     }
    // };

    return config;
});
