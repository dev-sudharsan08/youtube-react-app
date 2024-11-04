import applyStyles from '../../hoc/applyStyles';
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div className='container '>
      <HelmetSetup title='Hoc Demo Page'/>
      <h1>Higher Order Component Pattern</h1>
      <StyledHello name='John' />
      <StyledBye name='John' />
    </div>
  );
};

export default HocDemoPage;
