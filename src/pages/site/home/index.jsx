import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/card";
import SlideShow from "../../../components/slide";
import Majors from "../../../apis/majors";

const HomePage = () => {
    const [majorData, setMajorData] = useState({
        isLoading: true,
        majors: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setMajorData((pre) => ({ ...pre, isLoading: true }));
                const response = await Majors.getMajors();

                if (response) {
                    setMajorData({
                        isLoading: false,
                        majors: response.majors,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-4">
            <div>
                <SlideShow />
            </div>

            <div className="page__home bg-white relative">
                <div className="text-gradient mx-10 mt-12 w-max">
                    <p className="text-2xl text-white font-bold pt-2 pl-14">
                        Danh mục khoá học
                    </p>
                </div>
                <div className="grid xl:grid-cols-4 mt-16 mx-10 lg:grid-cols-2">
                    {majorData.isLoading ? (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        majorData.majors.map((major) => (
                            <div key={major._id} className="mx-auto">
                                <Link to={"categories/" + major.slug}>
                                    <Card name={major.name} img={major.image} />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
