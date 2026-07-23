function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      desc: "Welcome to learning React"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwedenier",
      desc: "You can install React from npm."
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>{blog.author}</p>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;