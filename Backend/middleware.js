const jwt = require("jsonwebtoken");


// 🔐 AUTH MIDDLEWARE (token verify karega)
exports.authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded; // user data attach

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
};


// 👮 ROLE BASED MIDDLEWARE (admin check)
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }
};