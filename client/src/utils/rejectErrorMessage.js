export const rejectErrorMessage = ({ response = null }) => {
  let message = 'Ooops, something went wrong';

  if (response && response.error) {
    message = response.error || message;
  }

  return message;
};