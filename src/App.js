import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// importing css
import './App.scss';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useEffect, useReducer } from 'react';
import cartReducer from './reducers/cartReducer';

// component
function App() {
  const userStatus = {
    isLoggedIn: true,
    lastLogin: '11/Mar/2023'
  };

  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState);
  // console.log(cartDispatch);

  useEffect(() => {
    cart.cartDispatch({
      type: 'FETCH_CART'
    });
  }, []);

  const cart = {
    cartState, // needed for Header comp
    cartDispatch // needed for ShopPage comp
  };

  // must return jsx
  return (
    // here comes JSX
    // ideal place to build the layout
    <ErrorBoundary>
      <CartContext.Provider value={cart}>
        <BrowserRouter>
          <Header />

          <main className='mt-5 pt-3'>
            <h1>Success!</h1>
            {/* configure thru routes  */}
            <ErrorBoundary>
              {/* step 2 of Context API  */}
              <PageContext.Provider value={userStatus}>
                <AppRoutes />
              </PageContext.Provider>
            </ErrorBoundary>
          </main>

          <Footer></Footer>
        </BrowserRouter>
      </CartContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
library.add(fas, far);
