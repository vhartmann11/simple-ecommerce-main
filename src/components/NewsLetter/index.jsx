import styles from './NewsLetter.module.scss';
import toast from 'react-hot-toast';
import { useRef } from 'react';

const notify = () => {
    toast.success('Cadastrado com sucesso!', {
        position: 'bottom-center',
    });
};

const notifyError = (message) => {
    toast.error(message, {
        position: 'bottom-center',
        duration: 2000,
    });
};

const NewsLetter = () => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailInput = e.target.email;
        const emailValue = emailInput.value;

        // Regex para validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue) {
            notifyError('Por favor, preencha o campo!');
        } else if (!emailRegex.test(emailValue)) {
            notifyError('Por favor, insira um email válido!');
        } else {
            notify();
            // Limpa o formulário após o envio
            formRef.current.reset();
        }
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.newsletter__content}>
                <h2>Mais novidades?</h2>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="digite@seuemail.com"
                    />
                    <button type="submit">Inscreva-se</button>
                </form>
            </div>
        </section>
    );
};

export default NewsLetter;
