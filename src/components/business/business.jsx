import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from '../spinner';
import { GET_BUSINESSES } from '../queries/businessQueries';

export default function BusinessComponent() {
  const { loading, error, data } = useQuery(GET_BUSINESSES);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
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