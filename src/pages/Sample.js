import React from 'react';

// Define a higher-order component
const withLogger = (WrappedComponent) => {
  // Return a new component with added functionality
  return class extends React.Component {
    componentDidMount() {
      console.log('Component mounted:', WrappedComponent.name);
    }

    render() {
      // Render the wrapped component with its original props
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Create a component
const MyComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
};

// Enhance the component with the higher-order component
const EnhancedComponent = withLogger(MyComponent);

export default EnhancedComponent;
