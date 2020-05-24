import Link from "next/link";

const firstPost = () => {
  return (
    <div>
      <h1>First Post</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor exercitationem maxime, consectetur laborum quos
        enim assumenda? Fugiat labore magnam voluptates.
      </p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default firstPost;
