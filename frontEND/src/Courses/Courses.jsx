import Course from "../component/Course";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="h-15">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
