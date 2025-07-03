
const userController = async (req, res) => {
    try {
        const { role } = req.user;
        res.json({ success: true, role });
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}
export default userController