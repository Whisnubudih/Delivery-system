
import Swal from 'sweetalert2';

function errorAlert(statusText, textError) {
  return Swal.fire({
    icon: 'error',
    title: 'Oopss..',
    text: textError,
    footer: statusText,
  });
}

export default errorAlert;