const Header = ({ children, id, className }) => {
  return (
    // Header element with optional id and className
    <header
      id={id && id}
      className={`mb-20 md:h-auto flex justify-center xmd:mb-10 ${className}`}
    >
      {/* Render child components passed into the Header */}
      {children}
    </header>
  );
};

export default Header;

{/**className={`mx-[1rem] mb-20 md:h-auto flex justify-center xmd:mb-10 ${className}`} */}
