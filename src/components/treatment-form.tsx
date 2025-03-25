"use client"

import React, { useState } from 'react'
import { Box, Button, Flex, Grid, GridItem} from '@chakra-ui/react'
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
            <Grid  
                width={["90%","90%", "90%","fit"]} 
                templateColumns={[
                    "repeat(1, minmax(1fr, 1fr))",
                    "repeat(1, minmax(1fr, 1fr))",
                    "repeat(1, minmax(1fr, 1fr))",
                    "repeat(2, minmax(auto, auto))"
                ]} 
                gap={["24px","24px","24px","44px"]}
                paddingY="64px">
                <GridItem width="full">
                    <Box width="full" display="flex" flexDir="column" gap="24px">
                        <TextInput type="text" title="Patient Name" state={patientName} setState={setPatientName} LabelIcon={User}/>
                        <MultipleSelect title={"Description"} selections={descriptionData} LabelIcon={NotepadText} state={descriptions} setState={setDescriptions}/>
                    </Box>
                </GridItem>
                <GridItem width="full">
                    <Box width="full" display="flex" flexDir="column" gap="24px">
                        <MultipleSelect title={"Prescription"} selections={prescriptionData} LabelIcon={ClipboardPlus} state={prescriptions} setState={setPrescriptions}/>
                        <TextInput type="date" title='Schedule' state={schedule} setState={setSchedule} LabelIcon={Calendar1Icon}/>
                        <TextInput  type="number" title="Treatment Cost" state={treatmentCost} setState={setTreatmentCost} LabelIcon={Wallet}/>
                        <Button width="fit-content" paddingX="12px" height="34px" placeSelf="end" borderRadius="6px" bg="#FF6889" fontSize="16px" fontWeight="semibold" shadow="lg">
                            Create Entry
                        </Button>
                    </Box>
                </GridItem>
            </Grid>
    </Box>
  )
}

export default TreatmentForm