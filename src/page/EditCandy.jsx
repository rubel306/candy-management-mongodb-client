import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditCandy = () => {
  const candy = useLoaderData();
  const { _id, name, country, category, photo } = candy;
  const updateCandy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updateCandy = { name, country, category, photo };
    fetch(`http://localhost:5000/update-candy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCandy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated",
            text: "You Updated this Candy, successfully. ",
          });
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
    console.log("Update candy", updateCandy);
  };
  return (
    <div className="w-2/3 mx-auto mb-10">
      <button className="btn btn-outline btn-warning my-6">
        <Link to="/">All Candy</Link>
      </button>
      <div className="text-center p-14 bg-slate-400 rounded-md">
        <div className="mb-14">
          <h2 className="text-3xl font-semibold">
            Update Candy: {candy.name}{" "}
          </h2>
          <p>Use the below form to create a new product</p>
        </div>
        <form onSubmit={updateCandy}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input
              defaultValue={name}
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
              defaultValue={country}
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
              defaultValue={category}
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
              defaultValue={photo}
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <input
            className="w-full btn btn-warning mt-4"
            type="submit"
            value="Update Candy"
          />
        </form>
      </div>
    </div>
  );
};

export default EditCandy;
