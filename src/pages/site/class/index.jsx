import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClassItem from "./components/ClassItem";
import CourseDetail from "../course/components/MajorDetail";
import Class from "../../../apis/class";
import { useStore } from "../../../context";

const ClassPage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState();
    const [classData, setClassData] = useState({
        isLoading: true,
        classCourse: [],
        classUser: {},
    });
    const {
        courseState: { courseMajor },
    } = useStore();
    console.log(classData);
    useEffect(() => {
        setCourse(courseMajor.find((course) => course.name === id));
    }, [id, courseMajor]);

    useEffect(() => {
        const fetchData = async () => {
            if (course?._id) {
                try {
                    const [classCourse, classUsers] = await Promise.all([
                        Class.getClassCourse(course._id),
                        Class.getClassUser(),
                    ]);
                    console.log(classUsers);
                    if (classCourse) {
                        setClassData({
                            isLoading: false,
                            classCourse,
                            classUser: classUsers[0],
                        });
                    }
                } catch (error) {
                    console.log("looix khoa hocj");
                    // <Redirect to="/notfound" />;
                }
            }
        };

        fetchData();
        // if (classesCourse[0]?.courseId !== course?._id) {
        // } else {
        //   setLoad(false);
        // }
    }, [course?._id]);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max pr-10">
                    <p className="text-2xl text-white pt-2 pl-14">
                        {course?.name}
                    </p>
                </div>

                {classData.isLoading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <div>
                        <div className="mt-14">
                            <div>
                                <CourseDetail
                                    description={course?.description}
                                    image={course?.image}
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-2xl font-bold my-8">
                                Danh sách lớp học
                            </p>

                            <div className="grid gap-10 grid-cols-3">
                                <div className="col-span-2">
                                    {classData?.classCourse?.length > 0
                                        ? classData.classCourse.map(
                                              (classeCourse) => (
                                                  <ClassItem
                                                      key={classeCourse._id}
                                                      id={classeCourse._id}
                                                      name={classeCourse.name}
                                                      teacher={
                                                          classeCourse.teacherId
                                                              ?.fullName
                                                      }
                                                      iconLock={
                                                          classeCourse?.classCode ===
                                                          classData?.classUser
                                                              ?.classCode
                                                              ? {
                                                                    acess: true,
                                                                    path: (
                                                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                                                    ),
                                                                }
                                                              : {
                                                                    acess: false,
                                                                    path: (
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    ),
                                                                }
                                                      }
                                                  />
                                              )
                                          )
                                        : "Tạm thời chưa có lớp học nào..."}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClassPage;
