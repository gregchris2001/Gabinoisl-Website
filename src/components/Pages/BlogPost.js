import { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import sanityClient from "../../client";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductContext from "../../store/product-context";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { blogPosts } = useContext(ProductContext);
  const { state } = useLocation();
  const { post } = useParams();

  const blogFromState = state && state.blog;
  const blogFromContext = blogPosts?.find((blog) => blog.title === post);

  // Determine which product data to use
  const blogPost = blogFromState || blogFromContext;

  const { title, author, authorImage, date, image, article } = blogPost;

  // Flattening the article blocks to plain text
  const articleText = article
    .map((block) => block.children.map((child) => child.text).join(" "))
    .join(" ");

  return (
    <>
      {blogPost ? (
        <Container>
          <Row>
            <Col>
              <h1>{title}</h1>
              <div className="d-flex align-items-center mb-3">
                {authorImage && (
                  <img
                    src={authorImage}
                    alt={author}
                    className="rounded-circle mr-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div>
                  <div>{author}</div>
                  <div className="text-muted" style={{ fontSize: "0.9em" }}>
                    {new Date(date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              {image && (
                <img src={image} alt={title} className="img-fluid mb-4" />
              )}
              <PortableText value={article} />
            </Col>
          </Row>
        </Container>
      ) : (
        <div>BlogPost not found</div>
      )}
    </>
  );
};

export default BlogPost;
