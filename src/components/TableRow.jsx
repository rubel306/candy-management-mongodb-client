const TableRow = ({ candy }) => {
  const { _id, name, country, category, photo } = candy;
  const handleDelete = (id) => {
    console.log(id);
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
        <button className="btn btn-ghost btn-xs">Edit</button>
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
