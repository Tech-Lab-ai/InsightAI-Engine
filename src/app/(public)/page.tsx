import { getData } from '@/lib/db';

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {data.length > 0 ? (
          data.map((post: any, index: number) => (
            <div key={index} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts found. Please check your database connection and ensure the 'posts' table has data.</p>
        )}
      </div>
    </div>
  );
}
