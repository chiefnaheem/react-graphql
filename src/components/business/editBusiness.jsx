import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_BUSINESS } from "../../queries/businessQueries";
import { UPDATE_BUSINESS } from "../../mutations/businessMutations";

export default function EditBusinessForm({ business }) {
  const [name, setName] = useState(business.name);
  const [type, setType] = useState(business.type);
  const [address, setAddress] = useState(business.address);

  const [updateBusiness] = useMutation(UPDATE_BUSINESS, {
    variables: { id: business.id, name, type, address },
    refetchQueries: [{ query: GET_BUSINESS, variables: { id: business.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !address) {
      return alert("Please fill out all fields");
    }

    updateBusiness(name, type, address);
  };

  return (
    <div className="mt-5">
      <h3>Update Business Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <textarea
            className="form-control"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}