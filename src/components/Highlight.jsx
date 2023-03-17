import React from "react";
const Highlight = () => {
  return (
    <div className="bg-gray-100 py-10 relative">
      <div className="max-w-container mx-auto">
        <div className="grid md:grid-cols-2 py-10 gap-4 items-center">
          <div className="shadow-all p-10 bg-white rounded-lg ">
            <h3 className="md:text-3xl text-2xl font-bold text-indigo-500 py-6">
              Building Highlights
            </h3>
            <ul className="list-disc flex flex-col gap-2 pl-5 text-base">
              <li>61,000+ Sq offered at $2.75-$3.85 per Sq Ft (Annual)</li>
              <li>
                61,000 Sq Ft available immediately (additional 61,000 Sq Ft
                available upon request)
              </li>
              <li>
                Attractive warehouse leasing opportunity in growing Portland
                Neighborhood
              </li>
              <li>
                The facility is located on Main Street and 23rd Street in
                Louisville, KY
              </li>
              <li>
                WIDE surrounding access roads and streets. Easily accessible by
                any size commercial vehicle or truck
              </li>
              <li>Each quadrant has own Dock High Doors</li>
              <li>
                CCTV Security Camera System monitors entire facility with Secure
                Gates around parking and loading docks
              </li>
              <li>Each Quadrant has own Office Space and Bathroom</li>
              <li>
                Geothermal Properties of clay keep building cool and utility
                bills low
              </li>
              <li>
                Variable High Ceilings up to 16-25ft throughout and Modification
                Friendly
              </li>
              <li>
                Hub-Zone Certifiable for any Small Business (preferential
                treatment for government contracts)
              </li>
              <li>Expansive local workforce within walking distance</li>
              <li>Location Eligible for Hiring Grants</li>
              <li>Intermodal Proximity for Shipping</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <figure>
              <img src="images/h1.png" alt="h1" />
            </figure>
            <figure>
              <img src="images/h2.png" alt="h2" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
