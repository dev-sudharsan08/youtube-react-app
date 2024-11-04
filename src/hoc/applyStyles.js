// a higher-order comp (HOC) is a func
// that takes a comp and returns a new comp

const applyStyles = (OriginalComponent) => {
  // creating a new comp
  const NewComponent = (props) => {
    console.log(props);
    return (
      <div className='hoc-demo-box'>
        <OriginalComponent {...props} />
      </div>
    );
  };
  // return a new comp
  return NewComponent;
};

export default applyStyles;
