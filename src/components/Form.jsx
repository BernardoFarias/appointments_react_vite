import { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({patients, setPatients, patient, setPatient}) => {
    const [name, setName] = useState("")
    const [owner, setOwner] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [syntoms, setSyntoms] = useState("")
    
    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(patient).length > 0){
        setName(patient.name)
        setOwner(patient.owner)
        setEmail(patient.email)
        setDate(patient.date)
        setSyntoms(patient.syntoms)
        }
    }, [patient])

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if([name, owner, email, date, syntoms].includes("")){
            setError(true)
            return
        }
        setError(false)

        const objectPatient = {
            name, 
            owner, 
            email, 
            date, 
            syntoms,
            id: generateId()
        }

        if(patient.id) {
            // Edit
            objectPatient.id = patient.id

            const patientsUpdated = patients.map( patientState => {
                p.id === patient.id ? objectPatient : patientState
            })
            setPatients(patientsUpdated)
            setPatient({})
        } else {
            // Create
            setPatients([...patients, objectPatient])
        }

        setName("")
        setOwner("")
        setEmail("")
        setDate("")
        setSyntoms("")
    }

    return (
        <div className="lg:w-2/5 md:w-1/2">
            <h2 className="font-black text-3xl text-center">Patients Form</h2>
            <p className="text-lg mt-5 text-center mb-10">Add and Manage {""}
            <label className="text-indigo-600 font-bold">Patients</label>
            </p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-md py-10 px-5 mb-10 mx-5">
                {error && <Error message="All the fields are mandatory"/>
                }
                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
                        Pet's name
                    </label>
                    <input 
                    id="name"
                    type="text"
                    placeholder="Pet's name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Owner name
                    </label>
                    <input 
                    id="owner"
                    type="text"
                    placeholder="Owner name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                        Date
                    </label>
                    <input 
                    id="date"
                    type="date"
                    className="cursor-pointer border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea
                    id="symptoms"
                    placeholder="Brief description of the symptoms"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                    value={syntoms}
                    onChange={(e) => setSyntoms(e.target.value)}
                    />
                </div>
            
                    <input 
                    type="submit"
                    className="cursor-pointer transition-all mb-5 text-white w-full p-3 bg-indigo-600 uppercase font-bold hover:bg-indigo-700"
                    value={ patient.id ? "Edit patient" : "Add patient"}
                    />

            </form>
        </div>
        
    )
    
}

export default Form