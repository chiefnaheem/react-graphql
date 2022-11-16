import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { CREATE_BUSINESS } from '../../mutations/businessMutations';
import { GET_BUSINESSES } from '../../queries/businessQueries';

export default function AddBusinessModal() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [owner, setOwner] = useState('');
  

  const [createBusiness] = useMutation(CREATE_BUSINESS, {
    variables: { name, type, address, owner },
    update(cache, { data: { createBusiness } }) {
      const { businesses } = cache.readQuery({ query: GET_BUSINESSES });

      cache.writeQuery({
        query: GET_BUSINESSES,
        data: { businesses: [...businesses, createBusiness] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || type === '' || owner === '', address === '') {
      return alert('Please fill in all fields');
    }

    createBusiness(name, type, address, owner);

    setName('');
    setType('');
    setAddress('');
    setOwner('');
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addBusinessModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Add Business</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addBusinessModal'
        aria-labelledby='addBusinessModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addBusinessModalLabel'>
                Add Business
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Type</label>
                  <input
                    type='text'
                    className='form-control'
                    id='type'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Address</label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    value={address}
                    onChange={(e) => setAdddress(e.target.value)}
                  />
                </div>

                <div className='mb-3'>
                  <label className='form-label'>Address</label>
                  <input
                    type='text'
                    className='form-control'
                    id='owner'
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}