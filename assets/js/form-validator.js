const showAlert = (message, type) => {
    const alertsContainer = document.querySelector('#form-alerts');
    if (alertsContainer) {
        alertsContainer.innerHTML = `
            <div class="alert alert-${type}" role="alert">
                <strong>${type === 'sucesso' ? 'Sucesso!' : 'Erro!'}</strong> ${message}
            </div>
        `;
    }
};

const validateVolunteerForm = (form) => {
    const email = form.querySelector('#email');
    const emailConfirm = form.querySelector('#email-confirm');

    if (!email || !emailConfirm) return;

    const checkEmailConsistency = () => {
        if (email.value && emailConfirm.value) {
            if (email.value !== emailConfirm.value) {
                emailConfirm.classList.add('is-invalid');
                emailConfirm.classList.remove('is-valid');
                return false;
            } else {
                emailConfirm.classList.add('is-valid');
                emailConfirm.classList.remove('is-invalid');
                return true;
            }
        }
        emailConfirm.classList.remove('is-valid', 'is-invalid');
        return false;
    };

    email.addEventListener('input', checkEmailConsistency);
    emailConfirm.addEventListener('input', checkEmailConsistency);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailsAreConsistent = (email.value === emailConfirm.value);

        if (!emailsAreConsistent) {
            showAlert('Os e-mails não coincidem. Por favor, verifique.', 'erro');
            emailConfirm.focus();
            return;
        }
        
        if (form.checkValidity() && emailsAreConsistent) {
            showAlert('Cadastro enviado com sucesso! Entraremos em contato em breve.', 'sucesso');
            form.reset();
            emailConfirm.classList.remove('is-valid', 'is-invalid');
        } else {
            showAlert('Por favor, preencha todos os campos obrigatórios corretamente.', 'erro');
        }
    });
};

export const initFormValidator = () => {
    const volunteerForm = document.querySelector('#form-voluntario');
    if (volunteerForm) {
        validateVolunteerForm(volunteerForm);
    }
};