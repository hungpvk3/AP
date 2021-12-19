import React, { memo } from "react";

const Footer = () => {
  return (
    <div className="backdrop-filter backdrop-blur-sm grid grid-cols-3 gap-10 h-max mt-10 shadow-2xl px-44 text-lg text-gray-600 border-t border-white">
      <div className="my-8 ml-2">
        <h2 className="text-2xl font-bold">Hà nội</h2>
        <p>Tầng 2, Tòa nhà Detech II, 107 Nguyễn Phong Sắc, Cầu Giấy, Hà Nội</p>
        <p>
          Điện thoại: <span>0981 090 513</span>
        </p>
        <p>Email: btec.hn@fpt.edu.vn</p>
        <p>
          Hotline: <span>0981 090 513</span>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Đà Nẵng</h2>
        <p>
          66B Võ Văn Tần, Quận Thanh Khê, TP.Đà Nẵng (Tòa nhà Savico Building)
        </p>
        <p>
          Điện thoại: <span>0236 730 9268</span>
        </p>
        <p>Email: btec.dn@fpt.edu.vn</p>
        <p>
          Hotline: <span>0905 888 535</span>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">TP. Hồ Chí Minh</h2>
        <p>275 Nguyễn Văn Đậu - Quận Bình Thạnh - TP.Hồ Chí Minh</p>
        <p>
          Điện thoại: <span>028 7300 9268</span>
        </p>
        <p>Email: btec.hcm@fpt.edu.vn</p>
        <p>
          Hotline: <span>0942 25 68 25</span>
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
