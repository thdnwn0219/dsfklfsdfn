export default function handler(req, res) {
  const { password } = req.body;
  const realPassword = process.env.LOGIN_PASSWORD;

  res.status(200).json({ success: password === realPassword });
}
