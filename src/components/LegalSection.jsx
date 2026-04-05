function LegalSection({ id, title, children }) {
  return (
    <section
      id={id}
      className="border-t border-[#E5E7EB] pt-10 pb-8 first:border-0 first:pt-0 scroll-mt-28"
    >
      <h2 className="text-[18px] font-semibold leading-snug tracking-tight text-black sm:text-[20px]">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-[#333333] sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default LegalSection;
