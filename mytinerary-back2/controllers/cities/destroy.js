import City from "../../models/City.js"


export default async (req,res) => {
    try {
        let deleteCity = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'city deleted',
            response: deleteCity._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    }
}