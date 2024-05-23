import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import ProductList from './ProductList';

const ProductsWithPagination = ({ productData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12; 

    // Calculate the index of the first and last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData?.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(productData?.length / productsPerPage);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <ProductList productData={currentProducts} />
            <Pagination style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <Pagination.First onClick={() => setCurrentPage(1)} />
                <Pagination.Prev onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />

                {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item 
                        key={index} 
                        active={index + 1 === currentPage} 
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}

                <Pagination.Next onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
            </Pagination>
        </div>
    );
};

export default ProductsWithPagination;
