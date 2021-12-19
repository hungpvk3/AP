import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import "antd/dist/antd.css";
import { Select, Spin } from "antd";
import User from "../../../../apis/auth";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
    // Search: abcddassdfasdf

    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = React.useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then((newOptions) => {
                console.log(newOptions);
                setOptions(newOptions.user);
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
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {options.map((opt) => (
                <Select.Option
                    key={opt._id}
                    value={opt._id}
                    title={opt.fullName}
                >
                    {` ${opt.fullName}`}
                </Select.Option>
            ))}
        </Select>
    );
}

function fetchUserList(search) {
    return User.user_search(search);
}

const Test = () => {
    const [value, setValue] = useState();

    return (
        <DebounceSelect
            mode="multiple"
            name="search-user"
            label="Tên các thành viên"
            value={value}
            placeholder="Nhập tên thành viên"
            fetchOptions={fetchUserList}
            onChange={(newValue) => setValue(newValue)}
            style={{ width: "100%" }}
        />
    );
};

export default Test;
