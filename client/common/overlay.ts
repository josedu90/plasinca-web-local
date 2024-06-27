document.addEventListener('DOMContentLoaded', () => {
  // Función para abrir el diálogo
  function openDialog(event: { currentTarget: any }) {
    const button = event.currentTarget;
    const dialogId = button.getAttribute('data-dialog-id');
    const cardId = button.getAttribute('data-card-id'); // Obtener el ID de la tarjeta
    const dialogOverlay = document.getElementById(dialogId);

    if (dialogOverlay) {
      dialogOverlay.classList.add('active');
      if (cardId) {
        const targetCard = dialogOverlay.querySelector(`[data-card="${cardId}"]`);
        if (targetCard)
          targetCard.classList.add('active-card'); // Agregar clase a la tarjeta específica
      }
    }
  }

  // Función para cerrar el diálogo
  function closeDialog(event: { currentTarget: any }) {
    const button = event.currentTarget;
    const dialogId = button.getAttribute('data-dialog-id');
    const dialogOverlay = document.getElementById(dialogId);

    if (dialogOverlay) {
      dialogOverlay.classList.remove('active');
      // Remover la clase de la tarjeta específica
      const activeCard = dialogOverlay.querySelector('.active-card');
      if (activeCard)
        activeCard.classList.remove('active-card');
    }
  }

  // Función para cerrar el diálogo al hacer clic fuera de .chip
  function closeDialogOnClickOutside(event: { currentTarget: any; target: any }) {
    const dialogOverlay = event.currentTarget;
    const dialogSection = dialogOverlay.querySelector('.chip');
    if (!dialogSection?.contains(event.target)) {
      dialogOverlay.classList.remove('active');
      const activeCard = dialogOverlay.querySelector('.active-card');
      if (activeCard)
        activeCard.classList.remove('active-card');
    }
  }

  // Delegar evento de clic a todos los botones con la clase .open-dialog
  document.querySelectorAll('.open-dialog').forEach((button) => {
    button.addEventListener('click', openDialog);
  });

  // Delegar evento de clic a todos los botones con la clase .close-dialog
  document.querySelectorAll('.close-dialog').forEach((button) => {
    button.addEventListener('click', closeDialog);
  });

  // Event listener para cerrar el diálogo si se hace clic fuera de .chip
  document.querySelectorAll('.dialog-overlay').forEach((overlay) => {
    overlay.addEventListener('click', closeDialogOnClickOutside);
  });
});
