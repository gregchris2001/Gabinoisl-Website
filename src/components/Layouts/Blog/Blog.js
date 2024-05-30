import { useContext} from "react";
import { ListGroup } from 'react-bootstrap';
import BlogItem from './BlogItem';
import ProductContext from '../../../store/product-context'

const Blog = () => {
    const {blogPosts} = useContext(ProductContext);

  return (
    <ListGroup className="mb-3">
        {blogPosts.length > 0 ? 
            blogPosts?.map((blogPost, index) => (
                <BlogItem key={index} blogPost={blogPost} />
            ))
            :
            <p> No Blog Post Yet! </p>
        }
    </ListGroup>
  );
};

export default Blog;
