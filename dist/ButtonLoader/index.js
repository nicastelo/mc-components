import React from 'react';
import PropTypes from 'prop-types';

var ButtonLoader = function ButtonLoader(_ref) {
  var color = _ref.color;
  return React.createElement(
    'div',
    { className: 'loader' },
    React.createElement(
      'svg',
      {
        width: '120',
        height: '30',
        viewBox: '0 0 120 30',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: color
      },
      React.createElement(
        'circle',
        { cx: '15', cy: '15', r: '15' },
        React.createElement('animate', {
          attributeName: 'r',
          from: '15',
          to: '15',
          begin: '0s',
          dur: '0.8s',
          values: '15;9;15',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'fill-opacity',
          from: '1',
          to: '1',
          begin: '0s',
          dur: '0.8s',
          values: '1;.5;1',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement(
        'circle',
        { cx: '60', cy: '15', r: '9', fillOpacity: '0.3' },
        React.createElement('animate', {
          attributeName: 'r',
          from: '9',
          to: '9',
          begin: '0s',
          dur: '0.8s',
          values: '9;15;9',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'fill-opacity',
          from: '0.5',
          to: '0.5',
          begin: '0s',
          dur: '0.8s',
          values: '.5;1;.5',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement(
        'circle',
        { cx: '105', cy: '15', r: '15' },
        React.createElement('animate', {
          attributeName: 'r',
          from: '15',
          to: '15',
          begin: '0s',
          dur: '0.8s',
          values: '15;9;15',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'fill-opacity',
          from: '1',
          to: '1',
          begin: '0s',
          dur: '0.8s',
          values: '1;.5;1',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        })
      )
    )
  );
};

ButtonLoader.propTypes = {
  color: PropTypes.string
};

ButtonLoader.defaultProps = {
  color: '#fff'
};

export default ButtonLoader;