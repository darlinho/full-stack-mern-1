
// Récupérer tous les utilisateurs
const getAllUsers = (req, res) => {
    res.json({msg: "get all users !"})
}

// Ajouter un utilisateur
const createUser = (req, res) => {
    res.json({msg: "post user !"})
}

module.exports = {
    getAllUsers,
    createUser
}