// server/api/disney.js

export default async function handler(req, res) {
    const response = await fetch('https://api.example.com/disney');
    const data = await response.json();
  
    res.status(200).json(data);
  }
  