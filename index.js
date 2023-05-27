$('#frmGeneral').formValidation(
{
	framework: 'bootstrap',
	excluded: [':disabled', '[class*="notValidate"]'],
	live: 'enabled',
	message: '<b style="color: #9d9d9d;">Asegúrese que realmente no necesita este valor.</b>',
	trigger: null,
	fields:
	{
		txtValue:
		{
			validators:
			{
				notEmpty:
				{
					message: '<b style="color: red;font-size: 12px;">Este campo es requerido.</b>'
				},
				regexp:
				{
					message: '<b style="color: red;font-size: 12px;">Formato incorrecto. [Ejemplo: 123].</b>',
					regexp: /^[0-9]{1,3}$/
				}
			}
		},
		txtExpresion:
		{
			validators:
			{
				notEmpty:
				{
					message: '<b style="color: red;font-size: 12px;">Este campo es requerido.</b>'
				},
				regexp:
				{
					message: '<b style="color: red;font-size: 12px;">Formato incorrecto. [Ejemplo: 1+1+1].</b>',
					regexp: /^([0-9]*(?=\+)((?<=[0-9]+)\+[0-9]+)?)+$/
				}
			}
		}
	}
});

function sendFrmGeneral() {
	var isValid = null;

	$('#frmGeneral').data('formValidation').resetForm();
	$('#frmGeneral').data('formValidation').validate();

	isValid = $('#frmGeneral').data('formValidation').isValid();

	if(!isValid)
	{
		return;
	}

	var htmlTemp = $('#bodyTable').html();

	htmlTemp += `<tr>
		<td style="border: 1px dashed #999999;">${$('#txtValue').val()}</td>
		<td style="border: 1px dashed #999999;">${$('#txtExpresion').val()}</td>
	</tr>`;

	$('#bodyTable').html(htmlTemp);

	$('#txtValue').val(null);
}