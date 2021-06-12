// $('#delete').on('click', () => {
//     $('#removable1').remove();
// });

const deleteRow = (buttonElement) => {
    buttonElement.parentElement.parentElement.parentElement.remove();
};