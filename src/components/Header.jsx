const Header = ({ children, id, className }) => {
  return (
    // Header element with optional id and className
    <header
      id={id && id}
      className={`mx-[1rem] mb-20 mt-[8px] md:h-auto h-[90vh] flex justify-center xmd:mb-10 ${className}`}
    >
      {/* Render child components passed into the Header */}
      {children}
    </header>
  );
};

export default Header;
