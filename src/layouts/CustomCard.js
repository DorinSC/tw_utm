import { Card, Col } from 'antd'

function CustomCard({title, description}) {

    return (
        <Col span={8}>
            <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            <Card title={title} bordered={false}>
                {description}
            </Card>
            </div>
        </Col>
    )
}

export default CustomCard