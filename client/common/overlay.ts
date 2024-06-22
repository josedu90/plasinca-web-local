document.addEventListener('DOMContentLoaded', () => {
  // Función para abrir el diálogo
  function openDialog(event: { currentTarget: any }) {
    const button = event.currentTarget;
    const dialogId = button.getAttribute('data-dialog-id');
    const dialogOverlay = document.getElementById(dialogId);
    if (dialogOverlay)
      dialogOverlay.classList.add('active');
  }

  // Función para cerrar el diálogo
  function closeDialog(event: { currentTarget: any; target: any }) {
    const dialogOverlay = event.currentTarget;
    const dialogSection = dialogOverlay.querySelector('.chip');
    // Verificar si el clic ocurrió fuera de .chip
    if (!dialogSection?.contains(event.target))
      dialogOverlay.classList.remove('active');
  }

  // Delegar evento de clic a todos los botones con la clase .open-dialog
  document.querySelectorAll('.open-dialog').forEach((button) => {
    button.addEventListener('click', openDialog);
  });

  // Event listener para cerrar el diálogo si se hace clic fuera de .chip
  document.querySelectorAll('.dialog-overlay').forEach((overlay) => {
    overlay.addEventListener('click', closeDialog);
  });
});
