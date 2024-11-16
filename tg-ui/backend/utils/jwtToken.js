const sendTokenResponse = (user, statusCode, res) => {
   //generating token
    const token = user.getSignedJwtToken();
  
    res.cookie('token', token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000), 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'PRODUCTION'
    });
  
    user.password = undefined;
  
    res.status(statusCode).json({
      success: true,
      token,
      data: {
        user
      }
    });
  };
  
  export default sendTokenResponse;
  