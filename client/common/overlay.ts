document.addEventListener('DOMContentLoaded', () => {
  const dialogOverlay = document.getElementById('dialog-overlay');
  const dialogSection = dialogOverlay?.querySelector('.chip');

  // Función para abrir el diálogo
  function openDialog() {
    dialogOverlay?.classList.add('active');
  }

  // Función para cerrar el diálogo
  function closeDialog(event: { target: Node | null }) {
    // Verificar si el clic ocurrió fuera de .dialog
    if (!dialogSection?.contains(event.target))
      dialogOverlay?.classList.remove('active');
  }

  // Delegar evento de clic a todos los botones con la clase .open-dialog
  document.querySelectorAll('.open-dialog').forEach((button) => {
    button.addEventListener('click', openDialog);
  });

  // Event listener para cerrar el diálogo si se hace clic fuera de .dialog
  dialogOverlay?.addEventListener('click', closeDialog);
});
