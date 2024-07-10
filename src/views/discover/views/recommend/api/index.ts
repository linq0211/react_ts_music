import myRequest from '@/service'

export function getBannerData() {
  return myRequest.get({
    url: '/banner'
  })
}
