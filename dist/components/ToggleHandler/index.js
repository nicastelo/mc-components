'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _helpers = require('../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckOverlay = function (_PureComponent) {
  _inherits(CheckOverlay, _PureComponent);

  function CheckOverlay(props) {
    _classCallCheck(this, CheckOverlay);

    var _this = _possibleConstructorReturn(this, (CheckOverlay.__proto__ || Object.getPrototypeOf(CheckOverlay)).call(this, props));

    _this.handleClick = function () {
      var onChange = _this.props.onChange;
      var toggled = _this.state.toggled;


      _this.setState(function (_ref) {
        var toggled = _ref.toggled;
        return { toggled: !toggled };
      }, function () {
        return onChange(!toggled);
      });
    };

    _this.state = {
      toggled: props.toggled
    };
    return _this;
  }

  _createClass(CheckOverlay, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var toggled = this.state.toggled;


      return (0, _helpers.renderChildren)(children, { toggled: toggled, onClick: this.handleClick });
    }
  }]);

  return CheckOverlay;
}(_react.PureComponent);

CheckOverlay.propTypes = {
  onChange: _propTypes2.default.func,
  toggled: _propTypes2.default.bool,
  children: _propTypes2.default.func.isRequired
};
CheckOverlay.defaultProps = {
  onChange: _lodash.noop,
  toggled: false
};
exports.default = CheckOverlay;