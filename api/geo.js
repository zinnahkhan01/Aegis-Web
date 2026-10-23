export default function handler(req, res) {
  const country = req.headers['x-vercel-ip-country'] || 'US';
  const city = req.headers['x-vercel-ip-city'] || '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
  res.status(200).json({ 
    country: typeof country === 'string' ? country.toUpperCase() : 'US',
    city: typeof city === 'string' ? city : ''
  });
}
