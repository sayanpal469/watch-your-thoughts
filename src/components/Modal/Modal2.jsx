import React from 'react';

const Modal2 = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">"Curation? Aggregation? What's the difference?"</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img className='img-fluid' src="https://i.postimg.cc/KvM5rfgY/female-psychologist-consulting-patient-desk-hospital.jpg" alt="" />
                        <p>The main difference between curation and aggregation is that curation is manual and aggregation is automated. Then both curation and aggregation are forms of syndicating, or re-publishing existing content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal2;