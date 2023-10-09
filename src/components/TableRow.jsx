import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ candy, setCandies, candies }) => {
  const { _id, name, country, category, photo } = candy;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/candy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = candies.filter((candy) => candy._id !== id);
              setCandies(remaining);
            }
            console.log(data);
          })
          .catch((error) => console.log(error));
        console.log(id);
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="mask mask-squircle w-12 h-12">
          <img src={photo} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>{name}</td>
      <td>{country}</td>
      <td>{category}</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          <Link to={`/update-candy/${_id}`}>Edit</Link>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          X
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
