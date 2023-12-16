import "./category-bar.css";
function CategoryBar() {
  return (
    <div className="category-bar">
      <div className="category-link active-category">All Vehicles</div>
      <div className="category-link ">2-wheeler</div>
      <div className="category-link ">4-wheeler</div>
      <div className="category-link ">6-wheeler</div>
    </div>
  );
}

export default CategoryBar;
