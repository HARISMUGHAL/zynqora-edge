const User = require('../models/User');

const chat = async (req, res) => {
  const { sessionId, message } = req.body;

  if (!sessionId || !message) {
    return res.status(400).json({ message: 'Session ID and message are required' });
  }

  try {
    let user = await User.findOne({ sessionId });
    
    if (!user) {
      user = new User({
        sessionId,
        chatHistory: [],
      });
    }

    // Save user message
    user.chatHistory.push({ role: 'user', content: message });
    
    // Dummy AI response
    const aiResponse = "AI assistant is currently under development and will be available soon.";
    
    // Save AI response
    user.chatHistory.push({ role: 'ai', content: aiResponse });
    
    await user.save();

    res.status(200).json({
      message: aiResponse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  chat,
};
