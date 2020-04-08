import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
return (
<div>
    <div className="container flow-text">
    <br />
        <h1>About the Healer's Intent Web App</h1>
        
        <ul>
        <br />
            <h4>What is Healer's Intent?</h4>
            
            <li>Healer's Intent is a community of healers. We strive to join people together for the purpose of healing each other.
            </li>
            <br />
            <h4>How do I get involved?</h4>
            <li>Read through the <Link to="/instructions" style={{ textDecoration: 'none' }} >Instructions</Link> page and practice on your own loved ones. After you're comfortable with the process, pick a request to respond to in the healing circle.
            </li>
            <br />
            <h4>What is distance healing?</h4>
            <li>Distance healing is any form of healing energy "sent" across time and space that is received and has a healing effect on the recipient. 
            </li>
            <br />
            <h4>Is Healer's Intent affiliated with a religion or group?</h4>
            <li>Healing can occur across multiple modalities. Healer's Intent isn't affiliated with any religion or group and strives to include all people.
            </li>
            <br />
            <h4>What happens to my data I provide to Healer's Intent?</h4>
            <li>Each healing request will be automatically deleted from our databases after 30 days. Healer's Intent will not sell your data. The data you include in a healing will be public, so keep that in mind when you share. Using intent is a free service and will strive to stay that way.
            </li>
            <br />
        </ul>
    </div>
</div>
);
};

export default About;