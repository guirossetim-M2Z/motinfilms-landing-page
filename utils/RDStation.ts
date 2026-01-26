/**
 * Tenta localizar e clicar no botão flutuante do RD Station.
 * Retorna true se o clique foi disparado, false se o botão não foi encontrado.
 */
export const triggerRdStationPopup = (): boolean => {
  // Verificação de segurança para garantir que estamos no navegador (Client-side)
  if (typeof window === 'undefined') return false;

  const rdButton = document.querySelector('.rdstation-popup-js-floating-button') as HTMLElement | null;

  if (rdButton) {
    rdButton.click();
    return true;
  }

  console.warn('Botão flutuante do RD Station não encontrado no DOM.');
  return false;
};