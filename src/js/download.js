export function downloadFile() {
  const fileUrl = '../partials/public/Denys_Koshevyi_FrontEndDeveloper.pdf'; // Путь к файлу
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = 'Denys_Koshevyi_FrontEndDeveloper.pdf'; // Имя файла
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
