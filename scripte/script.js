document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#myModal');
    document.querySelector('#myBtn').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});



    function serializeForm(formNode) {
        console.log(formNode.elements)
        }

        function handleFormSubmit(event) {
        event.preventDefault()
        serializeForm(applicantForm.querySelector('.form_txt'))
        }

        const applicantForm = document.getElementById('myModal')
        applicantForm.addEventListener('submit', handleFormSubmit)

        function serializeForm(formNode) {
            const { elements } = formNode

            Array.from(elements)
                .forEach((element) => {
                const { name, value } = element
                console.log({ name, value })
                })
            }

            function serializeForm(formNode) {
                console.log()
                const { elements } = formNode
                const data = Array.from(elements)
                    .filter((item) => !!item.name)
                    .map((element) => {
                    const { name, value } = element
                    return { name, value }
                    })
                console.log(data)
                }

// function handleFormSubmit(event) {
//     event.preventDefault()
//     console.log('Отправка!')
//     }
//     const applicantForm = document.getElementById('myModal')
//     applicantForm.addEventListener('submit', handleFormSubmit)


function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        const data = serializeForm(event.target)

        toggleLoader()

        const response = await sendData(data)

        toggleLoader()
        }

        function onSuccess(formNode) {
            alert('Ваша заявка отправлена!')
            formNode.classList.toggle('hidden')
            }

            // Вызовем её вот так:
async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)

    toggleLoader()
    const { status } = await sendData(data)
    toggleLoader()

    if (status === 200) {
        onSuccess(event.target)
    }
    }

    function onError(error) {
        alert(error.message)
        }

        async function handleFormSubmit(event) {
            event.preventDefault()
            const data = serializeForm(event.target)

            toggleLoader()

            const { status, error } = await sendData(data)
            toggleLoader()

            if (status === 200) {
                onSuccess(event.target)
            } else {
                onError(error)
            }
            }

            function checkValidity(event) {
                const formNode = event.target.form
                const isValid = formNode.checkValidity()
                formNode.querySelector('button').disabled = !isValid
                }
                applicantForm.addEventListener('input', checkValidity)


