import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function getData() {
  // In a real app, you'd want to handle connection errors
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM posts');
    return rows;
  } finally {
    client.release();
  }
}

export default async function Page() {
  // In a real app, you'd want to handle potential errors from getData()
  const data = await getData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {data.map((post: any, index: number) => (
          <div key={index} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
