import React from "react";

const Card = ({ name, img, slug }) => {
    return (
        <div>
            <div className="rounded-2xl">
                <div className="relative w-auto rounded-2xl card">
                    <div className="h-44 w-72 overflow-hidden rounded-2xl">
                        <img
                            src={`https://ap-sever.herokuapp.com/images/${img}`}
                            alt=""
                            className="he w-full h-full object-cover"
                        />
                    </div>

                    <div className="">
                        <h6 className="py-4 text-xl font-semibold truncate w-72">
                            {name}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
