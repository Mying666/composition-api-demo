import { getData }  from '../common/js/http'
const RETRY_TIMES = 3
const PREDIX = 'https://api.github.com'
const ALL = '/repositories'
const UESR_REPO = '/users/{username}/repos'

export async function fetchUserRepositories(user) {
  const REPOS = `${PREDIX}/users/${user}/repos`
  console.log('user', user)
  if (user) {
    let retry = RETRY_TIMES
    let res
    res = await getData(REPOS)
    if (!res) {
      if (retry-- > 0) {
        res = await getData(REPOS)
      } else {
        return {
          error: '重试三次，仍然失败'
        }
      }
    } else {
      return res
    }
  }
}