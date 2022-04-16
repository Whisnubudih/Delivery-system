import Swal from 'sweetalert2';

function successAlert(statusText) {
  return Swal.fire({
    icon: 'success',
    title: statusText,
    showConfirmButton: false,
    timer: 2000,
  });
}

export default successAlert;