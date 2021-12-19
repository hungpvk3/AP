import React, { useState, useEffect } from "react";
import { Modal, Select, Spin } from "antd";
import { debounce } from "lodash";

import Class from "../../../../apis/class";
import User from "../../../../apis/auth";

import { useStore, actionsAlert } from "../../../../context";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = React.useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then((newOptions) => {
                const customOptions = newOptions.user.filter((option) => {
                    return option.userCode.split("-")[0] === "FSST";
                });
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

function fetchUserList(search) {
    return User.user_search(search);
}

const AddStudent = ({ isOpen, classId, onClose, onRefesh }) => {
    const { dispatchAlert } = useStore();
    const [value, setValue] = useState([]);
    const [students, setStudents] = useState([]);
    console.log(students, classId);

    const handleAddStudent = async () => {
        if (students.length > 0) {
            try {
                const response = await Class.addStudent(classId, {
                    studentId: students,
                });

                if (response) {
                    onClose();
                    onRefesh();
                    dispatchAlert(
                        actionsAlert.alertActions.display({
                            variant: "success",
                            text: "Thêm học sinh thành công",
                        })
                    );
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Modal
            title="Thêm học sinh"
            visible={isOpen}
            onOk={handleAddStudent}
            onCancel={() => {
                onClose();
                setValue([]);
                setStudents([]);
            }}
            destroyOnClose={true}
        >
            <DebounceSelect
                mode="multiple"
                name="search-user"
                label="Chọn sinh viên"
                value={value}
                placeholder="Nhập tên sinh viên"
                fetchOptions={fetchUserList}
                onChange={(newValue) => {
                    setValue(newValue);
                    setStudents(() => {
                        const studentIdArr = newValue.map((value) => {
                            return value.value;
                        });
                        return studentIdArr;
                    });
                }}
                style={{ width: "100%" }}
            />
        </Modal>
    );
};

export default AddStudent;
