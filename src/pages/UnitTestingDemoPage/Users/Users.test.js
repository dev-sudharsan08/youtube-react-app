import { render, screen } from '@testing-library/react';
import { fetchApi } from '../../../Utils/fetchApi';
import Users from './Users';

// setting up mock for fetchApi
// mocking a module with auto-mocked version when needed
jest.mock('../../../Utils/fetchApi');
describe('Users', () => {
  /* The following is not Recommended */
  /*
  it('fetches users via rest api call', async () => {
    render(<Users />);
    const nameElement = await screen.findByText('Laene Graham');
    expect(nameElement).toBeInTheDocument();
  })
  */

  /* 3 Disadvantages / challenges in testing th API calls with above approach.
    1. Time consuming
    2. Data Inconsistency (no guarantee for the sample daa like leanne graham to be available)
    3. Availability of REST API ( may be down or still in development)

    The solution for the above problem is: Mocking REST API data
  */

  /* The solution for the above problem is: Mocking REST API data */
  // NOTE: The above test spec should be removed. Only then the following test can be tested
  // POSITIVE TEST SPEC
  it('[MOCKING]: fetches userList via REST api call', async () => {
    // 1. prepare the mock data for the comp
    const mockUserList = [
      {
        id: 1,
        name: 'John',
        email: 'john@email.com'
      }, {
        id: 2,
        name: 'Warner',
        email: 'warner@email.com'
      }
    ];
    // 2. Resolve the Http req with the above mock data as successful res
    // 2.1 setup mock for fetchApi (see before describe block)
    // 2.2 resolve the req
    fetchApi.mockResolvedValue(mockUserList);
    // 3. Render the comp
    render(<Users />)
    // 4. Assert
    const nameElement = await screen.findByText('John');
    expect(nameElement).toBeInTheDocument();
  });

  // negative spec
  it('[MOCKING]: renders error properly during API call', async() => {
    // 1. prepare the mock error for the comp
    const error = 'Error occurred'
    // 2. Reject the Http request with the above error
    fetchApi.mockRejectedValue(error);
    // 3. Render the comp
    render(<Users />);
    // 4. Assert
    const errorMsg = await screen.findByText('Some Error Occurred. Try again later.');
    expect(errorMsg).toBeInTheDocument();
  });
})
