import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  const { name = 'Er4ik!' } = req.query;
  res.send(`Hello ${name}!`);
};
