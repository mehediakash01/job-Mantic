
export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl w-11/12 mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
