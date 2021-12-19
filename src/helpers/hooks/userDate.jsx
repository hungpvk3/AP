export const useDate = (studentData) => {
    const date = new Date(studentData);

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const DoB = `${day}-${month}-${year}`;

    return DoB;
};
