import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Jeans"
          title="Jeans"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Shoes"
          title="Shoes"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Frok"
          title="Frok"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tooder"
          title="Tooder"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
