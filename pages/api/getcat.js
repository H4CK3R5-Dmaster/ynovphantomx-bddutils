// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import linked from '../../datas/categories.json';
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Renvoyez les données JSON en tant que réponse
    res.status(200).json(linked);
  } else {
    // Si la méthode HTTP utilisée n'est pas GET, renvoyez une erreur 405 (Method Not Allowed)
    res.status(405).end();
  }
}
