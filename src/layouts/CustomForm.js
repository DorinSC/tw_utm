import { useState } from "react";
import { Input, Button } from 'antd';
import { UserOutlined, MediumOutlined } from '@ant-design/icons';

function CustomForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [randomInfo, setRandomInfo] = useState('');

    const handleClick = () => {
        console.log("name: " + name);
        console.log("email: " + email);
        console.log("randomInfo: " + randomInfo);

        alert(`name: ${name} \nemail: ${email} \ninfo: ${randomInfo}`);
    }

    return (
        <>
            <div style={{ marginTop: '50px' }}>
                <form>
                <Input 
                    value={name} 
                    size="large" 
                    placeholder="Enter your name" 
                    prefix={<UserOutlined />} 
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    value={email} 
                    size="large" 
                    style={{ marginTop: '8px' }} 
                    placeholder="Enter your email" 
                    prefix={<MediumOutlined />}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    value={randomInfo} 
                    style={{ marginTop: '8px' }} 
                    placeholder="Just another one because the task says so..." 
                    onChange={(e) => setRandomInfo(e.target.value)}
                />
                </form>
                <Button 
                    style={{ marginTop: '8px' }} 
                    type="submit" 
                    size="large"
                    onClick={handleClick}>
                    
                    Click me to get surprise!
                </Button>
            </div>
        </>
    )
}

export default CustomForm;