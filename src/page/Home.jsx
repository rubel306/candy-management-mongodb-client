import { Link, useLoaderData } from "react-router-dom";
import TableRow from "../components/TableRow";
import { useState } from "react";
const Home = () => {
  const loaCandies = useLoaderData();
  const [candies, setCandies] = useState(loaCandies);
  return (
    <div>
      <button className="btn btn-outline btn-warning my-6">
        <Link to="/add-new">+ New Candy</Link>
      </button>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead
            style={{
              background:
                "radial-gradient(182.1% 173.43% at 50% 49.99%, rgba(220, 141, 72, 0.30) 0%, rgba(211, 135, 69, 0.30) 4.19%, rgba(145, 87, 43, 0.30) 36.95%, rgba(94, 49, 22, 0.30) 66.01%, rgba(63, 26, 10, 0.30) 87.87%, rgba(51, 17, 5, 0.30) 100%)",
            }}
          >
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candies.map((candy) => (
              <TableRow
                key={candy._id}
                setCandies={setCandies}
                candies={candies}
                candy={candy}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
