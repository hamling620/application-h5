interface RedirectProp {
  type: string;
  avatar?: string;
}
export const getRedirectPath = ({ type, avatar }: RedirectProp) => {
  let url = type === 'boss' ? '/boss' : 'genius'
  if (avatar) {
    url += 'info'
  }
  return url
}
