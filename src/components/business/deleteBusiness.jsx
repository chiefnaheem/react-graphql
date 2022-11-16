import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_BUSINESS } from '../../mutations/businessMutations';
import { GET_BUSINESSES } from '../../queries/businessQueries';
import { useMutation } from '@apollo/client';

export default function DeleteBusinessButton({ businessId }) {
  const navigate = useNavigate();

  const [deleteBusiness] = useMutation(DELETE_BUSINESS, {
    variables: { id: businessId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_BUSINESSES }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteBusiness}>
        <FaTrash className='icon' /> Delete Business
      </button>
    </div>

  );
}