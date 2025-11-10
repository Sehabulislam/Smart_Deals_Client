import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import ProductsBids from "./ProductsBids";

const ProductDetails = () => {
  const singleProduct = useLoaderData();
  const { user } = useContext(AuthContext);
  const bidModalRef = useRef(null);
  const { title, price_max, _id: productId } = singleProduct;
  const handleBidModal = () => {
    bidModalRef.current.showModal();
  };
  const [bids, setBids] = useState([]);
  const handleBidProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = user?.photoURL;
    const bidsPrice = Number(form.price.value);
    const number = form.number.value;
    console.log(productId,name, email, photo, bidsPrice, number);
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: photo,
      bid_price: bidsPrice,
      buyer_contact: number,
      status: "pending",
    };
    // send data to server
    fetch("http://localhost:5000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your bid has been placed successfully");
          bidModalRef.current.close();
          //add the new bid to the state
          newBid._id = data.insertedId;
          const newBids = [...bids,newBid];
          newBids.sort((a,b)=> b.bid_price -a.bid_price)
          setBids(newBids)
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for this product", data);
        setBids(data);
      });
  }, [productId]);
  return (
    <div>
      {/* product details page */}
      <div class="max-w-4xl mx-auto shadow-md py-8 rounded-2xl">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  alt="Product Image"
                />
              </div>
              <div class="px-2">
                <button
                  onClick={handleBidModal}
                  class="w-full bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white py-2 px-4 rounded-full font-bold cursor-pointer"
                >
                  I want Buy This Product
                </button>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-4xl font-bold mb-2">{title}</h2>
              <p class="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold">Price:</span>
                  <span class="">{price_max} Tk</span>
                </div>
                <div>
                  <span class="font-bold">Availability:</span>
                  <span class="">In Stock</span>
                </div>
              </div>
              <div class="mb-4">
                <span class="font-bold">Select Color:</span>
                <div class="flex items-center mt-2">
                  <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div class="mb-4">
                <span class="font-bold">Select Size:</span>
                <div class="flex items-center mt-2">
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span class="font-bold">Product Description:</span>
                <p class=" text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal section */}
      <div>
        <dialog
          ref={bidModalRef}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg"></h3>
            <section class="w-full max-w-md">
              <div class="rounded-none bg-white p-8">
                {/*  Header */}
                <div class="mb-8 text-center">
                  <h1 class="mb-2 text-2xl font-bold text-black">
                    Give Seller Your Offered Price
                  </h1>
                </div>

                {/*  Form*/}
                <form onSubmit={handleBidProduct} class="space-y-6">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="mb-2 block text-sm font-medium text-gray-700">
                        Buyer Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
                        defaultValue={user?.displayName}
                        required
                      />
                    </div>
                    <div>
                      <label class="mb-2 block text-sm font-medium text-gray-700">
                        Buyer Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
                        defaultValue={user?.email}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700">
                      Buyer Image URL
                    </label>
                    <input
                      type="url"
                      name="photo"
                      class="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
                      defaultValue={user?.photoURL}
                      required
                    />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700">
                      Place your Bid Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      class="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
                      placeholder="e.g. Artisan Roasters"
                      required
                    />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700">
                      Contact Info
                    </label>
                    <input
                      type="text"
                      name="number"
                      class="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
                      defaultValue={"01759163295"}
                      required
                    />
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-outline btn-ghost">
                        Close
                      </button>
                    </form>
                    <button
                      type="submit"
                      className="btn bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white"
                    >
                      Submit Bid
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </dialog>
      </div>
      {/* someBids collection */}
      <div className="max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-bold">
          {" "}
          Bids For This Products: <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{bids.length}</span>
        </h2>
        <div className="my-5">
          <ProductsBids bids={bids}></ProductsBids>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
