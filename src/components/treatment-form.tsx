"use client"

import React, { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { Calendar1Icon, ClipboardPlus, NotepadText, User, Wallet } from 'lucide-react'
import MultipleSelect from './multiple-select'
import { descriptionData, prescriptionData } from '../dummy-data'
import TextInput from './text-input'


const TreatmentForm = () => {
    const [patientName, setPatientName] = useState<string>("")
    const [treatmentCost, setTreatmentCost] = useState<string>("")
    const [descriptions, setDescriptions] = useState<string[]>([])
    const [prescriptions, setPrescriptions] = useState<string[]>([])
    const [schedule, setSchedule] = useState<string>("")
    
    console.log(patientName, treatmentCost, descriptions, prescriptions)

  return (
    <Box 
        width={["100%","100%", "100%","1400px"]} 
        margin="auto" 
        borderLeft="1px solid rgb(230, 230, 230)" 
        borderRight="1px solid rgb(230, 230, 230)" 
        display="flex" 
        justifyContent="center" 
        height={["fit-content","fit-content", "fit-content","100vh"]}
    >
            <Flex width={["90%","90%", "90%","fit"]} display="flex" flexDir={["column", "column", "row"]} justifyContent="center" gap="44px" paddingY="64px">
                <Box width="full" display="flex" flexDir="column" gap="24px">
                    <TextInput type="text" title="Patient Name" state={patientName} setState={setPatientName} LabelIcon={User}/>
                    <MultipleSelect title={"Description"} selections={descriptionData} LabelIcon={NotepadText} state={descriptions} setState={setDescriptions}/>
                </Box>
                <Box width="full" display="flex" flexDir="column" gap="24px">
                    <MultipleSelect title={"Prescription"} selections={prescriptionData} LabelIcon={ClipboardPlus} state={prescriptions} setState={setPrescriptions}/>
                    <TextInput type="date" title='Schedule' state={schedule} setState={setSchedule} LabelIcon={Calendar1Icon}/>
                    <TextInput  type="number" title="Treatment Cost" state={treatmentCost} setState={setTreatmentCost} LabelIcon={Wallet}/>
                    <Button width="fit-content" paddingX="12px" height="34px" placeSelf="end" borderRadius="6px" bg="#FF6889" fontSize="18px" fontWeight="semibold" shadow="lg">
                        Create Entry
                    </Button>
                </Box>
            </Flex>
    </Box>
  )
}

export default TreatmentForm