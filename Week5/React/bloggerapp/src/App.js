import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px"
      }}
    >
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;