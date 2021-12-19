import React, { useCallback, useEffect, useState } from "react";

import Class from "../../../apis/class";

import ClassItem from "./components/ClassItem";
import Plus from "../../../components/plus";
import PlusItem from "../../../components/plus/components/PlusItem";
import CreateClass from "./components/CreateClass";
import UpdateClass from "./components/UpdateClass";
import AddStudent from "./components/AddStudent";
import Pagination from "../../../components/pagination";

const ClassPage = () => {
    const [classData, setClassData] = useState({
        isLoading: true,
        classes: [],
    });
    console.log(classData.classes);
    const [isOpenCreate, setOpenCreate] = useState({
        isOpen: false,
        isRefesh: false,
    });
    const [isOpenUpdate, setIsOpenUpdate] = useState({
        isOpen: false,
        classUpdate: {},
    });
    const [isOpenAddStudent, setIsOpenAddStudent] = useState({
        isOpen: false,
        classAddStudent: {},
        isRefesh: false,
    });
    const [paginations, setPagination] = useState({
        _page: 1,
        _totalRow: 1,
        _limit: 5,
    });
    const [filterClass, setFilterClass] = useState({
        id: null,
        _page: 1,
        _limit: 6,
    });

    console.log(classData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Class.getClasses(
                    filterClass._page,
                    filterClass._limit
                );

                setClassData({ isLoading: false, classes: response.classes });
                setPagination(response.pagination);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [isOpenCreate.isRefesh, filterClass]);
    const handlePageChange = (newPage) => {
        setFilterClass({ ...filterClass, _page: newPage });
    };
    const handleOpenCreate = useCallback(() => {
        setOpenCreate((pve) => {
            return {
                ...pve,
                isOpen: true,
            };
        });
    }, []);

    const handleOpenUpdate = useCallback(
        (classId) => {
            setIsOpenUpdate({
                isOpen: true,
                classUpdate: classData.classes.find(
                    (cls) => cls._id === classId
                ),
            });
        },
        [classData.classes]
    );

    const handleOpenAddStudent = useCallback(
        (classId) => {
            setIsOpenAddStudent((pre) => {
                return {
                    isOpen: true,
                    classAddStudent: classData.classes.find(
                        (cls) => cls._id === classId
                    ),
                };
            });
        },
        [classData.classes]
    );

    const handleClose = useCallback(() => {
        setOpenCreate((pve) => {
            return {
                ...pve,
                isOpen: false,
            };
        });
        setIsOpenUpdate({ isOpen: false, classUpdate: {} });
        setIsOpenAddStudent((pve) => {
            return {
                ...pve,
                isOpen: false,
            };
        });
    }, []);

    const handleRefeshData = useCallback(() => {
        setOpenCreate((pve) => {
            return {
                ...pve,
                isRefesh: !pve.isRefesh,
            };
        });
    }, []);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="flex justify-between">
                    <div className="text-gradient">
                        <p className="text-3xl text-white font-semibold pt-1.5 pl-14">
                            Manager Class
                        </p>
                    </div>
                    <div className="mt-6">
                        <Plus>
                            <PlusItem
                                handleOpen={handleOpenCreate}
                                name="Tạo mới lớp học"
                                path="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                            />
                        </Plus>
                    </div>
                </div>

                <div className="mt-14">
                    <div className="t-head text-md text-white font-semibold col-span-3 shadow-lg">
                        <ul className="flex items-center grid grid-cols-7 gap-4 p-3 rounded-t-xl bg-gray-500">
                            <li className="col-span-4">Name</li>
                            <li>Chấm/sửa điểm</li>
                            <li className="">Thêm sinh viên</li>
                            <li className="flex items-center justify-between">
                                <span>Cập nhật</span>
                                <span>Xoá</span>
                            </li>
                        </ul>
                    </div>

                    {classData.isLoading ? (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    ) : classData.classes.length > 0 ? (
                        classData.classes.map((cls) => (
                            <div key={cls._id}>
                                <ClassItem
                                    items={cls}
                                    onOpenUpdate={handleOpenUpdate}
                                    onOpenAddStudent={handleOpenAddStudent}
                                    onRefesh={handleRefeshData}
                                />
                            </div>
                        ))
                    ) : (
                        "Có lỗi vui lòng thử lại sau"
                    )}
                </div>

                <CreateClass
                    isOpen={isOpenCreate.isOpen}
                    onClose={handleClose}
                    onRefesh={handleRefeshData}
                />

                <UpdateClass
                    isOpen={isOpenUpdate.isOpen}
                    selectClass={isOpenUpdate.classUpdate}
                    onClose={handleClose}
                />

                <AddStudent
                    isOpen={isOpenAddStudent.isOpen}
                    classId={isOpenAddStudent.classAddStudent._id}
                    onClose={handleClose}
                    onRefesh={handleRefeshData}
                />
            </div>
            <Pagination
                pagination={paginations ? paginations : {}}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ClassPage;
