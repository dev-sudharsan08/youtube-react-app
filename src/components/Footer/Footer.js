import MenuList from '../MenuList/MenuList';

// func with anonymous func
const Footer = function () {
  const copyrightYear = new Date().getFullYear();
  const developerName = 'Lakshmi Narasimman';

  // must return jsx
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <div>
        Copyright &copy; {copyrightYear} | {developerName}
      </div>
    </footer>
  );
}

export default Footer;
