import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];   //split array on space sand we know the token is presnet on second array

    let decodedData = jwt.verify(token, secret);

    req.userId = decodedData?.id;
    next();//next to move ahead if we click like button it goes to middleware to check user if it is true it goes to the path it was going
  } catch (error) {
    console.log(error);
  }
};

export default auth;
