import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function CustomForm() {

    return (
        <>
            <div style={{ marginTop: '50px' }}>
                <Input size="large" placeholder="Enter your name" prefix={<UserOutlined />} />
                <Input style={{ marginTop: '8px' }} placeholder="Enter your email" />
                <Input style={{ marginTop: '8px' }} placeholder="Just another one because the task says so..." />
            </div>
        </>
    )
}

export default CustomForm;