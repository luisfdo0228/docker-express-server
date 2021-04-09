
getInvertedText = async (req, res) => {
    let inverted = [
        {
            _id:'85454',
            name:'okley test',
        },
        {
            _id:'1212',
            name:'fenix ik',
        }
    ]
    return res.status(200).json({ success: true, data: inverted })
}

module.exports = {
    getInvertedText,
}