import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // eye icons from lucide

const PrivateKeyToggle = ({privateKey}:{privateKey:string}) => {
  const [visible, setVisible] = useState(false);


  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto mt-10 border">
      <h2 className="text-lg font-semibold mb-2">Private Key</h2>

      <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
        <p className="break-words text-gray-800 text-sm flex-1">
          {visible
            ? privateKey
            : "•••• •••• •••• •••• •••• •••• •••• •••• •••• •••• •••• ••••"}
        </p>
        <button
          onClick={() => setVisible(!visible)}
          className="ml-4 text-gray-600 hover:text-gray-900 transition"
          aria-label="Toggle seed visibility"
        >
          {visible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PrivateKeyToggle;
