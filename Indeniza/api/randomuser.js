export default async function handler(req, res) {
  try {
    const response = await fetch('https://randomuser.me/api/?nat=br');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*'); // Libera CORS
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do RandomUser', details: error.message });
  }
}