import React from "react";

const ProductsBids = ({ bids }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <h1>SL NO</h1>
              </th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Bid Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          {bids.map((bid,index) => (
            // console.log(bid)
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring-2 ring-offset-2">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{bid.buyer_name}</div>
                      <div className="text-sm opacity-50">Bangladesh</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{bid.buyer_email}</div>
                      <div className="text-sm opacity-50">{bid.status}</div>
                    </div>
                  </div>
                </td>
                <td>{bid.bid_price} TK</td>
                <th>
                  <div className="flex items-center gap-1">
                    <button className="btn btn-outline btn-success">
                      Accept Offer
                    </button>
                    <button className="btn btn-outline btn-error">
                      Reject offer
                    </button>
                  </div>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProductsBids;
