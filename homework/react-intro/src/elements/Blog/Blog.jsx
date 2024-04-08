import blog from './Blog.module.css'


const Blog = () => {
  return (
    <div className={blog.block}>

      <h2 className={blog.heading}>Blog</h2>

      <ul className={blog.list}>

        <li className={blog.listItem}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ullam facilis ex sed odit, iusto corrupti id voluptate modi.</p>
        </li>

        <li className={blog.listItem}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum officia quos voluptatibus facilis, voluptatum nisi possimus, numquam pariatur provident eum rem suscipit, voluptates velit unde non in. Praesentium veniam unde ab suscipit officia aliquam fuga modi temporibus sunt quidem.</p>
        </li>

        <li className={blog.listItem}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, adipisci.
          </p>
        </li>

        <li className={blog.listItem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint. Nam, enim. Dicta, officiis aperiam corrupti dignissimos illo tempora accusamus est dolores laborum amet obcaecati labore ipsum doloremque error fugit explicabo officia sapiente eveniet quos consequuntur laudantium id facere ullam neque? Voluptas mollitia deleniti distinctio.
          </p>
        </li>

      </ul>

    </div>
  );
};

export default Blog;
