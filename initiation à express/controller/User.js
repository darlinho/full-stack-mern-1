const User = require("../models/User")

// Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}

// Récupérer un seul utilisateur
const getUser = async (req, res) => {

    try {
        const { id } = req.params
        const user = await User.findById(id)

        if (!user) {
            res.status(404).json({ error: "User not found !" })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Metttre à jour un utilsateur
const updateUser = async (req, res) => {

    try {
        const { id } = req.params
        const { body } = req


        const user = await User.updateOne({ _id: id }, { $set: body })

        if (user.modifiedCount === 0) {
            res.status(404).json({ error: "User not found !" })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Supprimer un utilsateur
const deleteUser = async (req, res) => {

    try {
        const { id } = req.params

        const user = await User.deleteOne({ _id: id })

        if (user.deletedCount === 0) {
            res.status(404).json({ error: "User not found !" })
        }

        res.status(200).json({ message: "User is deleted successfully !", data: user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Ajouter un utilisateur
const createUser = async (req, res) => {

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
    createUser,
    getUser,
    updateUser,
    deleteUser
}