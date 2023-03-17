import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-container mx-auto py-10">
      <h3 className="text-center md:text-5xl text-2xl font-bold text-indigo-500">
        News & Media
      </h3>
      <div className="grid md:grid-cols-3 mt-10 gap-4">
        <div className="card w-full bg-base-100 shadow-all">
          <img className="h-auto max-w-full" src="images/im1.jpg" />

          <div className="card-body">
            <h2 className="card-title">Post Title 1</h2>
            <div className="">12/06/2022</div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-blue-500 border-0">Read more</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-all">
          <img className="h-auto max-w-full" src="images/im1.jpg" />

          <div className="card-body">
            <h2 className="card-title">Post Title 1</h2>
            <div className="">12/06/2022</div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-blue-500 border-0">Read more</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-all">
          <img className="h-auto max-w-full" src="images/im1.jpg" />

          <div className="card-body">
            <h2 className="card-title">Post Title 1</h2>
            <div className="">12/06/2022</div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-blue-500 border-0">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
