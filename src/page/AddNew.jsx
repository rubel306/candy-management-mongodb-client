import { Link } from "react-router-dom";
const AddNew = () => {
  const handleAddCandy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const addCandy = { name, country, category, photo };

    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCandy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
    console.log(addCandy);
  };

  return (
    <div className="w-2/3 mx-auto mb-10">
      <button className="btn btn-outline btn-warning my-6">
        <Link to="/">All Candy</Link>
      </button>
      <div className="text-center p-14 bg-slate-400 rounded-md">
        <div className="mb-14">
          <h2 className="text-3xl font-semibold">New Candy</h2>
          <p>Use the below form to create a new product</p>
        </div>
        <form onSubmit={handleAddCandy}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Candy Name"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Country/Factory
              </span>
            </label>
            <input
              type="text"
              name="country"
              placeholder="Candy Country/Factory"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Candy Category"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <input
            className="w-full btn btn-warning mt-4"
            type="submit"
            value="Add Candy"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNew;
