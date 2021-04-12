
const getInvertedText = async (req, res) => {
  if (!req.query.text) {
    return res.status(400).json({
      success: false,
      error: 'no text'
    })
  }

  const isPalindrome = (str) => {
    const normalized = str.toLowerCase().match(/[a-z]/gi).reverse()
    return normalized.join('') === normalized.reverse().join('')
  }

  const textInverted = (str) => {
    return str.split('').reverse().join('')
  }

  const inverted = [{ text: textInverted(req.query.text), palindrome: isPalindrome(req.query.text) }]
  return res.status(200).json({ success: true, data: inverted })
}

module.exports = { getInvertedText }
