const combineClassName = (className1: string, className2: string | undefined) => {
  return `${className1} ${className2 || ''}`.trim();
};

export default combineClassName;
