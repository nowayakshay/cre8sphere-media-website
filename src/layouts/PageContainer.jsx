export default function PageContainer({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-[1240px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
