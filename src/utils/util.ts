const getImagePrefix = () => {
    return process.env.NODE_ENV === "production"
        ? "/E-learning-1.0.0/"
        : "";
};

export { getImagePrefix };