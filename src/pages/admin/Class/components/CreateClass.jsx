import React, { memo, useEffect, useState } from "react";
import { debounce } from "lodash";
import { Select, Spin, Modal } from "antd";

import Class from "../../../../apis/class";
import User from "../../../../apis/auth";
import Course from "../../../../apis/course";
import { useStore, actionsAlert } from "../../../../context";
import Input from "../../../../components/input";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = React.useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then((newOptions) => {
                const customOptions =
                    newOptions.user.length > 0
                        ? newOptions.user.filter((option) => {
                              return option.userCode.split("-")[0] === "FSTC";
                          })
                        : [
                              {
                                  _id: "1",
                                  fullName: "Không tìm thấy",
                                  userCode: "Not found",
                              },
                          ];
                setOptions(customOptions);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [debounceTimeout, fetchOptions]);

    useEffect(() => {
        return () => {
            // clear when unmount
            setOptions([]);
        };
    }, []);

    return (
        <Select
            showSearch
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {options.map((opt) => (
                <Select.Option key={opt._id} value={opt._id}>
                    {` ${opt.fullName} -`}{" "}
                    <span className="text-xs text-gray-400">
                        {opt.userCode}
                    </span>
                </Select.Option>
            ))}
        </Select>
    );
}

// Fetch Course
function DebounceSelectCourse({
    fetchOptions,
    debounceTimeout = 300,
    ...props
}) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = React.useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then((newOptions) => {
                console.log(newOptions);
                setOptions(newOptions.courses);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [debounceTimeout, fetchOptions]);

    useEffect(() => {
        return () => {
            // clear when unmount
            setOptions([]);
        };
    }, []);

    return (
        <Select
            showSearch
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {options.map((opt) => (
                <Select.Option key={opt._id} value={opt._id}>
                    {` ${opt.name}`}
                </Select.Option>
            ))}
        </Select>
    );
}

function fetchUserList(search) {
    return User.user_search(search);
}
function fetchCourseList(search) {
    return Course.searchCourse(search);
}

function CreateClass({ isOpen, onClose, onRefesh }) {
    const { dispatchAlert } = useStore();

    const [classData, setClassData] = useState({
        name: "",
        classCode: "",
        courseId: "",
        teacherId: "",
    });
    const [value, setValue] = useState();
    const [valueCourse, setValueCourse] = useState();

    const handleChangeInput = (e) => {
        setClassData({ ...classData, [e.target.name]: e.target.value });
    };
    console.log(classData);
    const handleCreateClass = async () => {
        try {
            const response = await Class.postClass(classData);
            if (response) {
                onClose();
                onRefesh();
                console.log(response);
                setClassData({
                    name: "",
                    classCode: "",
                    courseId: "",
                    teacherId: "",
                });
            }
            dispatchAlert(
                actionsAlert.alertActions.display({
                    variant: "success",
                    text: "Tạo lớp học thành công",
                })
            );
            // }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Modal
                title="Tạo mới lớp học"
                visible={isOpen}
                onOk={handleCreateClass}
                onCancel={onClose}
                destroyOnClose={true}
            >
                <Input
                    isIcon="courseIcon"
                    css="w-full"
                    name="name"
                    placeholder="Tên lớp học"
                    value={classData.name}
                    handleChange={handleChangeInput}
                />
                <Input
                    isIcon="passwordIcon"
                    css="w-full"
                    name="classCode"
                    placeholder="Mã lớp học"
                    value={classData.classCode}
                    handleChange={handleChangeInput}
                />

                <DebounceSelectCourse
                    name="search-user"
                    label="Chọn môn học"
                    value={valueCourse}
                    placeholder="Nhập tên môn học"
                    fetchOptions={fetchCourseList}
                    onChange={(newValue) => {
                        setValueCourse(newValue);
                        setClassData((pre) => ({
                            ...pre,
                            courseId: newValue.value,
                        }));
                    }}
                    style={{ width: "100%" }}
                />

                <div className="mt-4">
                    <DebounceSelect
                        name="search-user"
                        label="Chọn giáo viên"
                        value={value}
                        placeholder="Nhập tên giáo viên"
                        fetchOptions={fetchUserList}
                        onChange={(newValue) => {
                            setValue(newValue);
                            setClassData((pre) => ({
                                ...pre,
                                teacherId: newValue.value,
                            }));
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default memo(CreateClass);
