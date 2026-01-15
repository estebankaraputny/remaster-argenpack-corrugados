import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import './CardMision.css';

interface CardMisionVisionProps {
    title: string;
    context: string;
    description: string;
}

const CardMisionVision = ({ title, context, description}: CardMisionVisionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`card-info-myv`}>
                <h2 className='title-myv'>{title}</h2>
                <p className='context-myv'>{context}</p>
                <div className='content-button-myv'>
                    <button onClick={showModal}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className='modal-info'>
                    <div className="modal-content-myv">
                        <button className='close-modal' onClick={closeModal}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <h2 className='title-myv'>{title}</h2>
                        <p className='context-myv-modal'>{context}</p>
                        <p className='description-myv'>{description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardMisionVision;