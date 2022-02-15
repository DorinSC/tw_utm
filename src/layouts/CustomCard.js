import { Card, Col } from 'antd'

function CustomCard({title, description}) {

    return (
        <Col span={8}>
            <Card title={title} bordered={false}>
                {description}
            </Card>
        </Col>
    )
}

export default CustomCard