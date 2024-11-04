import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import CustomerCare from '../../pages/AboutUsPage/CustomerCare/CustomerCare';
import PageNotFound from '../../pages/shared/PageNotFound/PageNotFound';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';
import Mission from '../../pages/AboutUsPage/Mission/Mission';

// the following components are lazy loaded
const ContactUsPage = React.lazy(() => import('../../pages/ContactUsPage/ContactUsPage'));
const HocDemoPage = React.lazy(() => import('../../pages/HocDemoPage/HocDemoPage'));
const VideoPage = React.lazy(() => import('../../pages/VideoPage/VideoPage'));
const UnitTestingDemoPage = React.lazy(() =>
  import('../../pages/UnitTestingDemoPage/UnitTestingDemoPage')
);
const HooksDemoPage = React.lazy(() => import('../../pages/HooksDemoPage/HooksDemoPage'));
const ShopPage = React.lazy(() => import('../../pages/ShopPage/ShopPage'));

// this is a func not a comp
const AppRoutes = () => {
  return (
    <Suspense fallback={<div className='spinner-border text-primary'></div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/hoc-demo' element={<HocDemoPage />} />
        <Route path='/about-us' element={<AboutUsPage />}>
          <Route path='mission' element={<Mission />} />
          <Route path='customer-care' element={<CustomerCare />} />
        </Route>
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/hooks-demo' element={<HooksDemoPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/unit-testing-demo' element={<UnitTestingDemoPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
