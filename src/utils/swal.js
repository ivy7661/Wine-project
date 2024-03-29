import Swal from 'sweetalert2';

export default {
  toastTop(icon, title) {
    return Swal.fire({
      icon,
      title,
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500,
      width: 280
    });
  }
};
