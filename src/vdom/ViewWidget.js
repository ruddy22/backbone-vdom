/**
 * Create a virtual-dom widget
 * @param {Backbone.View} ViewClass
 * @param {object} [props]
 * @param {string|number} [key]
 * @constructor
 */
function ViewWidget(ViewClass, props, key) {
    this.ViewClass = ViewClass;
    this.props = props;

    // used by virtual-node to identify widgets
    this.name = 'View';
    this.id = key;
}

ViewWidget.prototype = {
    type: 'Widget',

    /**
     * called when the widget node is being set up
     * @returns {Node}
     */
    init: function () {
        var Constructor = this.ViewClass;
        this.view = new Constructor(this.props);
        return this.view.render().el;
    },

    /**
     * called when the widget node already exists
     * @param {ViewWidget} prev
     * @param {Node} element
     */
    update: function (prev, element) {
        this.view = prev.view;
        this.view.el = element;
    },

    /**
     * called when the widget node is being removed
     * @param {Node} element
     */
    destroy: function (element) {
        this.view && this.view.remove();
    }
};

module.exports = ViewWidget;
