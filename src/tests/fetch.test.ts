import fetchHandler from '../app/fetch'

test('gets mojombo from list of users', async () => {
  const fetchedData = await fetchHandler('users')
  expect(fetchedData[0].login).toBe('mojombo')
});

test('gets mojombo as single user', async () => {
  const fetchedData = await fetchHandler('users/mojombo')
  expect(fetchedData.login).toBe('mojombo')
});

test('returns error for wrong URL', async () => {
  const fetchedData = await fetchHandler('userz')
  expect(fetchedData.error.status).toBe(404)
});