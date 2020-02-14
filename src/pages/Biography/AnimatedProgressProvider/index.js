import React from "react";
import { Animate } from "react-move";
import PropTypes from 'prop-types';

class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { children, valueStart, duration, easingFunction, valueEnd } = this.props;
    return typeof children === 'function' ? (<Animate
      start={() => ({
        value: valueStart
      })}
      update={() => ({
        value: [
          this.state.isAnimated ? valueEnd : valueStart
        ],
        timing: {
          duration: duration * 1000,
          ease: easingFunction
        }
      })}
    >{({ value }) => children(value)}
    </Animate>) : ''
  }
}

export default AnimatedProgressProvider;
