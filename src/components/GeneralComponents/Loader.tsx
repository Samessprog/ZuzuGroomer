import React from "react";

const Loader: React.FC = () => {
  return (
    <div role="status" aria-live="polite" aria-label="Loading, please wait">
      Loading
    </div>
  );
};

export default Loader;
