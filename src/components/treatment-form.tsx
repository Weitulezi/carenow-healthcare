"use client"

import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, GridItem, Text} from '@chakra-ui/react'
import { Calendar1Icon, ClipboardPlus, NotepadText, User, Wallet } from 'lucide-react'
import SelectsInput from './selects-input'
import TextInput from './text-input'

interface DescriptionInterface {
    description_id: number
    name: string
}

interface PrescriptionInterface {
    prescription_id: number
    name: string
}

interface UserInterface {
    user_id: number
    name: string
}


const TreatmentForm = () => {
    const [userList, setuserList] = useState<UserInterface[]>([])
    const [descriptionList, setDescriptionList] = useState<DescriptionInterface[]>([])
    const [prescriptionList, setPrescriptionList] = useState<PrescriptionInterface[]>([])

    const [patientId, setPatientId] = useState<string[]>([])
    const [treatmentCost, setTreatmentCost] = useState<string>("")
    const [descriptions, setDescriptions] = useState<string[]>([])
    const [prescriptions, setPrescriptions] = useState<string[]>([])
    const [schedule, setSchedule] = useState<string>("")

    const [message, setMessage] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    // Fetching the dropdown data (users, descriptions, prescriptions)
    useEffect(() => {
        fetch(`http://localhost:3001/api/users`)
            .then(res => res.json())
            .then(data => {
                setuserList(data)
            })

        fetch(`http://localhost:3001/api/descriptions`)
            .then(res => res.json())
            .then(data => {
                setDescriptionList(data)
            })

        fetch(`http://localhost:3001/api/prescriptions`)
            .then(res => res.json())
            .then(data => {
                setPrescriptionList(data)
            })
    }, [])


    // Handle form submission
    const handleSubmit = (e:  React.FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        if(!patientId || !treatmentCost || descriptions.length == 0 || prescriptions.length == 0 || !schedule) {
            setErrorMessage("Field cannot be empty")
            return
        }

        const regex = /^(?:[1-9]\d*|0)(?:\.\d+)?$/;
        const isValidCost = regex.test(treatmentCost)
        !isValidCost && setErrorMessage("not a valid cost value")

        setErrorMessage("")

        // API request to create treatment
        fetch(`http://localhost:3001/api/treatments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                user_id: Number(patientId[0]),
                descriptions,
                prescriptions,
                cost: Number(treatmentCost),
                schedule
            })
        })
        .then(res => {
            if(res.status == 400|| res.status == 500) {
                setMessage("")
                setErrorMessage("Failed to create user treatment")                    
            }
            if(res.status === 201) {
                setErrorMessage("")
                setMessage("user treatment is successfully created")
                setPatientId([])
                setDescriptions([])
                setPrescriptions([])
                setTreatmentCost("")
                setSchedule("")
            }
        })
          
    }

    return (
        <Box 
            width={["100%","100%", "100%","1400px"]} 
            margin="auto" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            flexDir="column"
            height={["fit-content","fit-content", "fit-content", "fit-content"]}>
                <Box h={["80px","100px","100px","100px"]}>
                    <Text as="h3" py={["30px","40px","40px"]} color={errorMessage ? "red" : message && "green.600"} fontWeight="bold">{errorMessage ? errorMessage : message}</Text>                     
                </Box>
                <Grid  
                    as="form"
                    onSubmit={(e) => handleSubmit(e)}
                    width={["90%","90%", "90%","fit"]} 
                    templateColumns={[
                        "repeat(1, minmax(1fr, 1fr))",
                        "repeat(1, minmax(1fr, 1fr))",
                        "repeat(1, minmax(1fr, 1fr))",
                        "repeat(2, minmax(auto, auto))"
                    ]} 
                    gap={["24px","24px","24px","44px"]}
                    paddingY="0px">
                    <GridItem width="full">
                        <Box width="full" display="flex" flexDir="column" gap="24px">
                            <SelectsInput 
                                isMultiple={false} 
                                title={"Patient Name"} 
                                selections={userList.map(user => ({label: user.name, value: user.user_id}))} 
                                LabelIcon={User} 
                                state={patientId}
                                setState={setPatientId}
                            />
                            <SelectsInput 
                                isMultiple={true} 
                                title={"Description"} 
                                selections={descriptionList.map(item => ({label: item.name, value: item.description_id}))} 
                                LabelIcon={NotepadText} 
                                state={descriptions}
                                setState={setDescriptions}
                            />
                        </Box>
                    </GridItem>
                    <GridItem width="full">
                        <Box width="full" display="flex" flexDir="column" gap="24px">
                            <SelectsInput 
                                isMultiple={true} 
                                title={"Prescription"} 
                                selections={prescriptionList.map(item => ({label: item.name, value: item.prescription_id}))} 
                                LabelIcon={ClipboardPlus}
                                state={prescriptions}
                                setState={setPrescriptions}
                            />
                            <TextInput 
                                type="date" 
                                title='Schedule' 
                                state={schedule} 
                                setState={setSchedule} 
                                LabelIcon={Calendar1Icon}
                            />
                            <TextInput  
                                type="number" 
                                title="Treatment Cost" 
                                state={treatmentCost} 
                                setState={setTreatmentCost} 
                                LabelIcon={Wallet}
                            />
                            <Button type='submit' width="fit-content" paddingX="12px" height="34px" placeSelf="end" borderRadius="6px" bg="#FF6889" fontSize="16px" fontWeight="semibold" shadow="lg">
                                Create Entry
                            </Button>
                        </Box>
                    </GridItem>
                </Grid>
        </Box>
        )
}

export default TreatmentForm