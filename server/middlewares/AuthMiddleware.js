import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ err: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Your secret key from .env
    req.userId = decoded._id;
     // Make _id available in req
    next();
  } catch (err) {
    return res.status(401).json({ err: "Invalid token" });
  }
};


