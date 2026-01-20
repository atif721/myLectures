import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SkeletonCard from "../components/SkeletonCard";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />

      {fetchStatus.currentlyFetching ? (
        <div className="container my-5">
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div className="col-md-4" key={index}>
                <SkeletonCard />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
}

export default App;
