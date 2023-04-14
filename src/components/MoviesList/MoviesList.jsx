export const MoviesList = ({ data }) => {
  return (
    { data } && (
      <ul>
        {data.map(elem => (
          <li key={elem.id}>
            {elem.title} ({elem.id})
          </li>
        ))}
      </ul>
    )
  );
};
