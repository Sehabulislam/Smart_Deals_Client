import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
// import useAxios from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddProduct = () => {
    // const axiosInstance = useAxios();
    const axiosSecure = useAxiosSecure();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const price_min = form.minPrice.value;
    const price_max = form.maxPrice.value;
    const image = form.productImage.value;
    const seller_name = form.sellerName.value;
    const email = form.sellerEmail.value;
    const seller_contact = form.sellerContact.value;
    const seller_image = form.sellerImage.value;
    const location = form.location.value;
    const description = form.description.value;

    console.log(
      title,
      category,
      price_min,
      price_max,
      image,
      seller_contact,
      seller_name,
      email,
      seller_image,
      location,
      description
    );
    const newProduct = {title,price_min,price_max,email,category,image,location,seller_image,seller_name,description,seller_contact}
    
    // axios.post('http://localhost:5000/products',newProduct)
    // .then(data=>{
    //     console.log(data.data);
    //     if(data.data.insertedId){
    //         toast.success('Product Created Successfully');
    //     }
    // })
    // axiosInstance.post('/products',newProduct)
    // .then(data=>{
    //     console.log(data.data);
    //     if(data.data.insertedId){
    //         toast.success('Product Created Successfully');
    //     }
    // })
    axiosSecure.post('/products',newProduct)
    .then(data=>{
        console.log('after secure call',data.data);
        if(data.data.insertedId){
            toast.success('Product Created Successfully');
        }
    })

  };
  return (
    <div class="bg-gray-50">
      <div class="grid lg:grid-cols-3 justify-center items-center gap-y-12">
        <div class="lg:col-span-2 p-8 w-full max-w-2xl mx-auto">
          <div>
            <h2 class="text-3xl text-slate-900 font-bold">
              Create a <span>Product</span>
            </h2>
          </div>
          <form onSubmit={handleCreateProduct} class="mt-8">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Email
                </label>
                <select name="category" className="select">
                  <option disabled={true}>Select a Category </option>
                  <option>Furniture</option>
                  <option>Electronics</option>
                  <option>Vehicles</option>
                  <option>Home Appliance</option>
                  <option>Gaming</option>
                </select>
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Min Price You want to Sale ($)
                </label>
                <input
                  type="text"
                  name="minPrice"
                  placeholder="Enter Price"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Max Price You want to Sale ($)
                </label>
                <input
                  type="text"
                  name="maxPrice"
                  placeholder="Optional (default = Min Price)"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div className="col-span-full">
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Your Product Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  name="productImage"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Seller Name
                </label>
                <input
                  type="text"
                  name="sellerName"
                  placeholder="e.g. Artisan Roasters"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Seller Email
                </label>
                <input
                  type="text"
                  name="sellerEmail"
                  placeholder="leli31955@nrlord.com"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Seller Contact
                </label>
                <input
                  type="text"
                  name="sellerContact"
                  placeholder="e.g. +1-555-1234"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div>
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Seller Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  name="sellerImage"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div className="col-span-full">
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, Country"
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                />
              </div>
              <div class="col-span-full">
                <label class="text-sm text-slate-900 font-medium mb-2 block">
                  Simple Description about your Product
                </label>
                <textarea
                  placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
                  rows="6"
                  name="description"
                  class="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 tracking-wide text-sm px-4 py-3 w-full border-0 outline-0 rounded-md cursor-pointer mt-6"
            >
              Create a Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
