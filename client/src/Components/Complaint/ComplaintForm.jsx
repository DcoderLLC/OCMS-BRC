import { useState } from "react";
import { Box } from "@mui/system";
import ClientJS from "clientjs";

const ComplaintForm = () => {
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Generate fingerprint
  const client = new ClientJS();
  const visitorId = client.getFingerprint();

  // Capture form data
  const location = event.target.location.value;
  const description = event.target.description.value;
  const complaintTypes = Array.from(
    event.target.querySelectorAll('input[type="checkbox"]:checked')
  ).map((input) => input.id);

  // Create FormData object
  const formData = new FormData();
  formData.append("location", location);
  formData.append("description", description);
  formData.append("complaintTypes", complaintTypes);
  formData.append("fingerprint", visitorId);
  if (image) {
    formData.append("image", image);
  }

  // Log the form data and fingerprint (for testing purposes)
  console.log("Location:", location);
  console.log("Description:", description);
  console.log("Complaint Types:", complaintTypes);
  console.log("Fingerprint:", visitorId);
  console.log("Image:", image);

  // Send the form data and fingerprint to the backend (example)
  // await fetch('/api/submit-complaint', {
  //   method: 'POST',
  //   body: formData,
  // });
};


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Box>
      <section className="max-w-4xl p-6 mx-auto rounded-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Complaint Form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Location
              </label>
              <input
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Description
              </label>
              <textarea
                id="description"
                className="block w-full px-4 py-2 mt-2 text-black border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Types of Complaints
              </label>
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-2">
                  <input
                    id="electricity"
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Electricity</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    id="construction"
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Construction</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    id="dumping"
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Dumping</span>
                </label>
              </div>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Upload Image
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="block w-full px-4 py-2 mt-2 text-black border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </Box>
  );
};

export default ComplaintForm;
