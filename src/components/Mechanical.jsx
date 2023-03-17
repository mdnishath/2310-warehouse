import React from "react";

const Mechanical = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg shadow-all p-5">
      <h3 className="text-center md:text-2xl text-lg font-bold mb-4 text-indigo-500">
        MECHANICAL
      </h3>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              HVAC
            </th>
            <td class="px-6 py-4">Engineered Geothermal</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              FIRE SPRINKLERS
            </th>
            <td class="px-6 py-4">Fire Fire Suppression and Smoke Detectors</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ELECTRICAL / POWER
            </th>
            <td class="px-6 py-4">Phase 4</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              LIGHTING
            </th>
            <td class="px-6 py-4">YES</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mechanical;
