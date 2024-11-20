export default async ({ req, res, log, error }) => {
	if (req.method === 'OPTIONS') {
		return res.send('', 200, {
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		})
	}

	if (req.method === 'POST' || req.method === 'GET') {
		try {
			return res.json({ ok: true }, 200, {
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			})
		} catch (error) {
			return res.json({ error: 'Internal Server Error' }, 500, {
				'Access-Control-Allow-Origin': '*',
			})
		}
	}

	return res.json('hello ')
}
