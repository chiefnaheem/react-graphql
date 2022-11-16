
export default function BusinessCard({ business }) {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{business.name}</h5>

            <a className='btn btn-light' href={`/business/${business.id}`}>
              View
            </a>
          </div>
          <p className='small'>
            Type: <strong>{business.type}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}