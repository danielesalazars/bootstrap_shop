const $form = $('#suscribeteForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function(event) {

	event.preventDefault()
	
	const error = Math.random() > 0.5
	var el;

	$form.removeClass()
	$formGroup.removeClass().addClass('form-group')
	$formControl.removeClass().addClass('form-control')

	$formGroup.find('.form-control-feedback').remove()

	if (error) {
		el = $('<div>',{ html: 'Ha ocurrido un error' })
	}else{
		el = $('<div>',{ html: 'Te enviaremos todas las novedades' })
		el.addClass('text-success')
	}
	el.addClass('form-control-feedback invalid-feedback')
	$form.addClass('was-validated')
	$formGroup.append(el)

})

function mostrarModal(){
	var noMostrarModal = JSON.parse(localStorage.noMostrarModal);

	if (!noMostrarModal) {
		$('#modalOferta').modal()
	}

	$('#btnNoRegistrar').click(function(event) {
		localStorage.noMostrarModal = true
	})
}

const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click(function(event) {

	event.preventDefault()

	const $i = $filtrosToggle.find('i.fa')
	const isDown = $i.hasClass('fa-chevron-down')

	if (isDown) {
		$i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	}else {
		$i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	}
})