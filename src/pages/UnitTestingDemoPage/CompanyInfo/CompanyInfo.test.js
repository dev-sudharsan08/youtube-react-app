import { fireEvent, render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';
import renderer from 'react-test-renderer';

describe('CompanyInfo', () => {
  // test spec
  xit('has Cognizant as company name', () => {
    // act
    render(<CompanyInfo />);
    const companyName = screen.getByTestId('companyName');
    console.log(companyName.textContent);
    // assert
    expect(companyName.textContent).toBe('Company Name: Cognizant');
  });

  // testing props -- must
  xit('receives foundedYear prop and displays in JSX', () => {
    render(<CompanyInfo foundedYear='2006' />);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear).toHaveTextContent('Founded in: 2006');
  });

  xit('receives headQuarters prop and displays in JSX', () => {
    render(<CompanyInfo headQuarters='Teaneck' />);
    const headQuarters = screen.getByTestId('headQuarters');
    expect(headQuarters).toHaveTextContent('Teaneck');
  });

  // testing inline styles
  xit('has foundedYear with text color green -- inline styles', () => {
    render(<CompanyInfo foundedYear='2012' />);
    const foundedYear = screen.getByTestId('foundedYear');
    // recommended to use color code in hexa or rgb -- not the color name
    expect(foundedYear).toHaveStyle('color:rgb(0,255,0)'); // #00ff00
  });

  // testing whether a button has css class btn-primary
  // the button should have text -- JOIN COGNIZANT
  // use data-testid
  // you can also have multiple expectations
  xit('has button with className and text ', () => {
    render(<CompanyInfo />);
    const joinButton = screen.getByTestId('joinButton');
    expect(joinButton).toHaveTextContent('JOIN COGNIZANT');
    expect(joinButton).toHaveClass('btn btn-primary');
  });

  // lets find out the input has the right placeholder or not
  xit('has an input with `Enter your Country Name` as placeholder', () => {
    render(<CompanyInfo />);
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    // expect(countryInput).toBeInTheDocument();
    expect(countryInput).toBeTruthy();
  });

  xit('displays countryName USA by default and update JSX onChange of country input', () => {
    render(<CompanyInfo />);
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    console.log(countryInput.value);
    expect(countryInput.value).toBe('USA');

    // now checking whether the onChange event handler is working or not
    // setting up mock event obj
    const mockEventobj = {
      target: {
        value: 'UK'
      }
    };
    // as the comp is rendered in the test runner we cant use mouse or keyboard as input devices.
    // so, lets trigger the event thru program
    fireEvent.change(countryInput, mockEventobj);
    // finally lets check if the input element is showing the change
    expect(countryInput.value).toBe('UK');

    expect(screen.getByTestId('visitWebsite')).toHaveTextContent(
      'Please visit Cognizant UK Website'
    );
  });

  // snapshot testing
  it('has right snapshot with all requirements completed', () => {
    // to take snapshot we need a react-est-render // npm i react-test-render-D
    // taking snapshot and converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible props aw well as props children
    const snapshotInJson = renderer
      .create(<CompanyInfo foundedYear='2006' headQuarters='Teaneck, New Jersey, U.S.' />)
      .toJSON();
    // lets assert with toMatchSnapshot
    expect(snapshotInJson).toMatchSnapshot();
  });
});
