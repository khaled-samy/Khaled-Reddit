const getUserName = () => {
  let result = '';
  try {
    result = JSON.parse(atob(Object.fromEntries(new URLSearchParams(document.cookie)).token.split('.')[1]));
  } catch (e) {
    return { username: '' };
  }
  return result;
};

export default getUserName;
