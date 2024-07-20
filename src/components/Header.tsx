import Logo from './Logo';

function Header() {
  return (
    <header
      className="flex items-center justify-start shadow-custom p-spacing-regular-20"
    >
      <Logo />
    </header>
  );
}

export default Header;
