import { fetchHandler } from './fetch'

test('gets mojombo from list of users', async () => {
  const fetchedData = await fetchHandler('https://api.github.com/users')
  expect(fetchedData[0].login).toBe('mojombo')
});

test('gets mojombo as single user', async () => {
  const fetchedData = await fetchHandler('https://api.github.com/users/mojombo')
  expect(fetchedData.login).toBe('mojombo')
});

test('returns error for wrong URL', async () => {
  const fetchedData = await fetchHandler('https://api.github.com/userz')
  expect(fetchedData.error.status).toBe(404)
});