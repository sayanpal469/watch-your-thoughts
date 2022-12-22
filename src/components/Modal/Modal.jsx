import React from 'react';

const Modal = ({details}) => {



    return (
        <div>
            {/*Modal Area*/}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">What are these therapy approaches?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img className="img-fluid" src='https://i.postimg.cc/KvM5rfgY/female-psychologist-consulting-patient-desk-hospital.jpg' alt="" />
                            <p>A 'therapeutic approach' is the lens through which a counsellor addresses their clients' problems. Broadly speaking, the therapeutic approaches of counsellors fall into two categories: behavioural and psychodynamic. Behavioural approaches are usually short-term and address your behaviour and thought patterns.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Modal;