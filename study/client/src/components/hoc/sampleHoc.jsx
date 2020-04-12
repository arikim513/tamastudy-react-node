import React from 'react';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};

// import React from 'react'

// const App = () => {
//     return (
//         <div>1234</div>
//     )
// }

// export default sampleHoc(App)
