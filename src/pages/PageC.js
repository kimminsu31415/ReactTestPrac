import React from 'react';

const PageC = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center overflow-hidden relative">
      <div className="w-[1000px] h-[1000px] bg-amber-500 rounded-full absolute top-[28%] left-1/2 transform -translate-x-1/2"></div>{' '}
      <div className="bg-slate-400 max-w-[400px] w-full z-10">
        <div className="bg-slate-200 py-8 px-8 overflow-x-hidden">
          <div className="bg-purple-200 my-8 flex flex-col gap-2">
            <div className="font-bold text-3xl">
              어느 계절에 <br />
              주로 가나요?
            </div>
            <div className="font-light">
              선택한 계절에 어울리는 <br />
              오름을 추천해줘요
            </div>
          </div>

          <div className="bg-purple-200 grid grid-cols-2 gap-4">
            <div className="bg-purple-400 h-20 flex justify-center items-center flex-col gap-y-2">
              <div className="bg-yellow-100">이미지</div>
              <div className="">봄</div>
            </div>
            <div className="bg-purple-400 h-20">봄</div>
            <div className="bg-purple-400 h-20">봄</div>
            <div className="bg-purple-400 h-20">봄</div>
          </div>

          <div className="z-10 bg-yellow-200 mt-11 h-16 flex items-center justify-center">
            버튼
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageC;
