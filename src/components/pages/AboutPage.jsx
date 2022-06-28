import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
        <p>
          this is Feed Back Form for users to add there feedback for shopping or service
        </p>
        <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default AboutPage;
