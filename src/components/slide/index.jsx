import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import bandler from "../../assets/img/bl1.png";
import bandler1 from "../../assets/img/banler3.png";
import bandler2 from "../../assets/img/l.png";

const MethodsExample = () => {
  const slideRef = useRef();

  const properties = {
    autoplay: false,
    arrows: false,
    indicators: (i) => (
      <div
        className={`indicator ${
          i === slideRef.current ? "active" : ""
        } dot-item w-9 h-2 bg-gray-200 rounded-full cursor-pointer`}
      ></div>
    ),
  };

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  return (
    <div className="relative h-64">
      <div>
        <Slide
          ref={slideRef}
          {...properties}
          autoplay={true}
          cssClass="rounded-xl shadow-lg border boder-t-white"
        >
          <div className="flex justify-between h-64 slide-item">
            <div className="w-2/5 text-white p-10">
              <p className="text-3xl font-bold">Học sinh nổi bật trong tháng</p>
              <p className="py-5 text-lg font-semibold">
                Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu
                rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.
              </p>

              <button className="transition-all duration-200 ease text-white text-lg font-bold px-4 pt-0.5 pb-1 border-2 boder-white rounded-full hover:bg-white hover:text-red-400 focus:outline-none">
                Xem chi tiết
              </button>
            </div>
            <div className="h-full">
              <img src={bandler} alt="" className="h-full" />
            </div>
          </div>

          <div className="flex justify-between h-64 slide-item">
            <div className="w-2/5 text-white p-10">
              <p className="text-3xl font-bold">Học sinh nổi bật trong tháng</p>
              <p className="py-5 text-lg font-semibold">
                Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu
                rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.
              </p>

              <button className="transition-all duration-200 ease text-white text-lg font-bold px-4 pt-0.5 pb-1 border-2 boder-white rounded-full hover:bg-white hover:text-red-400 focus:outline-none">
                Xem chi tiết
              </button>
            </div>
            <div className="h-full">
              <img src={bandler1} alt="" className="h-full" />
            </div>
          </div>

          <div className="flex justify-between h-64 slide-item">
            <div className="w-2/5 text-white p-10">
              <p className="text-3xl font-bold">Học sinh nổi bật trong tháng</p>
              <p className="py-5 text-lg font-semibold">
                Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu
                rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.
              </p>

              <button className="transition-all duration-200 ease text-white text-lg font-bold px-4 pt-0.5 pb-1 border-2 boder-white rounded-full hover:bg-white hover:text-red-400 focus:outline-none">
                Xem chi tiết
              </button>
            </div>
            <div className="h-full">
              <img src={bandler2} alt="" className="h-full" />
            </div>
          </div>
        </Slide>
      </div>

      <div
        onClick={back}
        className="absolute z-10 top-1/2 left-0 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer transform -translate-x-4 -translate-y-1/2"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          className="svg-inline--fa fa-chevron-left w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          ></path>
        </svg>
      </div>
      <div
        onClick={next}
        className="absolute z-10 top-1/2 right-0 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer transform translate-x-4 -translate-y-1/2"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          className="svg-inline--fa fa-chevron-right w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MethodsExample;
