import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider, useNavigation } from 'react-router';
import './App.css'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundryC from './components/errorBoundryC/ErrorBoundry';
import { ScrollRestoration } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';
import useThemeMode from './hooks/useThemeHook';
import Landing2 from './pages/landing/Landing2';
import PageFooter from './pages/pageFooter/PageFooter';
import About from './pages/about/About';
import NotFound from './pages/NotFound';
import Tours1 from './pages/tours/Tours1';
import Tours2 from './pages/tours/tours2';
import Tours3 from './pages/tours/Tours3';
import DestinationPage from './pages/destination/DestinationPage';
import Gallery from './pages/gallery/Gallery';
import TourDetails from './pages/pages/TourDetails';
import TourSearch from './pages/pages/TourSearch';
import Postsingle from './pages/pages/Postsingle';
import CommingSoon from './pages/pages/CommingSoon';
import Blog1 from './pages/blog/Blog1';
import Blog2 from './pages/blog/Blog2';
import ContactPage from './pages/contact/ContactPage';

const awaitTimeOut = (delay:number)=> new Promise<void>((resolve, reject) => {
  setTimeout(resolve,delay)
})
export const loader = async ()=>{
  await awaitTimeOut(5)
  return 1
}

const RouteWrapper = ()=>{

  
   const  {state}=useNavigation()
   if(state === 'loading') return <div className='flex justify-center items-center w-screen h-screen text-white' >
    <div className='w-32 h-32'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a4" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#2095AE"></stop><stop offset=".3" stop-color="#2095AE" stop-opacity=".9"></stop><stop offset=".6" stop-color="#2095AE" stop-opacity=".6"></stop><stop offset=".8" stop-color="#2095AE" stop-opacity=".3"></stop><stop offset="1" stop-color="#2095AE" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a4)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#2095AE" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
    </div>
   </div>
  return(
      <Outlet/>
  )
}
const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <ScrollRestoration />
      {isNavigating && <div className="fixed z-50 bg-amber-950 left-0 top-0 w-full h-full">WAITING</div>}
      <Navbar />
      <Outlet />
      <PageFooter />
    </>
  );
};
const MinimalLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);


function App() {
  const {toggleMode}=useThemeMode()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteWrapper/>}>
        {/* Main layout: Home, About, etc */}
        <Route
          element={
            <ErrorBoundary FallbackComponent={ErrorBoundryC}>
              <MainLayout />
            </ErrorBoundary>
          }
        >
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Landing />} loader={loader} />
          <Route path="/home2" element={<Landing2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours1" element={<Tours1 />} />
          <Route path="/tours2" element={<Tours2 />} />
          <Route path="/tours3" element={<Tours3 />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/blog' element={<Outlet/>} >
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          </Route>
          <Route path="/pages" element={<Outlet />} >
            <Route path="details" element={<TourDetails />} />
            <Route path="search" element={<TourSearch />} />
            <Route path="postsingle" element={<Postsingle />} />
            <Route path="others" element={<Outlet />} >
              <Route path="comming_soon" element={<CommingSoon />} />
              <Route path="notfound" element={<NotFound />} />
            </Route>
          </Route>
        </Route>

        {/* Auth-protected routes */}
       {/*  <Route
          element={
            <ProtectedLayout>
              <MainLayout />
            </ProtectedLayout>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route> */}

        {/* Minimal layout: No navbar/footer */}
        <Route
          element={
            <ErrorBoundary FallbackComponent={ErrorBoundryC}>
              <MinimalLayout />
            </ErrorBoundary>
          }
        >
       {/*    <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      )
  );
  return (
    <>
     <RouterProvider router={router}/>   
    </>
  )
}

export default App
