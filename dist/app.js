'use strict';

require('../css/app.scss');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

require('waypoints');

require('scrollTo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EXAMPLE JS STARTS
 */
(0, _jquery2.default)(function () {
    (0, _jquery2.default)('[id^=scrollTo]').click(function () {
        var id = (0, _jquery2.default)(this).attr('id').slice(9);
        (0, _jquery2.default)(window).scrollTo((0, _jquery2.default)('#' + id), 1000, { offset: { top: -51, left: 0 } });
    });

    (0, _jquery2.default)('#marketing').waypoint(function () {
        (0, _jquery2.default)('.img-circle').addClass('animated zoomIn');
    }, {
        offset: '50%',
        triggerOnce: true
    });

    (0, _jquery2.default)('.featurette').waypoint(function () {
        (0, _jquery2.default)('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
    }, {
        offset: '50%',
        triggerOnce: true
    });
});
/**
 * EXAMPLE JS ENDS
 */