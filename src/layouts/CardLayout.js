import { Row } from 'antd';
import CustomCard from './CustomCard';

const information = [
    {
        id: 1,
        title: "Card title 1",
        description: "information"
    },
    {
        id: 2,
        title: "Card title 2",
        description: "information"
    },
    {
        id: 3,
        title: "Card title 3",
        description: "information"
    },
]

function CardLayout() {
    return (
        <Row gutter={16}>
            {
                information.map((element, i) => {
                    return (
                        <CustomCard key={element.id} title={element.title} description={element.description}/>
                    )
                })
            }
        </Row>
    )
}

export default CardLayout