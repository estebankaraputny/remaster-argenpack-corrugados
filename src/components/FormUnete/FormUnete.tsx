import { useState } from "react";
import "./FormUnete.css";

const FormUnete = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ ...formData, cv: file });
        alert("¡Gracias por tu interés! Hemos recibido tu postulación.");
    };

    return (
        <section className="form-unete-section"  data-aos="fade-up">
            <div className="form-unete-wrapper">
                <div className="form-unete-info">
                    <h2 className="form-unete-title">Forma Parte de la Familia Argenpack</h2>
                    <p className="form-unete-description">
                        Creemos en el poder de la colaboración para impulsar la innovación. Si sos una persona proactiva, con ganas de aprender y crecer en un ambiente dinámico, queremos conocerte.
                    </p>
                    <p className="form-unete-description">
                        Juntos, podemos transformar la industria del packaging.
                    </p>
                </div>
                <form className="form-unete-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Nombre Completo</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cv">Adjuntá tu CV</label>
                        <input
                            type="file"
                            id="cv"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <button type="submit" className="form-unete-submit">Enviar Postulación</button>
                </form>
            </div>
        </section>
    );
}

export default FormUnete;