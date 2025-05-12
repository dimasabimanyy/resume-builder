// src/components/Form/CertificatesForm.jsx
import React from "react";
import { useResumeContext } from "../../context/ResumeContext";
import { FaTrash, FaPlus, FaExternalLinkAlt } from "react-icons/fa";

const CertificatesForm = () => {
  const { resumeData, addCertificate, updateCertificate, removeCertificate } =
    useResumeContext();
  const { certificates } = resumeData;

  const handleChange = (id, field, value) => {
    updateCertificate(id, field, value);
  };

  const handleAddCertificate = () => {
    addCertificate();
  };

  const handleRemoveCertificate = (id) => {
    if (window.confirm("Are you sure you want to remove this certificate?")) {
      removeCertificate(id);
    }
  };

  return (
    <div className="p-4 bg-white rounded-b-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">
          Certificates & Courses
        </h2>
        <p className="text-sm text-gray-500">Optional</p>
      </div>

      {certificates.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">
            No certificates or courses added yet
          </p>
          <button
            onClick={handleAddCertificate}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <FaPlus size={12} /> Add Certificate or Course
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-4 border border-gray-200 rounded-lg relative"
            >
              <button
                onClick={() => handleRemoveCertificate(cert.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate/Course Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={cert.name}
                    onChange={(e) =>
                      handleChange(cert.id, "name", e.target.value)
                    }
                    placeholder="e.g., AWS Certified Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={cert.issuer}
                    onChange={(e) =>
                      handleChange(cert.id, "issuer", e.target.value)
                    }
                    placeholder="e.g., Amazon Web Services"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={cert.date}
                    onChange={(e) =>
                      handleChange(cert.id, "date", e.target.value)
                    }
                    placeholder="e.g., May 2022"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-1">
                      Credential URL{" "}
                      <span className="text-gray-500">
                        <FaExternalLinkAlt size={12} />
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={cert.link}
                    onChange={(e) =>
                      handleChange(cert.id, "link", e.target.value)
                    }
                    placeholder="e.g., https://www.credential.net/..."
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={handleAddCertificate}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center gap-1"
          >
            <FaPlus size={12} /> Add Another Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificatesForm;
