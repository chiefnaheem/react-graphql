import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import DeleteBusinessButton from '../components/deleteBusiness';
import EditBusinessForm from '../components/editBusiness';
import { useQuery } from '@apollo/client';
import { GET_BUSINESS } from '../queries/businessQueries';

export default function BusinessPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BUSINESS, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h1>{data.business.name}</h1>
          <p>{data.business.type}</p>
         
          <p >{data.business.address}</p>



          <EditBusinessForm business={data.business} />

          <DeleteBusinessButton businessId={data.business.id} />
        </div>
      )}
    </>
  );
}
Footer
