import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const BlogItem = ({ blogPost }) => {
  const { title, author, authorImage, date, image } = blogPost;
  const navigate = useNavigate();
  
  const articleText = blogPost?.article
    .map((block) => block.children.map((child) => child.text).join(" "))
    .join(" ");

  const productPageHandler = () => {
      navigate(`/blog/${title}`);
  };

  return (
    <ListGroup.Item className="mb-3">
      <Card>
        {image && <Card.Img variant="top" src={image} alt={title} />}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex align-items-center mb-3">
            {authorImage && (
              <img
                src={authorImage}
                alt={author}
                className="rounded-circle mr-3"
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
            )}
            <div>
              <div>{author}</div>
              <div className="text-muted" style={{ fontSize: '0.9em' }}>{new Date(date).toLocaleDateString()}</div>
            </div>
          </div>
          <Card.Text className="truncate-multi-line">{articleText}</Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default BlogItem;
