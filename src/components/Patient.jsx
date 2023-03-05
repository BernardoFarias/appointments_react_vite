const Patient = ({patient, setPatient, deletePatient}) => {

    const {name, owner, email, date, syntoms, id} = patient

    const handleDelete = () => {
        const answer = confirm("Do you want to delete this patient?")
        if(answer) { deletePatient(id) 
        }
    }

    return(
        <div className="m-3 px-5 py-10 rounded-xl bg-white shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Pet's name: {""}
        <span className="normal-case font-normal">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Owner name: {""}
        <span className="normal-case font-normal">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="normal-case font-normal">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Date: {""}
        <span className="normal-case font-normal">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Syntoms: {""}
        <span className="normal-case font-normal">{syntoms}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button 
            type="button" className="font-bold uppercase rounded-md text-white py-2 px-10 bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setPatient(patient)}
            >
                Edit
            </button>
            <button 
            type="button" 
            className="font-bold uppercase rounded-md text-white py-2 px-10 bg-red-600 hover:bg-red-700"
            onClick={handleDelete}>
                Delete
            </button>
        </div>
    </div>
    )
}

export default Patient