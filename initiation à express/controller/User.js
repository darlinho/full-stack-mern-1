const User = require("../models/User")

// Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}

// Ajouter un utilisateur
const createUser = async (req, res) => {

    console.log(req.body)

    try {
        const { name, email, password } = req.body

        const user = await User.create({ name, email, password })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllUsers,
    createUser
}