import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../context";
import Card from "../../../components/card";

const CategoryPage = () => {
    const {
        majorState: { isLoading, majors },
    } = useStore();
    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max">
                    <p className="text-2xl font-bold text-white pt-2 pl-14">
                        Chuyên nghành
                    </p>
                </div>
                {isLoading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <div className="mt-16">
                        <div>
                            <div className="grid xl:grid-cols-4 lg:grid-cols-2">
                                {majors?.map((major) => (
                                    <div key={major._id} className="mx-auto">
                                        <Link to={"categories/" + major.slug}>
                                            <Card
                                                name={major.name}
                                                img={major.image}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
