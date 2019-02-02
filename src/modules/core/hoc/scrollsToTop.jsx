import React from 'react';

// returns a component that animates scroll position
// to top of window when the route changes
function scrollsToTop(Component) {
  return class ScrollsToTop extends React.Component {
    componentDidUpdate(prevProps) {
      const { location: { pathname: lastPathname } } = prevProps;
      const { location: { pathname } } = this.props;

      if (pathname !== lastPathname) {
        window.scrollTo({
          behavior: 'smooth',
          top: 0,
          left: 0,
        });
      }
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
}

export default scrollsToTop;
