import React from 'react';
import { useEffect, useMemo, useState } from "react"

const Popout = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Add New Item</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 text-sm text-gray-600 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(title, description)}
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popout;