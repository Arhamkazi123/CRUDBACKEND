import usermodel from "../models/user-model.js";

const getalluser = async (req, res) => {
  try {
    const allusers = await usermodel.find({});

    if (allusers) {
      return res.status(200).json({ message: allusers });
    } else {
      return res
        .status(400)
        .json({ message: "not able to retrieve all users" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const createuser = async (req, res) => {
  const { username, email, age } = req.body;
  try {
    if (username && email && age) {
      const newuser = usermodel({
        username,
        email,
        age,
      });
      const saveduser = newuser.save();
      if (saveduser) {
        return res.status(201).json({ message: "user has been created" });
      } else {
        return res.status(400).json({ message: "could not save user" });
      }
    } else {
      return res.status(400).json({ message: "fill all the required fields" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const getsingleuser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const singuser = await usermodel.findById(id);
      if (singuser) {
        return res.status(200).json(singuser);
      } else {
        return res.status(400).json({ message: "user not found" });
      }
    } else {
      return res.status(400).json({ message: "id not found" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const updatedetails = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const updateuser = await usermodel.findByIdAndUpdate(id, req.body);
      return res.status(200).json(updateuser);
    } else {
      return res.status(400).json({ message: "ID not found" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const deletedetails = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const deleteuser = await usermodel.findByIdAndDelete(id);
      return res.status(200).json(deleteuser);
    } else {
      return res.status(400).json({ message: "ID not found" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

export { getalluser, createuser, getsingleuser, updatedetails, deletedetails };
