// func comp with arrow func
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
  const menus = [
    {
      id: 1,
      url: '/',
      navigation: 'Home'
    },
    {
      id: 2,
      url: '/video',
      navigation: 'Video'
    },
    {
      id: 3,
      url: '/hoc-demo',
      navigation: 'Hoc Demo'
    },
    {
      id: 4,
      url: '/about-us',
      navigation: 'About'
    },
    {
      id: 5,
      url: '/contact-us',
      navigation: 'Contact Us'
    },
    {
      id: 6,
      url: '/gallery',
      navigation: 'Gallery'
    },
    {
      id: 7,
      url: '/hooks-demo',
      navigation: 'Hooks Demo'
    },
    {
      id: 8,
      url: '/shop',
      navigation: 'Shop'
    },
    {
      id: 9,
      url: '/unit-testing-demo',
      navigation: 'Unit Testing Demo'
    }
  ];

  return (
    <ul className='navbar-nav me-auto mb-2 mb-d-0'>
      {menus.map((menu) => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </ul>
  );
};

export default MenuList;

// const MenuList = () => {
//   //must return jsx
//   return (
//     <ul className="navbar-nav me-auto mb-2 mb-md-0" >
//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="/">
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/">
//           Videos
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/">
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/">
//           Contact Us
//         </a>
//       </li>
//     </ul >
//   );
// }

// export default MenuList;
