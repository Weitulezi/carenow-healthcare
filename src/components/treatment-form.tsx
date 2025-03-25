"use client"

import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import MultipleSelect from './multiple-select'
import { ClipboardPlus, User } from 'lucide-react'
import { descriptionData, prescriptionData } from '../dummy-data'


const TreatmentForm = () => {
    const [patientName, setPatientName] = useState<string>("")
    const [descriptions, setDescriptions] = useState<string[]>([])
    const [prescriptions, setPrescriptions] = useState<string[]>([])

  return (
    <Box w="1400px" margin="auto" borderLeft="1px solid rgb(230, 230, 230)" borderRight="1px solid rgb(230, 230, 230)" display="flex" justifyContent="center" height="100vh">
        <Box width="1244px" display="flex" justifyContent="center" paddingY="60px">
            <Flex width="fit" display="flex" justifyContent="center" gap="44px">
                <Box display="flex" flexDir="column" gap="24px">
                    <Box display="flex" flexDirection="column" gap="4px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Patient Name
                            </span>
                        </label>
                        <Input outlineColor="blue.400" outlineWidth="2px" width="480px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE" value={patientName} onChange={e => setPatientName(e.target.value)}/>
                    </Box>
                    <MultipleSelect title={"Description"} selections={descriptionData} LabelIcon={User} state={descriptions} setState={setDescriptions}/>
                </Box>
                <Box display="flex" flexDir="column" gap="24px">
                    <MultipleSelect title={"Prescription"} selections={prescriptionData} LabelIcon={ClipboardPlus} state={prescriptions} setState={setPrescriptions}/>
                    <Box display="flex" flexDirection="column" gap="4px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Schedule
                            </span>
                        </label>
                        <Input type="date" width="480px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE"outlineColor="blue.400" outlineWidth="2px" />
                    </Box>
                    <Box display="flex" flexDirection="column" gap="4px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Treatment cost
                            </span>
                        </label>
                        <Input width="480px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE" outlineColor="blue.400" outlineWidth="2px" />
                    </Box>
                    <Button width="fit-content" paddingX="12px" height="34px" placeSelf="end" borderRadius="6px" bg="#FF6889" fontSize="18px" fontWeight="semibold">
                        Create Entry
                    </Button>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default TreatmentForm