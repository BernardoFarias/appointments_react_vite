import Header from "./components/Header"
import Form from "./components/Form"
import PatientsList from "./components/PatientsList"
import { useEffect, useState } from "react"

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [] ;
      setPatients(patientsLS)
    }

    getLS() ;
  }, [])

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter(p => p.id !== id)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
        />
        <PatientsList
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
        />
      </div>
      
    </div>
  )
}

export default App
