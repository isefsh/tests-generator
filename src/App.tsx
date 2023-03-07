import React, {useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { TestProvider } from "./context/TestContext";

const onRouteChange = () => {
  window.scrollTo(0, 0);
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    onRouteChange();
  }, [location]);

  return null;
};


function App () {
  return (
    <TestProvider>
      <Header />
      <ScrollToTop />
      <Outlet />
    </TestProvider>
  )
}

export default App;