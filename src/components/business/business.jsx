import Spinner from '.,/spinner';
import { useQuery } from '@apollo/client';
import BusinessCard from './businessCard';
import { GET_BUSINESSES } from '../../queries/businessQueries';

export default function Business() {
  const { loading, error, data } = useQuery(GET_BUSINESSES);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.business.length > 0 ? (
        <div className='row mt-4'>
          {data.business.map((item) => (
            <BusinessCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>No Business</p>
      )}
    </>
  );
}