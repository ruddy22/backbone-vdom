/**
 * Create a virtual-dom widget
 * @param {Node} element
 * @param {object} props
 * @param {string|number} [key]
 * @constructor
 */
function ElementWidget(element, props, key) {
    this.element = element;
    this.props = props || {};

    // used by virtual-node to identify widgets
    this.name = 'Element';
    this.id = key;
}

ElementWidget.prototype = {
    type: 'Widget',

    /**
     * called when the widget node is being set up
     * @returns {Node}
     */
    init: function () {
        this.update(null, this.element);
        return this.element;
    },

    /**
     * called when the widget node already exists
     * @param {ViewWidget} prev
     * @param {Node} element
     */
    update: function (prev, element) {
        for(var prop in this.props) {
            this.element[prop] = this.props[prop];
        }
    },

    /**
     * called when the widget node is being removed
     * @param {Node} element
     */
    destroy: function (element) {
        this.element = null;
    }
};

module.exports = ElementWidget;
