
import Back from "../common/hero sections/about"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='travel' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
