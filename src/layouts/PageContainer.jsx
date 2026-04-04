function PageContainer({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;

