import React from 'react';
import { Navigate } from '../../Navigate';

const ChatBox = () => {
  return (
    <div className="p-1 bg-white min-h-screen">
        <Navigate title={"Chat"}></Navigate>
      {/* Header */}
     <div className='p-3'>
     <div className="flex items-center gap-4 mb-6">
        <img
          src="https://i.pravatar.cc/50"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold text-lg">Nika Jerrardo</h2>
          <p className="text-sm text-red-400">last online 5 hours ago</p>
        </div>
        <div className="ml-auto text-orange-500 text-xl">
          <i className="fas fa-phone" />
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-6">
        {/* Message 1 */}
        <div className="flex gap-3">
          <img
            src="https://i.pravatar.cc/50"
            className="w-10 h-10 rounded-full"
            alt="sender"
          />
          <div className="bg-[#AB684D] text-white p-4 rounded-lg shadow-md max-w-md">
            Hello! Finally found the time to write to you:) I need your help in
            creating interactive animations for my mobile application.
          </div>
        </div>

        {/* Message 2 */}
        <div className="flex gap-3">
          <img
            src="https://i.pravatar.cc/50"
            className="w-10 h-10 rounded-full"
            alt="sender"
          />
          <div className="bg-[#AB684D] text-white p-2 rounded-md shadow max-w-xs">
            Can I send you files?
          </div>
        </div>

        {/* Reply */}
        <div className="flex justify-end">
          <div className="bg-gray-100 p-3 rounded-lg shadow max-w-sm">
            Hey! Okay, send out.
          </div>
        </div>

        {/* File Message */}
        <div className="flex gap-3">
          <img
            src="https://i.pravatar.cc/50"
            className="w-10 h-10 rounded-full"
            alt="sender"
          />
          <div className="bg-[#AB684D] text-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <i className="fas fa-file-archive text-xl" />
            <div>
              <div>Style.zip</div>
              <div className="text-xs">41.36 Mb</div>
            </div>
          </div>
        </div>

        {/* Response with File */}
        <div className="flex justify-end">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md">
            <p className="mb-1">
              Hello! I tweaked everything you asked. I am sending the finished
              file.
            </p>
            <a
              href="#"
              className="text-orange-500 text-sm underline font-semibold"
            >
              (52.05 Mb) NEW_Style.zip
            </a>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="mt-8 flex items-center border-t pt-4">
        <input
          type="text"
          placeholder="Type a message here"
          className="flex-1 p-3 border rounded-xl shadow-sm focus:outline-none"
        />
        <button className="ml-3 bg-[#AB684D] text-white p-3 rounded-full shadow-md hover:bg-orange-600">
          <i className="fas fa-paper-plane" />
        </button>
      </div>
     </div>
    </div>
  );
};

export default ChatBox;
