import React from "react";

const Infomation = ({ data }) => {
  return (
    <div>
      <div className="text-center">
        <img
          src={`https://ap-sever.herokuapp.com/avatars/${data.avatar}`}
          alt="Avatar"
          className="w-40 mx-auto min-h-40 rounded-full"
        />

        <p className="text-2xl font-bold my-3">{data.fullName}</p>
        <p>Quản lí thông tin tài khoản và thông tin học</p>
      </div>
    </div>
  );
};

export default Infomation;
