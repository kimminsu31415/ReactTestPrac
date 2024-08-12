import React from 'react';

const PageB = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center">
      <div className="bg-slate-100 w-full max-w-[400px]">
        <div className="bg-slate-400 px-4 py-8">
          <div className="bg-blue-500 mb-4 flex justify-center">header</div>
          <div className="bg-yellow-100 grid grid-cols-2 gap-4">
            <div className="bg-red-400 h-36 rounded-3xl relative">
              <div className="absolute left-6 top-6">box</div>
              <div className="absolute right-6 bottom-6">box</div>
            </div>
            <div className="bg-red-400 h-36">box</div>
            <div className="bg-red-400 h-36">box</div>
            <div className="bg-red-400 w-full h-36 col-span-2">box</div>
          </div>
          <div className="flex justify-center mt-20 my-8 bg-blue-500">
            footer
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageB;
