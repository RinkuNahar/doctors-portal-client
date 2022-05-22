import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {

    const {name, email} = deletingDoctor;
    
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`)
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }

    return (
        <div>
        <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  ${name}!</h3>
                <p className="py-4">If you delete once the doctor It will remove forever</p>
                <div className="modal-action">
                <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                    <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                </div>
            </div>
        </div>
    </div >
    );
};

export default DeleteConfirmModal;