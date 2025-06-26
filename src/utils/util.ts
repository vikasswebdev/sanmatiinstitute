const getImagePrefix = () => {
    return process.env.NODE_ENV === "production"
        ? "/sanmatiinstitute/"
        : "";
};

export { getImagePrefix };