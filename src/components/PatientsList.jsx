
import Patient from "./Patient"

const PatientsList = ({patients, setPatient, deletePatient}) => {


    return(
        <div className="lg:w-3/5 md:w-1/2">

            {patients && patients.length ? (
                <>
                <h2 className="text-3xl font-black text-center">Patients List</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Manage Yours {""}
                    <span className="text-indigo-600 font-bold">Patients and Appointments</span>
                </p>
    
                {patients.map((patient) => (
                        <Patient
                        key={patient.id}
                        patient={patient}
                        setPatient={setPatient}
                        deletePatient={deletePatient}
                        />    
                ))}
                </>
            ) : (
                <>
                <h2 className="text-3xl font-black text-center">No patients yet</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Start adding patients {""}
                    <span className="text-indigo-600 font-bold">and they will be shown here</span>
                </p>
                </>
            )}
            
            
        </div>
    )
}

export default PatientsList