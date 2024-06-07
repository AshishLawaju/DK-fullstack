const errorHandler = async (err, req, res, next) => {
  try {
    if (err) {
      console.log({ err });
    }
    next();
  } catch (error) {
    console.log({ error });
  }
};


export {errorHandler}