import React from "react";

const Constructions = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg shadow-all p-5">
      <h3 className="text-center md:text-2xl text-lg font-bold mb-4 text-indigo-500">
        CONSTRUCTION
      </h3>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              FOUNDATION
            </th>
            <td className="px-6 py-4">Poured Concrete</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              FRAMING
            </th>
            <td className="px-6 py-4">Fire Resistant</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              EXTERIOR
            </th>
            <td className="px-6 py-4">Brick</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PARKING SURFACE
            </th>
            <td className="px-6 py-4">Gravel and Concrete</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ROOF
            </th>
            <td className="px-6 py-4">Flat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Constructions;
