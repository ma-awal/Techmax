import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PageProjects from './pages/Page/PageProjects/PageProjects';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import PagePrice from './pages/Page/PagePrice/PagePrice';
import PageFaq from './pages/Page/PageFaq/PageFaq';
import PageComming from './pages/Page/PageComming/PageComming';
import Blog from './pages/Blog/Blog';

import Contact from './pages/Contact/Contact';
import PageTerm from './pages/Page/PageTerm/PageTerm';
import PagePolicy from './pages/Page/PagePolicy/PagePolicy';
import UseLoading from './components/UseLoading/UseLoading';
import Loader from './components/Loader/Loader';
import Error from './pages/Error/Error';
const App = () => {
  const isLoading = UseLoading();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/projects" element={<PageProjects />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
        <Route path="/pricing" element={<PagePrice />} />
        <Route path="/faq" element={<PageFaq />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/term" element={<PageTerm />} />
        <Route path="/Privecy" element={<PagePolicy />} />
      </Route>
      <Route path="/comming" element={<PageComming />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
