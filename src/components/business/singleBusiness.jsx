import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "../spinner";
import { GET_BUSINESS } from "../queries/businessQueries";

export default function SingleBusinessComponent() {
  const { loading, error, data } = useQuery(GET_BUSINESS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Address</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
