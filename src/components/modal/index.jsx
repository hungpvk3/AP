import React from "react";
import { Popconfirm, message } from "antd";

const index = ({ name, onDelete, onRefesh, children, ...props }) => {
    function confirm(e) {
        onDelete();
        onRefesh();
        message.success(`Đã xoá lớp ${name}`);
    }

    return (
        <Popconfirm
            {...props}
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >
            {children}
        </Popconfirm>
    );
};

export default index;
