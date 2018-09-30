export default WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";
