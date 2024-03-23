import { Table } from 'react-bootstrap';

const FeaturesTable = ({ features }) => {
    return (
        <Table striped bordered hover>
            <tbody>
                {features.map((feature, index) => (
                    <tr key={index}>
                        <td>{feature.name}</td>
                        <td>{feature.value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default FeaturesTable;
