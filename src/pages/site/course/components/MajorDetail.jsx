import React from "react";

const MajorDetail = ({ description, image }) => {
    return (
        <div>
            <div className="flex justify-between gap-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-2 xl:w-full lg:w-96">
                    <p className="text-lg text-gray-700 font-semibold xl:h-auto lg:h-80 text-ellipsis lg:overflow-scroll">
                        {description}
                    </p>
                </div>

                <div className="hidden h-52 w-96 bg-gray-500 overflow-hidden cursor-pointer rounded-xl lg:block">
                    <img
                        src={`https://ap-sever.herokuapp.com/images/${image}`}
                        alt=""
                        className="he w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default MajorDetail;
