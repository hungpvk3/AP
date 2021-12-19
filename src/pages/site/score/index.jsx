import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Score from "../../../apis/score";
import ScoreItem from "../../site/score/components/ScoreItem";

const ScorePage = () => {
    const { idClass } = useParams();
    const [scoreData, setScoreData] = useState({
        isLoading: true,
        score: {},
    });
    console.log(scoreData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setScoreData((pre) => ({ ...pre, isLoading: true }));
                const response = await Score.getScoreClass(idClass);

                if (response) {
                    setScoreData({ isLoading: false, score: response[0] });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [idClass]);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max">
                    <p className="text-2xl text-white font-bold pt-2 pl-14">
                        Xem điểm
                    </p>
                </div>

                {scoreData.isLoading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <div className="mt-14">
                        <ScoreItem
                            score={scoreData.score?.point}
                            course={scoreData.score?.courseId?.name}
                            comment={scoreData?.score?.commnent}
                            dotTime={scoreData.score?.dotTime}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScorePage;
